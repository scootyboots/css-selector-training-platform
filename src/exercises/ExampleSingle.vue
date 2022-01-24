<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import trainingSite from '../components/training_site/TrainingSite.vue'

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
  :browser-html="trainingSite"
  next-step-path="/next"
 />
</template>

<style>

</style>