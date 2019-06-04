<template>

  <div class="main-container">
    <div id="post">
    <post
      :title="post.title"
      :body="post.body"
      :userId="post.userId"
      :postId="post.id"
      :main="false"
    />
  </div>
  </div>
</template>

<

<script>
import { mapGetters } from 'vuex'
import post from "@/components/post.vue";
import '../styles/post.scss'

const fetch = window.location.pathname.slice(7, 8);
export default {

   computed: mapGetters({
   
   post: 'getSinglePost'
  
  
  }),
  created() {
 this.$store.dispatch('getSinglePost',fetch)

},
  name: "home",
  components: {
    post
  }
};
</script>

<style>
.main-container {
  margin: 0 auto;
}
</style>
