<?php

namespace App\Http\Controllers\API\Doctor;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddClinicRequest;
use App\Http\Resources\Collections\ClinicResourceCollection;
use App\Services\Doctor\DoctorService;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    private $doctorService;

    /**
     * DoctorController constructor.
     */
    public function __construct()
    {
        $this->doctorService = new DoctorService();
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getHome()
    {
        return view('Doctor.index');
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function getProfileDetails()
    {
        return $this->doctorService->getProfileDetails();
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function getClinics()
    {

        return $this->doctorService->getClinics();
    }

    /**
     * @param AddClinicRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addClinic(AddClinicRequest $request)
    {
        return $this->doctorService->addClinic($request);
    }

    /**
     * @return ClinicResourceCollection
     */
    public function getClinicDetails()
    {
        return $this->doctorService->getClinicDetails();
    }

    public function getPatients(Request $request)
    {
        return $this->doctorService->getPatients($request);
    }
    public function getPatient(Request $request)
    {
        return $this->doctorService->getPatient($request);
    }
}