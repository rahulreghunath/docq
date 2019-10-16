<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer working_session_id
 * @property string date
 * @property int status
 */
class SessionDate extends Model
{
    public function working_session()
    {
        return $this->belongsTo('App\Models\WorkingSession');
    }
    public function booking_slot()
    {
        return $this->hasMany('App\Models\BookingSlot');
    }
}
