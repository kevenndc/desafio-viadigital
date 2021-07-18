<template>
  <button
    :type="type"
    class="
      w-full
      p-3
      text-white text-lg
      font-semibold
      bg-blue-500
      rounded-sm
      transition-colors
      duration-300
      hover:bg-blue-600
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    type: String,
    text: String,
  },
}
</script>