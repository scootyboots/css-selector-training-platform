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

const compareArrayElements = (answerElements:Element[]) => {
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

const checkSingleAnswer = (event:KeyboardEvent) => {
  if (event.key === 'Enter') {
    props.correctSelectors.forEach(correctSelector => {
      if (document.querySelector(answer.value!) === document.querySelector(correctSelector)) {
        correctAnswerGiven.value = true
      }
      if (document.querySelector(`.browser__page-content-container ${answer.value!}`) === document.querySelector(correctSelector)) {
        correctAnswerGiven.value = true
      }
      if (document.querySelector(`.two-pain-grid__right ${answer.value!}`) === document.querySelector(correctSelector)) {
        correctAnswerGiven.value = true
      }
    });
  }
}

const checkSelectAllAnswer = (event:KeyboardEvent) => {
  if (event.key === 'Enter') {
    const answerElements = [...document.querySelectorAll(answer.value)];
    const answerElementsScoped = [...document.querySelectorAll(`.browser__page-content-container ${answer.value}`)];
    compareArrayElements(answerElements)
    compareArrayElements(answerElementsScoped)
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
  <p class="Prompt-check-tip"><span class="hotkey">Enter</span>to check answer</p>
  <div class="Prompt-correct" v-if="correctAnswerGiven">you did it!</div>
</div>

</template>

<style scoped>

* {
  color: var(--text-color)
}
.Prompt-input {
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 98%;
  padding: 4px 0px;
  margin: 0px;
  border-bottom: 2px solid var(--highlight-pink);
  color: var(--highlight-pink);
  font-size: 18px;
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  transition: .115s;
}

/* 
TODO: make animation for wrong answer
*/

.Prompt-input:focus {
  outline: none;
  border-bottom: 5px solid var(--highlight-pink);
}

.Prompt-input::placeholder {
  color: var(--lowlight);
  font-size: 16px;
  font-style: italic;
}

.Prompt-header {
  font-family: 'Open Sans', sans-serif;
  /* color: var(--highlight-purple); */
}

.Prompt-check-tip {
  color: var(--lowlight);
  font-size: 0.8em;
  font-style: italic;
}

.Prompt-correct {
  color: var(--highlight-blue)
}

.hotkey {
  padding: 2px 6px;
  margin-right: 4px;
  background-color: var(--lowlight);
  color: var(--main-bg-color);
  font-weight: 700;
  border-radius: 3px;
  box-shadow: -2px 2px 0px #202024;
}

</style>