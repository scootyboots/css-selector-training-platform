<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import Exercise from './Exercise.vue';
import { AllExercisePropsData, ExerciseProps, AnswerCondition } from '../types/types';
import { trainingSitePaths } from '../router/paths';
import exercisePropsData from '../exercise_props/exercise-props.json'
import Modal from './Modal.vue';

const props = defineProps<{ targetExerciseKey: keyof AllExercisePropsData }>()

// @ts-ignore
const allExerciseProps:AllExercisePropsData = exercisePropsData

const targetExerciseData = ref<ExerciseProps>(allExerciseProps[props.targetExerciseKey]) 

const trainingSiteRoute = ref(trainingSitePaths[targetExerciseData.value.iframeSrcKey])

const parsedAnswerCondition = ref<{regex: RegExp, ifRegexMatchDontProceed: boolean}>({regex: /./, ifRegexMatchDontProceed: false})

const modalHtml = ref<string>('')

targetExerciseData.value.modalHtml ? modalHtml.value = targetExerciseData.value.modalHtml : modalHtml.value = ''

if (targetExerciseData.value.answerCondition) {
  const stringToRegex = targetExerciseData.value.answerCondition.regex
  const answerConditionRegex = new RegExp(stringToRegex)
  parsedAnswerCondition.value.regex = answerConditionRegex
  parsedAnswerCondition.value.ifRegexMatchDontProceed = targetExerciseData.value.answerCondition.ifRegexMatchDontProceed
}

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
    :modal-html="modalHtml"
    :answer-condition="parsedAnswerCondition"
  >
    <!-- <template #modal-content>
      <ModalContent/>
    </template> -->
  </Exercise>

</template>

<style>

</style>