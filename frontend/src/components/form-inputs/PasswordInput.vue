<template>
  <label class="flex flex-col font-semibold text-lg" for="{{ name }}" v-if="label"
    >{{ label }}
    <div class="relative">
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        minlength="8"
        class="w-full border border-gray-300 p-3 text-lg rounded-sm"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        type="button"
        tabindex="-1"
        title="Mostrar ou esconder senha"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-white"
        @click="togglePasswordVisibility"
      >
        <EyeOffIcon class="w-5" v-if="passwordIsVisible" />
        <EyeIcon class="w-5" v-else />
      </button>
    </div>
  </label>
</template>
<script>
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/outline"
export default {
  components: {
    EyeIcon,
    EyeOffIcon,
  },

  props: {
    label: "",
    name: String,
    placeholder: String,
    required: Boolean,
    modelValue: String,
  },

  data() {
    return {
      type: "password",
      passwordIsVisible: false,
    }
  },

  methods: {
    togglePasswordVisibility() {
      this.passwordIsVisible = !this.passwordIsVisible

      if (this.passwordIsVisible) {
        return (this.type = "text")
      }

      this.type = "password"
    },
  },
}
</script>