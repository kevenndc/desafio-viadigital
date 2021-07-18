<template>
  <div class="mx-auto max-w-md mt-14">
    <h2 class="text-center text-white text-2xl font-bold mb-6">Login</h2>
    <form @submit.prevent="login" class="p-10 border rounded-sm bg-white">
      <p class="text-red-500 text-base mb-2" v-if="error">
        {{ error }}
      </p>
      <EmailInput
        v-model="form.email"
        :required="true"
        label="Email"
        name="email"
        class="mb-4"
      />
      <PasswordInput
        v-model="form.password"
        :required="true"
        label="Password"
        name="password"
      />
      <PrimaryButton type="submit" text="Login" class="mt-6" />
      <Spinner v-if="isLoading" class="mt-6" />
    </form>
  </div>
</template>
<script>
import UserApi from "../domains/user/services/UserApi"
import EmailInput from "../components/form-inputs/EmailInput.vue"
import PasswordInput from "../components/form-inputs/PasswordInput.vue"
import PrimaryButton from "../components/buttons/PrimaryButton.vue"
import Spinner from "../components/Spinner.vue"
export default {
  components: {
    EmailInput,
    PasswordInput,
    PrimaryButton,
    Spinner,
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      error: "",

      isLoading: false,
    }
  },

  methods: {
    async login() {
      this.error = ""
      this.isLoading = true

      try {
        await UserApi.login(this.form)
        this.$router.push({ name: "board" })
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>