<script setup lang="ts">
defineProps<{badge: string, tooltip: string}>()
</script>

<template>
<div class="Bool-state-display">
  <div class="Bool-state-display-badge">{{ badge  }}</div>
  <div class="Bool-state-display-tooltip">{{ tooltip  }}</div>
</div>
</template>

<style>
.Bool-state-display-tooltip {
  display: none;
}

.Bool-state-display:hover .Bool-state-display-tooltip {
  display: flex;
}
</style>