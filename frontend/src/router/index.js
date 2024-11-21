import { createWebHashHistory, createRouter } from 'vue-router'
// createWebHistory, createMemoryHistory

import DashPage from 'pages/dash/LayoutPage.vue'
import AuthPage from "pages/auth/LayoutPage.vue";
import { LoadingBar } from "quasar";

const routes = [
  {
    path: '/auth',
    redirect: '/auth/login',
    component: AuthPage,
    children: [
      {
        path: 'login',
        name: '로그인',
        component: () => import('pages/auth/LoginPage.vue'),
      },
      {
        path: 'lost-password',
        name: '비밀번호 변경',
        component: () => import('pages/auth/LostPasswordPage.vue'),
      },
      {
        path: 'reset-password',
        name: '비밀번호 재설정',
        component: () => import('pages/auth/ResetPasswordPage.vue'),
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
        path: 'service',
        name: '서비스 운영',
        component: () => import('pages/dash/service/IndexPage.vue'),
      },
      {
        path: 'license',
        name: '라이선스 관리',
        component: () => import('pages/dash/license/IndexPage.vue'),
        children: [
          {
            path: '',
            name: '게시글',
            component: () => import('pages/dash/license/ProfilePage.vue'),
          },
          {
            path: 'save',
            name: '저장됨',
            component: () => import('pages/dash/license/ProfileSaved.vue'),
          },
          {
            path: 'tag',
            name: '태그됨',
            component: () => import('pages/dash/license/ProfileToggled.vue'),
          },
        ],
      },
      {
        path: 'host-users',
        name: '사용자 관리',
        component: () => import('pages/dash/host-users/IndexPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 라우터 시작
router.beforeEach(() => {
  LoadingBar.start();
})

// 라우터 종료
router.beforeEach(() => {
  LoadingBar.stop();
})

export default router
