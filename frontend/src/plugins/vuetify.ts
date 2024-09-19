import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { ko, en } from 'vuetify/locale'

const vuetify = createVuetify({
  locale: {
    locale: 'ko',
    fallback: 'en',
    messages: { ko, en },
  },
})

export default vuetify