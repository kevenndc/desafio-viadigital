<?php

namespace App\Repository\Task\Contracts;

interface TaskRepository
{
    public function all();

    public function create(array $payload);

    public function update(array $payload, int $id);

    public function find(int $id);

    public function delete(int $id);
}
