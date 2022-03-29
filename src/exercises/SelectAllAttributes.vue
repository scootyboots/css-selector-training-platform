<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import Blog from '../components/training_sites/Blog.vue'
import SelectAllAttributeModalContent from '../components/modal_content/SelectAllAttributeModalContent.vue';

const explanation = 'Write a selector that selects the images that start with "new" as their alt text'
const correctSelector = '.browser__page-content img[alt^="new-"]'
</script>

<template>
 <Exercise
  prompt-header="Select All by Attribute"
  :explanation-array="[
      explanation,
    ]"
  :correct-selectors="[correctSelector]"
  :select-all="true"
  browser-url="www.music.blog"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="you will need to use an Attribute Selector which uses the bracket syntax"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <SelectAllAttributeModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>