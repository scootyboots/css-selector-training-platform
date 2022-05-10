<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{ newAlt?: string, newSrc?: string }>()
const imgSrc = ref<string>('../assets/placeholder.png')
props.newSrc ? imgSrc.value = props.newSrc : imgSrc.value = '../assets/placeholder.png'

</script>

<template>
  <div class="Blog-post">
    <img v-if="!newSrc" class="Blog-post__img" src="../assets/placeholder.png" alt="placeholder"/>
    <img v-if="newSrc" class="Blog-post__img" src="../assets/placeholder-new.png" alt="new-placeholder"/>
    <div class="Blog-post__header">Header text</div>
    <p>This describes the blog post, This describes the blog post, This describes the blog post...</p>
  </div>
</template>

<style>
.Blog-post {
  margin: 2rem 0;
  width: 15rem;
}

.Blog-post__img {
  width: 15rem;
}
.Blog-post__header {
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
}
.Blog-post {
  font-size: 1.4rem;
}
@media (max-width: 1090px) {
  h1 {
    font-size: 2rem;
  }
}
</style>