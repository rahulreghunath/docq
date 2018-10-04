<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
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
            'address' => $this->address,
            'location' => $this->location,
            'phone' => $this->phone,
            'email' => $this->email,
            'pin' => $this->pin,
            'gender' => $this->gender,
            'age' => $this->age,

        ];
    }
}
