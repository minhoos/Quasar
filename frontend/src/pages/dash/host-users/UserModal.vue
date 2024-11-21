<template>
  <q-dialog v-model= "isOpen" transition-show="fade" transition-hide="fade" transition-duration="200" persistent>
    <q-card style="width: 480px; max-width: 80vw;" v-if="isOpen">
      <!-- <q-card-section class="q-pa-lg">
        <div class="text-h5">사용자 정보</div>
      </q-card-section> -->

      <q-card-section class="q-pa-lg">
        <h6 class="text-h5">{{ selectUserView.name }}</h6>
        <p class="text-body2 q-mt-sm text-grey-8">{{ selectUserView.auth_id }}</p>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pa-lg">
        <ul class="user-view">
          <li class="flex">
            <!-- <span class="text-body1">이메일</span> -->
            <q-input>
            </q-input>
                          {{ selectUserView.email }}

          </li>
          <li class="flex">
            <!-- <span class="text-body1">휴대전화번호</span> -->
            {{ selectUserView.phone }}
          </li>
          <li class="flex">
            <!-- <span class="text-body1">생성일</span> -->
            {{ selectUserView.created_at }}
          </li>
          <li class="flex">
            <!-- <span class="text-body1">수정일</span> -->
            {{ selectUserView.updated_at }}
          </li>
          <li class="flex">
            <!-- <span class="text-body1">권한</span> -->
            {{ selectUserView.roles }}
          </li>
        </ul>
      </q-card-section>

      <q-card-actions class="bg-white text-primary flex no-wrap">
        <q-btn class="full-width" flat label="수정"/>
        <q-btn class="full-width" flat label="닫기" @click.prevent="closePopup" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  selectUserView: Object,
  modelValue: {
    type: Boolean,
    required:true,
  },
});

const emit = defineEmits(['update:modelValue', 'closeModal'])
const selectUser = ref(props.selectUserView);

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const closePopup = () => {
  isOpen.value = false;
  emit('closeModal');
}

</script>

<style lang="scss" scoped>
  .user-view{
    li {
      margin-bottom:8px;
      span{
        flex:0 0 140px;
      }
      &:last-child{
        margin-bottom:0;
      }
    }
  }
</style>
