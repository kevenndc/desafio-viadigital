<template>
  <div class="flex flex-col">
    <label for="{{ name }}" v-if="label" class="font-semibold text-lg">{{
      label
    }}</label>
    <input
      type="text"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
      class="w-full border border-gray-300 p-3 text-lg rounded-sm"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: "",
    name: String,
    placeholder: String,
    required: Boolean,
    modelValue: String,
  },
}
</script>