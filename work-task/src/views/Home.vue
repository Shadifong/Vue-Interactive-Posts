<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Search For Comments or Posts</h1>
    <input>
  </div>
</template>




<script>
import post from "@/components/post.vue";
import '../styles/home.scss'

import { compileFunction } from 'vm';

export default {
  data() {
    return {
      posts: [],

    };
  },
  methods: {
    getPosts() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
        function(response) {
          this.posts = response.data;
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
  name: "Home",
  components: {
    post
  }
};
</script>
