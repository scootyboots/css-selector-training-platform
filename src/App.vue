<script setup lang="ts">
import Exercise from './components/Exercise.vue'
</script>

<template>
  <router-link to="/">hello world</router-link>
  <router-link to="/exercise/1">exercise</router-link>
  <router-view/>
</template>

<style>
:root {
  --main-bg-color: rgba(43,42,47,255);
  /* --primary-color: rgba(82,96,124,255); */
  --text-color: rgba(235,242,245,255);
  --lowlight: rgba(82,96,124,255);

  --highlight-pink: rgba(246,55,147,255);
  --highlight-yellow: rgba(248,251,178,255);
  --highlight-purple: rgba(215,177,235,255);
  --highlight-blue: rgba(143,230,244,255);
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: var(--main-bg-color);
}

body {
  margin: 0;
  background-color: var(--main-bg-color);
}
</style>
