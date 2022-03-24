<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Progress from './components/Progress.vue'
import Modal from './components/Modal.vue'
import MobileWarning from './components/modal_content/MobileWarning.vue'
const displayMobileWarning = ref<boolean>(false)

onMounted(() => {
  const screenWidth = window.innerWidth
  if (screenWidth < 1090) displayMobileWarning.value = true
})

</script>

<template>
  <Modal v-show="displayMobileWarning" @click="displayMobileWarning = false" :display="displayMobileWarning" :toggle="displayMobileWarning">
    <MobileWarning/>
  </Modal>
  <Progress />
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

  --browser-height: calc(95vh - 150px);
  --browser-width: calc(60vw - 40px);
}

html {
  font-size: 10px
}

body {
  font-size: 1.6rem;
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

.--selected-from-answer {
  -webkit-box-shadow: 0px 0px 2px 2px rgba(246,55,147,0.72); 
  box-shadow: 0px 0px 2px 2px rgba(246,55,147,0.70);
  transition: 0.175s;
}
</style>
