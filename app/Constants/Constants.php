<?php
/**
 * Created by PhpStorm.
 * User: raksha
 * Date: 4/9/18
 * Time: 6:39 PM
 */

namespace App\Constants;

/**
 * Constant values
 * Class Constants
 * @package App\Constants
 */
class Constants
{
    public static $ACTIVE_USER = '1';

    public static $DOCTOR_USER = '1';
    public static $ADMIN_USER = '0';
    public static $PATIENT_USER = '2';

    public static $SUCCESS = 'success';
    public static $FAILED = 'error';
    public static $ADMIN_PAGINATION_COUNT = 2;

    public static $ACTIVE_SESSION_STATUS = 1;
    public static $DISABLED_SESSION_STATUS = 2;
    public static $DELETED_SESSION_STATUS = 0;

    public static $AVAILABLE_SLOT_STATUS = 0;
    public static $BOOKED_SLOT_STATUS = 1;

    public static $ACTIVE_BOOKING_STATUS = 1;
    public static $SUCCESSFUL_BOOKING_STATUS = 2;
    public static $ABSENT_BOOKING_STATUS = 2;
    public static $DELETED_BOOKING_STATUS = -1;

}