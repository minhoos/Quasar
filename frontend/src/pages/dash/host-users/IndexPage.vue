<template>
  <div class="q-pa-md q-pa-md-xl column items-start q-gutter-md" padding>
    <h4 class="text-h3 text-weight-bold block">사용자 관리</h4>
    <section class="q-py-md">
      <q-table
        flat bordered ref="tableRef"
        :rows="hostUsers"
        :columns="columns"
        row-key="id"
        table-class="table-host-users"
        table-header-class="table-header"
        v-model:pagination.sync="pagination"
        :loading="loading" :filter="filter"
        hide-pagination
        @request="onRequest"
      >
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
                @click.prevent="openModal(props.row)"
              />
            </q-td>
          </template>

      </q-table>

      <!-- 페이징네이션 -->
      <div class="row justify-center q-mt-md">
        <q-pagination
        @update:model-value="onPageChange"
          v-model="pagination.page"
          color="grey-8"
          :max="pagesNumber"
          size="md"
        />
      </div>

    </section>
    <UserModal v-model="isModal" @closeModal="closeModal" :selectUserView="selectUserView"></UserModal>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import UserModal from './UserModal.vue';
  
  // 모달

  const selectUserView = ref({});
  const isModal = ref(false)

  const openModal = (value) => {
    selectUserView.value = value;
    isModal.value = true;
  };

  const closeModal = () => {
    isModal.value = false;
  }


  // 테이블
  const columns = [
    {
      name: 'id',
      // required: true,
      label: 'ID',
      align: 'left',
      field: row => row.id,
      // format: val => `${val}`,
      sortable: true,
      style: 'width:100px'
    },
    { name: 'name', align: 'left', label: '이름', field: row => row.name, sortable: true, style: 'width:100px' },
    { name: 'auth_id', align: 'left', label: '사용자 ID', field: row => row.auth_id },
    { name: 'phone', align: 'left', label: '전화번호', field: row => row.phone },
    { name: 'email', align: 'left', label: '이메일', field: row => row.email },
    { name: 'created_at', align: 'left', label: '등록일시', field: row => row.created_at },
    { name: 'updated_at', align: 'left', label: '수정일시', field: row => row.updated_at },
    { name: 'actions', align: 'center', label: '' },
    // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ]

  const response = [
    {
      id: 1,
      auth_id: 'support@nlobby.com',
      email: 'support@nlobby.com',
      name: '김제헌',
      phone: '010-2593-5263',
      created_at: '2024-11-15 12:30:30',
      updated_at: '2024-11-15 12:30:30',
      roles: '1000'
    },
    {
      id: 2,
      auth_id: 'sgko@nlobby.com',
      email: 'sgko@nlobby.com',
      name: '고상균',
      phone: '010-6326-3327',
      created_at: '2024-11-16 12:30:30',
      updated_at: '2024-11-16 12:30:30',
      roles: '1000'
    },
    {
      id: 3,
      auth_id: 'ytm79@nlobby.com',
      email: 'ytm79@nlobby.com',
      name: '김무철',
      phone: '010-9332-9239',
      created_at: '2024-11-17 12:30:30',
      updated_at: '2024-11-17 12:30:30',
      roles: '1000'
    },
    {
      id: 4,
      auth_id: 'ytm79@nlobby.com',
      email: 'ytm79@nlobby.com',
      name: '양태민',
      phone: '010-3582-1707',
      created_at: '2024-11-18 12:30:30',
      updated_at: '2024-11-18 12:30:30',
      roles: '1000'
    },
    {
      id: 5,
      auth_id: 'kht@nlobby.com',
      email: 'kht@nlobby.com',
      name: '김형태',
      phone: '010-9323-4675',
      created_at: '2024-11-19 12:30:30',
      updated_at: '2024-11-19 12:30:30',
      roles: '1000'
    },
    {
      id: 6,
      auth_id: 'hjyu@nlobby.com',
      email: 'hjyu@nlobby.com',
      name: '유한종',
      phone: '010-4616-8716',
      created_at: '2024-11-20 12:30:30',
      updated_at: '2024-11-20 12:30:30',
      roles: '1000'
    },
    {
      id: 7,
      auth_id: 'nim730@nlobby.com',
      email: 'nim730@nlobby.com',
      name: '이민호',
      phone: '010-2967-5928',
      created_at: '2024-11-20 13:30:30',
      updated_at: '2024-11-20 13:30:30',
      roles: '1000'
    },
    {
      id: 8,
      auth_id: 'support_b@nlobby.com',
      email: 'support_b@nlobby.com',
      name: '황지혜',
      phone: '010-4847-3960',
      created_at: '2024-11-20 14:30:30',
      updated_at: '2024-11-20 14:30:30',
      roles: '1000'
    },
    {
      id: 9,
      auth_id: 'somo@nlobby.com',
      email: 'somo@nlobby.com',
      name: '이승호',
      phone: '',
      created_at: '2024-11-20 15:30:30',
      updated_at: '2024-11-20 15:30:30',
      roles: '1000'
    },
    {
      id: 10,
      auth_id: '0126kjw@nlobby.com',
      email: '0126kjw@nlobby.com',
      name: '김진우',
      phone: '010-9902-4553',
      created_at: '2024-11-20 16:30:30',
      updated_at: '2024-11-20 16:30:30',
      roles: '1000'
    },
    {
      id: 11,
      auth_id: 'support1@nlobby.com',
      email: 'support1@nlobby.com',
      name: '김제헌1',
      phone: '010-2593-5263',
      created_at: '2024-11-20 17:30:30',
      updated_at: '2024-11-20 17:30:30',
      roles: '1000'
    },
    {
      id: 12,
      auth_id: 'sgko1@nlobby.com',
      email: 'sgko1@nlobby.com',
      name: '고상균1',
      phone: '010-6326-3327',
      created_at: '2024-11-20 17:31:30',
      updated_at: '2024-11-20 17:31:30',
      roles: '1000'
    },
    {
      id: 13,
      auth_id: 'notfe1@nlobby.com',
      email: 'notfe1@nlobby.com',
      name: '김무철1',
      phone: '010-9332-9239',
      created_at: '2024-11-20 17:32:30',
      updated_at: '2024-11-20 17:32:30',
      roles: '1000'
    },
    {
      id: 14,
      auth_id: 'ytm79@nlobby.com',
      email: 'ytm79@nlobby.com',
      name: '양태민1',
      phone: '010-3582-1707',
      created_at: '2024-11-20 17:33:30',
      updated_at: '2024-11-20 17:33:30',
      roles: '1000'
    },
    {
      id: 15,
      auth_id: 'kht1@nlobby.com',
      email: 'kht1@nlobby.com',
      name: '김형태1',
      phone: '010-9323-4675',
      created_at: '2024-11-19 12:34:30',
      updated_at: '2024-11-19 12:34:30',
      roles: '1000'
    },
    {
      id: 16,
      auth_id: 'hjyu1@nlobby.com',
      email: 'hjyu1@nlobby.com',
      name: '유한종1',
      phone: '010-4616-8716',
      created_at: '2024-11-20 12:35:30',
      updated_at: '2024-11-20 12:35:30',
      roles: '1000'
    },
    {
      id: 17,
      auth_id: 'nim7301@nlobby.com',
      email: 'nim7301@nlobby.com',
      name: '이민호1',
      phone: '010-2967-5928',
      created_at: '2024-11-20 13:36:30',
      updated_at: '2024-11-20 13:36:30',
      roles: '1000'
    },
    {
      id: 18,
      auth_id: 'support_b1@nlobby.com',
      email: 'support_b1@nlobby.com',
      name: '황지혜1',
      phone: '010-4847-3960',
      created_at: '2024-11-20 14:37:30',
      updated_at: '2024-11-20 14:37:30',
      roles: '1000'
    },
    {
      id: 19,
      auth_id: 'somo1@nlobby.com',
      email: 'somo1@nlobby.com',
      name: '이승호1',
      phone: '',
      created_at: '2024-11-20 15:38:30',
      updated_at: '2024-11-20 15:38:30',
      roles: '1000'
    },
    {
      id: 20,
      auth_id: '0126kjw1@nlobby.com',
      email: '0126kjw1@nlobby.com',
      name: '김진우1',
      phone: '010-9902-4553',
      created_at: '2024-11-20 16:39:30',
      updated_at: '2024-11-20 16:39:30',
      roles: '1000'
    },
  ]
  const pagesNumber = computed(() => {
    return Math.ceil(pagination.value.rowsNumber / pagination.value.rowsPerPage)
  })

  const tableRef = ref()  // table 엘리먼트
  const hostUsers = ref([])
  const filter = ref('')
  const loading = ref(false)
  const pagination = ref({
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 0
  })

  // emulate ajax call
  // SELECT * FROM ... WHERE...LIMIT...
  const fetchFromServer = (startRow, count, filter, sortBy, descending) => {
    const data = filter
      ? response.filter(row => row.id.includes(filter))
      : response.slice()

    // handle sortBy
    if (sortBy) {
      const sortFn = sortBy === 'desc'
        ? (descending
          ? (a, b) => (a.id > b.id ? -1 : a.id < b.id ? 1 : 0)
          : (a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
        )
        : (descending
          ? (a, b) => (parseFloat(b[sortBy]) - parseFloat(a[sortBy]))
          : (a, b) => (parseFloat(a[sortBy]) - parseFloat(b[sortBy]))
        )
      data.sort(sortFn)
    }

    return data.slice(startRow, startRow + count)
  }

  // emulate 'SELECT count(*) FROM ...WHERE...'
  const getRowsNumberCount = (filter) => {
    if (!filter) {
      return response.length
    }
    let count = 0
    response.forEach(treat => {
      if (treat.name.includes(filter)) {
        ++count
      }
    })
    return count
  }

  const onRequest = (props) => {
    
    const { page, rowsPerPage, sortBy, descending } = props.pagination
    const filter = props.filter

    loading.value = true

    // emulate server
    setTimeout(() => {
      // update rowsCount with appropriate value
      pagination.value.rowsNumber = getRowsNumberCount(filter)

      // get all rows if "All" (0) is selected
      const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage

      // calculate starting row of data
      const startRow = (page - 1) * rowsPerPage

      // fetch data from "server"
      const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending)
      // clear out existing data and add new
      hostUsers.value.splice(0, hostUsers.value.length, ...returnedData)

      // don't forget to update local pagination object
      pagination.value.page = page
      pagination.value.rowsPerPage = rowsPerPage
      pagination.value.sortBy = sortBy
      pagination.value.descending = descending

      // ...and turn of loading indicator
      loading.value = false
    }, 1500)
  }
  const data = ref();
  watchEffect(
    () => pagination.value.page,
    () => onRequest()
  )

const onPageChange = () => {
  console.log(pagination);
}

    onMounted(() => {
      // get initial data from server (1st page)
      data.value = tableRef.value.requestServerInteraction()
    })

</script>
