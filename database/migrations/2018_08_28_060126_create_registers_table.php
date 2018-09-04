<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('full_name', 100)->comment('Full Name');
            $table->integer('age')->comment('Age of User');
            $table->string('location', 100)->comment('User Location');
            $table->string('address', 150)->comment('User Address');
            $table->bigInteger('pin')->nullable()->comment('User Pincode');
            $table->bigInteger('phone')->nullable()->comment('User Phone');
            $table->string('email', 100)->comment('User E-mail');
            $table->string('gender', 100)->comment('User Gender');
            $table->string('profile_picture', 300)->nullable()->comment('Doctors profile picture');
            $table->integer('status')->comment('Current status of User');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registers');
    }
}
