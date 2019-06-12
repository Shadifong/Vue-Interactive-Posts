<template>
  <div class="main-container">
    {{this.$route.params.id}}
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
export default {
  methods: {
    ...mapActions(["getSinglePost"])
  },
  computed: mapGetters(["getSinglePostGetter"]),

  created() {
    this.getSinglePost(this.$route.params.id[1]);
  },
  name: "home",
  components: {
    post
  }
};
</script>

<style scoped>
.main-container {
  margin: 0 auto;
}
.wrapper {
  margin-left: auto;
  margin-right: auto;
}
</style>