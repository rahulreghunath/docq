<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRemarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('remarks', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('booking_id')->unsigned();
            $table->string('remark', 1000)->comment('Remark');
            $table->date('follow_up_date')->comment('Next visit date');
            $table->string('followup_description', 1000)->comment('Followup Remarks');
        });
        Schema::table('remarks', function (Blueprint $table) {

            $table->foreign('booking_id')->references('id')->on('bookings');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('remarks');
    }
}
