<?php

namespace App\Http\Controllers\API\Admin;

use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewPatientRequest;
use App\Http\Resources\Collections\BookingResourceCollection;
use App\Http\Resources\Collections\PatientResourceCollection;
use App\Http\Resources\FormResource\BookingSlotResource;
use App\Http\Resources\FormResource\ClinicsResource;
use App\Http\Resources\FormResource\DoctorResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\SessionDateResource;
use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\Clinic;
use App\Models\DoctorDetails;
use App\Models\Login;
use App\Models\Registration;
use App\Models\SessionDate;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;

class BookingController extends Controller
{
    /**
     * AdminBookingController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * get booking page form details
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBookingFormData()
    {
        $doctors = DoctorDetails::whereHas('registration', function ($query) {
            $query->where('status', Constants::$ACTIVE_USER);
        })->with('registration')->get();

        return response()->json(
            jsonResponse(
                ['doctors' => DoctorResource::collection($doctors)],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get clinics of given doctor
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getClinics(Request $request)
    {
        $clinics = Clinic::where('doctor_details_id', $request['id'])->get();

        return response()->json(
            jsonResponse(
                ['clinics' => ClinicsResource::collection($clinics)],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get session of given clinic
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSessions(Request $request)
    {
        $sessionDates = SessionDate::whereHas('working_session', function ($query) use ($request) {
            $query->whereHas('clinic', function ($innerQuery) use ($request) {
                $innerQuery->where('id', $request['clinic']);
            });
        })->whereDate('date', '>=', Carbon::now()->format('Y-m-d'))->where('status', Constants::$ACTIVE_SESSION_DATE_STATUS)->get();

        return response()->json(jsonResponse(
                ['sessions' => SessionDateResource::collection($sessionDates)],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get token number of given day
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTokens(Request $request)
    {
        $bookingSlotes = BookingSlot::where('session_date_id', $request['day'])->get();

        return response()->json(
            jsonResponse(
                ['bookingSlot' => BookingSlotResource::collection($bookingSlotes)],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get all patients
     * @return PatientResourceCollection
     */
    public function getPatients(Request $request)
    {
        if ($request['key'] == '') {
            $patients = Registration::where('user_category_id', Constants::$PATIENT_USER)->paginate(Constants::$ADMIN_PAGINATION_COUNT);
        } else {
            $patients = Registration::where('user_category_id', Constants::$PATIENT_USER)
                ->where(function ($q) use ($request) {
                    $q->where('full_name', 'like', '%' . $request['key'] . '%')
                        ->orWhere('address', 'like', '%' . $request['key'] . '%')
                        ->orWhere('phone', 'like', '%' . $request['key'] . '%');
                })->paginate(Constants::$ADMIN_PAGINATION_COUNT);
        }

        return PatientResourceCollection::make($patients)->status(Constants::$SUCCESS);
    }

