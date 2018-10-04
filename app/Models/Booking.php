<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int doctor_details_id
 * @property int registration_id
 * @property int booking_slot_id
 * @property int status
 */
class Booking extends Model
{
    public function booking_slot()
    {
        return $this->belongsTo('App\Models\BookingSlot', 'booking_slot_id');
    }

    public function doctor_details()
    {
        return $this->belongsTo('App\Models\DoctorDetails');
    }

    public function patient()
    {
        return $this->belongsTo('App\Models\Registration','registration_id');
    }
}
