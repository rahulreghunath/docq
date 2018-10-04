<?php

namespace App\Http\Resources\FormResource;

use App\Constants\Constants;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingSlotResource extends JsonResource
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
            'value' => $this->id,
            'text' => 'No: ' . $this->token_number . ' ' . $this->session_date->date . ' appro. ' . Carbon::createFromFormat('H:s:i', $this->start_time)->format('h:s a'),
            'disabled' => $this->status != Constants::$AVAILABLE_SLOT_STATUS
        ];
    }
}