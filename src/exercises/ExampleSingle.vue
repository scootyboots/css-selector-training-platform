<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import TrainingSite from '../components/training_sites/TrainingSite.vue'
import ExampleSingleModalContent from '../components/modal_content/ExampleSingleModalContent.vue';
import FirstModalContent from '../components/modal_content/FirstModalContent.vue';

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
  hint='<p> elements inside a <div> with the class "browser__page-content"'
  >
    <template #training-site>
      <TrainingSite />
    </template>
    <template #modal-content>
      <FirstModalContent/>
    </template>
  </Exercise>
</template>

<style>

</style>