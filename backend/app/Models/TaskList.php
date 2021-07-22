<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TaskList extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($instance) {
            $instance->tasks->each->delete();
        });

        static::restoring(function ($instance) {
            $instance->tasks->each->restore();
        });
    }

    public function tasks()
    {
        return $this->hasMany(Task::class)->orderBy('order', 'asc');
    }
}
