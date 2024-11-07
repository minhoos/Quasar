<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md">
    <h3 class="text-h3 text-weight-bold block">환경설정</h3>
    <section class="q-py-md flex column">
      <h4 class="text-h4">글 작성</h4>
      <q-separator class="q-my-md" />
      <q-form class="q-gutter-y-md q-mt-lg" greedy autofocus>

        <q-input outlined v-model="form.title" label="제목" label-color="primary" class="form-control" :rules="[val => !!val || '필수 입력 항목입니다.']"/>

        <q-input outlined v-model="form.content" type="textarea" label="내용"  label-color="primary" class="form-control" counter lazy-rules :rules="[val => !!val || '필수 입력 항목입니다.', (val) => val.length <= 50 || '최대 50자 이내로 입력하세요.']"/>

        <q-select
          outlined
          v-model="form.tag"
          :options="tagOptions"
          label="태그"
          class="form-control"
          multiple
          emit-value
          :rules="[
            val => val.length > 0 || '필수 항목입니다.',
            val => val.length <= 2 || '2개 이상 선택하실 수 없습니다.'
          ]"
        />
        <q-input filled v-model="form.date" mask="date" :rules="['date']" class="form-control">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle :false-value="false" :true-value="true" label="2차인증 사용" v-model="form.otpCode"/>
      </q-form>
    </section>

  </div>

</template>

<script setup>
  import {ref} from 'vue'

  const form = ref({
    title:'',
    content:'',
    tag:[],
    date:'2024/11/08',
    otpCode:false
  });

  const tagOptions = ref([
    {
      label:'Google',
      value:'구글',
    },
    {
      label:'Facebook',
      value:'페이스북',
    },
    {
      label:'Apple',
      value:'애플',
    },
    {
      label:'Twitter',
      value:'트위터',
    },
    {
      label:'Oracle',
      value:'오라클',
    },
  ]);
</script>

<style lang="scss" scoped>

</style>