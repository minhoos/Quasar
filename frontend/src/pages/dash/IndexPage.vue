<template>
  <q-layout view="lHh Lpr lFf">
    <TheSidebar v-if="$q.screen.gt.sm"></TheSidebar>
    <q-page-container>
      <q-page class="q-pa-md">
        <section class="q-mb-xl">
          <router-view></router-view>
        </section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheSidebar from 'layout/TheSidebar.vue';
</script>

<style lang="scss" scoped></style>
