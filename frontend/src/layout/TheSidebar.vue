<template>
  <q-drawer v-model="drawer" show-if-above :width="335" :breakpoint=0
    style="padding:8px;" :style="$q.dark.isActive ? 'border-right:1px solid rgba(38, 38, 38, 1); background:#121212' : 'border-right:1px solid rgba(219, 219, 219, 1)'">
    <div style="height:92px;" class="q-mb-md">
      <a href="/" class="row justify-center items-center no-wrap cursor-pointer q-px-sm q-py-md">
        <q-img src="@assets/logo.png" width="160px"></q-img>
      </a>
    </div>
    <q-scroll-area style="height: calc(100% - 162px);">
      <q-list padding>
        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/home">
          <!-- <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section> -->
          <svg aria-label="대시보드" class="" fill="currentColor" role="img" viewBox="0 0 24 24" width="20" height="20">
            <title>대시보드</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>
          <q-item-section>
            대시보드
          </q-item-section>
        </q-item>

          <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/client">
            <!-- <q-item-section avatar>
            <q-icon name="star" />
            </q-item-section> -->
          <svg aria-label="고객사 관리" fill="currentColor" role="img" viewBox="0 0 24 24"
            width="20" height="20">
            <title>고객사 관리</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>
          <q-item-section>
            고객사 관리
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/license">
          <!-- <q-icon name="svguse:@icons/nav-license.svg" size="2.4rem"/> -->
          <!-- <NavLicense/> -->
          <q-item-section>
            라이센스 관리
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/service">

          <svg aria-label="서비스 운영" fill="currentColor" role="img" viewBox="0 0 24 24"
            width="20" height="20">
            <title>환경설정</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>
          <q-item-section>
            서비스 운영
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/host-users">
          <svg aria-label="사용자 관리" fill="currentColor" role="img" viewBox="0 0 24 24"
            width="20" height="20">
            <title>사용자 관리</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>

          <q-item-section>
            사용자 관리
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    <div>
    <!-- <q-separator class="q-my-xs"/> -->
      <!-- <q-btn flat class="bottom-menu q-py-sm q-px-md full-width justify-center items-start" align="left">
        <q-img src="@assets/profile.jpg" style="border-radius:16px; width:24px; height:24px; margin-right:8px;"/> 프로필
      </q-btn> -->
      <q-btn flat class="bottom-menu q-py-sm q-px-md full-width" align="left">
        <svg aria-label="설정" class="" height="24" role="img" viewBox="0 0 24 24" width="24">
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="3" x2="21" y1="4" y2="4"></line>
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="3" x2="21" y1="12" y2="12"></line>
          <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            x1="3" x2="21" y1="20" y2="20"></line>
        </svg>
        <span class="q-ml-sm">더 보기</span>
        <q-menu fit anchor="top end" self="bottom end" class="q-pa-sm shadow-all" style="border-radius:8px;">
          <q-list>
            <h4 class="text-h6 q-mx-md q-my-lg">이민호</h4>
            <q-separator class="q-my-sm"/>
            <!-- <q-item clickable v-ripple @click.prevent="toggleDarkMode" class="full-width flex justify-between items-center q-px-md q-py-xs" style="border-radius:8px; font-weight:300; min-height:48px;">
              <span class="flex items-center" style="gap:16px;">
                <q-icon :name="darkMode ? 'dark_mode' : 'light_mode'" size="2.4rem" />
                다크모드
              </span>
              <q-toggle v-model="darkMode"/>
            </q-item> -->

            <q-item clickable v-ripple class="full-width flex justify-between items-center q-px-md q-py-xs" style="border-radius:8px; font-weight:300; min-height:48px;">
              <span class="flex items-center" style="gap:16px;">
                <q-icon name="mdi-logout" size="2.4rem" />
                로그아웃
              </span>
            </q-item>
            <q-item class="full-width flex justify-between items-center q-px-md q-py-xs" style="border-radius:8px; font-weight:300; min-height:48px;">
              <q-select
                v-model="lang"
                :options="langOptions"
                label="언어선택"
                emit-value
              >
              <!-- {{ lang }} -->
              </q-select>
              <!-- <span class="flex items-center" style="gap:16px;">
                <q-icon name="mdi-logout" size="2.4rem" />
                언어선택 {{ langOptions }}
              </span> -->
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-drawer>
</template>

<!-- 반응형 데이터가 아닌 일반 데이터를 가져와야 할 경우 사용 -->
<script>
  import languages from 'quasar/lang/index.json'
  
  const appLanguages = languages.filter(lang => ['ko-KR', 'en-US'].includes(lang.isoName))

  const langOptions = appLanguages.map(lang => ({
    label: lang.nativeName,
    value : lang.isoName
  }))

</script>

<script setup>
  import { ref, watch, computed, watchEffect } from 'vue'
  // import { getCurrentInstance } from 'vue';
  import { useQuasar, LocalStorage, SessionStorage } from 'quasar';
  import NavLicense from '/icons/custom/NavLicense.svg';
  
  // import { LocalStorage, SessionStorage } from 'quasar'

  // const { proxy } = getCurrentInstance()
  const $q = useQuasar(); // Vue HTML 코드와 헷갈리지 않기 위해 똑같이 통일 바꿔도 상관없음
  const drawer = ref(false);

  const lang = ref($q.lang.isoName);

  watchEffect(
    (lang, val => {
      import(`../../node_modules/quasar/lang/${lang.value}`).then(lang => {
        $q.lang.set(lang.default)
        $q.localStorage.set('lang', lang.default.isoName)
      })
    }),
  )

// 다크모드
// const darkMode = ref(false);
// const initDarkMode = LocalStorage.getItem('darkMode');

//   const darkModeIcon = computed(() => {
//     return $q.dark.isActive ? 'dark_mode' : 'light_mode'
//   }
// )

  // const init = () => {
  //   darkMode.value = initDarkMode ? initDarkMode : false
  //   $q.dark.set(darkMode.value)
  // }
  // init();

  // const toggleDarkMode = () => {
  //   darkMode.value = !darkMode.value
  // }

  // watch((darkMode), (value, oldValue) => {
  //   $q.dark.toggle();
  //   $q.localStorage.set('darkMode', $q.dark.isActive)
  // })

</script>

<style lang="scss" scoped>
  .side-menu{
    margin:4px 0;
    border-radius:8px;
    gap:16px;
    align-items: center;
    font-size:1.6rem;
    font-weight:300;
  }
  .bottom-menu{
    font-size:1.6rem;
    border-radius:8px;
    font-weight:300;
    min-height:48px;
  }
</style>
