import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
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

    // redirection vers 404 en cas de mauvais routage
    {
      path: "/:PathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/public/NotFound.vue"),
    },
  ],
});

export default router;
