import { createWebHashHistory, createRouter } from 'vue-router'
// createWebHistory, createMemoryHistory

import DashPage from 'pages/dash/IndexPage.vue'
import AuthPage from "pages/auth/IndexPage.vue";

const routes = [
  {
    path: '/auth',
    redirect: '/auth/login',
    component: AuthPage,
    children: [
      {
        path: 'login',
        name: '로그인',
        component: () => import('pages/auth/login/IndexPage.vue'),
      },
      {
        path: 'password',
        name: '비밀번호 변경',
        component: () => import('pages/auth/password/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/dash',
    redirect: '/dash/home',
    component: DashPage,
    children: [
      {
        path: 'home',
        name: '홈',
        component: () => import('pages/dash/home/IndexPage.vue'),
      },
      {
        path: 'client',
        name: '고객사 관리',
        component: () => import('pages/dash/client/IndexPage.vue'),
      },
      {
        path: 'licence',
        name: '라이선스 관리',
        component: () => import('pages/dash/licence/IndexPage.vue'),
        children: [
          {
            path: '',
            name: '게시글',
            component: () => import('pages/dash/licence/ProfilePage.vue'),
          },
          {
            path: 'save',
            name: '저장됨',
            component: () => import('pages/dash/licence/ProfileSaved.vue'),
          },
          {
            path: 'tag',
            name: '태그됨',
            component: () => import('pages/dash/licence/ProfileToggled.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
