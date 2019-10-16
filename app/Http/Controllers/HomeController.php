<?php

namespace App\Http\Controllers;

use App\Constants\Constants;
use App\Http\Resources\Sample;
use App\Jobs\DoctorTimeScheduling;
use App\Jobs\ScheduleTimingJob;
use App\Models\BookingSlot;
use App\Models\Registration;
use App\Models\SessionDate;
use App\Responses\AuthResponse;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Psy\Input\CodeArgument;
use Rahulreghunath\Textlocal\Textlocal;

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
        $doctors = Registration::where('user_category_id', Constants::$DOCTOR_USER)->get();

        foreach ($doctors as $doctor) {
            foreach ($doctor->doctor->clinics as $clinic) {
                foreach ($clinic->working_sessions->where('status', Constants::$ACTIVE_SESSION_STATUS) as $workingSession) {
                    $date = Carbon::now();
//                    $date = $date->addDay($workingSession->week_day_id - 1 - $date->dayOfWeek + 1);
                    $date = $date->addDay($workingSession->week_day_id - 1 - $date->dayOfWeek);
                    $startTime = new Carbon($workingSession->start_time);
                    $endTime = new Carbon($workingSession->end_time);
                    $slot = $startTime->diffInMinutes($endTime) / $workingSession->no_patients;

                    /**
                     * Checking if date is past
                     */

                    if (!$date->isPast() || $date->isToday()) {
                        echo "<br>active" . $date;
                        $sessionDate = new SessionDate();
                        $sessionDate->working_session_id = $workingSession->id;
                        $sessionDate->date = $date->format('Y-m-d');
                        $sessionDate->status = Constants::$ACTIVE_SESSION_DATE_STATUS;
                        $sessionDate->save();
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
                    } else {
                        echo "<br>past" . $date;
                    }
                }
            }
        }
    }

    public function sendSms(Request $request)
    {
        $msg = new Textlocal();
        $msg->send('sdfsdf','9037500119');
        /*$xml_data = '<?xml version="1.0"?>
            <smslist>
        
            <sms>
        
            <user>grident</user>
        
            <password>612a984bb9XX</password>
        
            <message>abcdef</message>
        
            <mobiles>9037500119</mobiles>
        
            <senderid>DOCQBK</senderid>
        
            </sms>
        
            </smslist>';


        $URL = "http://text.voxbaysolutions.com/sendsms.jsp?";


        $ch = curl_init($URL);

        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        curl_setopt($ch, CURLOPT_POST, 1);

        curl_setopt($ch, CURLOPT_ENCODING, 'UTF-8');

        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/xml'));

        curl_setopt($ch, CURLOPT_POSTFIELDS, "$xml_data");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $output = curl_exec($ch);

        curl_close($ch);


        print_r($output);*/
    }
}
