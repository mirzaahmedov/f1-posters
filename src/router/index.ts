import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "posters",
      component: () => import("../views/Posters.vue"),
    },
  ],
});

export default router;
