<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
Route::group([
    'prefix' => 'admin'
], function () {
    Route::get('/', [
        'uses' => 'API\Admin\AdminController@getHome',
        'as' => 'adminHome'
    ]);
});

Route::get('doctor/', [
    'uses' => 'API\DoctorController@getHome',
    'as' => 'doctorHome'
]);

Route::get('job', [
    'uses' => 'HomeController@getJob',
    'as' => 'job'
]);
Route::get('sms', [
    'uses' => 'HomeController@sendSms',
    'as' => 'job'
]);


/**
 * User routes
 */
Route::group([
    'prefix' => 'user',
     'middleware' => ['cross'], // Middleware for allow cross site request **should be removed in production
], function () {
    Route::post('new-registration','User\UserController@newRegistration');
});
