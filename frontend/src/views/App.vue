<template>
  <div class="flex flex-col min-h-screen bg-blue-600">
    <div class="flex justify-between bg-blue-700 py-3 px-2">
      <h1 class="text-white text-xl font-bold">Krello</h1>
      <nav class="flex">
        <router-link
          :to="{ name: 'welcome' }"
          class="px-2 font-semibold text-blue-200 hover:text-white"
          >Home</router-link
        >

        <router-link
          :to="{ name: 'login' }"
          v-if="!userIsLoggedIn"
          class="px-2 font-semibold text-blue-200 hover:text-white"
          >Login</router-link
        >

        <router-link
          :to="{ name: 'register' }"
          v-if="!userIsLoggedIn"
          class="px-2 font-semibold text-blue-200 hover:text-white"
          >Register</router-link
        >

        <router-link
          :to="{ name: 'board' }"
          v-if="userIsLoggedIn"
          class="px-2 font-semibold text-blue-200 hover:text-white"
          >Board</router-link
        >

        <DropdownMenu
          :label="`Olá, ${userName}`"
          v-if="userIsLoggedIn"
          class="px-2 font-semibold text-blue-200 hover:text-white"
        >
          <div class="bg-white p-3 border rounded">
            <button type="button" class="text-gray-600" @click="logout">
              Logout
            </button>
          </div>
        </DropdownMenu>
      </nav>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import DropdownMenu from "../components/DropdownMenu.vue"
export default {
  components: {
    DropdownMenu,
  },

  computed: {
    userIsLoggedIn() {
      return this.$store.getters.user
    },

    userName() {
      return this.$store.getters.user.name
    },
  },

  methods: {
    async logout() {
      await this.$store.dispatch("logoutUser")
      this.$router.push({ name: "login" })
    },
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
