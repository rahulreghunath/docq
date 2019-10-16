<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkingSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('working_sessions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('session_title', 100)->comment('Daily Session');
            $table->integer('clinic_id')->unsigned()->comment('Clinic Id');
            $table->integer('week_day_id')->unsigned();
            $table->integer('no_patients')->comment('Total Number of patients');
            $table->time('start_time')->comment('Start Time');
            $table->time('end_time')->comment('End Time');
            $table->integer('status')->comment('Current status of Session');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('working_sessions');
    }
}
