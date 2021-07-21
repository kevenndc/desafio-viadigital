<template>
  <form @submit.prevent="createTask" ref="form">
    <TextArea
      v-model="name"
      :rows="2"
      :required="true"
      placeholder="Insert the title of the task..."
      class="p-2"
      @keydown.enter="createTask"
    />
    <div class="flex mt-2">
      <div class="w-36 mr-2">
        <PrimaryButton type="submit" text="Add task" />
      </div>
      <button type="button" class="p-2" @click="emitCloseForm">
        <XIcon class="w-8" />
      </button>
    </div>
  </form>
</template>
<script>
import TextArea from "./form-inputs/TextArea.vue"
import PrimaryButton from "./buttons/PrimaryButton.vue"
import { XIcon } from "@heroicons/vue/outline"
export default {
  components: {
    TextArea,
    PrimaryButton,
    XIcon,
  },

  props: {
    listId: Number,
    order: Number,
  },

  data() {
    return {
      name: "",
    }
  },

  computed: {
    userId() {
      return this.$store.getters.user.id
    },
  },

  methods: {
    emitCloseForm() {
      this.$emit("close")
    },

    async createTask() {
      const payload = this.createPayload()
      await this.$store.dispatch("createTask", payload)
      this.clearForm()
    },

    createPayload() {
      return {
        name: this.name,
        user_id: this.userId,
        task_list_id: this.listId,
        order: this.order,
      }
    },

    clearForm() {
      this.name = ""
      this.$refs.form.reset()
    },
  },
}
</script>