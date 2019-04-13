<?php
/**
 * Created by PhpStorm.
 * User: raksha
 * Date: 20/10/18
 * Time: 3:36 PM
 */

namespace App\Services\Doctor;


use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Requests\UpdateWorkingSessionRequest;
use App\Http\Requests\WorkingSessionRequest;
use App\Http\Resources\Collections\ClinicSessionCollection;
use App\Http\Resources\FormResource\ClinicsResource;
use App\Http\Resources\FormResource\WeekDayResource;
use App\Models\Booking;
use App\Models\Clinic;
use App\Models\WeekDay;
use App\Models\WorkingSession;
use App\Services\Service;
use Exception;
use Illuminate\Http\Request;


class SchedulingService
{
    public function getWorkingSession()
    {
        $clinics = Clinic::where('doctor_details_id', Service::getDoctor()->id)
            ->with('working_sessions', 'working_sessions.week_day')->paginate(1);

        return ClinicSessionCollection::make($clinics)->status(Constants::$SUCCESS);
    }

    public function getSchedulingFormDetails()
    {
        $clinics = ClinicsResource::collection(Clinic::where('doctor_details_id', Service::getDoctor()->id)->get());
        $weekDays = WeekDayResource::collection(WeekDay::all());

        $data = [
            'clinics' => $clinics,
            'weekDays' => $weekDays
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    public function addWorkingSession(WorkingSessionRequest $request)
    {
        if (Service::getDoctor()->clinics->where('id', $request['clinic'])->first()) {
            try {

                $workingSession = new WorkingSession();
                $workingSession->session_title = $request['sessionTitle'];
                $workingSession->clinic_id = $request['clinic'];
                $workingSession->week_day_id = $request['weekDay'];
                $workingSession->no_patients = $request['patients'];
                $workingSession->start_time = $request['startingTime'];
                $workingSession->end_time = $request['endingTime'];
                $workingSession->status = Constants::$ACTIVE_SESSION_STATUS;
                $workingSession->save();

            } catch (Exception $e) {
                $workingSession = false;
            }

            $data = [
                'message' => $workingSession != false ? Messages::$SESSION_ADDED : Messages::$ERROR_MESSAGE,
            ];

            return response()->json(
                jsonResponse(
                    $data, $workingSession != false ? Constants::$SUCCESS : Constants::$FAILED
                )
            );
        } else {
            return abort(401);
        }
    }

    public function updateSchedule(UpdateWorkingSessionRequest $request)
    {
        if (Service::getDoctor()->clinics->where('id', $request['clinic'])->first()) {
            $session = WorkingSession::find($request['sessionId']);
            if (
                $session->start_time != $request['startingTime'] ||
                $session->end_time != $request['endingTime'] ||
                $request['status'] != Constants::$ACTIVE_SESSION_STATUS
            ) {
                Booking::where('status', Constants::$ACTIVE_BOOKING_STATUS)
                    ->whereHas('booking_slot', function ($query) use ($request) {
                        $query->whereHas('session_date', function ($innerQuery) use ($request) {
                            $innerQuery->whereHas('working_session', function ($secondInner) use ($request) {
                                $secondInner->where('id', $request['sessionId']);
                            });
                        });
                    })->update(['status' => Constants::$DELETED_BOOKING_STATUS]);
            }

            try {
                $session->session_title = $request['sessionTitle'];
                $session->clinic_id = $request['clinic'];
                $session->week_day_id = $request['weekDay'];
                $session->no_patients = $request['patients'];
                $session->start_time = $request['startingTime'];
                $session->end_time = $request['endingTime'];
                $session->status = $request['status'];
                $session->save();
            } catch (Exception $e) {
                $session = false;
            }

            $message = $request['status'] == Constants::$DELETED_SESSION_STATUS ? Messages::$SESSION_DELETED : Messages::$SESSION_UPDATED;
            $data = [
                'message' => $session != false ? $message : Messages::$ERROR_MESSAGE,
            ];

            return response()->json(
                jsonResponse(
                    $data, $session != false ? Constants::$SUCCESS : Constants::$FAILED
                )
            );
        } else {
            return abort(401);
        }
    }
    public function checkWorkingSessionRelation(Request $request)
    {
        $bookings = Booking::where('status', Constants::$ACTIVE_BOOKING_STATUS)
            ->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('session_date', function ($innerQuery) use ($request) {
                    $innerQuery->whereHas('working_session', function ($secondInner) use ($request) {
                        $secondInner->where('id', $request['id']);
                    });
                });
            })->get();

        $data = [
            'bookings' => SingleDoctorBookingResource::collection($bookings),
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }
}