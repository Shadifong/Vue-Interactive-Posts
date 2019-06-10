<template>
  <div id="home">
    <div class="wrapper" v-for="comment in getComments">
      <comment :name="comment.name" :email="comment.email" :body="comment.body"/>
    </div>
  </div>
</template>




<script>
import comment from "@/components/comment/comment.vue";
import { mapGetters, mapActions } from "vuex";
import "../styles/postcomments.scss";
const fetch = window.location.pathname.split(":")[1];
export default {
  computed: mapGetters(["getComments"]),
  methods: { ...mapActions(["fetchComments"]) },
  created() {
    this.fetchComments(fetch);
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