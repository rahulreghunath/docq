<?php

namespace App\Http\Middleware;

use App\Constants\Constants;
use Closure;

class CheckIvrsRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth('api')->user()->user_category_id == Constants::$IVRS) {
            return $next($request);
        }
        return response()->json(['error' => 'Unauthorised'], 401);
    }
}
