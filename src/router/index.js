import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/MyTickets",
    name: "myTickets",
    component: () => import("../views/MyTickets.vue"),
  },
  {
    path: "/MyAccount",
    name: "myAccount",
    component: () => import("../views/MyAccount.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
