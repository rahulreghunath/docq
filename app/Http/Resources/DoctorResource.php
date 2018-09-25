<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DoctorResource extends JsonResource
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
            'medical_registration_number' => $this->medical_registration_number,
            'experience' => $this->experience,
            'consulting_fee' => $this->consulting_fee,
            'specializations' => DoctorSpecializationResource::collection($this->doctor_specializations),
        ];
    }
}
