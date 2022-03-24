<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import TrainingSite from '../components/training_sites/TrainingSite.vue'
import ExampleTestingModalContentVue from '../components/modal_content/ExampleAllModalContent.vue';

</script>

<template>
 <Exercise
  :explanation-array="[
    'this is the first paragraph',
    'this is the second paragraph'
    ]"
  prompt-header="Example 2"
  :correct-selectors="['.browser__page-content p']"
  :select-all="false"
  browser-url="www.example.biz/single"
  :modal-default-display="true"
  :allow-modal-toggle="false"
  hint=""
  >
    <template #test-site>
      <TrainingSite />
    </template>
    <template #modal-content>
      <ExampleTestingModalContentVue />
    </template>
  </Exercise>
</template>

<style>

</style>