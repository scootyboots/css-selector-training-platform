<script setup lang="ts">
import { Component, ref } from 'vue';
import Browser from './Browser.vue'
import Prompt from './Prompt.vue';
import Modal from './Modal.vue'

interface ExerciseProps {
  explanationArray: string[]
  correctSelectors: string[]
  selectAll: boolean
  browserUrl: string
  modalDefaultDisplay: boolean
  allowModalToggle: boolean
  hint: string
}

const props = defineProps<ExerciseProps>()

const displayModal = ref<boolean>(props.modalDefaultDisplay)
const displayHint = ref<boolean>(false)

const inputSelector = 'input.Prompt-input'

const handleHotkeyPress = (event:KeyboardEvent) => {
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
    event.preventDefault()
    if (checkInputFocus()) {
      const answerInputElement:HTMLInputElement | null = document.querySelector(inputSelector)
      if (answerInputElement) {
        answerInputElement.focus()
      }
    }
  }
}

const checkInputFocus = () => {
  const activeElement = document.activeElement
  const answerInputElement = document.querySelector(inputSelector)
  return activeElement === answerInputElement
}

window.addEventListener('keydown', (event) => handleHotkeyPress(event))

</script>

<template>

    <div class="two-pain-grid">
    <div class="two-pain-grid__left">
      <div class="two-pain-grid__left-container">
        <Prompt 
          header="Example Exercise" 
          :explanation-array="explanationArray"
          input-placeholder="input CSS selector here"
          :correct-selectors="correctSelectors"
          :select-all="selectAll"
          :allow-modal-toggle="allowModalToggle"
          :display-hint="displayHint"
          :hint="hint"
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
  
  <Transition name="fade">
    <div class="darken-fullscreen" v-if="displayModal" @click="displayModal = false"></div>
  </Transition>
  <Transition name="slide-fade">
    <Modal v-show="displayModal && allowModalToggle" @close-modal="displayModal = false">
      <slot name="modal-content"/>
    </Modal>
  </Transition>

</template>

<style>

.two-pain-grid {
  display: grid;
  grid-template-columns: 40% auto 15px;
}

.two-pain-grid__left {
  position: relative;
}

.two-pain-grid__right{
  
}

.two-pain-grid__left-container {
  position: relative;
  min-width: 260px;
  margin: 40px;
  padding: 20px;
  /* border-radius: 5px; */
  /* -webkit-box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%);
  box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%); */
}

.two-pain-grid__right-container {
  margin: 15px auto 15px auto;
  position: sticky;
  top: 15px;
  max-width: 950px;
}

@media (max-width: 1090px) {
  .two-pain-grid {
    position: relative;
  }

  .two-pain-grid__right {
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    z-index: 1000;
  }

  .browser__page-content-container {
    max-width: 100%;
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