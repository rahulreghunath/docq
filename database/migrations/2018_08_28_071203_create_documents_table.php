<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('doctor_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->string('document_location', 650)->comment('Document Storage Location');
        });
        Schema::table('documents', function (Blueprint $table) {

            $table->foreign('doctor_id')->references('id')->on('registers');
            $table->foreign('user_id')->references('id')->on('registers');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
