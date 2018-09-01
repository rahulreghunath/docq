<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\Specializations;
use App\Models\Qualification;
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

        return response()->json([
            'status' => 'success',
            'message' => 'Specialization added'
        ]);
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

        return response()->json([
            'status' => 'success',
            'message' => 'Qualification added'
        ]);
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

    public function addDoctor(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'age' => 'required',
            'location' => 'required',
            'pin' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'gender' => 'required',
            'specialisation' => 'required'
        ]);
    }
}
