import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/posts.vue'),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('./views/post.vue'),
    },
    {
      path: '/post/:id/comments',
      name: 'comments',
      component: () => import('./views/comments.vue'),
    },
    {
      path: '/comments/postId=:id',
      name: 'postcomments',
      component: () => import('./views/postcomments.vue'),
    },
    {
      path: '/posts/userId=:id',
      name: 'usercomments',
      component: () => import('./views/userposts.vue'),
    },
  ],
});
