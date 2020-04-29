<template>
  <div>
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
export default {
    data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: mapGetters(["getPosts"]),
  methods: {
    ...mapActions(["fetchPostsByUserId"])
  },
  created() {
    this.fetchPostsByUserId(this.id);
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
