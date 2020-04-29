import Vue from "vue";
import Vuex from "vuex";
import vueResource from "vue-resource";
Vue.use(vueResource);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: "notLoading",
    posts: [],
    comments: [],
    post: []
  },
  mutations: {
    SET_LOADING_STATUS: (state, status) => {
      state.loading = status;
    },
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    SET_POST_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
    SET_SINGLE_POST: (state, post) => {
      state.post = post;
    }
  },
  getters: {
    getSinglePostGetter(state) {
      return state.post;
    },
    getPosts(state) {
      return state.posts;
    },
    getComments(state) {
      return state.comments;
    }
  },
  actions: {
    fetchPosts(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      Vue.http.get(`https://jsonplaceholder.typicode.com/posts/`).then(
        function(response) {
          context.commit("SET_LOADING_STATUS", "notLoading");
          context.commit("SET_POSTS", response.data);
        },
        function(error) {
          return error.statusText;
        }
      );
    },
    fetchPostsByUserId(context,userId) {
      context.commit("SET_LOADING_STATUS", "loading");
      Vue.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
        function(response) {
          context.commit("SET_LOADING_STATUS", "notLoading");
          context.commit("SET_POSTS", response.data);
        },
        function(error) {
          return error.statusText;
        }
      );
    },
    getSinglePost(context, postId) {
      Vue.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
        function(rese) {
          context.commit("SET_LOADING_STATUS", "notLoading");
          context.commit("SET_SINGLE_POST", rese.data);
        },
        function(error) {
          return error;
        }
      );
    },
    fetchComments(context, commentId) {
      Vue.http
        .get(
          `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`
        )
        .then(
          function(res) {
            context.commit("SET_LOADING_STATUS", "notLoading");
            context.commit("SET_POST_COMMENTS", res.data);
          },
          function(error) {
            return error;
          }
        );
    }
  }
});
