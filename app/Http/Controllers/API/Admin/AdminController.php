<?php

namespace App\Http\Controllers\API\Admin;

use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddClinicRequest;
use App\Http\Requests\AddDoctorRequest;
use App\Http\Resources\Collections\ClinicResourceCollection;
use App\Http\Resources\Collections\DoctorRegistrationCollection;
use App\Http\Resources\Collections\QualificationResourceCollection;
use App\Http\Resources\FormResource\SpecializationResource;
use App\Http\Resources\FormResource\QualificationResource;
use App\Http\Resources\Collections\SpecializationResourceCollection;
use App\Models\Clinic;
use App\Models\DoctorDetails;
use App\Models\DoctorQualification;
use App\Models\DoctorSpecialization;
use App\Models\Login;
use App\Models\Qualification;
use App\Models\Registration;
use App\Models\Specialization;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class AdminController extends Controller
{
    /**
     * Admin dashboard entry point
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getHome()
    {
        return view('Admin.index');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addSpecialisation(Request $request)
    {
        $validatedData = $request->validate([
            'specialization' => 'required|unique:specializations,specialization_value',
        ]);

        $specialization = new Specialization();
        $specialization->specialization_value = $validatedData['specialization'];
        $specialization->save();

        return response()->json(
            jsonResponse(
                ['message' => Messages::$SPECIALISATION_ADDED],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSpecialisations()
    {
        $specializations = Specialization::paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return SpecializationResourceCollection::make($specializations)->status(Constants::$SUCCESS);

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addQualification(Request $request)
    {
        $validatedData = $request->validate([
            'qualification' => 'required|unique:qualifications,qualification_value',
        ]);

        $qualification = new Qualification();
        $qualification->qualification_value = $validatedData['qualification'];
        $qualification->save();

        return response()->json(
            jsonResponse(['message' => Messages::$QUALIFICATION_ADDED],
                Constants::$SUCCESS
            )
        );
    }

    /**
     * Display added
     * @return \Illuminate\Http\JsonResponse
     */
    public function getQualifications()
    {
        $qualifications = Qualification::paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return QualificationResourceCollection::make($qualifications)->status(Constants::$SUCCESS);

    }

    /**
     * Getting doctor specializations to construct form
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDoctorFormDetails()
    {
        $specialisations = SpecializationResource::collection(Specialization::all());
        $qualifications = QualificationResource::collection(Qualification::all());

        $data = [
            'specialisations' => $specialisations,
            'qualifications' => $qualifications
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    /**
     * Adding new Doctor
     * @param AddDoctorRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addDoctor(AddDoctorRequest $request)
    {
        $user = new Registration();
        $user->full_name = $request['name'];
        $user->age = $request['age'];
        $user->location = $request['location'];
        $user->address = $request['address'];
        $user->pin = $request['pin'];
        $user->phone = $request['phone'];
        $user->email = $request['email'];
        $user->gender = $request['gender'];
        $user->user_category_id = Constants::$DOCTOR_USER;
        $user->status = Constants::$ACTIVE_USER;
        $user->profile_picture = 'http://localhost:8000/public/default-user.png';
        $user->save();

        $doctor = new DoctorDetails();
        $doctor->registration_id = $user->id;
        $doctor->medical_registration_number = $request['medicalRegistrationNumber'];
        $doctor->experience = $request['experience'];
        $doctor->consulting_fee = $request['consultingFees'];
        $doctor->save();

        $login = new Login();
        $login->registration_id = $user->id;
        $login->email = $request['email'];
        $login->phone = $request['phone'];
        $login->password = bcrypt($request['phone']);
        $login->user_category_id = Constants::$DOCTOR_USER;
        $login->save();

        /**
         * Adding specialisations
         */
        foreach ($request['specialisations'] as $specialisation) {
            $doctorSpecialisation = new DoctorSpecialization();
            $doctorSpecialisation->doctor_details_id = $doctor->id;
            $doctorSpecialisation->specialization_id = $specialisation;
            $doctorSpecialisation->save();
        }

        /**
         * Adding qualifications
         */
        foreach ($request['qualifications'] as $qualification) {
            $doctorQualification = new DoctorQualification();
            $doctorQualification->doctor_details_id = $doctor->id;
            $doctorQualification->qualification_id = $qualification;
            $doctorQualification->save();
        }

        $data = [
            'message' => Messages::$DOCTOR_ADDED,
            'user' => $user->id
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    /**
     * Get doctor basic details
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDoctorBasicDetails(Request $request)
    {
        $doctor = Registration::where('id', $request['doctor'])
            ->select('full_name')
            ->whereHas('login', function ($query) {
                $query->where('user_category_id', Constants::$DOCTOR_USER);
            })->first();

        $data = [
            'doctor' => $doctor,
        ];

        if ($doctor == null) {
            $data = [
                'doctor' => null,
                'message' => Messages::$ERROR_MESSAGE
            ];
        }

        return response()->json(
            jsonResponse(
                $data, $doctor != null ? Constants::$SUCCESS : Constants::$FAILED
            )
        );
    }

    /**
     * uploading doctor profile picture
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadDoctorImage(Request $request)
    {
        $file = $request->file('image');
        $extension = $file->guessClientExtension();
        $name = uniqid() . '.' . $extension;

        // open an image file
        $image = Image::make($file);
        $image->crop($request['width'], $request['height'], $request['x'], $request['y']);

        $path = 'public/images/doctor/' . $name;
        $stats = Storage::put($path, (string)$image->encode());

        if ($stats == 1) {
            $user = Registration::find($request['doctor']);
            $user->profile_picture = $path;
            $user->save();
        }

        $data = [
            'message' => $stats == 1 ?: Messages::$DOCTOR_IMAGE_UPLOAD_FAILED,
        ];

        return response()->json(
            jsonResponse(
                $data, $stats == 1 ? Constants::$SUCCESS : Constants::$FAILED
            )
        );
    }


    /**
     * Ading new clinic
     * @param AddClinicRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addDoctorClinic(AddClinicRequest $request)
    {
        try {
            $clinic = new Clinic();
            $clinic->doctor_details_id = DoctorDetails::where('registration_id', $request['doctor'])->first()->id;
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


    /**
     * Getting clinic details
     * @param Request $request
     * @return ClinicResourceCollection
     */
    public function getClinicDetails(Request $request)
    {
        $clinics = Clinic::whereHas('doctor_details', function ($query) use ($request) {
            $query->whereHas('registration', function ($query) use ($request) {
                $query->where('id', $request['id']);
            });
        })->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return ClinicResourceCollection::make($clinics)->status(Constants::$SUCCESS);
    }

    public function getDoctorsDetails()
    {
        $doctors = Registration::whereHas('login', function ($query) {
            $query->where('user_category_id', Constants::$DOCTOR_USER);
        })->with([
            'doctor',
            'doctor.doctor_specializations',
            'doctor.doctor_qualifications',
            'doctor.doctor_qualifications.qualification'
        ])->paginate(Constants::$ADMIN_PAGINATION_COUNT);

        return DoctorRegistrationCollection::make($doctors)->status(Constants::$SUCCESS);
    }
}
