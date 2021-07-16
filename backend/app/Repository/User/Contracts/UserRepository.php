<?php

namespace App\Repository\User\Contracts;

interface UserRepository
{
    public function create(array $data);

    public function findById(int $id);

    public function findByEmail(string $email);
}
