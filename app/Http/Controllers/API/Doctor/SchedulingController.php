<?php

namespace App\Http\Controllers\API\Doctor;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateWorkingSessionRequest;
use App\Http\Requests\WorkingSessionRequest;
use App\Services\Doctor\DoctorService;
use App\Services\Doctor\SchedulingService;
use Illuminate\Http\Request;

class SchedulingController extends Controller
{
    private $doctorService, $schedulingService;

    /**
     * AdminDoctorSchedulingController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api');
        $this->doctorService = new DoctorService();
        $this->schedulingService = new SchedulingService();
    }

    public function getWorkingSessionFormDetails(Request $request)
    {
        return $this->schedulingService->getSchedulingFormDetails();
    }

    public function addWorkingSession(WorkingSessionRequest $request)
    {
        return $this->schedulingService->addWorkingSession($request);
    }

    public function getWorkingSessions(Request $request)
    {
        return $this->schedulingService->getWorkingSession();
    }

    public function updateWorkingSession(UpdateWorkingSessionRequest $request)
    {
        return $this->schedulingService->updateSchedule($request);
    }

    public function checkWorkingSessionRelation(Request $request)
    {
        return $this->schedulingService->checkWorkingSessionRelation($request);
    }

    public function addSingleWorkingSession(Request $request)
    {
        return $this->schedulingService->addSingleWorkingSession($request);
    }
}