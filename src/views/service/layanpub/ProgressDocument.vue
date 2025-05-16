<template>
  <div class="px-4 py-1 flex-grow overflow-x-hidden">
    <!-- Card utama: full-width di mobile, cap di tablet & desktop -->
    <div
      class="mx-auto w-full max-w-full
             sm:max-w-xl      /* ≥640px cap 36rem */
             lg:max-w-[120vw]     /* ≥1024px cap 48rem */
             bg-white rounded-2xl shadow p-4 sm:p-6"
    >
      <!-- Judul -->
      <h2 class="text-center font-bold text-xl sm:text-2xl mb-4">
        PROGRESS PERMOHONAN
      </h2>

      <!-- Tab Navigation -->
      <div class="flex border-b border-gray-200 mb-4 text-sm">
        <button
          @click="activeView = 'docs'"
          :class="[
            'flex-1 py-2 text-center font-semibold',
            activeView === 'docs'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          Dokumen
        </button>
        <button
          @click="detailSelected && (activeView = 'timeline')"
          :disabled="!detailSelected"
          :class="[
            'flex-1 py-2 text-center font-semibold',
            detailSelected
              ? activeView === 'timeline'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              : 'text-gray-300 cursor-not-allowed'
          ]"
        >
          Status
        </button>
      </div>

      <!-- Date Filter -->
      <div
        v-if="activeView === 'docs'"
        class="mb-8 mt-5 flex flex-wrap items-end gap-1 text-xs sm:gap-2 sm:text-sm"
      >
        <div class="flex items-center gap-1 sm:mr-5 mr-2 flex-1 min-w-[120px]">
          <label class="text-gray-600 whitespace-nowrap">Dari:</label>
          <input
            type="date"
            v-model="startDate"
            class="w-full border border-gray-300 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1"
          />
        </div>
        <div class="flex items-center gap-1 flex-1 min-w-[120px]">
          <label class="text-gray-600 whitespace-nowrap">Sampai:</label>
          <input
            type="date"
            v-model="endDate"
            class="w-full border border-gray-300 rounded-lg px-1 py-0.5 sm:px-2 sm:py-1"
          />
        </div>
      </div>

      <!-- Document List -->
      <div v-if="activeView === 'docs'" class="space-y-3 overflow-hidden">
        <div
          v-for="doc in docs"
          :key="doc.id"
          class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-3 border border-gray-200 rounded-lg break-words"
        >
          <div class="w-full sm:flex-1">
            <p class="font-medium text-gray-800 text-sm sm:text-base mb-1 break-words">
              {{ doc.name }}
            </p>
            <p class="text-xs sm:text-sm text-gray-500">
              Diupload: {{ doc.uploaded_at }}
            </p>
          </div>
          <button
            @click="selectDoc(doc)"
            class="mt-2 sm:mt-0 border-2 border-blue-500 text-blue-500 px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-500 hover:text-white transition"
          >
            Lihat Detail
          </button>
        </div>

        <p
          v-if="docs.length === 0 && !loadingDocs"
          class="text-gray-500 text-xs italic"
        >
          Tidak ada dokumen.
        </p>
        <div v-if="loadingDocs" class="text-center text-gray-500 text-sm">
          Loading…
        </div>

        <!-- Pagination -->
        <div
          v-if="meta.total > meta.per_page"
          class="flex justify-center items-center mt-4 text-xs sm:text-sm space-x-1 sm:space-x-2"
        >
          <button
            @click="fetchDocs(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            &laquo;
          </button>
          <span class="text-gray-600">
            Halaman {{ meta.current_page }} dari {{ meta.last_page }}
          </span>
          <button
            @click="fetchDocs(currentPage + 1)"
            :disabled="currentPage === meta.last_page"
            class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            &raquo;
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <div v-else class="relative pl-6 sm:pl-12 overflow-scroll">
        <div
          class="absolute left-2 sm:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400 opacity-40"
        ></div>
        <div v-if="loadingTimeline" class="text-center text-gray-500 text-sm">
          Loading…
        </div>
        <ul v-else class="space-y-10 ml-4 sm:ml-8 text-sm break-words">
          <li
            v-for="(evt, idx) in sortedTimeline"
            :key="idx"
            class="relative"
          >
            <div
              class="absolute -left-3 sm:-left-5 top-1 bg-white rounded-full p-1"
            >
              <div
                class="bg-white rounded-full p-1 border-2"
                :class="statusColor(evt.status)"
              >
                <component
                  :is="statusIcon(evt.status)"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                />
              </div>
            </div>
            <div class="pl-6 sm:pl-10 space-y-1 md:ml-0 ml-3">
              <p class="font-semibold text-gray-800">{{ evt.status }}</p>
              <p class="text-xs">{{ evt.timestamp }}</p>
              <ul
                v-if="evt.files && evt.files.length"
                class="list-disc pl-4 space-y-1 text-xs sm:text-sm"
              >
                <li v-for="(f, i) in evt.files" :key="i" class="break-words">
                  {{ f }}
                </li>
              </ul>
              <p
                v-if="evt.note"
                class="text-xs sm:text-sm text-gray-600 italic mt-3"
              >
                <span class="text-blue-500 font-semibold">Catatan: </span>{{ evt.note }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import axios from 'axios'
import {
  PaperAirplaneIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })
