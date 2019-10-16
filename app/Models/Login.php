<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * @property mixed registration_id
 * @property mixed phone
 * @property mixed email
 * @property string password
 * @property int user_category_id
 */
class Login extends Authenticatable
{
    use HasApiTokens, Notifiable;

    public function registration()
    {
        return $this->belongsTo('App\Models\Registration');
    }
}
