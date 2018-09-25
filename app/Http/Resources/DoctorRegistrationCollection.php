<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DoctorRegistrationCollection extends ResourceCollection
{
    private $status;

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
            'data' => DoctorRegistrationResource::collection($this->collection),
            'status' => $this->status
        ];
    }
}

?>