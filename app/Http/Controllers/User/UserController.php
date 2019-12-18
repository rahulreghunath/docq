<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegistrationRequest;
use App\Services\User\UserService;

class UserController extends Controller
{
    private $userService;

    /**
     * DoctorController constructor.
     */
    public function __construct()
    {
        $this->userService = new UserService();
    }

    public function newRegistration()
    {
        echo 'asda';
//        return $this->userService->newRegistration($request);
    }
}
