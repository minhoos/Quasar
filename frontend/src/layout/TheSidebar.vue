<template>
  <q-drawer v-model="drawer" show-if-above :width="335" :breakpoint=0
    style="padding:8px;" :style="$q.dark.isActive ? 'border-right:1px solid rgba(38, 38, 38, 1)' : 'border-right:1px solid rgba(219, 219, 219, 1)'">
    <div style="height:92px;" class="q-mt-md">
      <a href=" /" class="row justify-center items-center no-wrap cursor-pointer q-px-sm q-py-md">
        <img class="doc-header__logo-text" src="https://nlobby.com/theme/basic/img/nlobby/logo.png" alt="nlobby Logo">
      </a>
    </div>
    <q-scroll-area style="height: calc(100% - 210px);">
      <q-list padding>
        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/home">
          <!-- <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section> -->
          <svg aria-label="홈" class="" fill="currentColor" role="img" viewBox="0 0 24 24" width="20" height="20">
            <title>홈</title>
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
          <svg aria-label="홈" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" viewBox="0 0 24 24"
            width="20" height="20">
            <title>홈</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>
          <q-item-section>
            고객사관리
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="side-menu" active-class="text-primary" to="/dash/licence">
          <!-- <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section> -->
          <svg aria-label="홈" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" role="img" viewBox="0 0 24 24"
            width="20" height="20">
            <title>홈</title>
            <path
              d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
            </path>
          </svg>
          <q-item-section>
            라이센스 관리
          </q-item-section>
        </q-item>

        <!-- <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item> -->
      </q-list>
    </q-scroll-area>
    <div>
    <!-- <q-separator class="q-my-xs"/> -->
      <q-btn flat class="bottom-menu q-py-sm q-px-md full-width justify-center items-start" align="left">
        <q-img src="@assets/profile.jpg" style="width:24px; height:24px; margin-right:8px;"/> 프로필
      </q-btn>

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
            <q-item clickable v-ripple @click.prevent="toggleDarkMode" class="full-width flex justify-between items-center q-px-md q-py-xs" style="border-radius:8px; font-weight:300; min-height:48px;">
              <span class="flex items-center" style="gap:16px;">
                <q-icon name="mdi-logout" size="2.4rem" />
                로그아웃
              </span>
            </q-item>
            <q-item clickable v-ripple @click.prevent="toggleDarkMode" class="full-width flex justify-between items-center q-px-md q-py-xs" style="border-radius:8px; font-weight:300; min-height:48px;">
              <span class="flex items-center" style="gap:16px;">
                <q-icon :name="darkMode ? 'dark_mode' : 'light_mode'" size="2.4rem" />
                다크모드
              </span>
              <q-toggle v-model="darkMode"/>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-drawer>
</template>

<script setup>
  import { ref, watch, computed } from 'vue'
  import { getCurrentInstance } from 'vue';
  import { useQuasar, LocalStorage, SessionStorage } from 'quasar';
  // import { LocalStorage, SessionStorage } from 'quasar'

  const { proxy } = getCurrentInstance()
  const $q = useQuasar(); // Vue HTML 코드와 헷갈리지 않기 위해 똑같이 통일 바꿔도 상관없음
  
  const drawer = ref(false);
  const darkMode = ref(false);
  const initDarkMode = LocalStorage.getItem('darkMode');
  
  const darkModeIcon = computed(() => {
    return $q.dark.isActive ? 'dark_mode' : 'light_mode'
  }
)
  const init = () => {
    darkMode.value = initDarkMode ? initDarkMode : false
    $q.dark.set(darkMode.value)
  }
  init();

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
  }

  watch((darkMode), (value, oldValue) => {
    $q.dark.toggle();
    $q.localStorage.set('darkMode', $q.dark.isActive)
  })

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
