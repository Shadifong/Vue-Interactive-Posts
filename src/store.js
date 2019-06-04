import Vue from "vue";
import Vuex from "vuex";
import vueResource from 'vue-resource';
Vue.use(vueResource);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  loading:'notLoading',
  posts:[],
  comments:[]

  },
  mutations: {
  
    SET_LOADING_STATUS(state,status){
    state.loading=status;
    },
    SET_POSTS(state,posts){
      state.posts=posts
    }

  },
  getters:{
  getPosts(state){
   return state.posts
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
    
    
  }
});

