<template>
  <div class="w-full flex flex-col justify-center px-4 md:px-8 bg-gray-50">
    <!-- Banner Kecil -->
    <div
      class="mb-6 mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-md"
    >
      <h2 class="text-lg md:text-xl font-bold">Daftar Progress Permohonan</h2>
      <p class="text-xs md:text-sm opacity-90 mt-1">
        Lihat permohonan terbaru dan terupdate untuk Anda.
      </p>
    </div>

    <!-- Kontainer Utama -->
    <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 space-y-6 mb-16 md:mb-72">
      <!-- Filter & Search -->
      <div
        class="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-0"
      >
        <!-- Dropdown Filter -->
        <div class="w-full md:w-64">
          <div class="relative">
            <select
              v-model="selectedLayanan"
              class="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none pr-10"
            >
              <option value="">Semua Layanan</option>
              <option v-for="layanan in layananOptions" :key="layanan" :value="layanan">
                {{ layanan }}
              </option>
            </select>
            <svg
              class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <!-- Search -->
        <div class="relative w-full md:w-64">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Cari permohonan..."
            class="w-full px-4 py-2 bg-gray-100 text-gray-700 placeholder-gray-500 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <svg
            class="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 12.15 12.15z"
            />
          </svg>
        </div>
      </div>

      <!-- Table Futuristik -->
      <div class="overflow-x-auto">
        <table class="min-w-[600px] w-full bg-white rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr class="bg-gradient-to-r from-green-600 to-blue-600">
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                No
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Layanan
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Pengguna
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <!-- Shimmer Placeholder -->
            <template v-if="loading">
              <tr v-for="n in perPage" :key="n" class="bg-white">
                <td class="px-4 py-4 md:px-6 md:py-4">
                  <div class="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 md:px-6 md:py-4">
                  <div class="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 md:px-6 md:py-4">
                  <div class="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 md:px-6 md:py-4">
                  <div class="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </td>
              </tr>
            </template>

            <!-- Data Sebenarnya -->
            <tr
              v-else
              v-for="item in paginatedItems"
              :key="item.noPermohonan"
              class="bg-white hover:shadow hover:bg-gray-50 transform hover:-translate-y-0.5 transition duration-200"
            >
              <td
                class="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-700"
              >
                {{ item.noPermohonan }}
              </td>
              <td
                class="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-700"
              >
                {{ item.layanan }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm">
                👤 {{ item.namaPengguna }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap">
                <span
                  :class="[
                    'inline-flex items-center px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium tracking-wide',
                    item.status.toLowerCase() === 'disetujui'
                      ? 'bg-green-100 text-green-800'
                      : '',
                    item.status.toLowerCase() === 'diproses'
                      ? 'bg-yellow-100 text-yellow-800'
                      : '',
                    item.status.toLowerCase() === 'ditolak'
                      ? 'bg-red-100 text-red-800'
                      : '',
                  ]"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div
        class="flex flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-12"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 mr-4 py-2 bg-white text-green-600 border border-green-600 rounded-full disabled:opacity-50 hover:bg-green-50 hover:shadow transition"
        >
          Prev
        </button>
        <span class="text-gray-700 font-medium text-sm mr-4"
          >{{ currentPage }} dari {{ totalPages }}</span
        >
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-white text-green-600 border border-green-600 rounded-full disabled:opacity-50 hover:bg-green-50 hover:shadow transition md:mb-0 lg:mb-0 mb-1.5"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const requests = ref([]);
const searchTerm = ref("");
const selectedLayanan = ref("");
const currentPage = ref(1);
const perPage = 5;
const loading = ref(true);
const apiUrl = import.meta.env.VITE_API_URL;

onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/progress-permohonan/all`);
    const json = await res.json();

    // Map data
    requests.value = json.datas.map((item, index) => ({
      noPermohonan: index + 1,
      layanan: item.produk?.name || "—",
      namaPengguna: item.user?.name || "—",
      status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
    }));
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    loading.value = false;
  }
});

const layananOptions = computed(() => [...new Set(requests.value.map((r) => r.layanan))]);

const filteredItems = computed(() =>
  requests.value.filter((item) => {
    const q = searchTerm.value.toLowerCase();
    return (
      (!selectedLayanan.value || item.layanan === selectedLayanan.value) &&
      (item.namaPengguna.toLowerCase().includes(q) ||
        item.layanan.toLowerCase().includes(q) ||
        item.status.toLowerCase().includes(q))
    );
  })
);

const totalPages = computed(() => Math.ceil(filteredItems.value.length / perPage));
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredItems.value.slice(start, start + perPage);
});

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
</script>

<style scoped>
@keyframes neon {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
thead tr {
  animation: neon 6s ease infinite;
  background-size: 200% 200%;
}
</style>
