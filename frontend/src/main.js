import { createApp } from 'vue';
import App from './App.vue'
import router from './router/index.js';
import createVuetify  from "./plugins/vuetify.ts";


const app = createApp(App);

app.use(router)
app.use(createVuetify)

app.mount('#app');