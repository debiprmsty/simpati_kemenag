import { createRouter, createWebHistory } from 'vue-router';

// Import komponen halaman
import Home from '../src/views/Home.vue';
import Maintenance from '../src/views/Maintenance.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
