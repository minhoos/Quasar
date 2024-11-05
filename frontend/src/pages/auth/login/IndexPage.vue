<template>
  <div>
    <div>
      <q-input outlined v-model="text" label="아이디" type="email" hint="이메일을 입력하세요."/>
      <q-input outlined v-model="password" label="패스워드" type="password" hint="비밀번호를 입력하세요."/>
    </div>
    <q-btn label="로그인" flat class="bg-primaty" color="white"/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
