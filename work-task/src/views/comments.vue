<template>
  <div>
    <div class="comment">
      <div id="app">
        <v-app id="inspire">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-toolbar color="#47b882" dark>
                  <v-toolbar-title>Comments</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list two-line>
                  <template v-for="comment in comments">
                    <v-list-tile class="comment-item">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ comment.name }}</v-list-tile-title>
                        <v-list-tile-sub-title class="text--primary">{{comment.email }}</v-list-tile-sub-title>
                        <v-list-tile-sub-title>{{ comment.body }}</v-list-tile-sub-title>
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
<style>
.comment-item {
  padding-bottom: 15px;
  padding-top: 15px;
}
</style>
<script>
import comment from "@/components/comment.vue";
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
            console.log(
              `https://jsonplaceholder.typicode.com/posts/${fetch}/comments`
            );
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
