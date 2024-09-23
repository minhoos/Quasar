import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ko-KR'

// import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})
app.mount('#app')
