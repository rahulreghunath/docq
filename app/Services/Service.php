<?php
/**
 * Created by PhpStorm.
 * User: raksha
 * Date: 17/10/18
 * Time: 5:01 PM
 */

namespace App\Services;


class Service
{
    public static function getUser()
    {
        return auth('api')->user()->registration;
    }

    public static function getDoctor()
    {
        return auth('api')->user()->registration->doctor;
    }

}