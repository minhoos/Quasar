import { createApp } from 'vue';
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config';
// import createVuetify  from "./plugins/vuetify.ts";

import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(router)
// app.use(createVuetify)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app');