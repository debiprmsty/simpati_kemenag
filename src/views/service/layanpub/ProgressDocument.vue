<template>
  <div
    class="md:max-w-[94vw] max-w-[92vw] mx-auto md:my-2 md:-mt-0 -mt-3 flex-grow overflow-x-hidden mb-0"
    id="me-progress"
  >
    <!-- Card utama -->
    <div
      class="mx-auto w-full max-w-full sm:max-w-xl lg:max-w-[120vw] bg-white rounded-2xl shadow p-4 sm:p-6"
    >
      <!-- Judul halaman -->
      <h2 class="text-center font-bold text-xl sm:text-2xl mb-4">PROGRESS PERMOHONAN</h2>

      <!-- TAB NAVIGASI: Dokumen & Status -->
      <div class="flex border-b border-gray-200 mb-4 text-sm">
        <!-- Tombol Dokumen -->
        <button
          @click="activeView = 'docs'"
          :class="[
            'flex-1 py-2 text-center font-semibold',
            activeView === 'docs'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700',
          ]"
        >
          Dokumen
        </button>
        <!-- Tombol Status -->
        <button
          @click="detailSelected && (activeView = 'timeline')"
          :disabled="!detailSelected"
          :class="[
            'flex-1 py-2 text-center font-semibold',
            detailSelected
              ? activeView === 'timeline'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              : 'text-gray-300 cursor-not-allowed',
          ]"
        >
          Status
        </button>
      </div>

      <!-- FILTER TANGGAL: muncul hanya di view Dokumen -->
      <div
        v-if="activeView === 'docs'"
        class="mb-8 mt-5 flex md:flex-row flex-col justify-start items-start flex-wrap gap-1 text-xs sm:gap-2 sm:text-sm"
      >
        <div class="flex items-center gap-1 sm:mr-5 mr-2 flex-1 min-w-[120px]">
          <label class="text-gray-600 whitespace-nowrap">Dari:</label>
          <input
            type="date"
            placeholder="dd/mm/yy"
            v-model="startDate"
            class="w-full border border-gray-300 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1"
          />
        </div>
        <div class="flex items-center gap-1 flex-1 min-w-[120px]">
          <label class="text-gray-600 whitespace-nowrap">Sampai:</label>
          <input
            type="date"
            placeholder="dd/mm/yy"
            v-model="endDate"
            class="w-full border border-gray-300 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1"
          />
        </div>
      </div>

      <!-- DAFTAR DOKUMEN -->
      <div v-if="activeView === 'docs'" class="space-y-3 overflow-hidden">
        <!-- Loop daftar dokumen -->
        <div
          v-for="doc in docs"
          :key="doc.id"
          class="flex flex-col sm:flex-row sm:justify-between p-3 border border-gray-300 rounded-lg"
        >
          <div class="w-full sm:flex-1">
            <!-- Nama dokumen -->
            <p class="font-medium text-gray-800 text-sm sm:text-base mb-1 break-words">
              {{ doc.name }}
            </p>
            <!-- Waktu upload, diformat locale Indonesia -->
            <p class="text-xs sm:text-sm text-gray-500">
              Diupload: {{ formatDateTime(doc.uploaded_at) }}
            </p>
          </div>
          <!-- Tombol lihat detail timeline -->
          <button
            @click="selectDoc(doc)"
            class="mt-2 hover:cursor-pointer md:w-auto w-22 py-1 sm:mt-0 border-2 border-blue-500 text-blue-500 px-2 rounded-md text-xs sm:text-sm hover:bg-blue-500 hover:text-white transition"
          >
            Lihat Detail
          </button>
        </div>

        <!-- Pesan kalau tidak ada dokumen -->
        <p v-if="docs.length === 0 && !loadingDocs" class="text-gray-500 text-xs italic">
          Tidak ada dokumen.
        </p>
        <!-- Loading indicator -->
        <div v-if="loadingDocs" class="text-center text-gray-500 text-sm">Loading…</div>

        <!-- PAGINASI -->
        <div
          v-if="meta.total > meta.per_page"
          class="flex justify-center mt-4 text-xs sm:text-sm space-x-2 md:space-x-4"
        >
          <button
            @click="fetchDocs(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-2 py-1 bg-gray-300 rounded disabled:opacity-50 text-lg"
          >
            &laquo;
          </button>
          <span class="text-gray-600 mt-2">
            Halaman {{ meta.current_page }} dari {{ meta.last_page }}
          </span>
          <button
            @click="fetchDocs(currentPage + 1)"
            :disabled="currentPage === meta.last_page"
            class="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 text-shadow-lg"
          >
            &raquo;
          </button>
        </div>
      </div>

      <!-- TIMELINE STATUS -->
      <div v-else class="relative pl-6 sm:pl-12 overflow-auto">
        <!-- Garis vertikal -->
        <div
          class="absolute left-2 sm:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400 opacity-40"
        ></div>
        <!-- Loading timeline -->
        <div v-if="loadingTimeline" class="text-center text-gray-500 text-sm">
          Loading…
        </div>
        <!-- List event timeline -->
        <ul v-else class="space-y-10 ml-4 sm:ml-8 text-sm">
          <li v-for="(evt, idx) in sortedTimeline" :key="idx" class="relative">
            <!-- Icon di garis -->
            <div class="absolute -left-3 sm:-left-5 top-1 bg-white rounded-full p-1">
              <div
                class="bg-white rounded-full p-1 border-2"
                :class="statusColor(evt.status)"
              >
                <component :is="statusIcon(evt.status)" class="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            </div>
            <!-- Konten tiap event -->
            <div class="pl-6 sm:pl-10 space-y-1">
              <p class="font-semibold text-gray-800">{{ evt.status }}</p>
              <!-- Tanggal & Waktu -->
              <p class="text-xs">
                🗓️ {{ getDate(evt.timestamp) }}<br />
                🕒 {{ getTime(evt.timestamp) }}
              </p>
              <!-- Files jika ada -->
              <ul v-if="evt.files?.length" class="list-disc pl-4 text-xs sm:text-sm">
                <li v-for="f in evt.files" :key="f" class="break-words">{{ f }}</li>
              </ul>
              <!-- Catatan jika ada -->
              <p v-if="evt.note" class="text-xs sm:text-sm text-gray-600 italic mt-2">
                <span class="text-blue-500 font-semibold">Catatan:</span> {{ evt.note }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

// Setup axios instance
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

// Reactive state
const docs = ref([]);
const meta = ref({ current_page: 1, last_page: 1, per_page: 5, total: 0 });
const timeline = ref([]);
const activeView = ref("docs");
const detailSelected = ref(false);
const currentPage = ref(1);
const startDate = ref("");
const endDate = ref("");
const loadingDocs = ref(false);
const loadingTimeline = ref(false);

const route = useRoute();
const scrollToSection = (hash) => {
  const section = document.querySelector(hash);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Watch perubahan hash pada URL
watch(
  () => route.hash,
  (newHash) => {
    if (newHash === "#me-progress") {
      nextTick(() => {
        scrollToSection(newHash);
      });
    }
  }
);

// Pada mounted
onMounted(() => {
  if (route.hash === "#me-section") {
    nextTick(() => {
      scrollToSection(route.hash);
    });
  }
});

// Helpers: safe parsing ISO string to Date, formatting locale id
function getDate(iso) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (isNaN(d)) return "-";
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function getTime(iso) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (isNaN(d)) return "-";
  return d
    .toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false })
    .replace(":", ".");
}
function formatDateTime(iso) {
  return `${getDate(iso)} ${getTime(iso)}`;
}

