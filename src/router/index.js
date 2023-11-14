import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "index"
  },
  {
    path: "/index",
    name: 'index',
    component: () => import("../view/pageOne.vue")
  },
  {
    path: "/info",
    name: 'info',
    component: () => import("../view/pagetwo.vue")
  },
  {
    path: "/character",
    component: () => import("../view/character.vue")
  },
  {
    path: "/naviative",
    name: "main",
    component: () => import("../view/pagethree.vue")
  },
  {
    path: "/team",
    component: () => import("../view/pageFour.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  strict: true
});

export default router;
