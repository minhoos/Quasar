<template>
  <q-card flat :style="{minWidth:'400px'}">
    <q-card-section>
      <h4 class="text-h4">로그인</h4>
      <p class="q-mt-sm">이메일과 비밀번호를 입력하세요.</p>
    </q-card-section>
    <q-card-section>
      <div class="full-width q-gutter-y-md">
        <q-input outlined v-model="form.email" label="이메일" type="email" class="form-control" label-color="primary"/>
        <q-input outlined v-model="form.password" label="패스워드" type="password" class="form-control" label-color="primary"/>
      </div>
      <q-btn label="로그인" flat class="bg-primary full-width q-mt-md text-weight-regular" size="1.6rem" color="white"/>
      <div class="flex justify-between items-center">
        <p class="text-weight-bold">비밀번호를 잊으셨나요?</p>
        <q-btn flat label="비밀번호 찾기" size="1.6rem" class="text-weight-regular"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref({
    email: '',
    password:''
  })
</script>

<style lang="scss" scoped>
  .form-control{
    * {
      font-weight:200;
    }
  }
</style>
