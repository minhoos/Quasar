<template>
  <!-- q-pa-md-xl : 최소 md사이즈부터 여백의 사이즈를 xl로 적용한다. (반응형) -->
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md">
    <h3 class="text-h3 text-weight-bold block">대시보드</h3>
    <section class="row q-py-md flex column q-ma-none q-col-gutter-lg">
      <div class="text-center">
        <p class="q-mb-sm">2024년 11월 2일 토요일</p>
        <h4 class="text-h4">이민호 님 안녕하세요.</h4>
      </div>
      <div>
        <h5 class="text-h5">고객사 현황</h5>
        <q-separator class="q-my-md"/>
        <div class="row q-col-gutter-y-md q-col-gutter-x-xl q-mt-xs">
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <q-card class="count-card text-center q-py-lg flex column shadow-all">
              <div class="text-subtitle2">
                스탠다드
              </div>
              <p class="text-h2" style="font-weight:200;">
                19
              </p>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <q-card class="count-card text-center q-py-lg flex column shadow-all">
              <div class="text-subtitle2">
                프리미엄
              </div>
              <p class="text-h2" style="font-weight:200;">
                45
              </p>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <q-card class="count-card text-center q-py-lg flex column shadow-all">
              <div class="text-subtitle2">
                엔터프라이즈
              </div>
              <p class="text-h2" style="font-weight:200;">
                15
              </p>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <q-card class="count-card text-center q-py-lg flex column shadow-all">
              <div class="text-subtitle2">
                TOTAL
              </div>
              <p class="text-h2" style="font-weight:200;">
                79
              </p>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <!-- <div class="target">
      <div>{{ $q.screen }}</div>
      <div class="text-h4">Home</div>
      <p class="text-h1">Headline 1</p>
      <p class="text-h2">Headline 1</p>
      <p class="text-h3">Headline 1</p>
      <p class="text-h4">Headline 1</p>
      <p class="text-h5">Headline 1</p>
      <p class="text-h6">Headline 1</p>
      <p class="text-subtitle1">SubTitle1</p>
      <p class="text-subtitle2">SubTitle2</p>
      <p class="text-body1">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
      <p class="text-body2">Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
      <p class="text-caption">Capitalize first letter of the text</p>
      <p class="text-overline">Overline</p>
      <p class="bg-error text-white">Overline</p>

      <q-btn label="완료" color="primary"></q-btn>
      <q-btn label="완료" color="error"></q-btn>

      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-accent text-white">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark text-white">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive text-white">accent</div>
        <div class="q-pa-xs rounded-borders bg-negative text-white">dark</div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
  import { getCurrentInstance } from 'vue';
  import { useQuasar } from 'quasar';

  const { proxy } = getCurrentInstance()
  const quasar = useQuasar();

  // console.log(quasar);

</script>

<style lang="scss" scoped>
  @media screen and (max-width: $breakpoint-xs-max) {
      .target{
        background:$red;
      }
  }

  .count-card{
    border-radius:16px;
    gap:16px;
  }

  .target{
    body.screen--sm & {
      background:var(--common-black);
    }
    p{
      color:$red;
      background:$grey-5;
    }
  
    .text-error{
      color:$red;
    }
    .bg-error{
      background:$red;
    }
  }

</style>
