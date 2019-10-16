<?php

namespace App\Http\Controllers\API\IVRS;

use App\Http\Controllers\Controller;
use App\Services\User\UserService;
use Illuminate\Http\Request;

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

    public function newRegistration(Request $request)
    {
        return $this->userService->newRegistration($request);
    }
}
