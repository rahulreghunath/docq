<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('admin/login', 'API\AdminLoginController@login');
Route::post('register', 'API\UserController@register');
Route::group([
    'middleware' => 'auth:api',
    'prefix' => 'admin'
], function () {
    Route::post('logout', 'API\AdminLoginController@logout');
    /**
     * Specialisation
     */
    Route::post('add-specialisation', 'API\AdminController@addSpecialisation');
    Route::get('get-specialisations', 'API\AdminController@getSpecialisations');

    /**
     * Qualification
     */
    Route::post('add-qualification', 'API\AdminController@addQualification');
    Route::get('get-qualifications', 'API\AdminController@getQualifications');

    /**
     * Add Doctor
     */
    Route::get('get-doctor-form-details', 'API\AdminController@getDoctorFormDetails');
    Route::post('add-doctor', 'API\AdminController@addDoctor');
    Route::get('get-doctor-basic-details-img', 'API\AdminController@getDoctorBasicDetails');

});