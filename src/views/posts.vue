<template>
<div>
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
  </div>
</template>



<script>
import post from "@/components/post.vue";
import '../styles/posts.scss'
export default {

  computed: {
        postsList () {
       return this.$store.state.posts;
      },
        getPosts() {
          this.$store.commit('SET_LOADING_STATUS','loading')
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
        function(response) {
           this.$store.commit('SET_LOADING_STATUS','notLoading')
            this.$store.commit('SET_POSTS',response.data)
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
        this.getPosts();
},
  name: "posts",
  components: {
    post
  }
};
</script>