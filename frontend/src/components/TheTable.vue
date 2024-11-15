<template>
    <q-table
      class="my-sticky-header-column-table"
      flat bordered
      :columns="columns"
      :rows="props.tableData"
      row-key="name"
      :filter="filter"
    >

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
    <!-- <q-table
      class="my-sticky-header-column-table"
      flat bordered
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    /> -->
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps(['tableData']);

  const filter = ref('');

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
    // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ]

  // const rows = [
  //   {
  //     name: 'Frozen Yogurt',
  //     calories: 159,
  //     fat: 6.0,
  //     carbs: 24,
  //     protein: 4.0,
  //     sodium: 87,
  //     calcium: '14%',
  //     iron: '1%'
  //   },
  //   {
  //     name: 'Ice cream sandwich',
  //     calories: 237,
  //     fat: 9.0,
  //     carbs: 37,
  //     protein: 4.3,
  //     sodium: 129,
  //     calcium: '8%',
  //     iron: '1%'
  //   },
  //   {
  //     name: 'Eclair',
  //     calories: 262,
  //     fat: 16.0,
  //     carbs: 23,
  //     protein: 6.0,
  //     sodium: 337,
  //     calcium: '6%',
  //     iron: '7%'
  //   },
  //   {
  //     name: 'Cupcake',
  //     calories: 305,
  //     fat: 3.7,
  //     carbs: 67,
  //     protein: 4.3,
  //     sodium: 413,
  //     calcium: '3%',
  //     iron: '8%'
  //   },
  //   {
  //     name: 'Gingerbread',
  //     calories: 356,
  //     fat: 16.0,
  //     carbs: 49,
  //     protein: 3.9,
  //     sodium: 327,
  //     calcium: '7%',
  //     iron: '16%'
  //   },
  //   {
  //     name: 'Jelly bean',
  //     calories: 375,
  //     fat: 0.0,
  //     carbs: 94,
  //     protein: 0.0,
  //     sodium: 50,
  //     calcium: '0%',
  //     iron: '0%'
  //   },
  //   {
  //     name: 'Lollipop',
  //     calories: 392,
  //     fat: 0.2,
  //     carbs: 98,
  //     protein: 0,
  //     sodium: 38,
  //     calcium: '0%',
  //     iron: '2%'
  //   },
  //   {
  //     name: 'Honeycomb',
  //     calories: 408,
  //     fat: 3.2,
  //     carbs: 87,
  //     protein: 6.5,
  //     sodium: 562,
  //     calcium: '0%',
  //     iron: '45%'
  //   },
  //   {
  //     name: 'Donut',
  //     calories: 452,
  //     fat: 25.0,
  //     carbs: 51,
  //     protein: 4.9,
  //     sodium: 326,
  //     calcium: '2%',
  //     iron: '22%'
  //   },
  //   {
  //     name: 'KitKat',
  //     calories: 518,
  //     fat: 26.0,
  //     carbs: 65,
  //     protein: 7,
  //     sodium: 54,
  //     calcium: '12%',
  //     iron: '6%'
  //   }
  // ]

</script>

<style lang="scss">
  .my-sticky-header-column-table{
    /* height or max-height is important */
    // height: 310px;
    
    /* specifying max-width so the example can
      highlight the sticky column on any browser window */
    max-width: 1473px;

    td:first-child{
      /* bg color is important for td; just specify one */
      background-color: var(--common-white);
    }
    tr th{
      position: sticky;
      /* higher than z-index for td below */
      // z-index: 3;
      /* bg color is important; just specify one */
      background: var(--common-grey1);
    }
    thead tr th{
      height:48px;
    }
    /* this will be the loading indicator */
    // thead tr:last-child th{
    //   /* height of all previous header rows */
    //   top: 48px;
    //   /* highest z-index */
    //   z-index: 3;
    // }
    thead tr:first-child th{
      top: 0;
      // z-index: 1;
    }
    // tr:first-child th:first-child{
    //   /* highest z-index */
    //   z-index: 3;
    // }
    // td:first-child{
    //   z-index: 1;
    // }
    td:first-child, th:first-child{
      position: sticky;
      left: 0;
      z-index:1;
    }
    td:nth-child(2), th:nth-child(2){
      position: sticky;
      left:64px;
      z-index:1;
    }
    /* prevent scrolling behind sticky top row on focus */
    tbody{
      /* height of all previous header rows */
      scroll-margin-top: 48px;
      tr td{
        height:48px;
        background:var(--common-white);
      }
    }
  }
</style>
