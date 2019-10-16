<?php

use App\Constants\Constants;
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
        $user = new \App\Models\Registration();
        $user->full_name = 'Admin';
        $user->age = '00';
        $user->location = '00';
        $user->address = '00';
        $user->pin = '00';
        $user->phone = '00';
        $user->email = '00';
        $user->gender = '00';
        $user->status = '1';
        $user->user_category_id=Constants::$ADMIN_USER;
        $user->save();

        $login = new \App\Models\Login();
        $login->registration_id = $user->id;
        $login->email = 'rahul';
        $login->password = bcrypt('password');
        $login->user_category_id=0;
        $login->save();

        $user = new \App\Models\Registration();
        $user->full_name = 'IVRS';
        $user->age = '00';
        $user->location = '00';
        $user->address = '00';
        $user->pin = '00';
        $user->phone = '00';
        $user->email = '00';
        $user->gender = '00';
        $user->user_category_id = Constants::$IVRS_USER;
        $user->status = '1';
        $user->save();

        $login = new \App\Models\Login();
        $login->registration_id = $user->id;
        $login->email = 'ivrs';
        $login->password = bcrypt('password');
        $login->user_category_id = Constants::$IVRS_USER;
        $login->save();
    }
}
