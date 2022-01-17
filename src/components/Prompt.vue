<script setup lang="ts">
import { ref } from 'vue';

interface PromptProps {
  header: string
  explanationPs: string[]
  inputPlaceholder: string
  correctSelectors: string[]
  selectAll: boolean
}

const props = defineProps<PromptProps>()

const answer = ref<string>('')

const correctAnswerGiven = ref<boolean>(false)

const checkSingleAnswer = (event:KeyboardEvent) => {
  if (event.key === 'Enter') {
    props.correctSelectors.forEach(correctSelector => {
      if (document.querySelector(answer.value!) === document.querySelector(correctSelector)) {
        correctAnswerGiven.value = true
      }
      if (document.querySelector(`.browser__page-content ${answer.value!}`) === document.querySelector(correctSelector)) {
        correctAnswerGiven.value = true
      }
    });
  }
}

const checkSelectAllAnswer = (event:KeyboardEvent) => {
  if (event.key === 'Enter') {
    const answerElements = [...document.querySelectorAll(answer.value)];

    props.correctSelectors.forEach(correctSelector => {
      const correctElements = [...document.querySelectorAll(correctSelector)];
      let elementChecks:boolean[] = []
      // check length
      if (answerElements.length === correctElements.length) {
        // check if each element matches
        answerElements.forEach((answerEl, i) => {
          answerEl === correctElements[i] ? elementChecks = [...elementChecks, true] : elementChecks = [...elementChecks, false]
        })
        if (!elementChecks.includes(false)) {
          correctAnswerGiven.value = true
        }
      }
    });
    
  }
}

</script>


<template>

<div class="Prompt">
  <h2 class="Prompt-header">{{ header }}</h2>
  <div class="Prompt-explanation">
    <p v-for="(explanation, index) in explanationPs" :key="'explanation' + index">
        {{ explanation }}
    </p>
  </div>
  <input
    v-if="!selectAll" 
    class="Prompt-input"
    type="text"
    v-model="answer"
    :placeholder="inputPlaceholder"
    @keydown="(event) => checkSingleAnswer(event)"
  >
  <input 
    v-if="selectAll" 
    class="Prompt-input"
    type="text"
    v-model="answer"
    :placeholder="inputPlaceholder"
    @keydown="(event) => checkSelectAllAnswer(event)"
  >
  <p class="Prompt-check-tip">press Enter to check answer</p>
  <div class="correct" v-if="correctAnswerGiven">you did it!</div>
</div>

</template>

<style>

.Prompt-input {
  width: 100%;
  padding: 4px 0px;
  margin: 0px;
}

</style>