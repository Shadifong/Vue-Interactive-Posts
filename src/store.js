import Vue from "vue";
import Vuex from "vuex";
import vueResource from 'vue-resource';
import { colors } from "vuetify/lib";
Vue.use(vueResource);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  loading:'notLoading',
  posts:[],
  comments:[],
  post:[]

  },
  mutations: {
  
    SET_LOADING_STATUS(state,status){
    state.loading=status;
    },
    SET_POSTS(state,posts){
      state.posts=posts
    },
    SET_POST_COMMENTS(state,comments){
      state.comments=comments
    },
    SET_SINGLE_POST(state,post){
      state.post=post
    }


  },
  getters:{
  getPosts(state){
   return state.posts
 },
 getComments(state){
   return state.comments
 },
 getSinglePost(state){
  return state.post
}
  },
  actions: {
    getPosts(context) {
      
      context.commit('SET_LOADING_STATUS','loading')
      Vue.http.get(`https://jsonplaceholder.typicode.com/posts/`).then(
          function(response) {
            context.commit('SET_LOADING_STATUS','notLoading')
            context.commit('SET_POSTS',response.data)

          },
          function(error) {
            return error.statusText;
          }
        );
      

    },
    getComments(context,commentId){
      Vue.http
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then(
          function(res) {
            context.commit('SET_LOADING_STATUS','notLoading')
            context.commit('SET_POST_COMMENTS',res.data)
            console.log(res.data)
           
          },
          function(error) {
            return error;
          }
        );
    },
    getSinglePost(context,postId){
      Vue.http
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(
          function(rese) {
            context.commit('SET_LOADING_STATUS','notLoading')
            context.commit('SET_SINGLE_POST',rese.data)
            console.log("aa",`https://jsonplaceholder.typicode.com/posts/${postId}`)
           
          },
          function(error) {
            return error;
          }
        );
    },
    
    
  }
});

