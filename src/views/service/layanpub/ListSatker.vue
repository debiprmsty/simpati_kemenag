<template>
  <div>
    <h1>List Satker</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Kalau tidak ada token, redirect ke login
    router.push({ name: "Login" });
  }
});
</script>

<style scoped></style>
