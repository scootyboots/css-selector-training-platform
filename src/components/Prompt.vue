<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';
import { findNextPreviousPath, lastPathCheck, findKeyFromPath, findCurrentRouteIndex } from '../utils/utils'
import { useRoute } from 'vue-router';
import ShortcutIndicatorVue from './ShortcutIndicator.vue';
import BoolStateDisplay from './BoolStateDisplay.vue';
import GitHubIcon from './svg_components/GitHubIcon.vue';

const currentPath = useRoute().fullPath

interface PromptProps {
  header: string
  explanationArray: string[]
  inputPlaceholder: string
  correctSelectors: string[]
  selectAll: boolean
  allowModalToggle: boolean
  defaultDisplayHint: boolean
  hint: string
  answerCondition?: {regex: RegExp, ifRegexMatchDontProceed: boolean}
}

const props = defineProps<PromptProps>()
const answer = ref<string>('')
const lastCheckedAnswer = ref<string>('')
const correctAnswerGiven = ref<boolean>(false)
const wrongAnswerAnimation = ref<boolean>(false)
const isLastPath = ref<boolean>(lastPathCheck(currentPath))
const showNextLink = ref<boolean>(false)



const handleWrongAnswer = () => {
  wrongAnswerAnimation.value = true
  setTimeout(() => wrongAnswerAnimation.value = false, 180)
}

const fillLastCircle = () => {
  if (correctAnswerGiven.value && isLastPath.value) {
    const lastProgressCircle = document.querySelector('.Progress-exercise:last-child')
    if (lastProgressCircle) {
      lastProgressCircle.classList.add('--active')
    }
  }
}

const getIframeDocument = ():Document => {
  const iframe = document.querySelector('.browser__iframe') as HTMLIFrameElement
  return iframe.contentWindow!.document
}


const compareArrayElements = (answerElements:Element[]) => {
  props.correctSelectors.forEach(correctSelector => {
      const correctElements = [...getIframeDocument().querySelectorAll(correctSelector)];
      let elementChecks:boolean[] = []
      // check length
      if (answerElements.length === correctElements.length) {
        // check if each element matches
        answerElements.forEach((answerEl, i) => {
          answerEl === correctElements[i] ? elementChecks = [...elementChecks, true] : elementChecks = [...elementChecks, false]
        })
        if (!elementChecks.includes(false)) {
          correctAnswerGiven.value = true
          fillLastCircle()
          updateLocalStorage()
        }
      }
  });
}

const checkSingleAnswer = (clicked:boolean, event?:KeyboardEvent) => {
  if (event) {
    if (event.key === 'Enter' || clicked) {
      singleAnswerLogic()
      highlightSelected(false)
      if (!correctAnswerGiven.value) {
        handleWrongAnswer()
      }
    } 
  }
  if (clicked) {
    singleAnswerLogic()
    highlightSelected(false)
    if (!correctAnswerGiven.value) {
      handleWrongAnswer()
    }
  }
}

const checkSelectAllAnswer = (clicked:boolean, event?:KeyboardEvent) => {
  if (event) {
    if (event.key === 'Enter') {
      selectAllLogic()
      highlightSelected(true)
      if (!correctAnswerGiven.value) {
        handleWrongAnswer()
      }
    }
  }
  if (clicked) {
    selectAllLogic()
    highlightSelected(true)
    if (!correctAnswerGiven.value) {
      handleWrongAnswer()
    }
  }
}


const singleAnswerLogic = () => {
  if (answer.value === '') return
  // check to make sure one one's trying to game the system 
  // by using the attribute that highlights the selected elements
  if (/data-selected-from-answer/.test(answer.value)) {
    handleWrongAnswer()
  } else if (props.answerCondition && checkCondition()) {
    handleWrongAnswer()
  } else {
    props.correctSelectors.forEach(correctSelector => {
      if (getIframeDocument().querySelector(answer.value!) === getIframeDocument().querySelector(correctSelector)) {
        correctAnswerGiven.value = true
        fillLastCircle()
        updateLocalStorage()
      }
      if (getIframeDocument().querySelector(`.browser__page-content-container ${answer.value!}`) === getIframeDocument().querySelector(correctSelector)) {
        correctAnswerGiven.value = true
        fillLastCircle()
        updateLocalStorage()
      }
      if (getIframeDocument().querySelector(`.two-pain-grid__right ${answer.value!}`) === getIframeDocument().querySelector(correctSelector)) {
        correctAnswerGiven.value = true
        fillLastCircle()
        updateLocalStorage()
      }
    });
  }
}

