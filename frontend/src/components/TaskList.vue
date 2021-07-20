<template>
  <div class="rounded-md bg-gray-300 p-3">
    <h4 class="text-gray-900 font-semibold py-1">{{ taskList.name }}</h4>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import TaskList from "./../domains/task-list/models/TaskList"
export default {
  props: {
    taskList: TaskList,
  },
}
</script>