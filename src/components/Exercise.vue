<script setup lang="ts">
import { onMounted, onBeforeUnmount, onRenderTriggered, ref } from 'vue';
import Browser from './Browser.vue'
import Prompt from './Prompt.vue';
import Modal from './Modal.vue'

interface ExerciseProps {
  promptHeader: string
  explanationArray: string[]
  correctSelectors: string[]
  selectAll: boolean
  browserUrl: string
  modalDefaultDisplay: boolean
  allowModalToggle: boolean
  hint: string
  answerCondition?: {regex: RegExp, wantToMatch: boolean}
}

const props = defineProps<ExerciseProps>()

const displayModal = ref<boolean>(props.modalDefaultDisplay)
const displayHint = ref<boolean>(false)

const inputSelector = 'input.Prompt-input'

function focusInput() {
  const answerInputElement:HTMLInputElement | null = document.querySelector(inputSelector)
  if (answerInputElement) {
      answerInputElement.focus()
  }
}

function checkInputFocus() {
  const activeElement = document.activeElement
  const answerInputElement = document.querySelector(inputSelector)
  return activeElement === answerInputElement
}

function handleHotkeyPress (event:KeyboardEvent) {
  if (event.key === 'i') {
    if (props.allowModalToggle) {
      if (!checkInputFocus()) {
        displayModal.value = !displayModal.value
      }
    }
  }
  if (event.key === 'Escape') {
    displayModal.value = false
  }
  if (event.key === 'h') {
    if (props.hint) {
      if (!checkInputFocus()) {
        displayHint.value = !displayHint.value
      }
    }
  }
  if (event.key === 'l') {
    if (!event.metaKey) {
      if (!checkInputFocus()) {
        event.preventDefault()
        focusInput()
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', (event) => handleHotkeyPress(event))
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', (event) => handleHotkeyPress(event))
  const browserElements = [...document.querySelectorAll('.browser *')];
  browserElements.forEach(el => {
    el.classList.remove('--selected-from-answer')
  })
})

</script>

<template>

  <div class="two-pain-grid">
    <div class="two-pain-grid__left">
      <div class="two-pain-grid__left-container">
        <Prompt 
          :header="promptHeader" 
          :explanation-array="explanationArray"
          input-placeholder="input CSS selector here"
          :correct-selectors="correctSelectors"
          :select-all="selectAll"
          :allow-modal-toggle="allowModalToggle"
          :default-display-hint="displayHint"
          :hint="hint"
          :answer-condition="answerCondition"
          @i-clicked="displayModal = !displayModal"
          @h-clicked="displayHint = !displayHint"
          @l-clicked="focusInput"
        />
      </div>
    </div>
    <div class="two-pain-grid__right">
      <div class="two-pain-grid__right-container">
        <Browser :url="browserUrl">
          <slot name="training-site"/>
        </Browser>
      </div>
    </div>
  </div>
  
  <Modal v-show="displayModal" :display="displayModal" :toggle="allowModalToggle"  @close-modal="displayModal = false">
    <slot name="modal-content"/>
  </Modal>

</template>

<style>

.two-pain-grid {
  display: grid;
  grid-template-columns: 40% auto;
}

.two-pain-grid__left {
  position: relative;
}

.two-pain-grid__right{
  display: flex;
  align-items: center;
  min-height: 100vh;
}

.two-pain-grid__left-container {
  position: relative;
  min-width: 26rem;
  margin: 6rem 4rem 4rem 4rem;
  padding: 2rem;
  /* border-radius: 5px; */
  /* -webkit-box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%);
  box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%); */
}

.two-pain-grid__right-container {
  margin-right: 2.4rem;
  width: 100%;
  position: sticky;
  top: 1.5rem;
}

@media (max-width: 1090px) {
  .two-pain-grid {
    /* position: relative; */
  }

  .two-pain-grid__right {
    position: absolute;
    display: block;
    min-height: 0;
    top: 0;
    left: 2rem;
    right: 2rem;
    z-index: 1000;
  }

  .browser__page-content-container {
    max-width: 100%;
  }

  .two-pain-grid {
    display: block;
    /* grid-template-columns: 60% auto 15px; */
  }

  .two-pain-grid__left {
    margin-top: calc(70vh + 2rem);
  }
  .two-pain-grid__left-container {
    margin: 8rem 1rem 1rem 1rem
  }

  .two-pain-grid__right-container {
    margin-top: 1.8rem;
  }

  .Prompt {
    margin-bottom: 4rem;
  }
  .Prompt-input {
    width: 100%;
  }
  .Prompt-shortcuts {
    display: flex;
    justify-content: space-evenly;
  }
}

.darken-fullscreen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000d9;
  /* background-color: var(--main-bg-color); */
  opacity: 0.8;
  z-index: 1001;
}

/* .slide-fade-enter-active {
  transition: all 0.175s ease-out;
} */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.225s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(2rem);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}


.fade-enter-active {
  transition: all 0.125s ease-in;
}
.fade-leave-active {
  transition: all 0.45s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>