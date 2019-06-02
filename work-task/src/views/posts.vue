<template>
  <div id="home">
    <div class="post" v-for="post in posts">
      <post
        :userId="post.userId"
        :postId="post.id"
        :title="post.title"
        :body="post.body"
        :main="true"
      />
    </div>
  </div>
</template>

<script>
import post from "@/components/post.vue";

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
        function(response) {
          this.posts = response.data.slice(0, 100);
        },
        function(error) {
          return error.statusText;
        }
      );
    }
  },
  created() {
    this.getPosts();
  },
  name: "home",
  components: {
    post
  }
};
</script>
