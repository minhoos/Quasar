import { boot } from 'quasar/wrappers'
import { LocalStorage, Quasar } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  const langVal = LocalStorage.getItem('lang')
  import(`../../node_modules/quasar/lang/${langVal}`).then(lang => {
    Quasar.lang.set(langVal)
    // localStorage.set('lang', langVal)
  })
})
