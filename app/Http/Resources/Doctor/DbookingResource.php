<?php

namespace App\Http\Resources\Doctor;

use App\Http\Resources\BookingSlotResource;
use App\Http\Resources\PatientResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DbookingResource extends JsonResource
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
            'booking' => [
                'id' => $this->id,
                'status'=>$this->status
            ],
            'patient' => PatientResource::make($this->patient),
            'slot' => BookingSlotResource::make($this->booking_slot),
        ];
    }
}
