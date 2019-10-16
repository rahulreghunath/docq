<?php

namespace App\Http\Resources;

use App\Http\Resources\FormResource\SpecializationResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorSpecializationResource extends JsonResource
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
            'specialization' => SpecializationResource::make($this->specialization)
        ];
    }
}
