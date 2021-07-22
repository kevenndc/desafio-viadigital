<template>
  <h2 v-if="!isEditing" @click="isEditing = true" class="w-full">{{ modelValue }}</h2>
  <input
    v-else
    type="text"
    v-model="modelValue"
    class="w-full border-2 border-blue-500"
    v-click-outside="finishEdition"
    @keyup.enter="finishEdition"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import vClickOutside from "click-outside-vue3"
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    modelValue: String,
  },

  data() {
    return {
      isEditing: false,
    }
  },

  methods: {
    finishEdition(event) {
      this.$emit('update:text', this.modelValue)
      this.isEditing = false
    },
  },
}
</script>