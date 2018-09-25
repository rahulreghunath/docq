<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_details', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('registration_id')->unsigned();
            $table->string('medical_registration_number', 150)->comment('Medical registration number');
            $table->string('experience', 100)->comment('DoctorResource experience');
            $table->float('consulting_fee')->comment('Consulting fee');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */

    public function down()
    {
        Schema::dropIfExists('doctor_details');
    }
}
