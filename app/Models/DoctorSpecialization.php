<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed doctor_details_id
 * @property integer specialization_id
 */
class DoctorSpecialization extends Model
{
    public function specialization()
    {
        return $this->belongsTo('App\Models\Specialization');
    }
}
