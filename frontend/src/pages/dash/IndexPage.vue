<template>
  <q-layout view="lHh Lpr lFf">
    <TheSidebar></TheSidebar>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheSidebar from 'layout/TheSidebar.vue';
</script>

<style lang="scss" scoped></style>