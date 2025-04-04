<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
const showComponents = computed(() => route.path !== "/maintenance");
</script>

<template>
  <NavBar v-if="showComponents" />
  <main>
    <RouterView />
  </main>
  <Footer v-if="showComponents" />
</template>
