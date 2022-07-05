import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    // Routage Public
    {
      path: "/",
      name: "public",
      component: () => import("../views/public/LayoutView.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/public/HomeView.vue"),
        },
        {
          path: "/login",
          name: "login",
          component: () => import("../views/public/LoginView.vue"),
        },
        {
          path: "/signup",
          name: "signup",
          component: () => import("../views/public/SignUpView.vue"),
        },
      ],
    },

    // Routage Admin
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/LayoutAdmin.vue"),
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/admin/Dashboard.vue"),
        },
        {
          path: "users/index",
          component: () => import("../views/admin/users/UserIndex.vue"),
        },
        {
          path: "users/edit/:id",
          component: () => import("../views/admin/users/UserEdit.vue"),
        },
        {
          path: "users/add",
          component: () => import("../views/admin/users/UserAdd.vue"),
        },
        {
          path: "posts/index",
          component: () => import("../views/admin/posts/PostsIndex.vue"),
        },
        {
          path: "posts/edit/:id",
          component: () => import("../views/admin/posts/PostsEdit.vue"),
        },
      ],
    },
    // redirection vers 404 en cas de mauvais routage
    {
      path: "/:PathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/public/NotFound.vue"),
    },
  ],
});

export default router;
