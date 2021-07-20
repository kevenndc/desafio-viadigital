<template>
  <button
    type="button"
    class="flex items-center transition-colors duration-200"
  >
    <PlusSmIcon class="w-4" />
    {{ text }}
  </button>
</template>
<script>
import { PlusSmIcon } from "@heroicons/vue/outline"
export default {
  components: {
    PlusSmIcon,
  },

  props: {
    text: String,
  },
}
</script>