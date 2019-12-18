<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegistrationRequest extends FormRequest
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
            'age' => ['required', 'numeric'],
            'location' => 'required',
            'pin' => 'required|numeric|digits:6',
            'address' => 'required',
            'phone' => 'required|numeric|digits:10',
            'email' => 'required|email',
            'gender' => 'required',
        ];
    }
}
