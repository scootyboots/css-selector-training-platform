<script setup lang="ts">
import { useRoute } from 'vue-router';
import paths from '../router/paths'
import { Paths } from '../types/types'
import { findCurrentRouteIndex } from '../utils/utils';
// TODO: refactor this to use the routs array
// something like
// routs.findOf(route => route.path === currentPath)
const exerciseKeys = Object.keys(paths)
const exercisePaths = exerciseKeys.map(key => paths[<keyof Paths>key])
const currentPath = useRoute().fullPath
const currentPathIndex = findCurrentRouteIndex(currentPath)

let inactiveIndexes = ['']
if (typeof currentPathIndex === 'number') {
  inactiveIndexes = exerciseKeys.splice(currentPathIndex + 1, exerciseKeys.length - 1)
}

const progressWidth = `${(100 / (exercisePaths.length - 1)) * currentPathIndex}%`


</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div v-for="(key, index) in exerciseKeys" class="Progress-exercise --active"></div>
    <div v-for="(key, index) in inactiveIndexes" class="Progress-exercise"></div>
      <!-- {{ paths[<keyof Paths>key] === currentPath ?   }} -->
  </div>
</div>

</template>

<style>

.Progress {
  position: absolute;
  top: -1rem;
  left: 0;
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 0.2rem;
  width: calc(100% - 2rem);
  border-radius: 0.2rem;
  background-color: var(--lowlight);
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
}

.Progress-exercise {
  width: 0.6rem;
  height: 0.6rem;
  background-color: var(--lowlight);
  border-radius: 100%;
  z-index: 1000;
}

.--active {
  background-color: var(--highlight-purple);
}

</style>