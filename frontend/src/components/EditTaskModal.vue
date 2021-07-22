<template>
  <div
    class="
      flex
      justify-center
      absolute
      top-0
      right-0
      bottom-0
      left-0
      items-center
      bg-gray-900 bg-opacity-70
      antialiased
      z-10
    "
    v-if="task"
  >
    <div
      class="
        flex flex-col
        w-11/12
        sm:w-5/6
        lg:w-1/2
        max-w-2xl
        mx-auto
        rounded-lg
        border border-gray-300
        shadow-xl
      "
    >
      <div
        class="
          flex flex-row
          justify-between
          items-center
          p-6
          bg-white
          border-b border-gray-200
          rounded-tl-lg rounded-tr-lg
        "
      >
        <EditableHeader
          v-model="task.name"
          class="font-semibold py-2"
          @update:text="updateTask"
        />
        <button type="button" class="hover:bg-gray-100 p-1 rounded-full" @click="closeModal">
          <XIcon class="w-6" />
        </button>
      </div>
      <div class="flex flex-col px-6 py-5 bg-gray-50">
        <EditableTextArea
          v-model="task.description"
          :rows="4"
          placeholder="Add a description to the task..."
          @update:text="updateTask"
        />
      </div>
      <div
        class="
          flex flex-row
          items-center
          justify-end
          p-5
          bg-white
          border-t border-gray-200
          rounded-bl-lg rounded-br-lg
        "
      >
        <button
          type="button"
          class="
            text-red-500
            font-bold
            py-2
            px-3
            rounded-md
            hover:text-white
            hover:bg-red-500
          "
          @click="deleteTask"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { XIcon } from "@heroicons/vue/outline"
import EditableHeader from "./form-inputs/EditableHeader.vue"
import EditableTextArea from "./form-inputs/EditableTextArea.vue"
export default {
  components: {
    XIcon,
    EditableHeader,
    EditableTextArea,
  },

  computed: {
    task() {
      return this.$store.getters.editingTask
    },
  },

  methods: {
    closeModal() {
      this.$store.commit("setEditingTask", null)
    },

    async updateTask() {
      await this.$store.dispatch("updateTask", this.task)
    },

    async deleteTask() {
      await this.$store.dispatch("deleteTask", this.task)
      this.$store.commit("setEditingTask", null)
    },
  },
}
</script>