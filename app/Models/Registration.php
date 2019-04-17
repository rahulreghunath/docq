<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed name
 * @property mixed age
 * @property mixed location
 * @property mixed address
 * @property mixed pin
 * @property mixed email
 * @property mixed phone
 * @property mixed gender
 * @property int status
 * @property mixed full_name
 * @property string user_category_id
 * @property string profile_picture
 */
class Registration extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function login()
    {
        return $this->hasOne('App\Models\Login');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function doctor()
    {
        return $this->hasOne('App\Models\DoctorDetails');
    }

    public function bookings()
    {
        return $this->hasOne('App\Models\Booking');
    }

}
