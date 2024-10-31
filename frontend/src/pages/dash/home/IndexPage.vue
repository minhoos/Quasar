<template>
  <!-- q-pa-md-xl : 최소 md사이즈부터 여백의 사이즈를 xl로 적용한다. (반응형) -->
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md">
    <h4 class="text-h3 text-weight-bold block">대시보드</h4>

    <div class="target">
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
      <q-btn flat round dense :icon="$q.dark.isActive ? 'dark_mode':'light_mode'" @click.prevent="$q.dark.toggle()"/>
    </div>

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

  .target{
    body.screen--sm & {
      background:var(--common-black);
    }
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
</style>
