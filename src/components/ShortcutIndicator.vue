<script setup lang="ts">import { stringifyQuery } from 'vue-router';

interface ShortcutIndicatorProps {
  hotkey: string
  explanation: string
}
const props = defineProps<ShortcutIndicatorProps>()
</script>

<template>

<div class="Prompt-check-tip"><span class="hotkey">{{ hotkey  }}</span><span class="explanation">{{ explanation  }}</span></div>

</template>

<style scoped>
.Prompt-check-tip {
  cursor: pointer;
  color: var(--lowlight);
  font-size: 0.8em;
  font-style: italic;
  margin: 20px 0px
}
.hotkey {
  padding: 2px 6px;
  margin-right: 4px;
  background-color: var(--lowlight);
  color: var(--main-bg-color);
  font-weight: 700;
  border-radius: 3px;
  box-shadow: -2px 2px 0px #202024;
}

@media (max-width: 1090px) {
  .explanation {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>