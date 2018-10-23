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

Route::group([
    'middleware' => ['auth:api', 'cross'], // Middleware for allow cross site request **should be removed in production
], function () {

    /**
     * Authenticated routes for Admin
     */
    Route::group([
        'middleware' => 'admin',
        'prefix' => 'admin'
    ], function () {
        Route::get('test', 'TestController@test');

        Route::post('logout', 'API\Admin\LoginController@logout');

        /**
         * Specialisation
         */
        Route::post('add-specialisation', 'API\Admin\AdminController@addSpecialisation');
        Route::get('get-specialisations', 'API\Admin\AdminController@getSpecialisations');

        /**
         * QualificationResource
         */
        Route::post('add-qualification', 'API\Admin\AdminController@addQualification');
        Route::get('get-qualifications', 'API\Admin\AdminController@getQualifications');

        /**
         * Add Doctor
         */
        Route::get('get-doctor-form-details', 'API\Admin\AdminController@getDoctorFormDetails');
        Route::post('add-doctor', 'API\Admin\AdminController@addDoctor');
        Route::get('get-doctor-basic-details-img', 'API\Admin\AdminController@getDoctorBasicDetails');
        Route::post('add-doctor-profile-image', 'API\Admin\AdminController@uploadDoctorImage');

        /**
         * Add Clinic
         */
        Route::post('add-doctor-clinic', 'API\Admin\AdminController@addDoctorClinic');
        Route::get('get-doctor-clinic-details', 'API\Admin\AdminController@getClinicDetails');

        /**
         * View Doctor details
         */
        Route::get('get-doctors-details', 'API\Admin\AdminController@getDoctorsDetails');

        /**
         * Working day scheduling
         */
        Route::get('get-working-session-form-details', 'API\Admin\SchedulingController@getWorkingSessionFormDetails');
        Route::post('add-doctor-working-session', 'API\Admin\SchedulingController@addWorkingSession');
        Route::get('get-doctor-working-sessions', 'API\Admin\SchedulingController@getWorkingSessions');
        Route::post('update-doctor-working-session', 'API\Admin\SchedulingController@updateWorkingSession');
        Route::get('check-doctor-working-session-relations', 'API\Admin\SchedulingController@checkWorkingSessionRelation');

        /**
         * Staff Bookings
         */
        Route::get('get-staff-booking-form-data', 'API\Admin\BookingController@getBookingFormData');
        Route::get('get-staff-booking-clinics', 'API\Admin\BookingController@getClinics');
        Route::get('get-staff-booking-sessions', 'API\Admin\BookingController@getSessions');
        Route::get('get-staff-booking-tokens', 'API\Admin\BookingController@getTokens');
        Route::get('get-staff-booking-patients', 'API\Admin\BookingController@getPatients');
        Route::post('post-staff-booking-patient', 'API\Admin\BookingController@addPatient');
        Route::post('post-staff-booking', 'API\Admin\BookingController@addBooking');
        Route::get('get-staff-bookings', 'API\Admin\BookingController@getBookings');
        Route::get('get-staff-bookings-filter-data', 'API\Admin\BookingController@getBookingsFilterData');
        Route::post('delete-staff-booking', 'API\Admin\BookingController@deleteBooking');

    });

    /**
     * Authenticated Routes for Doctor
     */
    Route::group([
        'middleware' => 'doctor',
        'prefix' => 'doctor'
    ], function () {
        Route::get('get-profile-data', 'API\Doctor\DoctorController@getProfileDetails');
        Route::get('get-clinics', 'API\Doctor\DoctorController@getClinics');

        /**
         * Booking
         */
        Route::get('get-bookings', 'API\Doctor\ManageBookingController@getBookings');

        /**
         * Scheduling
         */
        Route::get('get-working-session-form-details', 'API\Doctor\SchedulingController@getWorkingSessionFormDetails');
        Route::get('get-working-sessions', 'API\Doctor\SchedulingController@getWorkingSessions');
        Route::post('add-working-session', 'API\Doctor\SchedulingController@addWorkingSession');
        Route::post('update-working-session', 'API\Doctor\SchedulingController@updateWorkingSession');
        Route::get('check-working-session-relations', 'API\Doctor\SchedulingController@checkWorkingSessionRelation');

        /**
         * Add Clinic
         */
        Route::post('add-clinic', 'API\Doctor\DoctorController@addClinic');
        Route::get('get-clinic-details', 'API\Doctor\DoctorController@getClinicDetails');
    });

    /**
     * Authenticated routes for all users, used to fetch less secured reusable data
     */
    Route::group([
        'prefix' => 'utils'
    ], function () {
        //
    });

});

/**
 * Unauthenticated route
 */
Route::group([
    'middleware' => ['cross'], // Middleware for allow cross site request **should be removed in production
], function () {
    Route::post('admin/login', 'API\Admin\LoginController@login');
    Route::post('doctor/login', 'API\Doctor\LoginController@login');
});