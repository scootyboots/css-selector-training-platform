<script setup lang="ts">
import Browser from './Browser.vue'

</script>

<template>

    <div class="two-pain-grid">
    <div class="two-pain-grid__left">
      <div class="two-pain-grid__left-container">
        left side
      </div>
    </div>
    <div class="two-pain-grid__right">
      <div class="two-pain-grid__right-container">
        <Browser url="www.example-website.com/url-goes-here" />
      </div>
    </div>
  </div>

</template>

<style>

.two-pain-grid {
  display: grid;
  grid-template-columns: 40% auto;
}

.two-pain-grid__left {
  
}

.two-pain-grid__right{
  
}

.two-pain-grid__left-container {
  position: relative;
  min-width: 260px;
  margin: 40px;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%);
  box-shadow: 0px 0px 40px -3px rgb(0 0 0 / 45%);
}

.two-pain-grid__right-container {
  margin: 15px 15px 15px 0;
  position: sticky;
  top: 15px;
}

@media (max-width: 1090px) {
  .two-pain-grid {
    position: relative;
  }

  .two-pain-grid__right {
    position: absolute;
    top: 0;
    left: 20px;
  }
}

</style>