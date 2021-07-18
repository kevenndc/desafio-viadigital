<template>
  <div class="mx-auto max-w-md mt-14">
    <h2 class="text-center text-2xl text-white font-bold mb-6">Register</h2>
    <form @submit.prevent="register" class="p-10 border rounded-sm bg-white">
      <p class="text-red-500 text-base mb-2" v-if="error">
        {{ error }}
      </p>
      <TextInput
        v-model="form.name"
        :required="true"
        label="Complete name"
        name="name"
        class="mb-4"
      />
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
        class="mb-4"
      />
      <PasswordInput
        v-model="form.confirmPassword"
        :required="true"
        label="Confirm password"
        name="confirm-password"
      />
      <PrimaryButton type="submit" text="Register" class="mt-6" />
      <Spinner v-if="isLoading" class="mt-6" />
    </form>
  </div>
</template>
<script>
import UserApi from "../domains/user/services/UserApi"
import TextInput from "../components/form-inputs/TextInput.vue"
import EmailInput from "../components/form-inputs/EmailInput.vue"
import PasswordInput from "../components/form-inputs/PasswordInput.vue"
import PrimaryButton from "../components/buttons/PrimaryButton.vue"
import Spinner from "../components/Spinner.vue"
export default {
  components: {
    TextInput,
    EmailInput,
    PasswordInput,
    PrimaryButton,
    Spinner,
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },

      error: "",

      isLoading: false,
    }
  },

  methods: {
    async register() {
      if (!this.passwordIsConfirmed()) {
        return (this.error = "The passwords do not match.")
      }

      this.error = ""
      this.isLoading = true

      try {
        await UserApi.register(this.form)
        this.$router.push({ name: "board" })
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },

    passwordIsConfirmed() {
      return this.form.password === this.form.confirmPassword
    },
  },
}
</script>