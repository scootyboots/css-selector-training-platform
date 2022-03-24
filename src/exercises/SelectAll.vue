<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import Blog from '../components/training_sites/Blog.vue'
import SelectAllModalContent from '../components/modal_content/SelectAllModalContent.vue';

</script>

<template>
 <Exercise
  prompt-header="Select All Elements"
  :explanation-array="[
    'Now write one selector that selects the description text of each blog post',
    ]"
  :correct-selectors="['.browser__page-content .Blog-posts p']"
  :select-all="true"
  browser-url="www.music.blog"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="look towards the first <p> in each Blog-post"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <SelectAllModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>