<template>
  <div class="w-full flex flex-col justify-center px-4 md:px-10 bg-gray-50">
    <!-- Banner Kecil -->
    <div
      class="mb-6 mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-md"
    >
      <h2 class="text-lg md:text-xl font-bold uppercase">Daftar Syarat Layanan</h2>
      <p class="text-xs md:text-[1rem] opacity-90 mt-1 text-justify">
        Untuk kelancaran proses pelayanan, setiap pemohon diharapkan memenuhi seluruh
        persyaratan yang telah ditetapkan Kementerian Agama Kabupaten Buleleng. Kepatuhan
        terhadap persyaratan ini akan mempercepat proses pelayanan serta memastikan
        kesesuaian dengan regulasi yang berlaku.
      </p>
    </div>

    <!-- Kontainer Utama -->
    <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 space-y-6 mb-16 md:mb-72">
      <!-- Filter & Search -->
      <div
        class="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 md:gap-0"
      >
        <!-- Dropdown Filter Seksi -->
        <div class="w-full md:w-64">
          <div class="relative">
            <select
              v-model="selectedSeksi"
              class="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none pr-10"
            >
              <option value="">Semua Seksi</option>
              <option v-for="s in seksiOptions" :key="s" :value="s">{{ s }}</option>
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
        <table class="min-w-[800px] w-full bg-white rounded-lg shadow-sm overflow-hidden">
          <thead>
            <tr class="bg-gradient-to-r from-green-600 to-blue-600">
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Nomor
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Seksi
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Jenis Pelayanan
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Bentuk Layanan
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Waktu Penyelesaian
              </th>
              <th
                class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Syarat
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="item in paginatedItems"
              :key="item.id"
              class="bg-white hover:shadow hover:bg-gray-50 transform hover:-translate-y-0.5 transition duration-200"
            >
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                {{ item.nomor }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                {{ item.seksi }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                {{ item.jenisPelayanan }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                {{ item.bentukLayanan }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                {{ item.waktuPenyelesaian }}
              </td>
              <td class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                <button
                  @click="openModal(item.persyaratan, item.sistem_html)"
                  class="px-3 py-1 bg-[#1B4D3E] text-white rounded-lg hover:bg-green-800 transition"
                >
                  Lihat
                </button>
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
          class="px-4 md:mr-10 mr-4 py-2 bg-white text-green-600 border border-green-600 rounded-full disabled:opacity-50 hover:bg-green-50 hover:shadow transition"
        >
          Prev
        </button>
        <span class="text-gray-700 font-medium text-sm"
          >{{ currentPage }} dari {{ totalPages }}</span
        >
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 md:ml-0 ml-4 bg-white text-green-600 border border-green-600 rounded-full disabled:opacity-50 hover:bg-green-50 hover:shadow transition md:mb-0 mb-2"
        >
          Next
        </button>
      </div>

      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50"
      >
        <div class="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
          <h3 class="text-lg font-bold mb-4">Detail Syarat</h3>

          <!-- Accordion 1: Persyaratan -->
          <div
            @click="toggleAccordion(1)"
            :class="[
              'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
              activeAccordion === 1
                ? 'border border-slate-700'
                : 'border border-gray-200',
            ]"
          >
            <div class="flex items-center">
              <CheckCircleIcon class="text-green-500 w-5 h-5" />
              <span class="ml-2 font-medium text-gray-800">Persyaratan</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
              :class="{ 'rotate-180': activeAccordion === 1 }"
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
          <div
            v-if="activeAccordion === 1"
            class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
          >
            {{ persyaratanContent }}
          </div>

          <!-- Accordion 2: Sistem, Mekanisme, Prosedur -->
          <div
            @click="toggleAccordion(2)"
            :class="[
              'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors mt-2',
              activeAccordion === 2
                ? 'border border-slate-700'
                : 'border border-gray-200',
            ]"
          >
            <div class="flex items-center">
              <DocumentTextIcon class="text-green-500 w-5 h-5" />
              <span class="ml-2 font-medium text-gray-800"
                >Sistem, Mekanisme, dan Prosedur</span
              >
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
              :class="{ 'rotate-180': activeAccordion === 2 }"
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
          <div
            v-if="activeAccordion === 2"
            class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
          >
            {{ sistemContent }}
          </div>

          <div class="text-right mt-6">
            <button
              @click="closeModal"
              class="px-4 py-2 bg-[#1B4D3E] text-white rounded-full hover:bg-green-800 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { DocumentTextIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";

const apiUrl = import.meta.env.VITE_API_URL;
const requests = ref([]);
const loading = ref(true);
const searchTerm = ref("");
const selectedSeksi = ref("");
const currentPage = ref(1);
const perPage = 5;

// Modal & Accordion State
const showModal = ref(false);
const activeAccordion = ref(null);
const persyaratanContent = ref("");
const sistemContent = ref("");

// Fetch and map data
onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/syarat-ketentuan/all`);
    const dt = await res.json();
    requests.value = dt.datas.map((item, idx) => ({
      id: item.id,
      nomor: idx + 1,
      seksi: item.jenis.satker.status,
      jenisPelayanan: item.jenis.name,
      bentukLayanan: item.jenis.bentuk_layanan,
      waktuPenyelesaian: item.durasi,
      persyaratan: item.persyaratan,
      sistem_html: item.simpro, // pastikan field ini ada di API
    }));
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

// Computed for filter, pagination
const seksiOptions = computed(() => [...new Set(requests.value.map((r) => r.seksi))]);
const filteredItems = computed(() =>
  requests.value.filter((item) => {
    const q = searchTerm.value.toLowerCase();
    return (
      (item.seksi.toLowerCase().includes(q) ||
        item.jenisPelayanan.toLowerCase().includes(q) ||
        item.bentukLayanan.toLowerCase().includes(q) ||
        item.waktuPenyelesaian.toLowerCase().includes(q)) &&
      (!selectedSeksi.value || item.seksi === selectedSeksi.value)
    );
  })
);
const totalPages = computed(() => Math.ceil(filteredItems.value.length / perPage));
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredItems.value.slice(start, start + perPage);
});

// Pagination handlers
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

// Modal handlers
function openModal(htmlPersyaratan, htmlSistem) {
  persyaratanContent.value = htmlToPlainText(htmlPersyaratan);
  sistemContent.value = htmlToPlainText(htmlSistem);
  showModal.value = true;
  activeAccordion.value = null;
}
function closeModal() {
  showModal.value = false;
  activeAccordion.value = null;
}

// Accordion toggle: only one open at a time
function toggleAccordion(index) {
  activeAccordion.value = activeAccordion.value === index ? null : index;
}

// Utility: convert HTML to plain text with list support
function htmlToPlainText(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  let text = "";
  const olStack = [];

  function walk(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      if (tag === "p") {
        text += "\n";
        node.childNodes.forEach(walk);
        text += "\n";
        return;
      }
      if (tag === "ol") {
        olStack.push(1);
        node.childNodes.forEach(walk);
        olStack.pop();
        return;
      }
      if (tag === "ul") {
        node.childNodes.forEach(walk);
        return;
      }
      if (tag === "li") {
        if (olStack.length) {
          text += `${olStack[olStack.length - 1]}. `;
          olStack[olStack.length - 1]++;
        } else text += "- ";
        node.childNodes.forEach(walk);
        text += "\n";
        return;
      }
      node.childNodes.forEach(walk);
      return;
    }
    if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
  }

  doc.body.childNodes.forEach(walk);
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line)
    .join("\n");
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
