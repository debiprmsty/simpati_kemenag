import { createRouter, createWebHistory } from 'vue-router';

// Import komponen halaman
import Home from '../src/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
