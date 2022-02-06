<script setup lang="ts">
import { useRoute } from 'vue-router';
import { routes } from '../router'
import { findCurrentRouteIndex } from '../utils/utils';

const currentPath = useRoute().fullPath
const currentPathIndex = findCurrentRouteIndex(currentPath)


// let inactiveRoutes = [{}]
// if (typeof currentPathIndex === 'number') {
//   inactiveRoutes = routesToSplice.splice(currentPathIndex + 1, routes.length - 1)
// }

const activeRoutes = routes.slice(0, currentPathIndex)
const inactiveRoutes = routes.slice(currentPathIndex)


const progressWidth = `${(100 / (routes.length - 1)) * currentPathIndex}%`

</script>

<template>

<div class="Progress">
  <div class="Progress-exercises">
    <span class="Progress-exercises-bar"></span>
    <div v-for="route in activeRoutes" class="Progress-exercise --active"></div>
    <div v-for="route in inactiveRoutes" class="Progress-exercise"></div>
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
  z-index: 100;
}

.--active {
  background-color: var(--highlight-purple);
}

</style>