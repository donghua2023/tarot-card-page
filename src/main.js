import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './util/rem'
import store from './store/index.js'
// import "amfe-flexible/index.js";

createApp(App).mount('#app').use(store)
