<script setup lang="ts">
import { ref } from 'vue';
import Exercise from './Exercise.vue';
import { AllExercisePropsData, ExerciseProps } from '../types/types';
import { trainingSitePaths } from '../router/paths';
import exercisePropsData from '../exercise_props/exercise-props.json'

const props = defineProps<{ targetExerciseKey: keyof AllExercisePropsData }>()

const exercisePropsKeys = Object.keys(exercisePropsData)
// @ts-ignore
const allExerciseProps:AllExercisePropsData = exercisePropsData

const targetExerciseData = ref<ExerciseProps>(allExerciseProps[props.targetExerciseKey]) 

const trainingSiteRoute = ref(trainingSitePaths[targetExerciseData.value.iframeSrcKey])

</script>

<template>
  <Exercise
    :prompt-header="targetExerciseData.promptHeader"
    :explanation-array="targetExerciseData.explanationArray"
    :correct-selectors="targetExerciseData.correctSelectors"
    :select-all="targetExerciseData.selectAll"
    :browser-url="targetExerciseData.browserUrl"
    :iframe-src="trainingSiteRoute"
    :modal-default-display="targetExerciseData.modalDefaultDisplay"
    :allow-modal-toggle="targetExerciseData.allowModalToggle"
    :hint="targetExerciseData.hint"
  />
</template>

<style>

</style>