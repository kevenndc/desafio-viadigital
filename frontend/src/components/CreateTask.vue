<template>
  <button
    type="button"
    class="flex items-center w-full mt-4 px-2 py-1 hover:bg-gray-300"
    v-if="!isCreatingNewTask"
    @click="isCreatingNewTask = true"
  >
    <PlusSmIcon class="w-4 mr-1" />
    Add new task
  </button>
  <CreateTaskForm
    v-else
    class="mt-4"
    :listId="list.id"
    :order="order"
    @close="hideTaskForm"
    v-click-outside="hideTaskForm"
  />
</template>
<script>
import { PlusSmIcon } from "@heroicons/vue/outline"
import CreateTaskForm from "./CreateTaskForm.vue"
import vClickOutside from "click-outside-vue3"
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  components: {
    CreateTaskForm,
    PlusSmIcon,
  },

  props: {
    list: null,
    order: Number,
  },

  data() {
    return {
      isCreatingNewTask: false,
    }
  },

  methods: {
    hideTaskForm() {
      this.isCreatingNewTask = false
    },
  },
}
</script>