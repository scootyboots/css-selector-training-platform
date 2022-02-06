<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import TrainingSite2 from '../components/training_sites/TrainingSite2.vue';

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
</template>

<style>

</style>