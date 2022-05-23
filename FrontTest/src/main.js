import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "vue-axios";

const app = createApp(App)
app.use(axios, router);

app.mount('#app')
