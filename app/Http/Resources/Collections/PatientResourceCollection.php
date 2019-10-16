<?php

namespace App\Http\Resources\Collections;

use App\Http\Resources\PatientResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PatientResourceCollection extends ResourceCollection
{
    private $status;

    /**
     * To set status field in json response
     * @param $status
     * @return $this
     */
    public function status($status)
    {
        $this->status = $status;
        return $this;
    }

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => PatientResource::collection($this->collection),
            'status' => $this->status
        ];
    }
}
