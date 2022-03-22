<script setup lang="ts">
const props = defineProps<{ header: string, navLinks: string[], primaryColor: string }>()
</script>

<template>
<header>
  <h1>{{ header }}</h1>
  <nav>
    <ul>
      <li v-for="link in navLinks">{{ link }}</li>
    </ul>
  </nav>
</header>
<main>
  <slot></slot>
</main>
<footer>
  copyright 2022
</footer>
</template>

<style scoped>
header, footer {
  padding: 1rem;
  background-color: v-bind(primaryColor);
  align-items: baseline;
}
header {
  height: 100px;
  display: flex;
  margin-bottom: 3rem;
}

nav {
  display: flex;
  align-content: right;
}

nav li {
  display: inline;
}

nav li:not(:last-child) {
  margin-right: 2rem;
}

main {
  width: 80%;
  margin: 0 auto 12rem auto
}

footer {
  position: absolute;
  bottom: 1.5rem;
  height: 10rem;
  width: calc(60vw - 40px - 2rem);
}
</style>