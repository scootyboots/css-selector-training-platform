<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '../router'
import { findCurrentRouteIndex } from '../utils/utils'
import { exercisePathKeys } from '../router/paths'
import { ref } from 'vue'

const currentPath = ref(useRoute().fullPath)

const currentPathIndex = ref(findCurrentRouteIndex(currentPath.value))
const activeExerciseKeys = ref(exercisePathKeys.slice(0, currentPathIndex.value))
const inactiveExerciseKeys = ref(exercisePathKeys.slice(currentPathIndex.value))

const progressWidth = ref(`${(100 / (exercisePathKeys.length - 1)) * currentPathIndex.value}%`)

router.afterEach((to, from) => {
  console.log('to from router', to)
  currentPath.value = to.fullPath
  currentPathIndex.value = findCurrentRouteIndex(currentPath.value)
  activeExerciseKeys.value = exercisePathKeys.slice(0, currentPathIndex.value)
  inactiveExerciseKeys.value = exercisePathKeys.slice(currentPathIndex.value)
  progressWidth.value = `${(100 / (exercisePathKeys.length - 1)) * currentPathIndex.value}%`
})
</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div v-for="exercisePath in activeExerciseKeys" class="Progress-exercise --active"></div>
    <div v-for="exercisePath in inactiveExerciseKeys" class="Progress-exercise"></div>
  </div>
</div>

</template>

<style>

.Progress {
  position: absolute;
  left: 3.5rem;
  display: flex;
  align-items: center;
  margin: 2rem auto 1rem auto;
  height: 0.2rem;
  border-radius: 0.2rem;
  background-color: var(--lowlight);
  width: calc(40% - 6rem);
}

.Progress-exercises {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%
}

.Progress-exercises-bar {
  position: absolute;
  top: 0.2rem;
  left: 0;
  background-color: var(--highlight-purple);
  height: 0.2rem;
  width: v-bind(progressWidth);
  transition: 0.65s;
}

.Progress-exercise {
  width: 0.6rem;
  height: 0.6rem;
  background-color: var(--lowlight);
  border-radius: 100%;
  z-index: 100;
  transition: 0.95s;
}

.--active {
  background-color: var(--highlight-purple);
}

</style>