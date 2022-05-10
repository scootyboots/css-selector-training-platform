<script setup lang="ts">
import SiteWithHeaderAndFooter from '../SiteWithHeaderAndFooter.vue';
import BlogPost from '../BlogPost.vue'
const newImagePath = '../assets/placeholder-new.png'
</script>

<template>
<SiteWithHeaderAndFooter header="#1 music blog" :nav-links="['home', 'new', 'best of this week']" primary-color="lavender" text-color="white">
  <p>Welcome to the best music blog on the internet! It just doesn't get better than this folks</p>
  <p style="margin-bottom: 3rem;">Feast your eyes on six of our top recommendations for this week</p>
  <div class="Blog-posts">
    <BlogPost new-alt="new-1" :new-src="newImagePath"/>
    <BlogPost new-alt="new-2" :new-src="newImagePath"/>
    <BlogPost new-alt="new-3" :new-src="newImagePath"/>
    <BlogPost new-alt="new-4" :new-src="newImagePath"/>
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
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.Blog-posts p {
  margin: 0;
}
</style>