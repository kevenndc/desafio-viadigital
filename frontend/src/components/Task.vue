<template>
  <div class="p-2 shadow-sm">
    <h5>task.name</h5>
  </div>
</template>
<script>
import Task from "../domains/task/models/Task"
export default {
  props: {
    task: Task,
  },
}
</script>