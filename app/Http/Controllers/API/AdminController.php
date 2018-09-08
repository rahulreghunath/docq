<?php

namespace App\Http\Controllers\API;

use App\Constants\Constants;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddDoctorRequest;
use App\Http\Resources\Specializations;
use App\Models\Clinic;
use App\Models\DoctorDetails;
use App\Models\DoctorSpecialization;
use App\Models\Login;
use App\Models\Qualification;
use App\Models\Registration;
use App\Models\Specialization;
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
            'specialization' => 'required',
        ]);

        $specialization = new Specialization();
        $specialization->specialization_value = $validatedData['specialization'];
        $specialization->save();

        return response()->json(jsonResponse(['message' => 'Specialization added'], Constants::$SUCCESS));
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSpecialisations()
    {
        $specializations = Specialization::paginate(5);

        $data = [
            'specializations' => $specializations,
        ];
        return response()->json(jsonResponse($data, Constants::$SUCCESS));

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addQualification(Request $request)
    {
        $validatedData = $request->validate([
            'qualification' => 'required',
        ]);

        $qualification = new Qualification();
        $qualification->qualification_value = $validatedData['qualification'];
        $qualification->save();

        return response()->json(jsonResponse(['message' => 'Qualification added'], Constants::$SUCCESS));
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getQualifications()
    {
        $qualifications = Qualification::paginate(5);

        $data = [
            'qualifications' => $qualifications,
        ];
        return response()->json(jsonResponse($data, Constants::$SUCCESS));

    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDoctorFormDetails()
    {
        $specialisations = Specializations::collection(Specialization::all());

        $data = [
            'specialisations' => $specialisations,
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    /**
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
        $user->status = 1;
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
        $login->user_category_id = 1;
        $login->save();

        foreach ($request['specialisation'] as $specialisation) {
            $doctorSpecialisation = new DoctorSpecialization();
            $doctorSpecialisation->doctor_details_id = $doctor->id;
            $doctorSpecialisation->specialization_id = $specialisation;
            $doctorSpecialisation->save();
        }

        $data = [
            'message' => 'Doctor added successfully',
            'user' => $user->id
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }

    /**
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

        return response()->json(jsonResponse(['doctor' => $doctor], Constants::$SUCCESS));
    }

    /**
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
            'message' => $stats == 1 ? 'Doctor image added successfully' : 'Can\'t upload image at this time, try again',
        ];

        return response()->json(jsonResponse($data, $stats == 1 ? Constants::$SUCCESS : Constants::$FAILED));
    }

    /**
     * @param Request $request
     */
    public function addDoctorClinic(Request $request)
    {
        $validatedData = $request->validate([
            'clinicName' => 'required',
            'location' => 'required',
            'phone' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'doctor' => 'required',
        ]);

        $clinic = new Clinic();
        $clinic->doctor_details_id = DoctorDetails::where('registration_id', $request['doctor'])->select('id')->first()->id;
        $clinic->clinic_name = $validatedData['clinicName'];
        $clinic->location = $validatedData['location'];
        $clinic->phone = $validatedData['phone'];
        $clinic->latitude = $validatedData['latitude'];
        $clinic->longitude = $validatedData['longitude'];
        $clinic->save();

        $data = [
            'message' => 'Clinic added successfully',
        ];

        return response()->json(jsonResponse($data, Constants::$SUCCESS));
    }
}
