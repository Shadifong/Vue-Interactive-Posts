import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("./pages/posts.vue")
    },
    {
      path: "/post/:singlepostid",
      name: "post",
      component: () => import("./pages/post.vue")
    },
    {
      path: "/post/:id/comments",
      name: "comments",
      component: () => import("./pages/comments.vue")
    },
    {
      path: "/comments/postId/:postId",
      name: "postcomments",
      component: () => import("./pages/postcomments.vue")
    },
    {
      path: "/posts/userId=:id",
      name: "usercomments",
      component: () => import("./pages/userposts.vue")
    }
  ]
});
