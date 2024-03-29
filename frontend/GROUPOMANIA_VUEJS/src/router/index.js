import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "../_helpers/auth-guard";

// localStorage.setItem("token", "toto");

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    // Routage Public
    {
      path: "/",
      name: "public",
      component: () => import("../views/public/PublicLayout.vue"),
    },
    // Routage Admin
    {
      path: "/admin",
      name: "admin",
      beforeEnter: authGuard,
      component: () => import("../views/admin/AdminLayout.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/admin/Dashboard.vue"),
        },
        // {
        //   path: "user/index",
        //   component: () => import("../views/admin/user/UserIndex.vue"),
        // },
        // {
        //   path: "user/edit/:id(\\d+)",
        //   component: () => import("../views/admin/user/UserEdit.vue"),
        //   props: true,
        // },
        // {
        //   path: "user/add",
        //   component: () => import("../views/admin/user/UserAdd.vue"),
        // },
        // {
        //   path: "posts/index",
        //   component: () => import("../views/admin/posts/PostsIndex.vue"),
        // },

        // redirection vers admin_dash en cas de mauvais routage
        {
          path: "/:PathMatch(.*)*",
          component: () => import("../views/admin/Dashboard.vue"),
        },
      ],
    },
    // Routage authentifié
    {
      path: "/forum",
      name: "forum",
      beforeEnter: authGuard,
      component: () => import("../views/auth/ForumLayout.vue"),
      children: [
        // {
        //   path: "/forum/newposts",
        //   name: "createPost",
        //   component: () => import("../components/forum/CreatePost.vue"),
        // },
        // {
        //   path: "/forum/display",
        //   name: "displayPost",
        //   component: () => import("../components/forum/DisplayPost.vue"),
        // },

        // redirection vers forum en cas de mauvais routage
        {
          path: "/:PathMatch(.*)*",
          component: () => import("../views/auth/ForumLayout.vue"),
        },
      ],
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/auth/SignUpView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../components/forum/EditPost.vue"),
      props: true,
    },
    {
      path: "/delete/:id",
      name: "delete",
      component: () => import("../components/forum/DeletePost.vue"),
      props: true,
    },

    // redirection vers 404 en cas de mauvais routage
    {
      path: "/:PathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/public/NotFound.vue"),
    },
  ],
});

//pour que l'admin n'est plus accès a ses fct lorsqu'il n'y a plus de token (expiration)
router.beforeEach((to, from, next) => {
  if (to.matched[0].name == "admin" || to.matched[0].name == "forum") {
    authGuard();
  }
  next();
});
export default router;
