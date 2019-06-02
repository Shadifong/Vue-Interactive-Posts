<template>

  <div class="main-container">
    <post
      :title="post.title"
      :body="post.body"
      :userId="post.userId"
      :postId="post.id"
      :main="false"
    />
  </div>
</template>

<script>
import post from "@/components/post.vue";
const fetch = window.location.pathname.slice(7, 8);
export default {
  data() {
    return {
      post: []
    };
  },
  methods: {
    getPost() {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/posts/${fetch}`)
        .then(
          function(response) {
            this.post = response.data;
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
