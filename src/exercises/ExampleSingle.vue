<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import TrainingSite from '../components/training_sites/TrainingSite.vue'
import ExampleSingleModalContent from './ExampleSingleModalContent.vue';

</script>

<template>
 <Exercise
  :explanation-array="[
    'this is the first paragraph',
    'this is the second paragraph'
    ]"
  :correct-selectors="['.browser__page-content p']"
  :select-all="false"
  browser-url="www.example.biz/single"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  >
    <template #training-site>
      <TrainingSite />
    </template>
    <template #modal-content>
      <ExampleSingleModalContent/>
    </template>
  </Exercise>
</template>

<style>

</style>