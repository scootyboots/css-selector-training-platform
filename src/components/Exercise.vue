<script setup lang="ts">
import { Component } from 'vue';
import Browser from './Browser.vue'
import Prompt from './Prompt.vue';
import Progress from './Progress.vue'
// import TrainingSite from '../components/training_sites/TrainingSite.vue'

interface ExerciseProps {
  explanationArray: string[]
  correctSelectors: string[]
  selectAll: boolean
  browserUrl: string
  nextStepPath: string
}

const props = defineProps<ExerciseProps>()

// const explanationArray = [
//   'this is the first paragraph',
//   'this is the second paragraph'
// ]

// const correctSelectors = [
//   '.browser__page-content p'
// ]
</script>

<template>

    <div class="two-pain-grid">
    <div class="two-pain-grid__left">
      <div class="two-pain-grid__left-container">
        <Progress />
        <Prompt 
          header="Example Exercise" 
          :explanationPs="explanationArray"
          inputPlaceholder="input CSS selector here"
          :correctSelectors="correctSelectors"
          :selectAll="selectAll"
        />
      </div>
    </div>
    <div class="two-pain-grid__right">
      <div class="two-pain-grid__right-container">
        <Browser :url="browserUrl">
          <slot></slot>
        </Browser>
      </div>
    </div>
  </div>

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
  }

  .browser__page-content-container {
    max-width: 100%;
  }
}

</style>