<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskListRequest;
use App\Repository\TaskList\Contracts\TaskListRepository;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Response;

class TaskListController extends Controller
{
    private $repository;
    private const LIST_NOT_FOUND = "List not found.";

    public function __construct(TaskListRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        return response()->json(
            $this->repository->allWithTasks(),
            Response::HTTP_OK
        );
    }

    public function store(TaskListRequest $request)
    {
        $taskList = $this->repository->create($request->validated());
        return response()->json($taskList, Response::HTTP_CREATED);
    }

    public function show(int $id)
    {
        try {
            $taskList = $this->repository->find($id);
            return response()->json($taskList, Response::HTTP_OK);
        } catch (ModelNotFoundException $exception) {
            return $this->sendListNotFoundResponse();
        }
    }

    public function update(TaskListRequest $request, int $id)
    {
        $payload = $request->validated();
        try {
            $taskList = $this->repository->update($payload, $id);
            return response()->json($taskList, Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $exception) {
            return $this->sendListNotFoundResponse();
        }
    }

    public function destroy(int $id)
    {
        try {
            $taskList = $this->repository->delete($id);
            return response()->json($taskList, Response::HTTP_ACCEPTED);
        } catch (ModelNotFoundException $exception) {
            return $this->sendListNotFoundResponse();
        }
    }

    private function sendListNotFoundResponse()
    {
        return response()->json([
            'message' => self::LIST_NOT_FOUND
        ], Response::HTTP_NOT_FOUND);
    }
}
