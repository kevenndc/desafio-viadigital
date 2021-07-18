<template>
  <div class="flex justify-between bg-blue-700 py-3 px-1">
    <h1 class="text-white text-xl font-bold">Trello Clone</h1>
    <nav class="">
      <router-link :to="{ name: 'login' }" v-if="!userIsLoggedIn">Login</router-link>
      <router-link :to="{ name: 'register' }" v-if="!userIsLoggedIn">Register</router-link>
      <router-link :to="{ name: 'board' }" v-if="userIsLoggedIn">Board</router-link>
    </nav>
  </div>

  <router-view></router-view>
  
</template>

<script>
export default {
  computed: {
    userIsLoggedIn() {
      return this.$store.getters.user;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
