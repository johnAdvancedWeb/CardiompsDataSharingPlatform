import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Line from "@/views/Line";
import Bar from "@/views/Bar";
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import AddExperimentalData from "@/views/AddExperimentalData";
import QueryExperimentalData from "@/views/QueryExperimentalData";
import MyPosts from "@/views/MyPosts";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/line",
    name: "Line",
    component: Line,
  },
  {
    path: "/bar",
    name: "Bar",
    component: Bar
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/add-data",
    name: "AddData",
    component: AddExperimentalData
  },
  {
    path: "/query-data",
    name: "QueryData",
    component: QueryExperimentalData
  },
  {
    path: "/my-posts",
    name: "MyPosts",
    component: MyPosts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
