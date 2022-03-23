<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import FirstModalContent from '../components/modal_content/FirstModalContent.vue';
import Blog from '../components/training_sites/Blog.vue';
</script>

<template>
 <Exercise
  prompt-header="Select Single Element"
  :explanation-array="[
    'write a selector targeting the website\'s header text',
    ]"
  :correct-selectors="['.browser__page-content h1']"
  :select-all="false"
  browser-url="www.example.biz/single"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="you'll want to select the <h1> element inside of the <header>"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <FirstModalContent/>
    </template>
  </Exercise>
</template>

<style>

</style>