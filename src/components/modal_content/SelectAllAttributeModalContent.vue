<script setup lang="ts">

</script>

<template>
<h2>Selecting Elements using their Attributes</h2><p>Using the id and class shorthand # and . are the most common when writing CSS selectors, but sometimes we might need to reference another of the HTML element's attributes.</p><p class="no-padding"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors" target="_blank" rel="noopener noreferrer">Attribute selectors</a> use a bracket syntax:</p><p class="no-padding"><span class="--lowlight">element[attribute]</span> or <span class="--lowlight">element[attribute="attribute-value"]</span> in order to specify the attribute's value.</p>
</template>

<style>
.no-padding {
  padding: 0 !important;
  margin: 0 !important;
}
</style>