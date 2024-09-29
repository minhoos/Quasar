<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf" class="bg-white">
      <q-header elevated>
        <q-toolbar>
          <!-- <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" /> -->

          <q-toolbar-title>
            Quasar App 프리텐다드
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped lang="scss">
#app {
  font-family: var(----mainfont-pretendard), 'sans-serif';
}
</style>
