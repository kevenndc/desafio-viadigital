<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            \App\Repository\User\Contracts\UserRepository::class,
            \App\Repository\User\Eloquent\EloquentUserRepository::class
        );

        $this->app->bind(
            \App\Repository\Task\Contracts\TaskRepository::class,
            \App\Repository\Task\Eloquent\EloquentTaskRepository::class
        );

        $this->app->bind(
            \App\Repository\TaskList\Contracts\TaskListRepository::class,
            \App\Repository\TaskList\Eloquent\EloquentTaskListRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
