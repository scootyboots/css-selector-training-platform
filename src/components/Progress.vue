<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '../router'
import { findCurrentRouteIndex, findKeyFromPath, findNextPreviousPath } from '../utils/utils'
import { exercisePathKeys, exercisePaths } from '../router/paths'
import { ref, onMounted, onUpdated, onBeforeUpdate } from 'vue'
import { ExercisePaths } from '../types/types';

const currentPath = ref(useRoute().fullPath)
const currentPathIndex = ref(findCurrentRouteIndex(currentPath.value))
const completeExerciseKeys = ref([''])
const reachedExercises = ref([''])
const progressWidth = ref(`${(100 / (exercisePathKeys.length - 1)) * (reachedExercises.value.length - 1)}%`)

interface ProgressIndicator {
  key: string
  completed: boolean
  current: boolean
  reached: boolean
}

const progressIndicators = ref<ProgressIndicator[] | []>([])

const setProgressIndicatorState = () => {
  progressIndicators.value = []
  exercisePathKeys.forEach((key, index) => {
    let progressIndicator:ProgressIndicator = { key: '', completed: false, current: false, reached: false}
    progressIndicator.key = key
    currentPathIndex.value === index ? progressIndicator.current = true : progressIndicator.current = false
    completeExerciseKeys.value.includes(key) ? progressIndicator.completed = true : progressIndicator.completed = false
    reachedExercises.value.includes(key) ? progressIndicator.reached = true : progressIndicator.reached = false
    
    progressIndicators.value = [...progressIndicators.value, progressIndicator]
  })
}

const handleExerciseClick = (key:string) => {
  const path = exercisePaths[<keyof ExercisePaths>key]
  router.push(path)
}


router.afterEach((to, from) => {
  currentPath.value = to.fullPath
  setReachedKeysLocalStorage(currentPath.value)
  getReachedKeysFromLocalStorage()
  findCompletedExercises()
  currentPathIndex.value = findCurrentRouteIndex(currentPath.value)
  setProgressIndicatorState()
})


const findCompletedExercises = () => {

  const completedKeys = localStorage.getItem('completed')
  if (typeof completedKeys === 'string') {
    const parsedCompletedKeys = JSON.parse(completedKeys)
    completeExerciseKeys.value = parsedCompletedKeys
  }

}

const getReachedKeysFromLocalStorage = () => {
  const reachedKeys = localStorage.getItem('reached')
  console.log('reachedKeys:', reachedKeys)
  if (typeof reachedKeys === 'string') {
    const parsedReachedKeys = JSON.parse(reachedKeys)
    reachedExercises.value = parsedReachedKeys
    reachedExercises.value = reachedExercises.value.filter(key => key !== '')
    console.log('getreachedkeys', reachedExercises.value)
    progressWidth.value = `${(100 / (exercisePathKeys.length - 1)) * (reachedExercises.value.length - 1)}%`
  }
}

const setReachedKeysLocalStorage = (toPath:string) => {
  const reachedFromLocalStorage = localStorage.getItem('reached')
  if (typeof reachedFromLocalStorage === 'string') {
    let parsedReached = JSON.parse(reachedFromLocalStorage)
    if (!parsedReached.length) {
      parsedReached = [exercisePathKeys[0]]
      localStorage.setItem('reached', JSON.stringify(parsedReached))
    } else {
      parsedReached = [...parsedReached, findKeyFromPath(toPath)]
      parsedReached = [...new Set(parsedReached)]
      localStorage.setItem('reached', JSON.stringify(parsedReached))
    }
  }
}


onMounted(() => {
  if (!localStorage.getItem('reached')) localStorage.setItem('reached', '[]')
  if (!localStorage.getItem('completed')) localStorage.setItem('completed', '[]')
  setReachedKeysLocalStorage(exercisePathKeys[0])
  getReachedKeysFromLocalStorage()
  findCompletedExercises()
  setProgressIndicatorState()
})

</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div 
      v-for="(progressIndicator, index) in progressIndicators" 
      class="Progress-exercise" :ref="progressIndicator.key" 
      :data-exercise-completed="`${progressIndicator.completed}`"
      :data-exercise-current="`${progressIndicator.current}`"
      :data-exercise-reached="`${progressIndicator.reached}`"
      @click="handleExerciseClick(progressIndicator.key)"
      :key="`exercise-${index}`"
      >
    </div>
  </div>
</div>

</template>

<style>

.Progress {
  position: absolute;
  left: 5.5rem;
  display: flex;
  align-items: center;
  margin: 5.2rem auto 1.5rem auto;
  height: 0.3rem;
  border-radius: 0.6rem;
  background-color: var(--lowlight);
  width: calc(40% - 12rem);
}

.Progress-exercises {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%
}

.Progress-exercises-bar {
  position: absolute;
  top: 0.5rem;
  left: 0;
  background-color: var(--highlight-purple);
  height: 0.3rem;
  width: v-bind(progressWidth);
  transition: 0.65s;
  border-radius: 0.2rem;
}

.Progress-exercise {
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--lowlight);
  border-radius: 100%;
  z-index: 100;
  transition: .75s;
}

/* .--active {
  background-color: var(--highlight-purple);
  cursor: pointer;
} */

[data-exercise-completed="true"] {
  background-color: var(--highlight-purple);
  cursor: pointer;
}

[data-exercise-completed="true"][data-exercise-current="true"] {
  background-color: rgba(141, 95, 165, 1);
  box-shadow: none;
}

[data-exercise-reached="true"] {
  cursor: pointer;
}

[data-exercise-completed="false"]:not([data-exercise-reached="true"]) {
  pointer-events: none;
}

.--current {
  box-shadow: inset 0px 0px 0px 2px rgba(215, 177, 235, 1); 
}

[data-exercise-current="true"] , [data-exercise-reached="true"] {
  box-shadow: inset 0px 0px 0px 2px rgba(215, 177, 235, 1); 
}

@media (max-width: 1090px) { 
  .Progress {
    margin-top: 2rem;
    width: calc(100% - 5rem);
    left: 2.2rem;
    right: 2.2rem;
  }
  .Prompt-check-tip:not(:last-child) {
    margin-right: 2rem;
  }
}

</style>