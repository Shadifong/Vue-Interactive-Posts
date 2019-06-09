<template>
<div id="home">
     <div class="wrapper"v-for="comment in comments" >
    <comment :name="comment.name" :email="comment.email" :body="comment.body" />   

      </div>
      </div>
</template>

<script>
import comment from "@/components/comment/comment.vue";
import '../styles/postcomments.scss'

const fetch = window.location.pathname.split("/")[2];

export default {
  data() {
    return {
      comments: [],
      index: 0
    };
  },computed: {
        commentList () {
       return this.comments;
      },
         getComments() {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${fetch}`)
        .then(
          function(res) {
            const sliced = res.data;
            this.comments = sliced;
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
  name: "home",
  components: {
    comment
  }
};
</script>
