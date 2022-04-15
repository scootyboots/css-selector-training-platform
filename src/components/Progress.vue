<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '../router'
import { findCurrentRouteIndex, findNextPreviousPath } from '../utils/utils'
import { exercisePathKeys, exercisePaths } from '../router/paths'
import { ref, onMounted, onUpdated } from 'vue'
import { ExercisePaths } from '../types/types';

const currentPath = ref(useRoute().fullPath)

const currentPathIndex = ref(findCurrentRouteIndex(currentPath.value))
const activeExerciseKeys = ref(exercisePathKeys.slice(0, currentPathIndex.value))
const inactiveExerciseKeys = ref(exercisePathKeys.slice(currentPathIndex.value))
const completeExerciseKeys = ref([''])

const progressWidth = ref(`${(100 / (exercisePathKeys.length - 1)) * currentPathIndex.value}%`)

interface ProgressIndicator {
  key: string
  completed: boolean
  current: boolean
}

const progressIndicators = ref<ProgressIndicator[] | []>([])

const setProgressIndicatorState = () => {
  exercisePathKeys.forEach((key, index) => {
    let progressIndicator:ProgressIndicator = { key: '', completed: false, current: false}
    progressIndicator.key = key
    currentPathIndex.value === index ? progressIndicator.current = true : progressIndicator.current = false
    if (completeExerciseKeys.value.includes(key)) {
      progressIndicator.completed = true
    } else {
      progressIndicator.completed = false
    }
    progressIndicators.value = [...progressIndicators.value, progressIndicator]
  })
}

const handleExerciseClick = (key:string) => {
  const path = exercisePaths[<keyof ExercisePaths>key]
  router.push(path)
}

router.afterEach((to, from) => {
  console.log('to from router', to)
  currentPath.value = to.fullPath
  currentPathIndex.value = findCurrentRouteIndex(currentPath.value)
  activeExerciseKeys.value = exercisePathKeys.slice(0, currentPathIndex.value)
  inactiveExerciseKeys.value = exercisePathKeys.slice(currentPathIndex.value)
  progressWidth.value = `${(100 / (exercisePathKeys.length - 1)) * currentPathIndex.value}%`
  // findCompletedExercises()
})

const findCompletedExercises = () => {
    for (const path in exercisePaths) {
    if (localStorage.getItem(exercisePaths[<keyof ExercisePaths>path])) {
      if (completeExerciseKeys.value) {
        if (!completeExerciseKeys.value.includes(path)) {
          completeExerciseKeys.value = [...completeExerciseKeys.value, path]
        }
      }
    }
  }
}

const checkIfCompleted = (exercisePath:string) => {
  if (completeExerciseKeys.value) {
    return completeExerciseKeys.value.includes(exercisePath)
  } else {
    return false
  }
}


onUpdated(() => {
  findCompletedExercises()
  setProgressIndicatorState()
})

onMounted(() => {
  findCompletedExercises()
  setProgressIndicatorState()
})

</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div 
      v-for="(exercisePath, index) in activeExerciseKeys" 
      class="Progress-exercise" :ref="exercisePath" 
      :data-exercise-completed="`${checkIfCompleted(exercisePath) ? 'true' : 'false'}`"
      @click="handleExerciseClick(exercisePath)"
      :data-path="exercisePath"  
      :key="`exercise-${index}`"
      >
    </div>
    <div 
      v-for="(exercisePath, index) in inactiveExerciseKeys" 
      :class="`Progress-exercise ${index < 1 ? '--current' : ''}`" 
      :data-exercise-completed="`${checkIfCompleted(exercisePath) ? 'true' : 'false'}`"
      @click="handleExerciseClick(exercisePath)"
      :data-path="exercisePath" 
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
  transition: 2.95s;
}

/* .--active {
  background-color: var(--highlight-purple);
  cursor: pointer;
} */

[data-exercise-completed="true"] {
  background-color: var(--highlight-purple);
  cursor: pointer;
}

[data-exercise-completed="false"] {
  pointer-events: none;
}

.--current {
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