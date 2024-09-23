<template>
  <div class="row">
    <div>First column</div>
    <div>Second column</div>
    <div>Third column</div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em $primary);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
