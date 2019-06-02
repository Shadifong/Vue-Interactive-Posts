<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Search For Comments or Posts</h1>
    <input>
  </div>
</template>

<style lang="scss">
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
	background: $url_0, linear-gradient(to left, $color_pickled_bluewood_approx, $color_ocean_green_approx);
	background-attachment: fixed;
	font-size: 16px;
	color: $color_aztec_approx;
	line-height: 1.5;
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

@media only screen and (max-width: 600px) {
 input{
   width: 80%;
  }
}

</style>




<script>
import post from "@/components/post.vue";
import { compileFunction } from 'vm';

export default {
  data() {
    return {
      posts: [],

    };
  },
  methods: {
    getPosts() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(
        function(response) {
          this.posts = response.data;
          // console.log("data is",this.posts[0].title)
        },
        function(error) {
          return error.statusText;
        }
      );
    }
  },
  created() {
        this.getPosts();

},
  name: "Home",
  components: {
    post
  }
};
</script>
