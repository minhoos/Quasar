import { createApp } from 'vue'
import router from './router/index.js'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ko-KR'
import App from './App.vue'
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
}).use(router)
app.mount('#app')
