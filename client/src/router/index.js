import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from "@/views/SignIn";
import SignUp from "@/views/SignUp";
import AddExperimentalData from "@/views/AddExperimentalData";
import QueryExperimentalData from "@/views/FetchExternalData";
import NewsFeed from "@/views/NewsFeed";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news-feed',
    name: 'NewsFeed',
    component: NewsFeed
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
