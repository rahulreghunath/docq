<?php

namespace App\Http\Controllers;

use App\Constants\Constants;
use App\Http\Resources\Sample;
use App\Jobs\DoctorTimeScheduling;
use App\Jobs\ScheduleTimingJob;
use App\Models\BookingSlot;
use App\Models\Registration;
use App\Responses\AuthResponse;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Psy\Input\CodeArgument;

class HomeController extends Controller
{

    /**
     * HomeController constructor.
     */
    public function __construct()
    {

    }

    public function getHome()
    {
        return view('Admin.index');
    }

    public function getJob()
    {
        $doctors = Registration::whereHas('login', function ($query) {
            $query->where('user_category_id', Constants::$DOCTOR_USER);
        })->get();

        foreach ($doctors as $doctor) {
            foreach ($doctor->doctor->clinics as $clinic) {
                foreach ($clinic->working_sessions->where('status', Constants::$ACTIVE_SESSION_STATUS) as $workingSession) {
                    $date = Carbon::now();
//                    $date = $date->addDay($workingSession->week_day_id - 1 - $date->dayOfWeek + 1);
                    $date = $date->addDay($workingSession->week_day_id - 1 - $date->dayOfWeek);
                    $startTime = new Carbon($workingSession->start_time);
                    $endTime = new Carbon($workingSession->end_time);
                    $slot = $startTime->diffInMinutes($endTime) / $workingSession->no_patients;
                    for ($i = 0; $i < $workingSession->no_patients; $i++) {
                        $bookingSlot = new BookingSlot();
                        $bookingSlot->working_session_id = $workingSession->id;
                        $bookingSlot->start_time = $startTime->format('h:i:s');
                        $startTime->addMinute($slot);
                        $bookingSlot->end_time = $startTime->format('h:i:s');
                        $bookingSlot->date = $date->format('Y-m-d');
                        $bookingSlot->status = Constants::$AVAILABLE_SLOT_STATUS;
                        $bookingSlot->save();
                    }
                }
            }
        }
    }
}
