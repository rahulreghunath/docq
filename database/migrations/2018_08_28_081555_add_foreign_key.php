<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKey extends Migration
{
    /**
     * Run the migrations.
     * Add foreign keys
     * @return void
     */
    public function up()
    {
        Schema::table('doctor_details', function (Blueprint $table) {
            $table->foreign('registration_id')->references('id')->on('registrations');
        });
        Schema::table('logins', function (Blueprint $table) {
            $table->foreign('registration_id')->references('id')->on('registrations');
        });

        Schema::table('doctor_specializations', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
            $table->foreign('specialization_id')->references('id')->on('specializations');
        });

        Schema::table('doctor_qualifications', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
            $table->foreign('qualification_id')->references('id')->on('qualifications');
        });

        Schema::table('clinics', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
        });

        Schema::table('working_sessions', function (Blueprint $table) {
            $table->foreign('clinic_id')->references('id')->on('clinics');
            $table->foreign('week_day_id')->references('id')->on('week_days');
        });

        Schema::table('bookings', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
            $table->foreign('registration_id')->references('id')->on('registrations');
            $table->foreign('booking_slot_id')->references('id')->on('booking_slots');
        });

        Schema::table('prescriptions', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
            $table->foreign('registration_id')->references('id')->on('registrations');
            $table->foreign('booking_id')->references('id')->on('bookings');
            $table->foreign('medicine_id')->references('id')->on('medicines');
        });

        Schema::table('booking_slots', function (Blueprint $table) {
            $table->foreign('working_session_id')->references('id')->on('working_sessions');
        });

        Schema::table('remarks', function (Blueprint $table) {
            $table->foreign('booking_id')->references('id')->on('bookings');
        });


        Schema::table('documents', function (Blueprint $table) {
            $table->foreign('doctor_details_id')->references('id')->on('doctor_details');
            $table->foreign('registration_id')->references('id')->on('registrations');
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
