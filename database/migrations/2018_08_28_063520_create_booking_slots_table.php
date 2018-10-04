<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking_slots', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('session_date_id')->unsigned();
            $table->time('start_time')->comment('Start Time');
            $table->time('end_time')->comment('End Time');
            $table->integer('token_number')->comment('End Time');
            $table->integer('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_slots');
    }
}
