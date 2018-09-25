<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string start_time
 * @property mixed working_session_id
 * @property string end_time
 * @property int status
 */
class BookingSlot extends Model
{
    public function booking()
    {
        return $this->hasOne('App\Models\Booking');
    }

    public function working_session()
    {
        return $this->belongsTo('App\Models\WorkingSession');
    }
}
