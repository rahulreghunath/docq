<?php

namespace App\Http\Resources;

use App\Constants\Constants;
use Illuminate\Http\Resources\Json\JsonResource;

class ClinicSessionResource extends JsonResource
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
            'clinic_name' => $this->clinic_name,
            'location' => $this->location,
            'working_sessions' => WorkingSessionResource::collection($this->working_sessions->where('status', '!=', Constants::$DELETED_SESSION_STATUS)),
        ];
    }
}
