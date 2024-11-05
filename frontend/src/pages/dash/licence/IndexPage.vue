<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md" padding>
    <h4 class="text-h3 text-weight-bold block">라이센스 관리</h4>
    <section class="row q-col-gutter-x-xl q-py-md flex flex-center">
      <div class="col-auto q-py-md">
        <q-avatar size="150px">
          <q-img src="@assets/logo.jpg" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between q-gutter-y-md">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">nlobby</span>
          <q-space/>
          <div class="q-gutter-x-sm">
            <q-btn label="프로필 편집"></q-btn>
            <q-btn flat color="brand-black" icon="more_horiz"></q-btn>
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 234</span>
          <span>팔로워 2,032</span>
          <span>팔로우 1,432</span>
        </div>
        <div>
          <div>엔로비</div>
          <div>방문관리 시스템</div>
          <div>nlobby.com</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="list in 15" :key="list">
          <article>
            <q-avatar size="70px">
              <q-img src="@assets/logo.jpg" />
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab icon="mdi-pencil-outline" to="/dash/licence" label="게시글" exact class="page-tab-menu" />
        <q-route-tab icon="bookmark_border" to="/dash/licence/save" label="저장됨" exact class="page-tab-menu" />
        <q-route-tab icon="mdi-tag-outline" to="/dash/licence/tag" label="태그됨" exact class="page-tab-menu" />
      </q-tabs>
      <router-view/>
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
