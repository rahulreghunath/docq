<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string start_time
 * @property string end_time
 * @property int status
 * @property mixed session_date_id
 * @property string token_number
 */
class BookingSlot extends Model
{
    public function booking()
    {
        return $this->hasOne('App\Models\Booking');
    }

    public function session_date()
    {
        return $this->belongsTo('App\Models\SessionDate');
    }
}