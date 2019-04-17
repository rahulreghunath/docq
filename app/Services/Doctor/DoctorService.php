<?php

namespace App\Services\Doctor;


use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Requests\AddClinicRequest;
use App\Http\Resources\Collections\BookingResourceCollection;
use App\Http\Resources\Collections\ClinicResourceCollection;
use App\Http\Resources\Collections\PatientResourceCollection;
use App\Http\Resources\DoctorRegistrationResource;
use App\Http\Resources\FormResource\ClinicsResource;
use App\Models\Booking;
use App\Models\Clinic;
use App\Models\DoctorDetails;
use App\Models\Registration;
use Exception;
use Illuminate\Http\Request;
use App\Services\Service;

class DoctorService extends Service
{
    public function getProfileDetails()
    {
        $data = [
            'profileDetails' => DoctorRegistrationResource::make(Service::getUser())
        ];
        return response(jsonResponse($data, Constants::$SUCCESS));
    }

    public function getClinics()
    {
        $data = [
            'clinics' => ClinicsResource::collection(Service::getDoctor()->clinics)
        ];
        return response(jsonResponse($data, Constants::$SUCCESS));
    }

    public function getBookings(Request $request)
    {
        $bookings = Booking::whereHas('booking_slot', function ($query) use ($request) {
            $query->whereHas('session_date', function ($firstInner) use ($request) {
                $firstInner->whereHas('working_session', function ($secondInner) use ($request) {
                    $secondInner->whereHas('clinic', function ($thirdInner) use ($request) {
                        $thirdInner->when($request['clinic'] != '', function ($q) use ($request) {
                            $q->where('id', $request['clinic']);
                        })->whereHas('doctor_details', function ($forthInner) use ($request) {
                            $forthInner->where('id', Service::getDoctor()->id);
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

    public function addClinic(AddClinicRequest $request)
    {
        try {
            $clinic = new Clinic();
            $clinic->doctor_details_id = Service::getDoctor()->id;
            $clinic->clinic_name = $request['clinicName'];
            $clinic->location = $request['location'];
            $clinic->phone = $request['phone'];
            $clinic->latitude = $request['latitude'];
            $clinic->longitude = $request['longitude'];
            $clinic->save();
        } catch (Exception $e) {
            $clinic = false;
        }

        $data = [
            'message' => $clinic != false ? Messages::$CLINIC_ADDED : Messages::$ERROR_MESSAGE,
        ];

        return response()->json(
            jsonResponse(
                $data, $clinic != false ? Constants::$SUCCESS : Constants::$FAILED
            )
        );
    }

    public function getClinicDetails()
    {
        $clinics = Clinic::whereHas('doctor_details', function ($query) {
            $query->whereHas('registration', function ($query) {
                $query->where('id', Service::getUser()->id);
            });
        })->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return ClinicResourceCollection::make($clinics)->status(Constants::$SUCCESS);
    }

    public function getPatients(Request $request)
    {
        $patients = Registration::where('user_category_id', Constants::$PATIENT_USER)->whereHas('bookings', function ($q) {
            $q->where('doctor_details_id', Service::getDoctor()->id);
        })->when($request['key'] != '', function ($q1) use ($request) {
            $q1->where(function ($q) use ($request) {
                $q->where('full_name', 'like', '%' . $request['key'] . '%')
                    ->orWhere('address', 'like', '%' . $request['key'] . '%')
                    ->orWhere('phone', 'like', '%' . $request['key'] . '%');
            });
        })->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return PatientResourceCollection::make($patients)->status(Constants::$SUCCESS);
    }

    public function getPatient(Request $request)
    {
        $patient = Registration::where([['id', $request['patientId']], ['user_category_id', Constants::$PATIENT_USER]])->firstOrFail();

        return response()->json(jsonResponse(['patient' => $patient], Constants::$SUCCESS));
    }
}