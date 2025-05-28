<template>
  <div class="min-h-screen bg-gray-50 flex items-start justify-center md:py-10 py-4 px-4">
    <!-- Wrapper Card Besar -->
    <div
      class="w-full md:max-w-[94vw] bg-white rounded-3xl shadow-sm border border-gray-100 md:p-8 p-6"
    >
      <!-- Title -->
      <h1
        class="md:text-3xl text-2xl font-extrabold text-gray-900 text-start md:-mt-3 -mt-2"
      >
        {{ status || "Daftar Layanan" }}
      </h1>
      <div class="h-1 w-35 bg-slate-900 md:mb-12 mb-6 mt-4"></div>

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
          <div class="text-center py-12 text-gray-500 italic bg-gray-50 rounded-2xl">
            Belum ada data layanan untuk satker ini.
          </div>
        </template>

        <!-- 3. Actual Cards -->
        <template v-else>
          <div
            v-for="item in layanans"
            :key="item.id"
            @click="goToDetail(satkerId, item.id)"
            class="bg-gray-50 rounded-2xl shadow-inner md:p-6 p-4 flex items-center justify-between hover:bg-gray-100 transition cursor-pointer"
          >
            <div class="flex items-center space-x-4">
              <h1 class="font-semibold md:text-xl text-lg text-gray-900">
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
    const res = await fetch(`${API_URL}/satker/daftar-layanan/${satkerId}`);
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
function goToDetail(id, idLayanan) {
  router.push({ name: "FormLayanan", params: { id, idLayanan } });
}

onMounted(fetchTasks);
</script>

<style scoped>
/* styling via Tailwind */
</style>
