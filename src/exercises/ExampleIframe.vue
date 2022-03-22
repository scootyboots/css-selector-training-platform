<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import IframeTrainingSite from '../components/training_sites/IframeTrainingSite.vue';
import ExampleIframeModalContent from '../components/modal_content/ExampleIframeModalContent.vue';

</script>

<template>
 <Exercise
  :explanation-array="[
    'this is the first paragraph',
    'this is the second paragraph'
    ]"
  :correct-selectors="['.infobox img']"
  :select-all="false"
  browser-url="www.wikipedia.org"
  :modal-default-display="true"
  :allow-modal-toggle="true"
  hint="try harder"
  >
    <template #training-site>
      <IframeTrainingSite />
    </template>
    <template #modal-content>
      <ExampleIframeModalContent />
    </template>
  </Exercise>

</template>

<style>

</style>