import { createWebHashHistory, createRouter } from 'vue-router'
// createWebHistory, createMemoryHistory

import DashPage from '@/pages/dash/IndexPage.vue'
import LoginPage from "@/pages/login/IndexPage.vue";

const routes = [
  { path: "/login", name: "login", component: LoginPage },
  {
    path: "/dash",
    redirect: "/dash/home",
    component: DashPage,
    children: [
      {
        path: "home",
        name: "홈",
        component: () => import("@/pages/dash/home/IndexPage.vue"),
      },
      {
        path: "client",
        name: "고객사 관리",
        component: () => import("@/pages/dash/client/IndexPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router