<?php

namespace App\Http\Controllers\API;

use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateWorkingSessionRequest;
use App\Http\Requests\WorkingSessionRequest;
use App\Http\Resources\ClinicSessionCollection;
use App\Http\Resources\ClinicsResource;
use App\Http\Resources\SingleDoctorBookingResource;
use App\Http\Resources\WeekDayResource;
use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\Clinic;
use App\Models\WeekDay;
use App\Models\WorkingSession;
use DateTime;
use Exception;
use Illuminate\Http\Request;

class AdminDoctorSchedulingController extends Controller
{

    /**
     * AdminDoctorSchedulingController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getWorkingSessionFormDetails(Request $request)
    {
        $clinics = ClinicsResource::collection(Clinic::where('doctor_details_id', $request['doctor'])->get());
        $weekDays = WeekDayResource::collection(WeekDay::all());

        $data = [
            'clinics' => $clinics,
            'weekDays' => $weekDays
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    public function addWorkingSession(WorkingSessionRequest $request)
    {
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

        return response()->json(jsonResponse($data, $workingSession != false ? Constants::$SUCCESS : Constants::$FAILED));
    }

    public function getWorkingSessions(Request $request)
    {

        $clinics = Clinic::where('doctor_details_id', $request['doctor'])
            ->with('working_sessions', 'working_sessions.week_day')->paginate(1);

//        $clinics = Clinic::where('doctor_details_id', $request['doctor'])
//            ->with(['working_sessions' => function($query){
//                $query->selectRaw('week_day_id')->groupBy('week_day_id');
//            }])->paginate(1);

        return ClinicSessionCollection::make($clinics)->status(Constants::$SUCCESS);
    }

    public function updateWorkingSession(UpdateWorkingSessionRequest $request)
    {
        $session = WorkingSession::find($request['sessionId']);
        if (
            $session->start_time != $request['startingTime'] ||
            $session->end_time != $request['endingTime'] ||
            $request['status'] != Constants::$ACTIVE_SESSION_STATUS
        ) {
            Booking::where('status', Constants::$ACTIVE_BOOKING_STATUS)
                ->whereHas('booking_slot', function ($query) use ($request) {
                    $query->whereHas('working_session', function ($innerQuery) use ($request) {
                        $innerQuery->where('id', $request['sessionId']);
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

        return response()->json(jsonResponse($data, $session != false ? Constants::$SUCCESS : Constants::$FAILED));
    }

    public function checkWorkingSessionRelation(Request $request)
    {
        $bookings = Booking::where('status', Constants::$ACTIVE_BOOKING_STATUS)
            ->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('working_session', function ($innerQuery) use ($request) {
                    $innerQuery->where('id', $request['id']);
                });
            })->get();

        $data = [
            'bookings' => SingleDoctorBookingResource::collection($bookings),
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }
}