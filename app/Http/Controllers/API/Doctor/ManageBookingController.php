<?php

namespace App\Http\Controllers\API\Doctor;

use App\Constants\Constants;
use App\Http\Resources\Collections\RemarkResourceCollection;
use App\Models\Booking;
use App\Models\Remark;
use App\Services\Doctor\BookingService;
use App\Services\Doctor\DoctorService;
use App\Services\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ManageBookingController extends Controller
{
    private $doctorService, $bookingService;

    /**
     * ManageBookingController constructor.
     */
    public function __construct()
    {
        $this->doctorService = new DoctorService();
        $this->bookingService = new BookingService();
    }

    public function getBookings(Request $request)
    {
        return $this->doctorService->getBookings($request);
    }

    public function getAppointmentDetails(Request $request)
    {
        return $this->bookingService->getAppointmentDetails($request);
    }

    public function getRemarks(Request $request)
    {
        if (!$request->has('patientId')) {
            $booking = Booking::where([['id', $request['bookingId']], ['doctor_details_id', Service::getDoctor()->id]])->firstOrFail();
            $registrationId = $booking->registration_id;
        } else {
            $registrationId = $request['patientId'];
        }

        $remarks = Remark::whereHas('booking', function ($q) use ($registrationId) {
            $q->where('registration_id', $registrationId);
        })->paginate(3);
        return RemarkResourceCollection::make($remarks)->status(Constants::$SUCCESS);
    }

    public function addPrescription(Request $request)
    {
        return $this->bookingService->addPrescription($request);
    }
}
