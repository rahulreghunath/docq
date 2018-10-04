<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'doctor' => DoctorRegistrationResource::make($this->doctor_details->registration),
            'patient' => PatientResource::make($this->patient),
            'slot' => BookingSlotResource::make($this->booking_slot)
        ];
    }
}
