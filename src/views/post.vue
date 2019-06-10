<template>
  <div class="main-container">
    <div id="post">
      <post
        :title="getSinglePostGetter.title"
        :body="getSinglePostGetter.body"
        :userId="getSinglePostGetter.userId"
        :postId="getSinglePostGetter.id"
        :main="false"
      />
    </div>
  </div>
</template>



<script>
import post from "@/components/post/post.vue";
import { mapGetters, mapActions } from "vuex";
import "../styles/post.scss";
const fetch = window.location.pathname.slice(7, 8);
export default {
  methods: {
    ...mapActions(["getSinglePost"])
  },
  computed: mapGetters(["getSinglePostGetter"]),

  created() {
    this.getSinglePost(fetch);
  },
  name: "home",
  components: {
    post
  }
};
</script>

<style>
.main-container {
  margin: 0 auto;
}
</style>