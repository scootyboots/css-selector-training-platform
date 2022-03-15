<script setup lang="ts">
</script>

<template>

  <div class="Information-modal">
    <div class="Information-modal-bg" @click="$emit('close-modal')"></div>
    <div class="Information-modal-content-container">
      <div class="Information-modal-content">
          <slot/>
      </div>
    </div>
  </div>

</template>

<style>
.Information-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.Information-modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: 10001;
}

.Information-modal-content-container {
  /* display: flex; */
  overflow: auto;
  width: 80%;
  max-width: 70rem;
  height: 80vh;
  margin: 0 auto;
  z-index: 10002;
  background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  /* box-shadow: 
    rgb(255 255 255 / 20%) 0px 0px 15px, 
    rgb(255 255 255 / 15%) 0px 0px 3px 1px */
}

.Information-modal-content-container::-webkit-scrollbar {
  width: 0.8rem;
}

.Information-modal-content-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgb(24, 24, 24); 
  border-radius: 2rem;

}

.Information-modal-content-container::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24); 
  border-radius: 2rem;
}

.Information-modal-content {
  margin: 2rem;
  color: var(--text-color);
}
.Information-modal-content h2 {
  text-align: center;
  /* text-shadow: -1px 1px 0 var(--highlight-purple); */
  
}
.Information-modal-content a {
  color: var(--highlight-blue);
}

</style>