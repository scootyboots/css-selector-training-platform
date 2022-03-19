<script setup lang="ts">
import MobileWarning from './modal_content/MobileWarning.vue'
const props = defineProps<{ display: boolean, toggle: boolean  }>()
const screenWidth = window.innerWidth
</script>

<template>
  <Transition name="fade">
    <div class="Information-modal" v-show="display && toggle">
      <div class="Information-modal-bg" @click="$emit('close-modal')"></div>
      <Transition name="slide-fade">
        <div class="Information-modal-content-container" v-show="display">
          <div class="Information-modal-content">
              <MobileWarning v-if="screenWidth < 500"/>
              <slot v-else></slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>

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
  background-color: #000000d9;
  opacity: 0.8;
}

.Information-modal-content-container {
  /* display: flex; */
  overflow: auto;
  width: 50%;
  max-width: 70rem;
  max-height: 80vh;
  margin: 0 auto;
  padding: 2rem;
  z-index: 10002;
  background-color: var(--main-bg-color);
  border-radius: 0.5rem;
  box-shadow: 
    rgb(0 0 0 / 30%) 0px 0px 15px, 
    rgb(0 0 0 / 25%) 0px 0px 3px 1px
}

.Information-modal-content-container p:not(:last-child) {
  margin-bottom: 3rem;
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


.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.225s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(4rem);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-4rem);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.225s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1090px) {
  .Information-modal {
    margin: 2rem
  }
  .Information-modal-content-container {
    width: 100%;
    padding: 1rem;
  }
}

</style>