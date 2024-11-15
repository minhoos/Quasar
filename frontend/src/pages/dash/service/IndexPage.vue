<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md" padding>
    <h4 class="text-h3 text-weight-bold block">서비스 운영</h4>
    <section class="row q-col-gutter-x-xl q-py-md flex flex-center">
    </section>
    <!-- <section class="q-mt-xl">
      <div class="row q-col-gutter-md">
        <div v-for="list in 18" :key="list" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 flex flex-center full-height">
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const tab = ref('board');
</script>

<style lang="scss" scoped>
  .page-tab-menu{
    *{
      font-weight:200;
    }
  }
</style>
