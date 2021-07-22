<template>
  <div class="relative">
    <button type="button" @click="toggleMenu">{{ label }}</button>
    <div v-if="menuIsVisible" class="absolute top-full right-0 z-20">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
  },

  data() {
    return {
      menuIsVisible: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menuIsVisible = !this.menuIsVisible
    },
  },
}
</script>