<template>
  <div class="w-72 mr-3 overflow-y-auto h-full flex-shrink-0 last:mr-0">
    <div class="bg-gray-200 relative py-5 px-3 ">
      <button
        type="button"
        class="w-4 absolute top-1 right-1"
        @click="deleteTaskList(taskList.id)"
      >
        <XIcon />
      </button>
      <EditableHeader
        v-model="taskList.name"
        class="font-semibold py-2"
        @update:text="updateTaskList"
      />
      <draggable v-model="tasks" group="lists" item-key="id">
        <template #item="{ element }">
          <div class="p-3 bg-white mt-2">{{ element.name }}</div>
        </template>
      </draggable>
      <CreateTask :list="taskList" :order="taskList.tasks.length" />
    </div>
  </div>
</template>
<script>
import TaskList from "./../domains/task-list/models/TaskList"
import draggable from "vuedraggable"
import EditableHeader from "./EditableHeader.vue"
import { XIcon } from "@heroicons/vue/outline"
import CreateTask from "./CreateTask.vue"
export default {
  components: {
    draggable,
    EditableHeader,
    XIcon,
    CreateTask,
  },

  props: {
    taskList: TaskList,
  },

  computed: {
    tasks: {
      get() {
        return this.$store.getters.getTaskListById(this.taskList.id)
      },

      async set(tasks) {
        const updatedTasks = tasks.map((task, index) => {
          task.order = index
          task.taskListId = this.taskList.id
          return task
        })

        this.$store.dispatch("updateTasks", {
          id: this.taskList.id,
          tasks: updatedTasks,
        })
      },
    },
  },

  methods: {
    async deleteTaskList() {
      await this.$store.dispatch("deleteTaskList", this.taskList.id)
    },

    async updateTaskList() {
      await this.$store.dispatch("updateTaskList", this.taskList)
    },
  },
}
</script>