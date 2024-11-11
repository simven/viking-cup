import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faX, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


library.add(faBars, faX, faPhone, faEnvelope, faSquareFacebook, faSquareInstagram, faSquareYoutube, faTiktok);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
