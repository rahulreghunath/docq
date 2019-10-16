<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    public function doctor_details()
    {
        return $this->belongsTo('App\Models\DoctorDetails');
    }

    public function working_sessions()
    {
        return $this->hasMany('App\Models\WorkingSession');
    }
}
