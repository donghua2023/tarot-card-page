import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "pageOne"
  },
  {
    path: "/pageOne",
    name: 'pageOne',
    component: () => import("../view/pageOne.vue")
  },
  {
    path: "/pageTwo",
    component: () => import("../view/pageTwo.vue")
  },
  {
    path: "/pageThree",
    name: "main",
    component: () => import("../view/pageThree.vue")
  },
  {
    path: "/pageFour",
    component: () => import("../view/pageFour.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  strict: true
});

export default router;
