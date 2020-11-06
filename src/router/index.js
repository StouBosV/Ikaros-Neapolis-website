import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/syllogos",
    name: "Syllogos",
    component: () => import("../views/Syllogos.vue")
  },
  {
    path: "/katigories/:tmima",
    name: "katigories",
    props: true,
    component: () => import("../views/katigories.vue"),
    children: [
      { path: 'anakoinoseis', name: 'anakoinoseis', props: true, component: () => import("../views/Ypokatigories/Anakoinoseis.vue")},
      { path: 'roster', name: 'roster', props: true, component: () => import("../views/Ypokatigories/RosterView.vue")},
      { path: 'vathmologia', name: 'vathmologia', props: true, component: () => import("../views/Ypokatigories/Vathmologia.vue")}
    ]
  },
  {
    path: "/epikoinonia",
    name: "Epikoinonia",
    component: () => import("../views/Epikoinonia.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Login/signup.vue")
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/Login/signin.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
