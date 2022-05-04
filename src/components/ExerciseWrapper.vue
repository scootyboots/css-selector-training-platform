<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import Exercise from './Exercise.vue';
import { AllExercisePropsData, ExerciseProps, AnswerCondition } from '../types/types';
import { trainingSitePaths } from '../router/paths';
import exercisePropsData from '../exercise_props/exercise-props.json'

import SelectSingleModalContent from './modal_content/SelectSingleModalContent.vue';
import SelectAllModalContent from './modal_content/SelectAllModalContent.vue';
import SelectAllAttributeModalContent from './modal_content/SelectAllAttributeModalContent.vue';
import SelectEveryOtherModalContent from './modal_content/SelectEveryOtherModalContent.vue';
import ConditionModalContent from './modal_content/ConditionModalContent.vue';
import ConditionNoMatchModalContent from './modal_content/ConditionNoMatchModalContent.vue';

const props = defineProps<{ targetExerciseKey: keyof AllExercisePropsData }>()

// @ts-ignore
const allExerciseProps:AllExercisePropsData = exercisePropsData

const targetExerciseData = ref<ExerciseProps>(allExerciseProps[props.targetExerciseKey]) 

const trainingSiteRoute = ref(trainingSitePaths[targetExerciseData.value.iframeSrcKey])

const parsedAnswerCondition = ref<{regex: RegExp, ifRegexMatchDontProceed: boolean}>({regex: /./, ifRegexMatchDontProceed: false})

if (targetExerciseData.value.answerCondition) {
  const stringToRegex = targetExerciseData.value.answerCondition.regex
  const answerConditionRegex = new RegExp(stringToRegex)
  parsedAnswerCondition.value.regex = answerConditionRegex
  parsedAnswerCondition.value.ifRegexMatchDontProceed = targetExerciseData.value.answerCondition.ifRegexMatchDontProceed
}

console.log(trainingSitePaths["blog"])

const ModalContent = shallowRef(SelectSingleModalContent)

const findModalContentComponent = () => {
  switch (props.targetExerciseKey) {
    case 'exampleSingle':
      ModalContent.value = SelectSingleModalContent
      break
    case 'exampleAll':
      ModalContent.value = SelectAllModalContent
      break
    case 'exampleEveryOther':
      ModalContent.value = SelectEveryOtherModalContent
      break
    case 'exampleCondition':
      ModalContent.value = ConditionModalContent
      break
    case 'exampleConditionNoMatch':
      ModalContent.value = ConditionNoMatchModalContent
      break
    case 'exampleSelectAllAttributes':
      ModalContent.value = SelectAllAttributeModalContent
      break
  }

}

findModalContentComponent()

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
    :answer-condition="parsedAnswerCondition"
  >
    <template #modal-content>
      <ModalContent/>
    </template>
  </Exercise>

</template>

<style>

</style>