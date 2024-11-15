<template>
  <q-card flat :style="{ minWidth: '480px' }">
    <q-card-section class="text-center">
      <div class="q-gutter-lg">
        <q-img src="@assets/logo.svg" width="180px"></q-img>
        <h3 class="text-h3">비밀번호 재설정</h3>
        <p class="q-mt-md">
          등록된 이메일 <b>nim730@nlobby.com</b> 으로 인증번호가 발송 되었습니다.<br>
          아래 새 비밀번호와 인증번호를 입력하고 재설정 버튼을 눌러주세요.
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="full-width q-gutter-y-sm">
          <!-- <q-input outlined label="아이디" type="email" class="form-control" label-color="primary" clearable clear-icon="close"/> -->
          <q-input outlined label="인증번호" type="number" class="form-control no-spin" label-color="primary"/>
          <q-input outlined label="새 비밀번호" type="password" class="form-control" label-color="primary" clearable clear-icon="close"/>
          <q-input outlined label="새 비밀번호 확인" type="password" class="form-control" label-color="primary" clearable clear-icon="close"/>
        </div>
        <q-btn label="비밀번호 재설정" flat class="bg-primary full-width text-weight-regular q-mt-md  q-py-md" size="1.6rem" color="white" @click.prevent="isLogin" />
      </div>
      <div class="flex justify-center items-center q-mt-md">
        <!-- <p class="text-weight-regular">비밀번호를 잊으셨나요?</p> -->
        <!-- <q-btn flat label="이전 페이지" size="1.6rem" class="text-weight-bolder" color="primary" @click="router.push('/auth/lost-password')"/> -->
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const form = ref({
  email: '',
  password: ''
})

const formChecked = computed(() => {
  if (form.value.email && form.value.password) {
    return true
  }
  return false
})

const isPwd = ref('visibility_off');
const emailRules = [
  val => (val && val.length > 0) || '아이디를 입력하세요.'
]

const passwordRules = [
  val => (val && val.length > 0) || '이메일 주소를 입력하세요.'
]

const isLogin = () => {
  router.push('/auth/login')
}
</script>

<style lang="scss" scoped>

</style>
