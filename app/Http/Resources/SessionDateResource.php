<?php

namespace App\Http\Resources;

use App\Constants\Constants;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionDateResource extends JsonResource
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
            'date' => $this->date,
            'session_id' => $this->working_session_id,
            'session_title' => $this->working_session->session_title,
            'start_time' => $this->working_session->start_time,
            'end_time' => $this->working_session->end_time,
            'no_patients' => $this->working_session->no_patients,
            'booked' => $this->booking_slot->where('status',Constants::$BOOKED_SLOT_STATUS)->count(),
        ];
    }
}