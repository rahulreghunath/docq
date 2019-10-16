<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DoctorRegistrationResource extends JsonResource
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
            'name' => $this->full_name,
            'location' => $this->location,
            'phone' => $this->phone,
            'image' => $this->profile_picture,
            'doctor' => DoctorResource::make($this->doctor),
        ];
    }
}
