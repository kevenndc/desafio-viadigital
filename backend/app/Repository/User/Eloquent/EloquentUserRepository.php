<?php

namespace App\Repository\User\Eloquent;

use App\Models\User;
use App\Repository\User\Contracts\UserRepository;

class EloquentUserRepository implements UserRepository
{
    public function findById(int $id)
    {
        return User::find($id);
    }

    public function findByEmail(string $email)
    {
        return User::firstWhere('email', $email);
    }

    public function create(array $data)
    {
        return User::create($data);
    }
}
