import { boot } from "quasar/wrappers";
import { LoadingBar } from "quasar";

export default boot(async (app) => {
  LoadingBar.setDefaults({
    color: 'primary',
    size: '4px'
  })
})
