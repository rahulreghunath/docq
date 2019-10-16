<?php
/**
 * Created by PhpStorm.
 * User: raksha
 * Date: 20/10/18
 * Time: 3:24 PM
 */

namespace App\Services\Doctor;


use App\Constants\Constants;
use App\Http\Resources\Doctor\DbookingResource;
use App\Models\Booking;
use App\Models\Remark;
use App\Services\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BookingService extends Service
{
    public function getAppointmentDetails(Request $request)
    {
        /**
         * Booking details
         */
        $booking = Booking::where([['id', $request['bookingId']], ['doctor_details_id', BookingService::getDoctor()->id]])->firstOrFail();

        $data = [
            'booking' => DbookingResource::make($booking),
        ];
        return response(jsonResponse($data, Constants::$SUCCESS));
    }

    public function addPrescription(Request $request)
    {
        $remark = new Remark();
        $remark->booking_id = $request['bookingId'];
        $remark->remark = $request['remark'];
        $remark->follow_up_date = Carbon::now()->format('y-m-d');
        $remark->followup_description = '';
        $remark->save();

        $booking = Booking::findOrFail($request['bookingId']);
        $booking->status = Constants::$SUCCESSFUL_BOOKING_STATUS;
        $booking->save();

        return response()->json(jsonResponse([
            'message' => 'Appointment Completed'
        ], Constants::$SUCCESS
        ));
    }
}