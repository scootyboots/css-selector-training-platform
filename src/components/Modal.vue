<script setup lang="ts">

</script>

<template>
  <div class="Information-modal">
    <div class="Information-modal-bg" @click="$emit('close-modal')"></div>
    <div class="Information-modal-content-container">
      <div class="Information-modal-content">
        this is the modal
        <slot></slot>
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
  z-index: 1000;
}

.Information-modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000d9;
  z-index: 1001;
}

.Information-modal-content-container {
  /* display: flex; */
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  z-index: 1002;
  background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  /* box-shadow: 
    rgb(255 255 255 / 20%) 0px 0px 15px, 
    rgb(255 255 255 / 15%) 0px 0px 3px 1px */
}
</style>