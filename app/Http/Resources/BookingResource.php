<?php

namespace App\Http\Resources;

use App\Constants\Constants;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'status' => $this->status == Constants::$ACTIVE_BOOKING_STATUS
                ? $this->checkStatus($this->booking_slot->session_date)
                : $this->status,
            'doctor_details' => DoctorRegistrationResource::make($this->doctor_details->registration),
            'patient' => PatientResource::make($this->patient),
            'slot' => BookingSlotResource::make($this->booking_slot),
            'clinic' => ClinicResource::make($this->booking_slot->session_date->working_session->clinic)
        ];
    }

    private function checkStatus($date)
    {
        return 1;
//        TODO: Add Correct Status for past date
    }
}
