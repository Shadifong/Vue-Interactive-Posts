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



<script>
import post from "@/components/post/post.vue";
import '../styles/post.scss'
const fetch = window.location.pathname.slice(7, 8);
export default {
  data() {
    return {
      post: []
    };
  },
  methods: {
    getPost() {
       this.$store.commit('SET_LOADING_STATUS','loading')
       this.$http.get(`https://jsonplaceholder.typicode.com/posts/${fetch}`)
      .then(
          function(response) {
           this.$store.commit('SET_LOADING_STATUS','notLoading')
           this.$store.commit('SET_SINGLE_POST',response.data)
           this.post=this.$store.state.post;
          },
          function(error) {
            return error.statusText;
          }
        );
    }
  },
  created() {
    this.getPost();
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