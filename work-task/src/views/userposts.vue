<template>
   <div id="home">
   
    <div class="post" v-for="post in postsList" >
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
import '../styles/posts.scss'

export default {
  data() {
    return {
      posts: [],
    };
  },
   computed: {
        postsList () {
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
  methods: {
 
  },
  created() {
    this.getposts()
  },
  name: "posts",
  components: {
    post
  }
};
</script>
