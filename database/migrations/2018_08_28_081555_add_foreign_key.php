<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('working_sessions', function (Blueprint $table) {

            $table->foreign('clinic_id')->references('id')->on('clinics');
            $table->foreign('week_days_id')->references('id')->on('week_days');

        });
        Schema::table('bookings', function (Blueprint $table) {

            $table->foreign('doctor_id')->references('id')->on('registers');
            $table->foreign('user_id')->references('id')->on('registers');
            $table->foreign('booking_slot_id')->references('id')->on('booking_slots');

        });
        Schema::table('prescriptions', function (Blueprint $table) {

            $table->foreign('doctor_id')->references('id')->on('registers');
            $table->foreign('user_id')->references('id')->on('registers');
            $table->foreign('booking_id')->references('id')->on('bookings');
            $table->foreign('medicine_id')->references('id')->on('medicines');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
