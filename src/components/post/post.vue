<template>
  <div class="wrapper">
    <div class="post col-sm-4">
      <div class="post-box">{{title}}</div>
      <div>
        <p>{{body}}</p>
      </div>
      <div class="buttons">
        <router-link :to="'posts/userId=:'+this.userId">
          <button class="button">User Posts</button>
        </router-link>
        <router-link :to="'/post/'+this.postId">
          <button class="button">View Post</button>
        </router-link>
        <router-link :to="'/comments/postId/'+this.postId">
          <button class="button">View Comments</button>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  methods: {},
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

<style lang="scss" scoped>
a:hover {
  text-decoration: underline;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.wrapper {
  margin-top: 20px;
  max-width: 600px;
}

.post {
  background: white;
  position: relative;
  margin: 0 auto;
  border-radius: 3px;
  padding: 1.25em;
  height: 330px;
  width: 90%;
  box-shadow: 0 2px 6px rgba(23, 26, 28, 0.1);
}

.post-box {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}

.post:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 12px rgba(23, 26, 28, 0.2);
  transition: 350ms ease 30ms;
}

.post .post-box {
  display: table;
  display: block;
}

.post .post-box .card {
  display: table-cell;
  vertical-align: middle;
}

.button {
  background-color: #41ab7d;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

@media only screen and (max-width: 700px) {
  .button {
    margin: 4px 8px;
    padding: 6px 10px;
  }
}

@media screen and (min-width: 701px) and (max-width: 1200px) {
  .button {
    margin: 4px 2px;
    padding: 8px 16px;
  }
}
</style>