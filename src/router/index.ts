import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
const HomeView: Component = {
  name: 'HomeView'
};
const AboutView: Component = {
  name: 'AboutView'
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AboutView
    }
  ]
})

export default router