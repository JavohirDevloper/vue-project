import './assets/styles/index.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUser, faHome} from '@fortawesome/free-solid-svg-icons'
import store from "./store/index.ts";

library.add(faUser, faHome)

const app = createApp(App)
app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
