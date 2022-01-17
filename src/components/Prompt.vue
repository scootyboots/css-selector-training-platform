<script setup lang="ts">
import { ref } from 'vue';
interface PromptProps {
    header: string
    explanationPs: string[]
}
defineProps<PromptProps>()

const checkAnswer = () => {
    
}

</script>

<template>

<div class="Prompt">
    <h2 class="Prompt-header">{{ header }}</h2>
    <div class="Prompt-explanation">
        <p v-for="(explanation, index) in explanationPs" :key="'explanation' + index">
            {{ explanation }}
        </p>
    </div>
    <input type="text" class="Prompt-input">
    <p class="Prompt-check-tip">pres Enter to check answer</p>
</div>

</template>

<style>

</style>