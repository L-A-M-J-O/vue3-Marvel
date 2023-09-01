import { createRouter, createWebHistory } from 'vue-router'
import Home from '../ui/views/Home.vue';
import SuperDetails from '../ui/views/SuperDetails.vue';


const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/super-details/:id',
      name: 'super-details',
      component: SuperDetails
    }
  ]
})

export default router
