<script setup lang="ts">

defineProps<{url: string}>()

</script>

<template>

 <div class="browser">
    <div class="browser-container">
      <div class="browser__window-buttons">
        <div class="browser__window-buttons-red"></div>
        <div class="browser__window-buttons-yellow"></div>
        <div class="browser__window-buttons-green"></div>
      </div>
      <div class="browser__nav-area">
        <div class="browser__nav-area__URL-input">
          <div class="browser__nav-area__URL-input-text">{{ url }}</div>
        </div>
      </div>
      <div class="browser__page-content">
        <div class="browser__page-content-container">
          <slot>this is the slot!</slot>
        </div>  
      </div>
    </div>
  </div>

</template>

<style scoped>

.browser {
  border-radius: 6px;
  background-color: #202124;
  /* light mode box shadow 
  -webkit-box-shadow: 0px 0px 40px -3px #000000bf; 
  box-shadow: 0px 0px 40px -3px #000000bf; */
  /* box-shadow: 0px 0px 15px -3px rgb(143 230 244 / 50%); */
  box-shadow: 0px 0px 15px -3px rgb(165 165 165 / 65%);
}

.browser__window-buttons {
  padding: 15px;
}

.browser__window-buttons-red {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 5px;
  border-radius: 100%;
  background-color: #e34949;
}

.browser__window-buttons-yellow {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 5px;
  border-radius: 100%;
  background-color: #ffb700;
}

.browser__window-buttons-green {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin-right: 5px;
  border-radius: 100%;
  background-color: #2cc91d;
}

.browser__nav-area {
  padding: 10px 15px;
  background-color: #35363a;
}

.browser__nav-area__back {
  display: inline-block;
}

.browser__nav-area__forward {
  display: inline-block;
}

.browser__nav-area__URL-input {
  width: 100%;
  background-color: #202124;
  color: white;
  display: inline-block;
  border-radius: 25px;
}

.browser__nav-area__URL-input-text {
  margin: 10px 25px;
}

.browser__page-content {
  padding: 15px;
}

.browser__page-content-container {
  max-height: calc(95vh - 150px);
  max-width: calc(60vw - 40px);
  min-width: 650px;
  min-height: 600px;
  overflow: auto;
  background-color: white;
}

@media (max-width: 1090px) {
  .browser__page-content-container {
    max-width: 100%;
  }
}

</style>