<template>
  <div id="home">
    <div class="wrapper" v-for="comment in comments">
      <comment :name="comment.name" :email="comment.email" :body="comment.body"/>
    </div>
  </div>
</template>

<script>
import comment from "@/components/comment/comment.vue";

const fetch = window.location.pathname.split("/")[2];

export default {
  data() {
    return {
      comments: [],
      index: 0
    };
  },
  computed: {
    commentList() {
      return this.comments;
    },
    getComments() {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${fetch}`)
        .then(
          function(res) {
            const sliced = res.data;
            this.comments = sliced;
          },
          function(error) {}
        );
    }
  },
  methods: {},
  created() {
    this.getComments();
  },
  name: "home",
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
#title {
  font-weight: bold;
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

.email {
  margin-top: 10%;
  margin-bottom: 10%;
}
.comment {
  background: white;
  position: relative;
  margin: 0 auto;
  border-radius: 3px;
  padding: 1.25em;
  height: 330px;
  width: 90%;
  box-shadow: 0 2px 6px rgba(23, 26, 28, 0.1);
  margin-bottom: 10%;
}

.comment-box {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}

.comment:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 12px rgba(23, 26, 28, 0.2);
  transition: 250ms ease 50ms;
}

.comment .commnet-box {
  display: table;
  display: block;
}

.comment .comment-box .card {
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
