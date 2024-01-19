<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;

class AuthenticateController extends Controller
{
    protected Request $request;

    public function Authenticate(Request $request)
    {
        $request->validate([
            'username' => ['required', 'string', 'alpha_num', 'min:3', 'max:16'],
            'password' => ['required', 'string', 'min:5', 'max:255']
        ]);

        $this->request = $request;

        $user = User::where('username', strtolower($request->input('username')))->first();
        if (is_null($user)) return $this->registerUser();

        if (!Hash::check($request->input('password'), $user->password)) {
            throw ValidationException::withMessages([
                'username' => trans('auth.failed'),
            ]);
        }

        $request->session()->regenerate();
        Auth::loginUsingId($user->id, true);

        return to_route('index');
    }

    protected function registerUser()
    {
        $user = User::create([
            'username'=> strtolower($this->request->input('username')),
            'password'=> Hash::make($this->request->input('password'))
        ]);

        $this->request->session()->regenerate();
        Auth::loginUsingId($user->id, true);

        return to_route('index');
    }
}
