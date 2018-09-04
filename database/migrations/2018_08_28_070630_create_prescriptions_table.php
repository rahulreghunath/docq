<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('doctor_details_id')->unsigned();
            $table->integer('registration_id')->unsigned();
            $table->integer('booking_id')->unsigned();
            $table->integer('medicine_id')->unsigned();
            $table->string('usage', 500)->comment('Medicine Usage');
            $table->string('description', 100)->comment('Description');
            $table->integer('status')->comment('Current status of Medicine');
            $table->integer('img_status')->comment('Attachment Status');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prescriptions');
    }
}
