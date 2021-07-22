<template>
  <form class="p-2 bg-gray-200" @submit.prevent="createList">
    <TextInput
      v-model="form.name"
      placeholder="Insert the list name..."
      :required="true"
      class="border-2 border-blue-600"
    />
    <div class="flex mt-2">
      <div class="w-36 mr-2">
        <PrimaryButton type="submit" text="Add" />
      </div>
      <button type="button" class="p-2" @click="emitCloseForm">
        <XIcon class="w-8" />
      </button>
    </div>
  </form>
</template>
<script>
import TextInput from "../form-inputs/TextInput.vue"
import PrimaryButton from "../buttons/PrimaryButton.vue"
import { XIcon } from "@heroicons/vue/outline"
export default {
  components: {
    TextInput,
    PrimaryButton,
    XIcon,
  },

  data() {
    return {
      form: {
        name: "",
      },
    }
  },

  methods: {
    async createList(event) {
      await this.$store.dispatch("createTaskList", this.form)
      this.clearForm(event)
    },

    emitCloseForm() {
      this.$emit("close")
    },

    clearForm(event) {
      event.target.reset()
      this.form.name = ""
    },
  },
}
</script>