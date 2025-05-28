<template>
  <div class="w-full flex flex-col justify-center px-4 md:px-8 bg-gray-50">
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
                <button
                  @click="
                    openModal(
                      item.persyaratan,
                      item.sistem_html,
                      item.waktuPenyelesaian,
                      item.biayaLayanan,
                      item.produkLayanan,
                      item.penanganan
                    )
                  "
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

      <!-- Modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50"
      >
        <div
          class="bg-white rounded-xl shadow-xl md:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 relative space-y-3"
        >
          <h3 class="text-lg font-bold mb-2">Detail Syarat</h3>

          <!-- Accordion Items -->
          <div class="space-y-3">
            <!-- Persyaratan -->
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

            <!-- Sistem, Mekanisme, Prosedur -->
            <div
              @click="toggleAccordion(2)"
              :class="[
                'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
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

            <!-- Waktu Penyelesaian -->
            <div
              @click="toggleAccordion(3)"
              :class="[
                'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
                activeAccordion === 3
                  ? 'border border-slate-700'
                  : 'border border-gray-200',
              ]"
            >
              <div class="flex items-center">
                <ClockIcon class="text-green-500 w-5 h-5" />
                <span class="ml-2 font-medium text-gray-800">Waktu Penyelesaian</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
                :class="{ 'rotate-180': activeAccordion === 3 }"
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
              v-if="activeAccordion === 3"
              class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
            >
              {{ waktuPenyelesaian }}
            </div>

            <!-- Biaya Layanan -->
            <div
              @click="toggleAccordion(4)"
              :class="[
                'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
                activeAccordion === 4
                  ? 'border border-slate-700'
                  : 'border border-gray-200',
              ]"
            >
              <div class="flex items-center">
                <BanknotesIcon class="text-green-500 w-5 h-5" />
                <span class="ml-2 font-medium text-gray-800">Biaya Layanan</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
                :class="{ 'rotate-180': activeAccordion === 4 }"
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
              v-if="activeAccordion === 4"
              class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
            >
              <p v-if="biayaLayanan > 0">Rp {{ biayaLayanan.toLocaleString("id-ID") }}</p>
              <p v-else-if="biayaLayanan === 0">
                Rp 0,- (Nol Rupiah) / Tidak Dipungut Biaya / Gratis
              </p>
              <p v-else>Biaya Layanan tidak tersedia</p>
            </div>

            <!-- Produk Layanan -->
            <div
              @click="toggleAccordion(5)"
              :class="[
                'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
                activeAccordion === 5
                  ? 'border border-slate-700'
                  : 'border border-gray-200',
              ]"
            >
              <div class="flex items-center">
                <TagIcon class="text-green-500 w-5 h-5" />
                <span class="ml-2 font-medium text-gray-800">Produk Layanan</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
                :class="{ 'rotate-180': activeAccordion === 5 }"
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
              v-if="activeAccordion === 5"
              class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
            >
              {{ produkLayanan }}
            </div>

            <!-- Penanganan -->
            <div
              @click="toggleAccordion(6)"
              :class="[
                'flex justify-between items-center cursor-pointer p-3 bg-white rounded-lg shadow-md transition-colors',
                activeAccordion === 6
                  ? 'border border-slate-700'
                  : 'border border-gray-200',
              ]"
            >
              <div class="flex items-center">
                <UserCircleIcon class="text-green-500 w-5 h-5" />
                <span class="ml-2 font-medium text-gray-800">Penanganan</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform duration-200 text-gray-600"
                :class="{ 'rotate-180': activeAccordion === 6 }"
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
              v-if="activeAccordion === 6"
              class="mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-inner max-h-64 overflow-y-auto whitespace-pre-line text-gray-700"
            >
              {{ penanganan }}
            </div>
          </div>

          <div class="text-right mt-4">
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
import {
  CheckCircleIcon,
  DocumentTextIcon,
  ClockIcon,
  BanknotesIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";

const apiUrl = import.meta.env.VITE_API_URL;
const requests = ref([]);
const loading = ref(true);
const searchTerm = ref("");
const selectedSeksi = ref("");
const currentPage = ref(1);
const perPage = 5;

// Modal State
const showModal = ref(false);
const activeAccordion = ref(null);
const persyaratanContent = ref("");
const sistemContent = ref("");
const waktuPenyelesaian = ref("");
const biayaLayanan = ref("");
const produkLayanan = ref("");
const penanganan = ref("");

// Fetch Data
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
      sistem_html: item.simpro,
      biayaLayanan: item.biaya,
      produkLayanan: item.produk_layanan,
      penanganan: item.penanganan,
    }));
  } catch (e) {
    console.error("Error fetching data:", e);
  } finally {
    loading.value = false;
  }
});

// Computed Properties
const seksiOptions = computed(() => [...new Set(requests.value.map((r) => r.seksi))]);

const filteredItems = computed(() =>
  requests.value.filter((item) => {
    const searchQuery = searchTerm.value.toLowerCase();
    const matchesSearch =
      item.seksi.toLowerCase().includes(searchQuery) ||
      item.jenisPelayanan.toLowerCase().includes(searchQuery) ||
      item.bentukLayanan.toLowerCase().includes(searchQuery);

    const matchesSeksi = !selectedSeksi.value || item.seksi === selectedSeksi.value;

    return matchesSearch && matchesSeksi;
  })
);

const totalPages = computed(() => Math.ceil(filteredItems.value.length / perPage));

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return filteredItems.value.slice(start, end);
});

// Pagination Methods
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// Modal Methods
const openModal = (
  persyaratanHTML,
  sistemHTML,
  waktuHTML,
  biayaHTML,
  produkHTML,
  penangananHTML
) => {
  persyaratanContent.value = htmlToPlainText(persyaratanHTML);
  sistemContent.value = htmlToPlainText(sistemHTML);
  waktuPenyelesaian.value = htmlToPlainText(waktuHTML);
  const raw = htmlToPlainText(biayaHTML);
  const digitsOnly = raw.replace(/\D/g, "");
  biayaLayanan.value = parseInt(digitsOnly, 10);
  produkLayanan.value = htmlToPlainText(produkHTML);
  penanganan.value = htmlToPlainText(penangananHTML);
  showModal.value = true;
  activeAccordion.value = null;
};

const closeModal = () => {
  showModal.value = false;
  activeAccordion.value = null;
};

const toggleAccordion = (index) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

// HTML to Text Converter with List Support
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
  background: linear-gradient(90deg, #059669 0%, #2563eb 100%);
  animation: neon 6s ease infinite;
  background-size: 200% 200%;
}

.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}

.hover\:-translate-y-0\.5:hover {
  transform: translateY(-0.125rem);
}

.transition {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
