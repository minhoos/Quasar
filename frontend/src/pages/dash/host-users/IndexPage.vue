<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md" padding>
    <h4 class="text-h3 text-weight-bold block">사용자 관리</h4>
    <section class="row q-py-md flex flex-center">
      <q-btn @click="triggerCustomRegisteredType1"></q-btn>
      <TheTable style="width:100%;" :tableData="hostUsers">
      </TheTable>
      <div class="q-pa-md">
        <!-- <q-table
          class="my-sticky-header-column-table"
          flat bordered
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
        /> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import TheTable from '@components/TheTable.vue';


const $q = useQuasar()

const hostUsers = [
  {
    id: 1,
    auth_id:'support@nlobby.com',
    email: 'support@nlobby.com',
    name: '김제헌',
    phone: '010-2593-5263',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles:'1000'
  },
  {
    id: 2,
    auth_id:'sgko@nlobby.com',
    email: 'sgko@nlobby.com',
    name: '고상균',
    phone: '010-6326-3327',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles:'1000'
  },
  {
    id: 3,
    auth_id: 'ytm79@nlobby.com',
    email: 'ytm79@nlobby.com',
    name: '김무철',
    phone: '010-9332-9239',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 4,
    auth_id: 'ytm79@nlobby.com',
    email: 'ytm79@nlobby.com',
    name: '양태민',
    phone: '010-3582-1707',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 5,
    auth_id: 'kht@nlobby.com',
    email: 'kht@nlobby.com',
    name: '김형태',
    phone: '010-9323-4675',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 6,
    auth_id: 'hjyu@nlobby.com',
    email: 'hjyu@nlobby.com',
    name: '유한종',
    phone: '010-4616-8716',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 7,
    auth_id:'nim730@nlobby.com',
    email: 'nim730@nlobby.com',
    name: '이민호',
    phone: '010-2967-5928',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles:'1000'
  },
  {
    id: 8,
    auth_id: 'support_b@nlobby.com',
    email: 'support_b@nlobby.com',
    name: '황지혜',
    phone: '010-4847-3960',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 9,
    auth_id: 'somo@nlobby.com',
    email: 'somo@nlobby.com',
    name: '이승호',
    phone: '',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles: '1000'
  },
  {
    id: 10,
    auth_id:'0126kjw@nlobby.com',
    email: '0126kjw@nlobby.com',
    name: '김진우',
    phone: '010-9902-4553',
    created_at: '2024-11-15 12:30:30',
    updated_at: '2024-11-15 12:30:30',
    roles:'1000'
  },
]

const triggerCustomRegisteredType1 = () => {
  $q.notify.registerType('my-notif', {
    icon: 'announcement',
    progress: true,
    color: 'brown',
    textColor: 'white',
    classes: 'glossy'
  })
}


</script>

<style lang="scss" scoped>
</style>
