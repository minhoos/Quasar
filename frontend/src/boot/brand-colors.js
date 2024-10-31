import { setCssVar } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  setCssVar('primary', '#181818')
})
