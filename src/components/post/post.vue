<template>
  <div class="wrapper">
    <div class="post col-sm-4" >
      <div class="post-box">{{title}}</div>
      <div>
        <p>{{body}}</p>
      </div>
      <div class="buttons">
        <a>
          <button class="button" v-on:click="onClickuser(userId)">User Posts</button>
        </a>

        <a :href="'/post/:' + postId" v-if="main">
          <button class="button">View Post</button>
        </a>
        <a>
          <button class="button" v-on:click="onClickpost(postId)">View Comments</button>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./post.scss" scoped>

</style>

<script>

export default {
  methods: {
    onClickpost: function(postId) {
      const link = "/comments/postId=:" + postId;
      window.location.pathname = link;
    },
    onClickuser: function(userId) {
      const linktwo = "posts/userId=:" + userId;
      window.location.pathname = linktwo;
    }
  },
  name: "post",
  props: {
    title: String,
    body: String,
    postId: Number,
    userId: Number,
    main: Boolean
  }
};
</script>