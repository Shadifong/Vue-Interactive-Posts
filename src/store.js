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
 
  },
  actions: {

  }
});

