<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import Blog from '../components/training_sites/Blog.vue'
import TrainingSite2 from '../components/training_sites/TrainingSite2.vue';
import ExampleAllModalContent from '../components/modal_content/ExampleAllModalContent.vue';

</script>

<template>
 <Exercise
  prompt-header="Select All Elements"
  :explanation-array="[
    'Now write one selector that hits the header text of each blog post',
    ]"
  :correct-selectors="['.browser__page-content .Blog-post__header']"
  :select-all="true"
  browser-url="www.example.biz/all"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="look towards the first div in each Blog-post"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <ExampleAllModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>