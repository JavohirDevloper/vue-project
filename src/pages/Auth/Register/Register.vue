<template>
  <div class="text-dark flex items-center justify-center" style="min-height: 85vh;">
    <div class="p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">
        Ro'yxatdan o'tish
      </h2>
      <form @submit.prevent="handleLogin">
        <div class="input_password">
          <InputUI
              :label="'Name'"
              v-model="email"
              type="name"
              id="name"
              :placeholder="'Enter your full name'"
          />
        </div>
        <div class="input_password">
          <InputUI
              :label="'Email'"
              v-model="email"
              type="email"
              id="email"
              :placeholder="'Enter your email'"
          />
        </div>
        <div class="mb-6 input_password">
          <InputUI
              :label="'Password'"
              v-model="password"
              :type="'password'"
              id="password"
              :placeholder="'Enter your password'"
          />
        </div>
        <ButtonUI
            :type="'submit'"
            :disabled="isLoading"
            @click="submitHandler"
        >
          Ro'yxatdan o'tish
        </ButtonUI>
      </form>
      <p class="mt-4 text-center flex justify-between" style="margin-top: 10px">
        Avval ro'yxatdan o'tganmisiz?
        <router-link to="/login">
          <p class="text-blue-500 hover:underline">Kirish</p>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import InputUI from "../../../components/UI/Input/Input.vue";
import ButtonUI from "../../../components/UI/Button/Button.vue";
import AuthService from "../../../services/auth.ts"; // ✅ to'g'ri import

export default {
  components: {
    ButtonUI,
    InputUI,
    FontAwesomeIcon
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: "javohirdevoq",
        email: "sdnsonsidn@gmail.com",
        password: "123456789",
      }
      this.$store.dispatch("register", data);
    }
  },
}
</script>

<style scoped>
.input_password {
  margin-bottom: 10px;
}
</style>
