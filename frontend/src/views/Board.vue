<template>
  <div class="relative h-full flex-grow">
    <div
      class="
        flex
        items-start
        bg-blue-600
        overflow-x-scroll
        overflow-y-hidden
        absolute
        top-0
        right-0
        bottom-0
        left-0
        p-2
        board
      "
    >
      <TaskList v-for="list in taskLists" :taskList="list" :key="list.id" />

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
  </div>
</template>
<script>
//import TaskList from "../components/TaskList.vue"
import draggable from "vuedraggable"
import TaskListForm from "../components/TaskListForm.vue"
import CreateTask from "../components/CreateTask.vue"
import AddItemButton from "../components/buttons/AddItemButton.vue"
import EditableHeader from "../components/EditableHeader.vue"
import { XIcon } from "@heroicons/vue/outline"
import vClickOutside from "click-outside-vue3"
import TaskList from "../components/TaskList.vue"
export default {
  async mounted() {
    await this.$store.dispatch("fetchUserData")
    await this.$store.dispatch("fetchTaskLists")
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },

  components: {
    draggable,
    TaskListForm,
    CreateTask,
    AddItemButton,
    XIcon,
    EditableHeader,
    TaskList,
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

    hideTaskForm() {
      this.isCreatingNewTask = false
    },

    moveTask(event, id) {
      if (event.added) {
        this.$store
      }
    },
  },
}
</script>