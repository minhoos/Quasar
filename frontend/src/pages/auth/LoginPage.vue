<template>
  <q-card flat :style="{minWidth:'480px'}">
    <q-card-section class="text-center">
      <div class="q-gutter-lg">
        <q-img src="@assets/logo.svg" width="180px"></q-img>
        <h3 class="text-h3">로그인</h3>
        <p class="q-mt-md">이메일과 비밀번호를 입력하세요.</p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="full-width q-gutter-y-md">
          <q-input outlined v-model="form.email" label="이메일" type="email" class="form-control" label-color="primary" clearable clear-icon="close" :rules="emailRules" />
          <q-input outlined v-model="form.password" label="패스워드" class="form-control" label-color="primary" :type="isPwd ? 'password':'text' " :rules="passwordRules" clearable clear-icon="close">
            <template v-slot:append>
              <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
              />
            </template>
            <template v-slot:after>
              <q-btn flat class="bg-primary q-py-md" color="white" @click="isUserCheck">인증번호 입력</q-btn>
            </template>
          </q-input>
          <q-input outlined v-model="form.certification" label="2차인증 번호 입력" type="number" class="form-control no-spin" label-color="primary" clearable clear-icon="close"/>
        </div>
        <q-btn label="로그인" flat class="bg-primary full-width text-weight-regular q-mt-md  q-py-md" size="1.6rem" color="white" @click.prevent="isLogin" :disable="!formChecked"/>
      </div>
      <div class="flex justify-between items-center q-mt-md">
        <p class="text-weight-regular">비밀번호를 잊으셨나요?</p>
        <q-btn flat label="비밀번호 찾기" size="1.6rem" class="text-weight-bolder" color="primary" @click="router.push('/auth/lost-password')"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router';
  import { useQuasar } from 'quasar';

  const $q = useQuasar();

  const router = useRouter();

  const form = ref({
    email: '',
    password:''
  })

const formChecked = computed(() => {
    if (form.value.email && form.value.password) {
      return true
    }
    return false
  })

  const isPwd = ref('visibility_off');
  const emailRules = [
    val => (val && val.length > 0) || '이메일 주소를 입력하세요.'
]
  
  const passwordRules = [
    val => (val && val.length > 0) || '비밀번호를 입력하세요.'
]

  const isLogin = () => {
    router.push('/dash')
  }

  const isUserCheck = () => {
    if (form.value.email && form.value.password) {
      $q.notify({
        type: 'noti-nlobby',
        message: '등록된 이메일 주소로 인증번호가 발송되었습니다.'
      })
    } else {
      $q.notify({
        type: 'negative',
        message: '아이디 또는 비밀번호가 입력되지 않았습니다.'
      })
    }
  }

</script>

<style lang="scss" scoped>

</style>
