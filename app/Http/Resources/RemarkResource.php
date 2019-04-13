<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RemarkResource extends JsonResource
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
            'remark' => $this->remark,
            'date'=>$this->created_at,
            'followUpDate' => $this->follow_up_date,
            'description' => $this->followup_description,
        ];
    }
}
