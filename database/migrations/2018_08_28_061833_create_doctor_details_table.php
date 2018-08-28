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
            $table->integer('doctor_id')->unsigned();
            $table->string('reg_no', 150)->comment('Medical registration number');
            $table->string('experience', 100)->comment('Doctors experience');
            $table->float('consulting_fee')->comment('Consulting fee');
            $table->string('profile_picture', 300)->comment('Doctors profile picture');

        });
        Schema::table('doctor_details', function (Blueprint $table) {

            $table->foreign('doctor_id')->references('id')->on('registers');

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
