<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DoctorQualification extends Model
{
    public function qualification()
    {
        return $this->belongsTo('App\Models\Qualification');
    }
}
