<template>
  <p v-if="!isEditing" @click="isEditing = true" class="h-28">
    {{ modelValue ? modelValue : "Add a description to the task..." }}
  </p>
  <textarea
    v-else
    type="text"
    v-model="modelValue"
    class="w-full p-2 border-2 border-blue-500"
    v-click-outside="finishEdition"
    :rows="rows"
    :placeholder="placeholder"
    @keyup.enter="finishEdition"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
import vClickOutside from "click-outside-vue3"
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    modelValue: String,
    rows: Number,
    placeholder: String
  },

  data() {
    return {
      isEditing: false,
    }
  },

  methods: {
    finishEdition(event) {
      this.$emit("update:text", this.modelValue)
      this.isEditing = false
    },
  },
}
</script>