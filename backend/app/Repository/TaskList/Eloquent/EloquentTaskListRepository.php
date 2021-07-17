<?php

namespace App\Repository\TaskList\Eloquent;

use App\Models\TaskList;
use App\Repository\TaskList\Contracts\TaskListRepository;

class EloquentTaskListRepository implements TaskListRepository
{
    public function allWithTasks()
    {
        return TaskList::with('tasks')->get();
    }

    public function create(array $payload)
    {
        return TaskList::create($payload);
    }

    public function update(array $payload, int $id)
    {
       $taskList = $this->find($id);
       $taskList->update($payload);
       $taskList->save();

       return $taskList;
    }

    public function find($id)
    {
        return TaskList::with('tasks')->findOrFail($id);
    }

    public function delete(int $id)
    {
        $taskList = $this->find($id);
        $taskList->delete();

        return $taskList;
    }
}
