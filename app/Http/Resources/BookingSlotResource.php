<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingSlotResource extends JsonResource
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
            'date' => $this->session_date->date,
            'startTime' => $this->start_time,
            'endTime' => $this->end_time,
            'tokenNo' => $this->token_number,
        ];
    }
}
