<template>
  <q-drawer v-model="drawer" show-if-above :width="335" :breakpoint=0
    style="border-right: 1px solid #ddd; padding:8px;">
    <div style="padding:8px 16px; height:92px; display:flex; justify-content: center; align-items: center;">
      <a href=" /" class="row justify-center items-center no-wrap cursor-pointer" style="padding:16px 0;">
        <img class="doc-header__logo-text" src="https://nlobby.com/theme/basic/img/nlobby/logo.png" alt="nlobby Logo">
      </a>
    </div>
    <q-scroll-area style="height: calc(100% - 160px);">
      <q-list padding>
        <q-item clickable v-ripple class="side-menu">
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
            홈
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="side-menu">
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
            고객사현황
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="side-menu">
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
            라이센스현황
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
      <q-list>
        <q-item clickable v-ripple style="gap:16px; align-items: center;">
          <svg aria-label="설정" class="" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>설정</title>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              x1="3" x2="21" y1="4" y2="4"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              x1="3" x2="21" y1="12" y2="12"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              x1="3" x2="21" y1="20" y2="20"></line>
          </svg>
          <q-item-section>
            더 보기
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold">Razvan Stoenescu</div>
        <div>@rstoenescu</div>
      </div>
    </q-img> -->
  </q-drawer>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(false);
</script>

<style lang="scss" scoped>
  .side-menu{
    border-radius:8px;
    gap:16px;
    align-items: center;
    font-size:1.5rem;
  }
</style>