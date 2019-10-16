<?php

namespace App\Constants;

/**
 * Constant values
 * Class Constants
 * @package App\Constants
 */
class Constants
{
    public static $ACTIVE_USER = '1';

    public static $ADMIN_USER = '0';
    public static $DOCTOR_USER = '1';
    public static $PATIENT_USER = '2';
    public static $IVRS_USER = '3';
    public static $NORMAL_USER = '4';


    public static $SUCCESS = 'success';
    public static $FAILED = 'error';
    public static $ADMIN_PAGINATION_COUNT = 10;

    public static $DELETED_SESSION_STATUS = 0;
    public static $ACTIVE_SESSION_STATUS = 1;
    public static $DISABLED_SESSION_STATUS = 2;
    public static $SINGLE_DAY_SESSION_STATUS = 3;

    public static $SINGLE_DAY_WEEK_DAY_ID = 8;

    public static $AVAILABLE_SLOT_STATUS = 0;
    public static $BOOKED_SLOT_STATUS = 1;
    public static $DOCTOR_DELETED_SLOT_STATUS = 2;

    public static $ACTIVE_BOOKING_STATUS = 1;
    public static $SUCCESSFUL_BOOKING_STATUS = 2;
    public static $ABSENT_BOOKING_STATUS = 3;
    public static $DOCTOR_DELETED_BOOKING_STATUS = 4; // CANCELLED DUE TO DOCTOR SCHEDULE CHANGE
    public static $INFORMED_DOCTOR_DELETED_BOOKING_STATUS = 5; // CANCELLED BOOKING AFTER INFORMED TO PATIENT
    public static $DELETED_BOOKING_STATUS = -1; // DELETED BY USER OR STAFF

    public static $ACTIVE_SESSION_DATE_STATUS = 1;
    public static $DOCTOR_DELETED_SESSION_DATE_STATUS = 2;

}