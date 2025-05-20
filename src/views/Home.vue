<template>
  <Jumbotron @scroll-service="scrollToService" />
  <Service />
</template>

<script setup>
import { onMounted } from "vue";
import Jumbotron from "../components/HomeSection/Jumbotron.vue";
import Service from "../components/HomeSection/Service.vue";

function scrollToService() {
  const el = document.getElementById("service");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>
