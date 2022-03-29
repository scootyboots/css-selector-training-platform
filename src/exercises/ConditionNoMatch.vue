<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import Blog from '../components/training_sites/Blog.vue'
import ConditionModalContent from '../components/modal_content/ConditionModalContent.vue';

</script>

<template>
 <Exercise
  prompt-header="Select Second"
  :explanation-array="[
    'Write one selector that selects the second blog post',
    'using the :nth-child pseudo-class'
    ]"
  :correct-selectors="['.browser__page-content .Blog-post:nth-child(2)']"
  :select-all="false"
  browser-url="www.music.blog"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="the :nth-child pseudo-class needs to be passed a number"
  :answer-condition="{regex: /:nth-child/, wantToMatch: false}"
  >
    <template #training-site>
      <Blog />
    </template>
    <template #modal-content>
      <ConditionModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>