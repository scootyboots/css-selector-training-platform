<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import Blog from '../components/training_sites/Blog.vue';
import ExampleTestingModalContent from '../components/modal_content/ExampleAllModalContent.vue';

</script>

<template>
 <Exercise
  :explanation-array="[
    'this is the first paragraph',
    'this is the second paragraph'
    ]"
  prompt-header="Example"
  :correct-selectors="['.browser__page-content p']"
  :select-all="false"
  browser-url="www.example.biz/single"
  :modal-default-display="true"
  :allow-modal-toggle="false"
  hint=""
  >
    <template #test-site>
      <Blog />
    </template>
    <template #modal-content>
      <ExampleTestingModalContent />
    </template>
  </Exercise>
</template>

<style>

</style>