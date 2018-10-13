<?php
/**
 * Created by PhpStorm.
 * User: raksha
 * Date: 22/9/18
 * Time: 6:49 PM
 */

namespace App\Constants;


/**
 * Custom messages
 * Class Messages
 * @package App\Constants
 */
class Messages
{
    public static $ERROR_MESSAGE = 'Oops! Something went wrong, Please try again';

    public static $QUALIFICATION_ADDED = 'QualificationResource added';
    public static $SPECIALISATION_ADDED = 'SpecializationResource added';

    public static $SESSION_ADDED = 'Working Session added Successfully';
    public static $SESSION_DELETED = 'Working Session deleted Successfully';
    public static $SESSION_UPDATED = 'Working Session updated Successfully';

    public static $CLINIC_ADDED = 'Clinic added successfully';

    public static $DOCTOR_ADDED = 'Doctor added successfully';
    public static $DOCTOR_IMAGE_ADDED = 'Doctor image added successfully';
    public static $DOCTOR_IMAGE_UPLOAD_FAILED = 'Can\'t upload image at this time, try again';

    public static $PATIENT_ADDED = 'Patient added successfully';

    public static $BOOKING_COMPLETED = 'Booking Completed Successfully';
    public static $BOOKING_DELETED = 'Booking Deleted Successfully';

}