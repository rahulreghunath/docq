<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function getHome()
    {
        return view('Doctor.index');
    }
}
