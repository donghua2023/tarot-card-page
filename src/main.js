import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './util/rem'
import store from './store/index.js'
import router from './router/index.js'
// import "amfe-flexible/index.js";

createApp(App).use(router).use(store).mount('#app')
