import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Complete from "../views/Complete.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/complete",
    name: "Complete",
    component: Complete,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
