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
</script>

<template>
  <NavBar v-if="showComponents" />
  <main>
    <RouterView />
  </main>
  <Footer v-if="showComponents" />
</template>
