<?php

use Illuminate\Database\Seeder;

class LoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $login = new \App\Models\Login();
        $login->user_id = 1;
        $login->username = 'rahul';
        $login->password = bcrypt('password');
        $login->save();
    }
}
