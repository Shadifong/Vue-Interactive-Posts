<template>
  <div>
    <input type="text" v-model="search">
    <div id="home">
      <div class="post" v-for="post in searchList">
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
      search: ""
    };
  },
  computed: {
    ...mapGetters(["getPosts"]),
    searchList() {
      return this.getPosts.filter(post =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
  },
  name: "posts",
  components: {
    post
  }
};
</script>
<style lang="scss" >
$color_pickled_bluewood_approx: #35495e;
$color_ocean_green_approx: #47b882;
$color_aztec_approx: #171a1c;
$white: #fff;
$color_alto_approx: #ddd;

$font_0: Arial;
$font_1: sans-serif;

$url_0: url(http://www.inggez.com/img/bg-pattern.png);

body {
  font-family: $font_0, $font_1;
  background: $url_0,
    linear-gradient(
      to left,
      $color_pickled_bluewood_approx,
      $color_ocean_green_approx
    );
  background-attachment: fixed;
  font-size: 16px;
  color: $color_aztec_approx;
  line-height: 1.5;
  overflow: hidden !important;
}
input {
  font-size: 18px;
  outline: none;
  padding: 80px;
  display: inline-block;
  width: 26%;
  border-radius: 8px;
  padding: 16px 70px 8px 30px;
  position: relative;
  background: $white;
  border: 1px solid $color_alto_approx;
}

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

@media only screen and (max-width: 600px) {
  input {
    width: 80%;
  }
}
</style>


