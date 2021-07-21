<template>
  <textarea
    :name="name"
    :id="name"
    :rows="rows"
    :required="required"
    :placeholder="placeholder"
    class="w-full"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
<script>
export default {
  props: {
    modelValue: String,
    name: String,
    rows: Number,
    required: Boolean,
    placeholder: String,
  },
}
</script>