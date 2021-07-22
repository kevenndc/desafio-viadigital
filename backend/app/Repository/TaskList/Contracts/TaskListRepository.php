<?php

namespace App\Repository\TaskList\Contracts;

interface TaskListRepository
{
    public function allWithTasks();

    public function create(array $payload);

    public function update(array $payload, int $id);

    public function updateTasks(array $payload, int $id);

    public function delete(int $id);
}
