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
  findCompletedExercises()
})

const findCompletedExercises = () => {
    for (const path in exercisePaths) {
    if (localStorage.getItem(exercisePaths[<keyof ExercisePaths>path])) {
      if (!completeExerciseKeys.value.includes(path)) {
        completeExerciseKeys.value = [...completeExerciseKeys.value, path]
      }
    }
  }
}

const fillCompletedExercise = () => {
  completeExerciseKeys.value.forEach(key => {
    if (key) {
      setTimeout(() => {
        console.log('tried adding complete with', `[data-path="${key}"]`)
        const completeIndicatorElement = document.querySelector(`[data-path="${key}"]`)
        console.log('which selects', completeIndicatorElement)
        if (completeIndicatorElement) {
          completeIndicatorElement.setAttribute('data-exercise-completed', 'true')
          completeIndicatorElement.addEventListener('click', () => handleExerciseClick(key))
        }
      }, 1000)
    }
  });
  // console.log(localStorage, completedIndexes)
  // console.log(exerciseIndicators)
  // exerciseIndicators.forEach((el, i) => {
  //   console.log(el)
  //   console.log(i)
  //   console.log(completedIndexes.value.includes(i))
  //   if (completedIndexes.value.includes(i)) {
  //     console.log('adding to', el)
  //     el.setAttribute('data-exercise-completed', 'true')
  //     el.addEventListener('click', () => handleExerciseClick(i))
  //   }
  // })
}


onUpdated(() => {
    findCompletedExercises()
})

onMounted(() => {
  findCompletedExercises()
})

</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div 
      v-for="(exercisePath, index) in activeExerciseKeys" 
      class="Progress-exercise" :ref="exercisePath" 
      :data-exercise-completed="`${completeExerciseKeys.includes(exercisePath) ? 'true' : 'false'}`"
      :data-path="exercisePath"  
      :key="`exercise-${index}`"
      >
    </div>
    <div 
      v-for="(exercisePath, index) in inactiveExerciseKeys" 
      :class="`Progress-exercise ${index < 1 ? '--current' : ''}`" 
      :data-exercise-completed="`${completeExerciseKeys.includes(exercisePath) ? 'true' : 'false'}`"
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