<script setup lang="ts">
import SiteWithHeaderAndFooter from '../SiteWithHeaderAndFooter.vue';
import BlogPost from '../BlogPost.vue'
</script>

<template>
<SiteWithHeaderAndFooter header="#1 music blog" :nav-links="['home', 'new', 'best of this week']" primary-color="lavender" text-color="white">
  <p>Welcome to the best music blog on the internet! It just doesn't get better than this folks</p>
  <p style="margin-bottom: 3rem;">Feast your eyes on six of our top recommendations for this week</p>
  <div class="Blog-posts">
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
  </div>
  <p style="margin-top: 3rem;">come back next week for even more culturally relevant recs</p>
</SiteWithHeaderAndFooter>
</template>

<style>
.Blog-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.Blog-posts p {
  margin: 0;
}
</style>