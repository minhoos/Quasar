import { Notify } from 'quasar'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  Notify.registerType('my-notif', {
    icon: 'announcement',
    progress: true,
    color: 'brown',
    textColor: 'white',
    classes: 'glossy'
  })
})
