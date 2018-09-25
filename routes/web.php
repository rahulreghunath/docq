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

Route::get('/', [
    'uses' => 'HomeController@getHome',
    'as' => 'home'
]);

Route::group([
    'prefix' => 'admin'
], function () {
    Route::get('/', [
        'uses' => 'API\AdminController@getHome',
        'as' => 'home'
    ]);
});

Route::get('job', [
    'uses' => 'HomeController@getJob',
    'as' => 'job'
]);