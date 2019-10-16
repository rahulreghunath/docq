<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('registration_id')->unsigned();
            $table->string('email', 100)->comment('User E-mail');
            $table->bigInteger('phone')->nullable()->comment('User Phone');
            $table->integer('social_provider_id')->nullable()->unsigned();
            $table->string('access_token', 300)->nullable()->comment('Access Token');
            $table->string('password',250)->nullable();
            $table->integer('user_category_id')->unsigned();
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */

    public function down()
    {
        Schema::dropIfExists('logins');
    }
}