// TODO: update so that the logic works with the iframe'd in test site
const selectAllLogic = () => {
  if (answer.value === '') return
  // check to make sure no one's trying to game the system 
  // by using the attribute that highlights the selected elements
  if (/data-selected-from-answer/.test(answer.value)) {
    handleWrongAnswer()
  } else if (props.answerCondition && checkCondition()) {
    handleWrongAnswer()
  } else {
    const answerElements = [...getIframeDocument().querySelectorAll(answer.value)];
    // const answerElementsScoped = [...getIframeDocument().querySelectorAll(`.browser__page-content-container ${answer.value}`)];
    compareArrayElements(answerElements)
    // compareArrayElements(answerElementsScoped) 
  }
}

const checkCondition = ():boolean => {
  if (props.answerCondition) {
    const regexMatch = props.answerCondition.regex.test(answer.value)
    if (regexMatch && props.answerCondition.ifRegexMatchDontProceed) {
      return true
    } else if (!regexMatch && !props.answerCondition.ifRegexMatchDontProceed) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const highlightSelected = (all: boolean) => {
  if (answer.value === '') return
  // const browserElement = getIframeDocument().querySelector('.browser')
  if (lastCheckedAnswer.value) {
    const lastSelectedElements = [...getIframeDocument().querySelectorAll(lastCheckedAnswer.value)]
    if (lastSelectedElements.length > 0) {
      lastSelectedElements.forEach(el => { if (getIframeDocument()?.contains(el)) el.removeAttribute('data-selected-from-answer') })
    }
  }
  const selectedElements = all ? [...getIframeDocument().querySelectorAll(answer.value)] : [getIframeDocument().querySelectorAll(answer.value)[0]]
  if (selectedElements.length > 0) {
    selectedElements.forEach(el => { if (getIframeDocument()?.contains(el)) el.setAttribute('data-selected-from-answer' , 'true') })
  }
  lastCheckedAnswer.value = answer.value
}

const updateLocalStorage = () => {
 const completedFromLocalStorage = localStorage.getItem('completed')

  if (typeof completedFromLocalStorage === 'string') {
    let parsedCompleted:string[] | [] = JSON.parse(completedFromLocalStorage)
    if (correctAnswerGiven.value)  {
      parsedCompleted = [...parsedCompleted, findKeyFromPath(currentPath)]
      parsedCompleted = [...new Set(parsedCompleted)]
      localStorage.setItem('completed', JSON.stringify(parsedCompleted))
    }
  } 
}

</script>


<template>

<div class="Prompt">
  <h2 class="Prompt-header">{{ header }}</h2>
  <div class="Prompt-explanation">
    <p v-for="(explanation, index) in explanationArray" :key="'explanation' + index">
        {{ explanation }}
    </p>
  </div>
  <div class="Prompt-input-container">
    <input
      v-if="!selectAll" 
      :class="`Prompt-input ${wrongAnswerAnimation ? 'shake-horizontal' : ''}`"
      type="text"
      v-model="answer"
      :placeholder="inputPlaceholder"
      @keydown="(event) => checkSingleAnswer(false, event)"
    >
    <input 
      v-if="selectAll" 
      :class="`Prompt-input ${wrongAnswerAnimation ? 'shake-horizontal' : ''}`"
      type="text"
      v-model="answer"
      :placeholder="inputPlaceholder"
      @keydown="(event) => checkSelectAllAnswer(false, event)"
    >
  </div>
  <BoolStateDisplay v-if="!selectAll" badge="1st" tooltip="this exercise looks for the first element your selector targets"/>
  <BoolStateDisplay v-if="selectAll"  badge="All" tooltip="this exercise looks for all the elements your selector targets"/>
  <div class="Prompt-shortcuts">
    <ShortcutIndicatorVue v-if="!selectAll" hotkey="Enter" @click="checkSingleAnswer(true)" explanation="to check answer" />
    <ShortcutIndicatorVue v-if="selectAll" hotkey="Enter" @click="checkSelectAllAnswer(true)" explanation="to check answer" />
    <ShortcutIndicatorVue hotkey="l" explanation="to focus input" @click="$emit('l-clicked')"/>
    <ShortcutIndicatorVue v-if="allowModalToggle" hotkey="i" explanation="to show information" @click="$emit('i-clicked')"/>
    <ShortcutIndicatorVue v-if="hint" hotkey="h" explanation="to get a hint" @click="$emit('h-clicked')" />
  </div>

  <div class="Prompt-notification-area">
    <Transition name="slide-in">
      <div class="Prompt-hint" v-if="defaultDisplayHint">{{ hint }}</div>
    </Transition>
    
    <Transition name="slide-in" @after-enter="showNextLink = true">
      <div class="Prompt-correct" v-if="correctAnswerGiven && !isLastPath">
        you did it!
        <Transition name="fade-in">
          <router-link :to="findNextPreviousPath(currentPath, 'next')" v-if="showNextLink" class="next-exercise-link">next</router-link>
        </Transition>
      </div>
    </Transition>

    <Transition name="slide-in">
      <div class="Prompt-correct last" v-if="correctAnswerGiven && isLastPath">
        you finished all the exercises!
      </div>
    </Transition>
  </div>
  <div class="External-links">
    <div class="External-links-link">
      <a href="https://github.com/scootyboots/css-selector-training-platform" target="_blank" rel="noopener noreferrer">
        <GitHubIcon class="github-logo" />
      </a>
      <div class="link-text">check out on GitHub</div>
    </div>
  </div>
</div>

</template>

<style scoped>

.Prompt {
  position: relative;
}

* {
  color: var(--text-color)
}

.Prompt-input-container {
  position: relative;
  height: 4rem;
}
.Prompt-input {
  position: absolute;
  top: 0;
  left: 0;
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
  transition: .065s;
}

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

.Prompt-notification-area {
  min-height: 25rem;
}

.Prompt-correct {
  color: var(--highlight-blue)
}

.Prompt-hint {
  background-color: var(--highlight-yellow);
  color: var(--main-bg-color);
  font-size: 1.6rem;
  border-radius: 0.3rem;
  box-shadow: -4px 4px 0px #202024;
  padding: 1rem;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
}

.External-links .link-text {
  color: var(--lowlight);
  font-size: 1.4rem;
  padding-left: 0.6rem;
}
.External-links-link {
  display: flex;
  align-items: center;
}

.External-links-link a {
  height: 3.2rem;
}

.github-logo {
  width: 3rem;
}

@media (max-width: 1090px) {
  .Prompt-notification-area { min-height: 25rem; }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.175s ease-in;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
.slide-in-enter-active {
  transition: all 0.175s;
}
.slide-in-leave-active {
  transition: all 0.175s ease-out;
}
.slide-in-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-in-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.shake-horizontal {
	-webkit-animation: shake-horizontal 0.175s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: shake-horizontal 0.175s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-1-19 18:36:38
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  22% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  
  44% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }

  66% {
    -webkit-transform: translateX(2px);
            transform: translateX(2px);
  }
  88% {
    -webkit-transform: translateX(-2px);
            transform: translateX(-2px);
  }
}
@keyframes shake-horizontal {
   0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  22% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
  }
  
  44% {
    -webkit-transform: translateX(4px);
            transform: translateX(4px);
  }

  66% {
    -webkit-transform: translateX(2px);
            transform: translateX(2px);
  }
  88% {
    -webkit-transform: translateX(-2px);
            transform: translateX(-2px);
  }
}


</style>