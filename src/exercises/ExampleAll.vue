<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import TrainingSite2 from '../components/training_sites/TrainingSite2.vue';
import ExampleAllModalContent from '../components/modal_content/ExampleAllModalContent.vue';

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
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="try harder"
  >
    <template #training-site>
      <TrainingSite2 />
    </template>
    <template #modal-content>
      <ExampleAllModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>