    /**
     * Add new patient
     * @param NewPatientRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addEditPatient(NewPatientRequest $request)
    {
        if ($request->has('id')) {
            $user = Registration::findOrFail($request['id']);
            $user->full_name = $request['name'];
            $user->age = $request['age'];
            $user->location = $request['location'];
            $user->address = $request['address'];
            $user->pin = $request['pin'];
            $user->phone = $request['phone'];
            $user->email = $request['email'];
            $user->gender = $request['gender'];
            $user->user_category_id = Constants::$PATIENT_USER;
            $user->status = Constants::$ACTIVE_USER;
            $user->profile_picture = 'http://localhost:8000/public/default-user.png';
            $user->save();

            $message = Lang::get('messages.patient_edited');
        } else {
            $user = new Registration();
            $user->full_name = $request['name'];
            $user->age = $request['age'];
            $user->location = $request['location'];
            $user->address = $request['address'];
            $user->pin = $request['pin'];
            $user->phone = $request['phone'];
            $user->email = $request['email'];
            $user->gender = $request['gender'];
            $user->user_category_id = Constants::$PATIENT_USER;
            $user->status = Constants::$ACTIVE_USER;
            $user->profile_picture = 'http://localhost:8000/public/default-user.png';
            $user->save();

            $login = new Login();
            $login->registration_id = $user->id;
            $login->email = $request['email'];
            $login->phone = $request['phone'];
            $login->password = bcrypt($request['phone']);
            $login->user_category_id = Constants::$PATIENT_USER;
            $login->save();
            $message = Lang::get('messages.patient_added');

        }
        return response()->json(
            jsonResponse(
                [
                    'message' => $message,
                    'patient' => PatientResource::make($user),
                ],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Add new staff booking
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addBooking(Request $request)
    {
        $request = $request->validate([
            'patient' => 'required',
            'doctor' => 'required',
            'slot' => 'required',
        ]);

        $booking = new Booking();
        $booking->doctor_details_id = $request['doctor'];
        $booking->registration_id = $request['patient'];
        $booking->booking_slot_id = $request['slot'];
        $booking->status = Constants::$ACTIVE_BOOKING_STATUS;
        $booking->save();

        $slot = $booking->booking_slot;
        $slot->status = Constants::$BOOKED_SLOT_STATUS;
        $slot->save();

        return response()->json(
            jsonResponse(
                ['message' => Messages::$BOOKING_COMPLETED],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get booking display page filter data
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBookingsFilterData()
    {
        $doctors = DoctorDetails::whereHas('registration', function ($query) {
            $query->where('status', Constants::$ACTIVE_USER);
        })->with('registration')->get();

        return response()->json(
            jsonResponse(
                ['doctors' => DoctorResource::collection($doctors)],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Get Booking details based on filter
     * @param Request $request
     * @return BookingResourceCollection
     */
    public function getBookings(Request $request)
    {
        $bookings = Booking::when($request['doctor'] != '', function ($q) use ($request) {
            $q->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('session_date', function ($firstInner) use ($request) {
                    $firstInner->whereHas('working_session', function ($secondInner) use ($request) {
                        $secondInner->whereHas('clinic', function ($thirdInner) use ($request) {
                            $thirdInner->when($request['clinic'] != '', function ($q) use ($request) {
                                $q->where('id', $request['clinic']);
                            })->whereHas('doctor_details', function ($forthInner) use ($request) {
                                $forthInner->where('id', $request['doctor']);
                            });
                        });
                    });
                });
            });
        })->when($request['date'] != '', function ($q) use ($request) {
            $q->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('session_date', function ($firstInner) use ($request) {
                    $firstInner->where('date', $request['date']);
                });
            });
        })->orderBy('created_at', 'desc')->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return BookingResourceCollection::make($bookings)->status(Constants::$SUCCESS);
    }

    public function deleteBooking(Request $request)
    {
        $booking = Booking::findOrFail($request['id']);
        $booking->status = Constants::$DELETED_BOOKING_STATUS;
        $booking->save();

        $slot = $booking->booking_slot;
        $slot->status = Constants::$ACTIVE_BOOKING_STATUS;
        $slot->save();

        return response()->json(
            jsonResponse(
                [
                    'message' => Messages::$BOOKING_DELETED,
                ],
                Constants::$SUCCESS
            )
        );
    }

    public function getCancelledBookings(Request $request)
    {
        $bookings = Booking::when($request['doctor'] != '', function ($q) use ($request) {
            $q->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('session_date', function ($firstInner) use ($request) {
                    $firstInner->whereHas('working_session', function ($secondInner) use ($request) {
                        $secondInner->whereHas('clinic', function ($thirdInner) use ($request) {
                            $thirdInner->when($request['clinic'] != '', function ($q) use ($request) {
                                $q->where('id', $request['clinic']);
                            })->whereHas('doctor_details', function ($forthInner) use ($request) {
                                $forthInner->where('id', $request['doctor']);
                            });
                        });
                    });
                });
            });
        })->when($request['date'] != '', function ($q) use ($request) {
            $q->whereHas('booking_slot', function ($query) use ($request) {
                $query->whereHas('session_date', function ($firstInner) use ($request) {
                    $firstInner->where('date', $request['date']);
                });
            });
        })->where('status', Constants::$DOCTOR_DELETED_BOOKING_STATUS)->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return BookingResourceCollection::make($bookings)->status(Constants::$SUCCESS);
    }

    public function changeBookingStatus(Request $request)
    {
        $booking = Booking::findOrFail($request['id']);
        $booking->status = Constants::$INFORMED_DOCTOR_DELETED_BOOKING_STATUS;
        $booking->save();

        return response()->json(
            jsonResponse(['message' => Lang::get('status_update')],
                Constants::$SUCCESS
            )
        );
    }
}
