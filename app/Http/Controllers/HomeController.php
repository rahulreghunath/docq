<?php

namespace App\Http\Controllers;

use App\Http\Resources\Sample;
use App\Responses\AuthResponse;
use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * HomeController constructor.
     */
    public function __construct()
    {

    }

    public function getHome()
    {
        return view('Admin.index');
    }

    public function getSample()
    {
//        $res=new AuthResponse(['dfsd'=>'sdfs'],'success');
//        return response()->json(json_encode($res));
//        return new Sample(User::all());
        return response()->json(User::all());

    }
}
