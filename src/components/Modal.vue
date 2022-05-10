<script setup lang="ts">
import CloseIcon from './svg_components/CloseIcon.vue';
const props = defineProps<{ display: boolean, toggle: boolean, html?: string  }>()
</script>

<template>
  <Transition name="fade">
    <div class="Information-modal" v-show="display && toggle">
      <div class="Information-modal-bg" @click="$emit('close-modal')"></div>
      <Transition name="slide-fade">
        <div class="Information-modal-content-container" v-show="display">
          <CloseIcon class="Information-modal__close" @click="$emit('close-modal')"/>
          <div class="Information-modal-content">
              <slot v-if="!html"></slot>
              <div v-if="html" v-html="html" class="html-from-string" />
          </div>
        </div>
      </Transition>
    </div>
  </Transition>

</template>

<style>
.Information-modal {
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.Information-modal-bg {
  position: fixed;
  inset: 0 0 0 0;
  opacity: 0.8;
  z-index: 10001;
  background-color: #000000d9;
  opacity: 0.8;
  cursor: pointer;
}

.Information-modal-content-container {
  /* display: flex; */
  position: relative;
  overflow: auto;
  width: 50%;
  max-width: 62rem;
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

.Information-modal__close {
  position: absolute;
  width: 4rem;
  cursor: pointer;
  inset: 1rem 1rem auto auto;
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

.Information-modal-content p {
  line-height: 2.8rem;
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

.no-padding {
  padding: 0 !important;
  margin: 0 !important;
}

</style>