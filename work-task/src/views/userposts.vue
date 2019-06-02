<template>
  <div>
    <div class="post">
      <div id="app">
        <v-app id="inspire">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-toolbar color="#47b882" dark>
                  <v-toolbar-title>User Posts</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list two-line>
                  <template v-for="post in posts">
                    <v-list-tile class="post-item">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ post.title}}</v-list-tile-title>

                        <v-list-tile-sub-title>{{ post.body }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-app>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.comment-item {
	padding-bottom: 30px;
	padding-top: 40px;
  color:red;
}
</style>
<script>
const fetch = window.location.pathname.split(":")[1];

export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getposts() {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${fetch}`)
        .then(
          function(res) {
            const sliced = res.data.slice(0, 10);
            this.posts = sliced;
            console.log(
              `https://jsonplaceholder.typicode.com/posts?userId=:${fetch}`
            );
          },
          function(error) {
            console.log(error.statusText);
          }
        );
    }
  },
  created() {
    this.getposts();
  },

  name: "post",
  components: {}
};
</script>
