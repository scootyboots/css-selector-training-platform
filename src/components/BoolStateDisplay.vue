<script setup lang="ts">
defineProps<{badge: string, tooltip: string}>()
</script>

<template>
<div class="Bool-state-display">
  <div class="Bool-state-display-container">
    <div class="Bool-state-display-badge">{{ badge  }}</div>
    <div class="Bool-state-display-tooltip">{{ tooltip  }}</div>
  </div>
</div>
</template>

<style>
.Bool-state-display {
 
}

.Bool-state-display-container {
  position: relative;
}

.Bool-state-display-badge {
  background-color: var(--highlight-yellow);
  color: var(--main-bg-color);
  border-radius: var(--border-radius);
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
}

.Bool-state-display-tooltip {
  display: none;
  position: absolute;
  width: 25rem;
  z-index: 1000;
  background-color: var(--highlight-yellow);
  color: var(--main-bg-color);
  border-radius: var(--border-radius);
  bottom: -6rem;
  left: -11rem;
  padding: 1rem;
  box-shadow: 4px 4px 0 #202024c7;
}

.Bool-state-display:hover .Bool-state-display-tooltip {
  display: flex;
}
</style>