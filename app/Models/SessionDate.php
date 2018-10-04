<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer working_session_id
 * @property string date
 */
class SessionDate extends Model
{
    public function working_session()
    {
        return $this->belongsTo('App\Models\WorkingSession');
    }
}
