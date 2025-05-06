<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const hidePaths = [
  "/maintenance",
  "/layanan-publik/auth/login",
  "/layanan-publik/auth/register",
];
const showComponents = computed(() => !hidePaths.includes(route.path));

// Hanya aktif di /list-satker
const isListSatker = computed(() => route.path === "/list-satker");

// Wrapper paling luar
const appClasses = computed(() => {
  // kalau bukan list-satker, default kosong (atau bisa kasih bg lain)
  if (!isListSatker.value) return "flex flex-col min-h-screen";
  // kalau list-satker, tambahkan gradien
  return "flex flex-col min-h-screen bg-white";
});
</script>

<template>
  <!-- Wrapper utama dengan kelas dinamis -->
  <div :class="appClasses">
    <!-- Navbar -->
    <NavBar v-if="showComponents" />

    <!-- Konten utama, flex-grow agar menutup sisa area -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer v-if="showComponents" />
  </div>
</template>

<style>
/* Pastikan html/body & #app full height */
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
