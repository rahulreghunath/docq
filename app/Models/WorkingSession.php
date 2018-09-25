<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed session_title
 * @property mixed clinic_id
 * @property mixed week_day_id
 * @property mixed no_patients
 * @property mixed start_time
 * @property mixed end_time
 * @property mixed status
 */
class WorkingSession extends Model
{
    public function clinic()
    {
        return $this->belongsTo('App\Models\Clinic');
    }

    public function week_day()
    {
        return $this->belongsTo('App\Models\WeekDay');
    }

    public function booking_slote()
    {
        return $this->hasMany('App\Models\BookingSlot');
    }
}
