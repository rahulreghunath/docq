<?php

use Illuminate\Database\Seeder;

class WeekDaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Sunday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Monday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Tuesday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Wednesday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Thursday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Friday';
        $weekDay->save();

        $weekDay = new \App\Models\WeekDay();
        $weekDay->week_day = 'Saturday';
        $weekDay->save();

    }
}
