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
use App\Http\Resources\SingleDoctorBookingResource;
use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\Clinic;
use App\Models\SessionDate;
use App\Models\WeekDay;
use App\Models\WorkingSession;
use App\Services\Service;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;


class SchedulingService
{
    public function getWorkingSession()
    {
        $clinics = Clinic::where('doctor_details_id', Service::getDoctor()->id)->paginate(1);

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

                //TODO: add warning in doctor side if change session with active booking and delete bookings if only doctor say so
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

    public function addSingleWorkingSession(Request $request)
    {
        $workingSession = new WorkingSession();
        $workingSession->session_title = $request['title'];
        $workingSession->clinic_id = $request['clinic'];
        $workingSession->week_day_id = Constants::$SINGLE_DAY_WEEK_DAY_ID;
        $workingSession->no_patients = $request['noPatients'];
        $workingSession->start_time = $request['startTime'];
        $workingSession->end_time = $request['endTime'];
        $workingSession->status = Constants::$SINGLE_DAY_SESSION_STATUS;
        $workingSession->save();

        $sessionDate = new SessionDate();
        $sessionDate->working_session_id = $workingSession->id;
        $sessionDate->date = Carbon::parse($request['date'])->addDay()->format('Y-m-d');
        $sessionDate->status = Constants::$ACTIVE_SESSION_DATE_STATUS;
        $sessionDate->save();

        $startTime = new Carbon($workingSession->start_time);
        $endTime = new Carbon($workingSession->end_time);
        $slot = $startTime->diffInMinutes($endTime) / $workingSession->no_patients;

        for ($i = 0; $i < $workingSession->no_patients; $i++) {
            $bookingSlot = new BookingSlot();
            $bookingSlot->session_date_id = $sessionDate->id;
            $bookingSlot->start_time = $startTime->format('h:i:s');
            $startTime->addMinute($slot);
            $bookingSlot->end_time = $startTime->format('h:i:s');
            $bookingSlot->token_number = $i + 1;
            $bookingSlot->status = Constants::$AVAILABLE_SLOT_STATUS;
            $bookingSlot->save();
        }
        return response()->json(jsonResponse(['message' => Lang::get('messages.schedule_added')], Constants::$SUCCESS));
    }
}