<template>
  <q-dialog v-model= "showModal">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">Medium</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ selectUser }}
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Close" @click.prevent="closePopup" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  selectUserView: Object,
  modalValue:Boolean
});

const emit = defineEmits(['showModal'])

const showModal = ref(props.modalValue);
const selectUser = ref(props.selectUserView)

const closePopup = () => {
  showModal.value = false;
  emit('showModal', showModal);
}

</script>

<style lang="scss" scoped>

</style>
