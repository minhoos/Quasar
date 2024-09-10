<template>
  <main>
    <h1>Playground</h1>
    <input v-model="msg" />
    <p>{{ msg }}</p>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  const msg = ref('');
</script>

<style scoped>

</style>
