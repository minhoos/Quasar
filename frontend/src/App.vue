<template>
  <header>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/prime">PrimeVue</RouterLink>
      </li>
      <li>
        <RouterLink to="/quasar">Quasar</RouterLink>
      </li>
      <li>
        <RouterLink to="/vuetify">Vuetify</RouterLink>
      </li>
    </ul>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script setup>

</script>

<style scoped>

</style>
