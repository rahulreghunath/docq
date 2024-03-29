<?php

namespace App\Http\Controllers\API\Doctor;

use App\Constants\Constants;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Lcobucci\JWT\Parser;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request['username'], 'password' => $request['password'], 'user_category_id' => Constants::$DOCTOR_USER])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('doctor')->accessToken;
            return response()->json($success);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }


    public function logout(Request $request)
    {
        $value = $request->bearerToken();
        $id = (new Parser())->parse($value)->getHeader('jti');
        $token = $request->user()->tokens->find($id);
        $token->delete();
        return response()->json(jsonResponse([], Constants::$SUCCESS));
    }
}
