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
    }

  },
  getters:{
  getPosts(state){
   return state.posts
 },
 getComments(state){
   return state.comments
 }

  },
  actions: {
    getPosts(context) {
      
      context.commit('SET_LOADING_STATUS','loading')
      Vue.http.get(`https://jsonplaceholder.typicode.com/posts/`).then(
          function(response) {
            context.commit('SET_LOADING_STATUS','notLoading')
            context.commit('SET_POSTS',response.data)
            console.log(a)

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
    
    
  }
});

