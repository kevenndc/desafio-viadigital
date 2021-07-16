<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Repository\User\Contracts\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (! Auth::attempt($credentials)) {
            return \response()->json(
                ['message' => 'The provided credentials are incorrect.'],
                Response::HTTP_UNAUTHORIZED
            );
        }

        $user = $this->repository->findByEmail($credentials['email']);
        $token = $user->createToken('authToken')->plainTextToken;

        return $this->sendToken($token);
    }

    public function register(RegisterRequest $request)
    {
        $user = $this->repository->create($request->validated());
        $token = $user->createToken('authToken')->plainTextToken;

        return $this->sendToken($token);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
    }

    private function sendToken(string $token)
    {
        return \response()->json([
            'token' => $token,
            'type' => 'Bearer'
        ], Response::HTTP_CREATED);
    }
}
