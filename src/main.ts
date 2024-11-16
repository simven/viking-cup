import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faX, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';


library.add(faBars, faX, faPhone, faEnvelope, faDownload, faSquareFacebook, faSquareInstagram, faSquareYoutube, faTiktok);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.use(createPinia())
app.use(router)

app.mount('#app')
