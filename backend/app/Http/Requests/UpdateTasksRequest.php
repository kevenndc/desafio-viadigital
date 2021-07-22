<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTasksRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            '*.id' => 'integer|exists:tasks,id',
            '*.user_id' => 'integer|exists:users,id',
            '*.task_list_id' => 'integer|exists:task_lists,id',
            '*.name' => 'string',
            '*.description' => 'string|nullable',
            '*.order' => 'integer',
        ];
    }
}
