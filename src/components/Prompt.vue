<script setup lang="ts">
import { ref } from 'vue';

interface PromptProps {
  header: string
  explanationPs: string[]
  inputPlaceholder: string
  correctSelectors: string[]
}

const props = defineProps<PromptProps>()

const answer = ref<string>('')

const correctAnswerGiven = ref<boolean>(false)

const checkAnswer = (event:KeyboardEvent) => {
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
    class="Prompt-input"
    type="text"
    v-model="answer"
    :placeholder="inputPlaceholder"
    @keydown="(event) => checkAnswer(event)"
  >
  <p>{{ answer }}</p>
  <p class="Prompt-check-tip">press Enter to check answer</p>
  <!-- <button class="testing" @click.prevent="checkAnswer()">check</button> -->
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