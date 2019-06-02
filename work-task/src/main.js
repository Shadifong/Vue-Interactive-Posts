import Vue from 'vue';
import './plugins/vuetify';
import vueResource from 'vue-resource';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(vueResource);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  created() {

  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
