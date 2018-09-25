<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed registration_id
 * @property mixed medical_registration_number
 * @property mixed experience
 * @property mixed consulting_fee
 */
class DoctorDetails extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function registration()
    {
        return $this->belongsTo('App\Models\Registration');
    }

    public function doctor_specializations()
    {
        return $this->hasMany('App\Models\DoctorSpecialization');
    }

    public function doctor_qualifications()
    {
        return $this->hasMany('App\Models\DoctorQualification');
    }

    public function clinics()
    {
        return $this->hasMany('App\Models\Clinic');
    }

}
