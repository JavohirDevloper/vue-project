<template>
  <nav class="container px-5">
    <div class="flex justify-between items-center">
      <router-link to="/" class="flex items-center gap-2">
        <img :src="logo" alt="logo" class="w-14" @click="toHomeHandler">
      </router-link>
      <div class="flex items-center gap-6">
        <router-link
            :to="{name: 'Home'}"
            class="flex items-center gap-2 hover:text-blue-300 transition-colors"
            active-class="text-blue-400"
        >
          <span>Home</span>
        </router-link>
        <router-link
            :to="{name: 'Login'}"
            class="flex items-center gap-2 hover:text-blue-300 transition-colors"
            active-class="text-blue-400"
        >
          <span>Login</span>
        </router-link>
        <router-link
            :to="{name: 'Register'}"
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
  methods: {
    toHomeHandler() {
      this.$router.push({name: "Home"});
    }
  }
}
</script>

<style scoped>
.router-link-active {
  color: #60a5fa;
}
</style>