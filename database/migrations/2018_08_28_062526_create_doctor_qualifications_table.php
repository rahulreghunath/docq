<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_qualifications', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('doctor_id')->unsigned();
            $table->integer('qualification_id')->unsigned();
        });
        Schema::table('doctor_qualifications', function (Blueprint $table) {

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
        Schema::dropIfExists('doctor_qualifications');
    }
}
