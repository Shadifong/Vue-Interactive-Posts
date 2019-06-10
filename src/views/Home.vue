<template>
  <div>
    <input type="text" v-model="search">
    <div id="home">
      <div class="post" v-for="post in getPosts">
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
import post from "@/components/post/post.vue";
import { mapGetters, mapActions } from "vuex";

import "../styles/posts.scss";
import "../styles/home.scss";

export default {
  data() {
    return {
      search: ""
    };
  },
  computed: mapGetters(["getPosts"]),
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
  },
  name: "posts",
  components: {
    post
  }
};
</script>
