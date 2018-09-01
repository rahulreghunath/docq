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
        $login->email = 'rahul';
        $login->password = bcrypt('password');
        $login->user_category_id=0;
        $login->save();
    }
}
