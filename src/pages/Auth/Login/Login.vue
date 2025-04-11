<template>
  <div class="text-dark flex items-center justify-center" style="min-height: 85vh;">
    <div class="p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">
        Tizimga kirish
      </h2>
      <form>
        <ValidationError v-if="validationErrors" :validationErrors="validationErrors"/>
        <div class="input_password">
          <InputUI
              :label="'Email'"
              :type="'email'"
              id="email"
              v-model="email"
              :placeholder="'Enter your email'"
          ></InputUI>
        </div>
        <div class="mb-6 input_password">
          <InputUI
              :label="'Parol'"
              :type="'password'"
              id="password"
              v-model="password"
              :placeholder="'Enter your password'"
          ></InputUI>
        </div>
        <div class="btns">
          <ButtonUI
              @click="submitHandler"
          >
            Kirish
          </ButtonUI>
        </div>
      </form>
      <p class="mt-4 text-center flex justify-center gap-5" style="margin-top: 10px">
        Akountingiz yo'qmi?
        <router-link to="/register">
          <p class="text-blue-500 hover:underline">Ro'yxatdan o'tish</p>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import InputUI from "../../../components/UI/Input/Input.vue";
import ButtonUI from "../../../components/UI/Button/Button.vue";
import ValidationError from "../../../components/Errors/ValidationError.vue";
import {mapState} from "vuex";

library.add(faLock, faEnvelope)

export default {
  components: {
    ValidationError,
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
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors
    })
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password,
      }
      this.$store
          .dispatch('login', data)
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

.btns {
  margin-top: 20px;
}
</style>