<script setup lang="ts">
import SiteWithHeaderAndFooter from '../SiteWithHeaderAndFooter.vue';
import BlogPost from '../BlogPost.vue'
</script>

<template>
<SiteWithHeaderAndFooter header="#1 music blog" :nav-links="['home', 'new', 'best of this week']" primary-color="lavender" text-color="white">
  <div class="Blog-posts">
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
  </div>
  <div class="Blog-posts">
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
  </div>
</SiteWithHeaderAndFooter>
</template>

<style>
.Blog-posts {
  display: flex;
  margin-bottom: 2rem;
}
</style>