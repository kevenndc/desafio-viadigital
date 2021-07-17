<?php

namespace App\Repository\Task\Eloquent;

use App\Models\Task;
use App\Repository\Task\Contracts\TaskRepository;

class EloquentTaskRepository implements TaskRepository
{

    public function all()
    {
        return Task::all();
    }

    public function create(array $payload)
    {
        return Task::create($payload);
    }

    public function update(array $payload, int $id)
    {
        $task = $this->find($id);
        $task->update($payload);
        $task->save();

        return $task;
    }

    public function find(int $id)
    {
        return Task::findOrFail($id);
    }

    public function delete(int $id)
    {
        $task = $this->find($id);
        $task->delete();

        return $task;
    }
}
