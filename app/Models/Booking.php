<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    public function booking_slot()
    {
        return $this->belongsTo('App\Models\BookingSlot', 'booking_slot_id');
    }
}
