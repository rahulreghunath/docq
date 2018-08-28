<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClinicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clinics', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('doctor_id')->unsigned();
            $table->string('clinic_name', 150)->comment('Name of clinic');
            $table->string('location', 100)->comment('Clinic Location');
            $table->bigInteger('phone')->nullable()->comment('Clinic Phone');
            $table->string('latitude', 100)->comment('Clinic Latitude');
            $table->string('longitude', 100)->comment('Clinic Longitude');

        });
        Schema::table('clinics', function (Blueprint $table) {

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
        Schema::dropIfExists('clinics');
    }
}
