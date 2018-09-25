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
     * QualificationResource
     */
    Route::post('add-qualification', 'API\AdminController@addQualification');
    Route::get('get-qualifications', 'API\AdminController@getQualifications');

    /**
     * Add Doctor
     */
    Route::get('get-doctor-form-details', 'API\AdminController@getDoctorFormDetails');
    Route::post('add-doctor', 'API\AdminController@addDoctor');
    Route::get('get-doctor-basic-details-img', 'API\AdminController@getDoctorBasicDetails');
    Route::post('add-doctor-profile-image', 'API\AdminController@uploadDoctorImage');

    /**
     * Add Clinic
     */
    Route::post('add-doctor-clinic', 'API\AdminController@addDoctorClinic');
    Route::get('get-doctor-clinic-details', 'API\AdminController@getClinicDetails');

    /**
     * View Doctor details
     */
    Route::get('get-doctors-details', 'API\AdminController@getDoctorsDetails');

    /**
     * Working day scheduling
     */
    Route::get('get-working-session-form-details', 'API\AdminDoctorSchedulingController@getWorkingSessionFormDetails');
    Route::post('add-doctor-working-session', 'API\AdminDoctorSchedulingController@addWorkingSession');
    Route::get('get-doctor-working-sessions', 'API\AdminDoctorSchedulingController@getWorkingSessions');
    Route::post('update-doctor-working-session', 'API\AdminDoctorSchedulingController@updateWorkingSession');
    Route::get('check-doctor-working-session-relations', 'API\AdminDoctorSchedulingController@checkWorkingSessionRelation');
});
