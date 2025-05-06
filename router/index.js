import { createRouter, createWebHistory } from 'vue-router';

// Import komponen halaman
import Home from '../src/views/Home.vue';
import Maintenance from '../src/views/Maintenance.vue';
import Login from '../src/views/service/layanpub/auth/Login.vue';
import Register from '../src/views/service/layanpub/auth/Register.vue';
import ListSatker from '../src/views/service/layanpub/ListSatker.vue';

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
  {
    path: '/layanan-publik/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/layanan-publik/auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/list-satker',
    name: 'ListSatker',
    component: ListSatker
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
