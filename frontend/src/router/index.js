import { createWebHashHistory, createRouter } from 'vue-router'
// createWebHistory, createMemoryHistory

import PrimeView from '../pages/PrimeView.vue'
import QuasarView from '../pages/QuasarView.vue'
import VuetifyView from '../pages/VuetifyView.vue'
import TheHome from '../pages/Index.vue'

const routes = [
  { path: '/', name:'home', component: TheHome},
  { path: '/prime', name:'prime', component: PrimeView },
  { path: '/quasar', name:'quasar', component: QuasarView },
  { path: '/vuetify', name:'vuetify', component: VuetifyView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router