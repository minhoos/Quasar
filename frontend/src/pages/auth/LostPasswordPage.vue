<template>
  <q-card flat :style="{ minWidth: '480px' }">
    <q-card-section class="text-center">
      <div class="q-gutter-lg">
        <q-img src="@assets/logo.svg" width="180px"></q-img>
        <h3 class="text-h3">비밀번호 찾기</h3>
        <p class="q-mt-md">인증번호를 받으실 아이디와 이메일을 입력하세요.</p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="full-width q-gutter-y-sm">
          <!-- <q-input outlined v-model="form.email" label="아이디" type="email" class="form-control" label-color="primary" clearable clear-icon="close" /> -->
          <q-input outlined v-model="form.email" label="이메일" type="email" class="form-control" label-color="primary" clearable clear-icon="close" />
        </div>
        <q-btn label="인증번호 받기" flat class="bg-primary full-width text-weight-regular q-mt-md  q-py-md" size="1.6rem" color="white" @click.prevent="isLogin" />
      </div>
      <div class="flex justify-center items-center q-mt-md">
        <!-- <p class="text-weight-regular">비밀번호를 잊으셨나요?</p> -->
        <q-btn flat label="로그인 하러가기" size="1.6rem" class="text-weight-bolder" color="primary" @click="router.push('/auth/login')"/>
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

// const formChecked = computed(() => {
//   if (form.value.email && form.value.password) {
//     return true
//   }
//   return false
// })

const isPwd = ref('visibility_off');
const emailRules = [
  val => (val && val.length > 0) || '아이디를 입력하세요.'
]

// const passwordRules = [
//   val => (val && val.length > 0) || '이메일 주소를 입력하세요.'
// ]

const isLogin = () => {
  router.push('/auth/reset-password')
}
</script>

<style lang="scss" scoped>

</style>
