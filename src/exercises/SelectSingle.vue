<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import SelectSingleModalContent from '../components/modal_content/SelectSingleModalContent.vue';
import Blog from '../components/training_sites/Blog.vue';
import { trainingSitePaths  } from '../router/paths'
</script>

<template>
 <Exercise
  prompt-header="Select Single Element"
  :explanation-array="[
    'write a selector targeting the website\'s header text',
    ]"
  :correct-selectors="['.browser__page-content h1']"
  :select-all="false"
  browser-url="www.music.blog"
  :iframe-src="trainingSitePaths.blog"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="you'll want to select the <h1> element inside of the <header>"
  >
    <template #modal-content>
      <SelectSingleModalContent />
    </template>
  </Exercise>
</template>

<style>

</style>