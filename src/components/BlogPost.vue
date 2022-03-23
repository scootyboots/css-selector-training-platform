<script setup lang="ts">

</script>

<template>
  <div class="Blog-post">
    <img class="Blog-post__img" src="../assets/placeholder.png" alt="placeholder">
    <div class="Blog-post__header">Header text</div>
    <p class="Blog-post__description">This describes the blog post, This describes the blog post, This describes the blog post...</p>
  </div>
</template>

<style>
.Blog-post {
  margin-right: 2rem;
}
.Blog-post__img {
  width: 16rem;
}
.Blog-post__header {
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
}
.Blog-post__description {
  font-size: 1.4rem;
}
@media (max-width: 1090px) {
  h1 {
    font-size: 2rem;
  }
}
</style>