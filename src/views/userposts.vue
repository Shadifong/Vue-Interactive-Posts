<template>
  <div id="home">
    <div class="post" v-for="post in postsList">
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
import post from "@/components/post/post.vue";

export default {
  data() {
    return {
      posts: []
    };
  },
  computed: {
    postsList() {
      return this.posts;
    },
    getposts() {
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
  methods: {},
  created() {
    this.getposts();
  },
  name: "posts",
  components: {
    post
  }
};
</script>

<style scoped>
#home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.post {
  margin-right: auto;
  margin-left: auto;
}
@media only screen and(max-width:700px ) {
  #home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .post {
    margin-right: auto;
    margin-left: auto;
  }
}
@media screen and(min-width: 701px) and(max-width:1200px) {
  #home {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .post {
    height: 600px;
  }
  input {
    width: 60%;
  }
}
</style>
