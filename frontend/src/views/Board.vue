<template>
  <div class="flex items-start">
    <div
      v-for="list in taskLists"
      :key="list.id"
      class="w-72 p-3 mr-3 bg-gray-200 relative last:mr-0"
    >
      <button
        type="button"
        class="w-4 absolute right-3"
        @click="deleteTaskList(list.id)"
      >
        <XIcon />
      </button>
      <h2 class="font-semibold py-2">{{ list.name }}</h2>
      <draggable :list="list.tasks" group="lists" itemKey="name">
        <template #item="{ element, index }">
          <div class="p-3 bg-white">{{ element.name }} {{ index }}</div>
        </template>
      </draggable>
    </div>

    <AddItemButton
      text="Add list"
      class="bg-blue-500 text-white font-semibold p-3 w-72 hover:bg-blue-400"
      @click="isCreatingNewList = true"
      v-if="!isCreatingNewList"
    />

    <TaskListForm
      v-if="isCreatingNewList"
      class="w-72"
      @close="isCreatingNewList = false"
    />
  </div>
</template>
<script>
//import TaskList from "../components/TaskList.vue"
import draggable from "vuedraggable"
import TaskListForm from "../components/TaskListForm.vue"
import AddItemButton from "../components/buttons/AddItemButton.vue"
import { XIcon } from "@heroicons/vue/outline"
export default {
  async mounted() {
    await this.$store.dispatch("fetchUserData")
    await this.$store.dispatch("fetchTaskLists")
  },

  components: {
    draggable,
    TaskListForm,
    AddItemButton,
    XIcon,
    //TaskList,
  },

  data() {
    return {
      isCreatingNewList: false,
    }
  },

  computed: {
    taskLists() {
      return this.$store.getters.taskLists
    },
  },

  methods: {
    log(event) {
      console.log(event)
    },

    async deleteTaskList(id) {
      await this.$store.dispatch('deleteTaskList', id)
    }
  },
}
</script>