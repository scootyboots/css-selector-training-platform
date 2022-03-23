<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import FirstModalContent from '../components/modal_content/FirstModalContent.vue';
import Blog from '../components/training_sites/Blog.vue';
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
      <Blog />
    </template>
    <template #modal-content>
      <FirstModalContent/>
    </template>
  </Exercise>
</template>

<style>

</style>