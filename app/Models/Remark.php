<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Remark extends Model
{
    public function booking()
    {
        return $this->belongsTo('App\Models\Booking');
    }
}
