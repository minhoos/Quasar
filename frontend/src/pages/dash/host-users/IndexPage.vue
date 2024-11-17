<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md" padding>
    <h4 class="text-h3 text-weight-bold block">사용자 관리</h4>
    <section class="q-py-md">
      <q-btn @click="triggerCustomRegisteredType1">노티버튼</q-btn>
      <q-table
        flat bordered
        :columns="columns"
        :rows="hostUsers"
        row-key="id"
        :filter="filter"
        selection="multiple"
        table-class="table-host-users"
        table-header-class="table-header"
        v-model:selected="selected"
        v-model:pagination="pagination"
        hide-pagination
      >

      <!-- 검색 -->
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <!-- 커스텀 테이블(정보수정버튼) -->
      <template v-slot:body-cell-actions="props">
        <q-td>
          <q-btn
            outline
            label="정보수정"
            color="white"
            textColor="brand-black"
            @click="handleClick(props.row)"
          />
        </q-td>
      </template>
    </q-table>

    <!-- 페이징네이션 -->
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar()
const selected = ref([])

const  triggerCustomRegisteredType1 =  () => {
  $q.notify({
    group: false,
    type: 'noti-nlobby',
    message: '노티 테스트 메시지.',
    caption:'2분 전',
    classes:'mynotification',
  })
}



  const pagination = ref({
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage:10
    // rowsNumber: xx if getting data from a server
  })

const pagesNumber = computed(() => Math.ceil(hostUsers.length / pagination.value.rowsPerPage))

const columns = [
  {name: 'id',
    // required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    // format: val => `${val}`,
    sortable: true,
    style:'width:100px'
  },
  { name: 'name', align: 'left', label: '이름', field: row => row.name, style:'width:100px' },
  { name: 'auth_id', align: 'left', label: '사용자 ID', field: row => row.auth_id },
  { name: 'phone', align: 'left', label: '전화번호', field: row => row.phone },
  { name: 'email', align: 'left', label: '이메일', field: row => row.email },
  { name: 'created_at', align: 'left', label: '등록일시', field: row => row.created_at },
  { name: 'updated_at', align: 'left', label: '수정일시', field: row => row.updated_at },
  { name: 'actions', align: 'center', label: ''},
  // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]
const filter = ref('');
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

</script>

<style lang="scss" scoped>

</style>
