<template>
<div id="home">
     <div class="wrapper"v-for="comment in comments" >
      <div class="comment col-sm-4"  >

        <div id="title">
          {{comment.name}}
          </div>
        <div class="email">
        {{comment.email}}
        </div>
          <p>{{comment.body}}</p>
        </div>
    
      </div>
      </div>
      </div>
</template>

<script>
import comment from "@/components/comment.vue";
import '../styles/postcomments.scss'

const fetch = window.location.pathname.split("/")[2];

export default {
  data() {
    return {
      comments: [],
      index: 0
    };
  },
  methods: {
    getComments() {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/posts/${fetch}/comments`)
        .then(
          function(res) {
            const sliced = res.data.slice(0, 10);
            this.comments = sliced;
        
          },
          function(error) {
            console.log(error.statusText);
          }
        );
    },
    onClick: function(postId) {
      var readylink = `http://localhost:8080/post/:` + postId;
      console.log(postId);
      window.location.href = readylink;
    }
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
