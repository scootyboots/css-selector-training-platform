<script setup lang="ts">
import Exercise from '../components/Exercise.vue'
import SelectSingleModalContent from '../components/modal_content/SelectSingleModalContent.vue';
import Blog from '../components/training_sites/Blog.vue';
import { trainingSitePaths  } from '../router/paths'
import ExerciseProps from '../exercise_props/exercise-props.json'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// const targetExerciseProps = ref({})

// const findCurrentExerciseProps = () => {
//   const targetExercise = useRoute().fullPath.match(/\/([^\/]+)+$/)[1]
//   if (targetExercise) {
//     targetExerciseProps.value = ExerciseProps[targetExercise]
//   }
// }
// findCurrentExerciseProps()
</script>

<template>
 <Exercise
  :prompt-header="ExerciseProps.exampleSingle.promptHeader"
  :explanation-array="ExerciseProps.exampleSingle.explanationArray"
  :correct-selectors="['header h1']"
  :select-all="false"
  browser-url="www.music.blog"
  :iframe-src="trainingSitePaths[ExerciseProps.exampleSingle.iframeSrcTarget]"
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