<script setup lang="ts">
const props = defineProps<{ header: string, navLinks: string[], primaryColor: string }>()
</script>

<template>

<div class="header-main-footer">
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
</div>

</template>

<style scoped>

.header-main-footer {
  width: inherit;
}

header, footer {
  padding: 2rem;
  background-color: v-bind(primaryColor);
  align-items: baseline;
}

header {
  height: 10rem;
  display: flex;
  justify-content: space-between;
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
  margin: 0 auto 2rem auto;
  min-height: calc(var(--browser-height) - 28rem);
}

footer {
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>