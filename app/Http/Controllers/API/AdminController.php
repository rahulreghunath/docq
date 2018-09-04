<?php

namespace App\Http\Controllers\API;

use App\Constants\Constants;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddDoctorRequest;
use App\Http\Resources\Specializations;
use App\Models\DoctorDetails;
use App\Models\DoctorSpecialization;
use App\Models\Login;
use App\Models\Qualification;
use App\Models\Registration;
use App\Models\Specialization;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getHome()
    {
        return view('Admin.index');
    }

    public function addSpecialisation(Request $request)
    {
        $validatedData = $request->validate([
            'specialization' => 'required',
        ]);

        $specialization = new Specialization();
        $specialization->specialization_value = $validatedData['specialization'];
        $specialization->save();

        return response()->json(jsonResponse(['message' => 'Specialization added'], 'success'));
    }

    public function getSpecialisations()
    {
        $specializations = Specialization::paginate(5);

        $data = [
            'specializations' => $specializations,
        ];
        return response()->json(jsonResponse($data, 'success'));

    }

    public function addQualification(Request $request)
    {
        $validatedData = $request->validate([
            'qualification' => 'required',
        ]);

        $qualification = new Qualification();
        $qualification->qualification_value = $validatedData['qualification'];
        $qualification->save();

        return response()->json(jsonResponse(['message' => 'Qualification added'], 'success'));
    }

    public function getQualifications()
    {
        $qualifications = Qualification::paginate(5);

        $data = [
            'qualifications' => $qualifications,
        ];
        return response()->json(jsonResponse($data, 'success'));

    }

    public function getDoctorFormDetails()
    {
        $specialisations = Specializations::collection(Specialization::all());

        $data = [
            'specialisations' => $specialisations,
        ];
        return response()->json(jsonResponse($data, 'success'));
    }

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

        return response()->json(jsonResponse($data, 'success'));
    }

    public function getDoctorBasicDetails(Request $request)
    {
        $doctor = Registration::where('id', $request['doctor'])->whereHas('login', function ($query) use ($request) {
            $query->where('user_category_id', Constants::$DOCTOR_USER);
        });

        return response()->json(jsonResponse(['doctor' => $doctor], 'success'));
    }
}
