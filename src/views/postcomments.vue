<template>
<div id="home">
     <div class="wrapper"v-for="comment in commentList" >
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
  }
};
</script>