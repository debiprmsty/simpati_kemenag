<template>
    <div class="min-h-screen bg-white flex items-start justify-center py-12 px-4">
      <!-- Wrapper Card Besar -->
      <div
        class="w-full md:max-w-[92vw] bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
      >
        <!-- Title -->
        <h1 class="text-3xl font-extrabold text-gray-900 text-start">
          {{ status || "Daftar Layanan" }}
        </h1>
        <div class="h-1 w-35 bg-slate-900 mb-12 mt-4"></div>
  
        <!-- List Tasks as Long Cards -->
        <div class="space-y-4">
          <!-- 1. Loading Skeleton -->
          <template v-if="loading">
            <div
              v-for="n in 5"
              :key="n"
              class="bg-gray-100 rounded-2xl p-6 flex items-center justify-between animate-pulse"
            >
              <div class="h-6 bg-gray-200 rounded w-1/3"></div>
            </div>
          </template>
  
          <!-- 2. Belum ada data -->
          <template v-else-if="!loading && layanans.length === 0">
            <div
              class="text-center py-12 text-gray-500 italic bg-gray-50 rounded-2xl"
            >
              Belum ada data layanan untuk satker ini.
            </div>
          </template>
  
          <!-- 3. Actual Cards -->
          <template v-else>
            <div
              v-for="item in layanans"
              :key="item.id"
              @click="goToDetail(item.id)"
              class="bg-gray-50 rounded-2xl shadow-inner p-6 flex items-center justify-between hover:bg-gray-100 transition cursor-pointer"
            >
              <div class="flex items-center space-x-4">
                <h1 class="font-semibold text-xl text-gray-900">
                  {{ item.name }}
                </h1>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400 hover:text-gray-600 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter, useRoute } from "vue-router";
  
  const router = useRouter();
  const route = useRoute();
  
  const layanans = ref([]);
  const loading = ref(true);
  const status = ref("");
  
  // Ambil id satker dari route params
  const satkerId = route.params.id;
  
  // Base URL API
  const API_URL = import.meta.env.VITE_API_URL || "";
  
  async function fetchTasks() {
    try {
      const res = await fetch(
        `${API_URL}/satker/daftar-layanan/${satkerId}`
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      status.value = data.status || "";
      layanans.value = data.datas || [];
    } catch (err) {
      console.error("Fetch error:", err);
      layanans.value = [];
    } finally {
      loading.value = false;
    }
  }
  
  // Navigasi ke detail layanan
  function goToDetail(id) {
    router.push({ name: "DetailLayanan", params: { id } });
  }
  
  onMounted(fetchTasks);
  </script>
  
  <style scoped>
  /* styling via Tailwind */
  </style>
  