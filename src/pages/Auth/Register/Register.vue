<template>
  <div class="text-dark flex items-center justify-center" style="min-height: 85vh;">
    <div class="p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">
        Ro'yxatdan o'tish
      </h2>
      <form>
        <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>
        <div class="input_password">
          <InputUI
              :label="'Name'"
              v-model="username"
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
        <Button
            :type="'submit'"
            @click="submitHandler"
        >
          Ro'yxatdan o'tish
        </Button>
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
import ValidationError from "../../../components/Errors/ValidationError.vue";
import InputUI from "../../../components/UI/Input/Input.vue";
import Button from "../../../components/UI/Button/Button.vue";
import {mapState} from "vuex";

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  components: {
    Button,
    InputUI,
    ValidationError,
  },
  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors
    })
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store
          .dispatch('register', data)
          .then(user => {
            console.log('USER', user)
            this.$router.push({name: 'Home'})
          })
          .catch(err => console.log('ERROR', err))
    },
  },
}
</script>

<style scoped>
.input_password {
  margin-bottom: 10px;
}
</style>
