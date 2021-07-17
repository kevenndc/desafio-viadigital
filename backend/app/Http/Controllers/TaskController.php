<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Repository\Task\Contracts\TaskRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    private $repository;
    private const TASK_NOT_FOUND = "Task not found";

    public function __construct(TaskRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $tasks = $this->repository->all();
        return response()->json($tasks, Response::HTTP_OK);
    }

    public function store(StoreTaskRequest $request)
    {
        $task = $this->repository->create($request->validated());
        return response()->json($task, Response::HTTP_CREATED);
    }

    public function show(int $id)
    {
        try {
            $task = $this->repository->find($id);
            return response()->json($task,Response::HTTP_OK);
        } catch (ModelNotFoundException $exception) {
            return $this->sendTaskNotFoundResponse();
        }
    }


    public function update(UpdateTaskRequest $request, int $id)
    {
        $payload = $request->validated();
        try {
            $task = $this->repository->update($payload, $id);
            return response()->json($task,Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $exception) {
            return $this->sendTaskNotFoundResponse();
        }
    }

    public function destroy(int $id)
    {
        try {
            $task = $this->repository->delete($id);
            return response()->json($task,Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $exception) {
            return $this->sendTaskNotFoundResponse();
        }
    }

    private function sendTaskNotFoundResponse() {
        return response()->json([
            'message' => self::TASK_NOT_FOUND
        ], Response::HTTP_NOT_FOUND);
    }
}
