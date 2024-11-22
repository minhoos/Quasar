import { boot } from "quasar/wrappers";
import { Loading } from "quasar";


export default boot(async ({ app }) => {
  Loading.setDefaults({
    delay: 0, // ms
    message: '현재 리스트를 불러오고 있습니다. 잠시만 기다려 주세요.',
    spinnerSize: 40,
  })
})
