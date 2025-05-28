import { createRouter, createWebHistory } from 'vue-router';

// Import komponen halaman
import Home from '../src/views/Home.vue';
import FAQ from '../src/views/FAQ.vue';
import SP4NLapor from '../src/views/SP4NLapor.vue';
import Maintenance from '../src/views/Maintenance.vue';
import Profile from '../src/views/service/layanpub/auth/Profile.vue';

// Layanan Publik
import Login from '../src/views/service/layanpub/auth/Login.vue';
import Register from '../src/views/service/layanpub/auth/Register.vue';
import ListSatker from '../src/views/service/layanpub/ListSatker.vue';
import DaftarLayanan from '../src/views/service/layanpub/DaftarLayanan.vue';
import FormLayanan from '../src/views/service/layanpub/FormLayanan.vue';

// Service
import LayananInternal from '../src/views/service/layaninternal/LayananInternal.vue';
import SyaratLayanan from '../src/views/service/syaratlayanan/SyaratLayanan.vue';
import BankData from '../src/views/service/bankdata/BankData.vue';
import DosenZI from '../src/views/service/dosenzi/DosenZI.vue';
import ProgressPermohonn from '../src/views/service/progress/ProgressPermohonn.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/sp4n-lapor',
    name: 'SP4NLapor',
    component: SP4NLapor
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/layanan-internal',
    name: 'LayananInternal',
    component: LayananInternal
  },
  {
    path: '/syarat-layanan',
    name: 'SyaratLayanan',
    component: SyaratLayanan
  },
  {
    path: '/bank-data',
    name: 'BankData',
    component: BankData
  },
  {
    path: '/dosen-zi',
    name: 'DosenZI',
    component: DosenZI
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
  {
    path: '/daftar-layanan/:id',
    name: 'DaftarLayanan',
    component: DaftarLayanan,
    props: true  // biar id masuk ke props component
  },
  {
    path: '/form-layanan/:id/layanan/:idLayanan',
    name: 'FormLayanan',
    component: FormLayanan,
    props: true  // biar id masuk ke props component
  },
  {
    path: '/progress-permohonan',
    name: 'ProgressPermohonan',
    component: ProgressPermohonn,
  }
  

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
