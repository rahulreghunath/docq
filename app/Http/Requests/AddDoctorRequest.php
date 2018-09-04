<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddDoctorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'age' => 'required|numeric',
            'location' => 'required',
            'pin' => 'required|numeric',
            'address' => 'required',
            'phone' => 'required|numeric',
            'email' => 'required|email',
            'gender' => 'required',
            'specialisation' => 'required',
            'medicalRegistrationNumber' => 'required',
            'experience' => 'required',
            'consultingFees' => 'required|numeric',
        ];
    }

    /**
     * Custom error message
     * @return array
     */
    public function messages()
    {
        return [
            'age.numeric' => 'Enter a valid age',
            'pin.numeric' => 'Enter a valid pin code',
            'phone.numeric' => 'Enter a valid pin phone number',
            'consultingFees.numeric' => 'Enter a valid fees amount',
        ];
    }
}
