<template>
  <nav class="container px-5">
    <div class="flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-2">
        <img :src="logo" alt="logo" class="w-14">
      </router-link>
      <div class="flex items-center gap-6">
        <router-link
            to="/"
            class="flex items-center gap-2 hover:text-blue-300 transition-colors"
            active-class="text-blue-400"
        >
          <span>Home</span>
        </router-link>
        <router-link
            to="/login"
            class="flex items-center gap-2 hover:text-blue-300 transition-colors"
            active-class="text-blue-400"
        >
          <span>Login</span>
        </router-link>
        <router-link
            to="/register"
            class="flex items-center gap-2 hover:text-blue-300 transition-colors"
            active-class="text-blue-400"
        >
          <span>Register</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../../assets/images/vue.svg";

export default {
  data() {
    return {
      logo,
    }
  },
}
</script>

<style scoped>
.router-link-active {
  color: #60a5fa;
}
</style>