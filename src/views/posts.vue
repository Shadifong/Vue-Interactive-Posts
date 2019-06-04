<template>
<div>
  <div id="home">
   
    <div class="post" v-for="post in posts" >
      <post 
        :userId="post.userId"
        :postId="post.id"
        :title="post.title"
        :body="post.body"
        :main="true"
      />
    </div>
  </div>
  </div>
</template>



<script>
import { mapGetters } from 'vuex'
import post from "@/components/post.vue";
import '../styles/posts.scss'

export default {

computed: mapGetters({
   
   posts: 'getPosts'
  
  
  }),

  created() {
 this.$store.dispatch('getPosts')
 
 },
  name: "posts",
  components: {
    post
  }
};
</script>