api.interceptors.request.use(cfg => {
  const t = localStorage.getItem('token')
  if (t) cfg.headers.Authorization = `Bearer ${t}`
  return cfg
})

// state
const docs = ref([])
const meta = ref({ current_page: 1, last_page: 1, per_page: 5, total: 0 })
const timeline = ref([])
const activeView = ref('docs')
const detailSelected = ref(false)
const currentPage = ref(1)
const startDate = ref('')
const endDate = ref('')
const loadingDocs = ref(false)
const loadingTimeline = ref(false)

// icon & color mapping
function statusIcon(status) {
  if (status === 'Terkirim')   return PaperAirplaneIcon
  if (status === 'Diterima')   return CheckCircleIcon
  if (status === 'Diproses')   return Cog6ToothIcon
  if (status === 'Disetujui')  return CheckCircleIcon
  return XCircleIcon  // Ditolak
}
function statusColor(status) {
  if (status === 'Terkirim')   return 'border-purple-400'
  if (status === 'Diterima')   return 'border-blue-500'
  if (status === 'Diproses')   return 'border-yellow-500'
  if (status === 'Disetujui')  return 'border-green-500'
  return 'border-red-500'
}

// fetch docs
async function fetchDocs(page = 1) {
  activeView.value = 'docs'
  currentPage.value = page
  loadingDocs.value = true

  const resp = await api.get('/pengajuan-dokumen/user-doc-all', {
    params: {
      page,
      per_page: meta.value.per_page,
      start: startDate.value || undefined,
      end: endDate.value   || undefined
    }
  })
  docs.value = resp.data.data
  meta.value = resp.data.meta
  loadingDocs.value = false
}

// fetch timeline
async function fetchTimeline(id) {
  loadingTimeline.value = true
  const resp = await api.get(`/pengajuan-dokumen/user-doc-detail/${id}`)
  timeline.value = resp.data.data
  loadingTimeline.value = false
}

// select doc & show timeline
async function selectDoc(doc) {
  detailSelected.value = true
  activeView.value = 'timeline'
  await fetchTimeline(doc.id)
}

// auto refetch on date change
watch([startDate, endDate], () => fetchDocs(1))

// initial load
fetchDocs(1)

// computed: urutkan timeline sesuai sequence
const statusOrder = ['Terkirim','Diterima','Diproses','Disetujui','Ditolak']
const sortedTimeline = computed(() =>
  statusOrder.flatMap(st =>
    timeline.value.filter(e => e.status === st)
  )
)
</script>

<style scoped>
/* Seluruh responsif di-handle oleh Tailwind utilities di template */
</style>
