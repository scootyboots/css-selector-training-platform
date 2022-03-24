<script setup lang="ts">
import Exercise from '../components/Exercise.vue';
import Blog from '../components/training_sites/Blog.vue'
import SelectEveryOtherModalContent from '../components/modal_content/SelectEveryOtherModalContent.vue';

</script>

<template>

 <Exercise
  prompt-header="Select Every Other"
  :explanation-array="[
    'Now write a selector that selects every other blog post',
    ]"
  :correct-selectors="['.browser__page-content .Blog-post:nth-child(odd)']"
  :select-all="true"
  browser-url="www.music.blog"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="you'll need to utilize the :nth-child pseudo-class... okay here's the answer I'm looking for .Blog-post:nth-child(even)"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <SelectEveryOtherModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>