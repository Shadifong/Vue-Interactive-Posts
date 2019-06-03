<template>
<div>
   <input type="text" v-model='search'  />
  <div id="home">
   
    <div class="post" v-for="post in searchList" >
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
import '../styles/home.scss'

export default {
  data() {
    return {
      posts: [],
      search: ""
    };
  },
  computed: {
        searchList () {
       return this.posts.filter( post => post.title.toLowerCase().includes(this.search.toLowerCase()));
        }
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
  name: "posts",
  components: {
    post
  }
};
</script>
