<script setup lang="ts">
import { ref } from 'vue';
import Exercise from '../components/Exercise.vue'
import TrainingSite2 from '../components/training_sites/TrainingSite2.vue';
import Modal from '../components/Modal.vue';
import ExampleAllModalSlot from './ExampleAllModalSlot.vue';

const modalDisplay = ref<boolean>(true)

</script>

<template>
 <Exercise
  :explanation-array="[
    'this is the first paragraph',
    'this is the second paragraph'
    ]"
  :correct-selectors="['.browser__page-content p']"
  :select-all="false"
  browser-url="www.example.biz/all"
  >
    <TrainingSite2 />
  </Exercise>

  <Modal>
    <ExampleAllModalSlot/>
  </Modal>
</template>

<style>

</style>