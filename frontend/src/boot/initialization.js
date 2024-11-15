import { boot } from 'quasar/wrappers'
import { LocalStorage, SessionStorage, Dark } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // 1) 다크모드 설정
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode)
})
