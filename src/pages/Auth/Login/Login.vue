<template>
  <div class="text-dark flex items-center justify-center" style="min-height: 85vh;">
    <div class="p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">
        Tizimga kirish
      </h2>
      <form>
        <div class="input_password">
          <InputUI
              :label="'Email'"
              :type="'email'"
              id="email"
              :placeholder="'Enter your email'"
          ></InputUI>
        </div>
        <div class="mb-6 input_password">
          <InputUI
              :label="'Parol'"
              :type="'password'"
              id="password"
              :placeholder="'Enter your password'"
          ></InputUI>
        </div>
        <div class="btns">
          <ButtonUI
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

library.add(faLock, faEnvelope)

export default {
  components: {
    ButtonUI,
    InputUI,
    FontAwesomeIcon
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