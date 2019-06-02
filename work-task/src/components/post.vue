<template>
  <div class="wrapper">
    <div class="post">
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
<style lang="sass" scoped>

a
  color: #2b7bb9 !important
  text-decoration: none !important
  &:hover
    text-decoration: underline

.buttons
  margin-top: 20px
  display: flex
  justify-content: space-around

.wrapper
  margin-top: 20px
  margin: 20px auto
  width: 100%
  max-width: 600px

.post
  background: white
  position: relative
  border-radius: 3px
  padding: 1.25em
  box-shadow: 0 2px 6px rgba(23, 26, 28, 0.1)

.post-box
  font-weight: bold
  font-size: 18px
  margin-bottom: 20px

.post
  &:hover
    transform: scale(1.02)
    box-shadow: 0 5px 12px rgba(23, 26, 28, 0.2)
    transition: 250ms ease 50ms
  .post-box
    display: table
    .card
      display: table-cell
      vertical-align: middle
    display: block
.button
  background-color: #41AB7D
  border: none
  color: white
  padding: 8px 16px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  margin: 4px 2px
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