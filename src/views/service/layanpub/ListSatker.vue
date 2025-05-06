<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-12 px-4">
    <!-- Header -->
    <div class="text-center mb-10 md:mt-10">
      <h1 class="text-3xl font-extrabold text-slate-900 mb-2">
        Seksi Pelayanan Kantor Kementrian Agama Kabupaten Buleleng
      </h1>
      <p class="text-md text-slate-500">
        Bersinergi untuk Pelayanan Keagamaan yang Optimal
      </p>
    </div>

    <!-- Grid Cards -->
    <div class="w-full mt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-7 md:m-7.5">
        <!-- Skeleton Loading -->
        <template v-if="loading">
          <div v-for="n in 6" :key="n" class="space-y-2">
            <div class="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2 mx-auto"></div>
          </div>
        </template>

        <!-- Actual Cards -->
        <template v-else>
          <div
            v-for="card in cards"
            :key="card.id"
            @click="goToLayanan(card.id)"
            class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition border border-slate-100 hover:cursor-pointer"
          >
            <img
              :src="`${API_URL}/satker/logo/${card.logo}`"
              :alt="card.status"
              class="w-36 h-36 mt-4 mx-auto object-contain"
            />
            <div class="p-4">
              <h2 class="text-base font-medium text-gray-800 text-center">
                {{ card.status }}
              </h2>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const cards = ref([]);
const loading = ref(true);

const API_URL = import.meta.env.VITE_API_URL;

const goToLayanan = (id) => router.push({ name: 'DaftarLayanan', params: { id } });

async function fetchSatker() {
  try {
    const res = await fetch(`${API_URL}/satker/all`);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    cards.value = data.datas;
  } catch (err) {
    console.error('Fetch error:', err);
    cards.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push({ name: 'Login' });
    return;
  }
  fetchSatker();
});
</script>

<style>
/* Semua styling sudah di-handle Tailwind */
</style>
