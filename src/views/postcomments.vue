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
import { mapGetters } from 'vuex'
import comment from "@/components/comment.vue";
import '../styles/postcomments.scss'

const fetch = window.location.pathname.split(":")[1];

export default {
 
 computed: mapGetters({
   
   comments: 'getComments'
  
  
  }),
  methods: {
  
  },
  created() {
     this.$store.dispatch('getComments',fetch)

  },
  name: "postcomments",
  components: {
    comment
  }
};
</script>
