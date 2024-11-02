<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md">
    <h4 class="text-h3 text-weight-bold block">고객사 관리</h4>
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Col</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div class="q-gutter-x-md">
          <div v-for="list in 4" :key="list" class="square"></div>
        </div>
        <div class="q-gutter-y-md">
          <div v-for="list in 4" :key="list" class="bg-primary">{{ list }}</div>
        </div>
      </div>
      <q-separator class="q-my-md" spaced/>
      <div class="bg-yellow">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="list in 8" :key="list">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Col</div>
      <q-separator class="q-my-md" />
      <div class="row">
        <!-- 퀘이사는 12컬림을 사용하고 있으므로 col 컬럼의 합이 12를 넘지 않게 레이아웃을 짜도록 한다. -->
        <div class="border col-2">col-2</div>
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-2">col-2</div>
      </div>
      <q-separator spaced/>
      <div class="row">
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced/>
      <div class="row">
        <div class="border col-auto">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced/>
      <div class="row">
        <div class="border col-grow">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
      </div>
      <q-separator spaced/>
      <div class="row no-wrap">
        <div class="border col-auto">col-auto col-auto col-auto col-auto</div>

        <!-- shrink : 박스 너비에 따라서 유동적으로 사이즈가 변동된다. -->
        <div class="border col-shrink">
          col-shrink col-shrink col-shrink col-shrink col-shrink col-shrink col-shrink col-shrink
        </div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
        <div class="border col-1">col</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Toolbar</div>
      <q-separator class="q-my-md" />
      <div class="row items-center bg-primary q-px-sm" :style="{
        minHeight:'50px'
      }">
        <q-btn icon="menu" flat dense round color="white" />
        <span class="text-h6 text-weight-bold text-white">
          Quasar App
        </span>
        <q-btn icon="light_mode" flat dense round color="white"/>
      </div>
      <q-separator class="q-my-md" />
      <div class="row items-center justify-between bg-primary q-px-sm" :style="{
        minHeight:'50px'
      }">
        <q-btn icon="menu" flat dense round color="white" />
        <span class="text-h6 text-weight-bold text-white">
          Quasar App
        </span>
        <q-btn icon="light_mode" flat dense round color="white"/>
      </div>
    </section>

    <section>
      <div class="text-h4">Flexbox- Row</div>
      <q-separator class="q-my-md" />
      <div class="row inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <q-separator spaced />
      <div class="row inline reverse bg-yellow">
        <div v-for="list in 6" :key="list" class="square">{{ list }}</div>
      </div>
      <div class="row inline bg-yellow no-wrap">
        <div v-for="list in 16" :key="list" class="square">{{ list }}</div>
      </div>
    </section>
    <section>
      <div class="text-h4">Flexbox- Column</div>
      <q-separator class="q-my-md" />
      <div class="column inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .square{
    width:80px;
    height:80px;
    background:var(--q-primary);
    border:1px solid #181818;
    display:inline-block;
    font-weight: 900;
    color:#fff;
  }

  .border{
    border:1px solid var(--q-primary);
    padding:8px;
  }
</style>