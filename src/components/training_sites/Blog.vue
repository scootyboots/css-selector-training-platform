<script setup lang="ts">
import SiteWithHeaderAndFooter from '../SiteWithHeaderAndFooter.vue';
import BlogPost from '../BlogPost.vue'
</script>

<template>
<SiteWithHeaderAndFooter header="#1 music blog" :nav-links="['home', 'new', 'best of this week']" primary-color="red">
  <div class="Blog-posts">
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
  </div>
</SiteWithHeaderAndFooter>
</template>

<style>

</style>