// Status icon & color mapping
import {
  PaperAirplaneIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
function statusIcon(s) {
  if (s === "Terkirim") return PaperAirplaneIcon;
  if (s === "Diterima") return CheckCircleIcon;
  if (s === "Diproses") return Cog6ToothIcon;
  if (s === "Disetujui") return CheckCircleIcon;
  return XCircleIcon;
}
function statusColor(s) {
  if (s === "Terkirim") return "border-purple-400";
  if (s === "Diterima") return "border-blue-500";
  if (s === "Diproses") return "border-yellow-500";
  if (s === "Disetujui") return "border-green-500";
  return "border-red-500";
}

// Fetch daftar dokumen dengan optional date filter
async function fetchDocs(page = 1) {
  activeView.value = "docs";
  currentPage.value = page;
  loadingDocs.value = true;
  const res = await api.get("/pengajuan-dokumen/user-doc-all", {
    params: {
      page,
      per_page: meta.value.per_page,
      start: startDate.value || undefined,
      end: endDate.value || undefined,
    },
  });
  docs.value = res.data.data;
  meta.value = res.data.meta;
  loadingDocs.value = false;
}

// Fetch timeline detail by doc ID
async function fetchTimeline(id) {
  loadingTimeline.value = true;
  const res = await api.get(`/pengajuan-dokumen/user-doc-detail/${id}`);
  timeline.value = res.data.data;
  loadingTimeline.value = false;
}

// Select doc & switch to timeline view
async function selectDoc(doc) {
  detailSelected.value = true;
  activeView.value = "timeline";
  await fetchTimeline(doc.id);
}

// Watch date filters to refetch
watch([startDate, endDate], () => fetchDocs(1));

// On mount, fetch initial docs
onMounted(() => fetchDocs(1));

// Sort timeline events by predefined order
const statusOrder = ["Terkirim", "Diterima", "Diproses", "Disetujui", "Ditolak"];
const sortedTimeline = computed(() =>
  statusOrder.flatMap((st) => timeline.value.filter((e) => e.status === st))
);
</script>

<style scoped>
/* Semua styling menggunakan Tailwind utilities */
</style>
