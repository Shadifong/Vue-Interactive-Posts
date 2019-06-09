<template>
<div id="home">
     <div class="wrapper"v-for="comment in commentList" >
    
 <comment :name="comment.name" :email="comment.email" :body="comment.body" />   
   </div>
      </div>
</template>




<script>
import comment from "@/components/comment/comment.vue";
import '../styles/postcomments.scss'
import { maxHeaderSize } from 'http';
const fetch = window.location.pathname.split(":")[1];
export default {

  computed: {
        commentList () {
       return this.$store.state.comments;
      },
         getComments() {
                       this.$store.commit('SET_LOADING_STATUS','loading')

      this.$http
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${fetch}`)
        .then(
          function(res) {
            this.$store.commit('SET_LOADING_STATUS','notLoading')
             this.$store.commit('SET_POST_COMMENTS',res.data)
          },
          function(error) {}
        );
    }
  
  },
  methods: {
  
  },
  created() {
    this.getComments();
  },
  name: "postcomments",
  components: {
    comment
  },
   props: {
    name: String,
    email: String,
    body: String
  }
};
</script>