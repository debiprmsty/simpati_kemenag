<template>
    <div class="min-h-screen bg-gray-50 p-4 md:p-8">
      <div class="md:max-w-[92vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 class="text-2xl font-bold mb-4 flex items-center space-x-2">
            <ArchiveBoxArrowDownIcon class="h-6 w-6 text-green-500 mr-5" />
            Syarat dan Ketentuan
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tincidunt, purus eget ultrices blandit, justo arcu fermentum erat,
            vitae egestas orci metus nec nisi. Quisque vitae interdum nisl...
          </p>
        </div>
  
        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Informasi Pribadi -->
          <div class="bg-white rounded-2xl shadow p-6 space-y-4">
            <h3 class="text-xl font-semibold flex items-center">
              <UserCircleIcon class="h-6 w-6 text-blue-500 mr-3" />
              Informasi Pribadi
            </h3>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <UserIcon class="h-5 w-5 text-gray-400 mr-4" />
                <span class="text-gray-800">{{ user.name || '-' }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <EnvelopeIcon class="h-5 w-5 text-gray-400 mr-4" />
                <span class="text-gray-800">{{ user.email || '-' }}</span>
              </div>
            </div>
  
            <!-- Upload -->
            <label
              class="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition"
            >
              <ArrowUpOnSquareIcon class="h-5 w-5 mr-2" />
              Unggah Dokumen
              <input type="file" class="hidden" @change="onFileChange" />
            </label>
            <p v-if="fileName" class="text-sm text-gray-500">
              File terpilih: {{ fileName }}
            </p>
          </div>
  
          <!-- Status Pengajuan Dokumen -->
          <div class="bg-white rounded-2xl shadow p-6">
            <!-- Tabs -->
            <div class="flex border-b border-gray-200 mb-4">
              <button
                @click="activeView = 'docs'"
                :class="[
                  'flex-1 py-2 text-center font-medium',
                  activeView === 'docs'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-green-600'
                ]"
              >
                <DocumentTextIcon class="inline h-5 w-5 mr-1" />
                Dokumen
              </button>
              <button
                @click="activeView = 'timeline'"
                :class="[
                  'flex-1 py-2 text-center font-medium',
                  activeView === 'timeline'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-green-600'
                ]"
              >
                <ClockIcon class="inline h-5 w-5 mr-1" />
                Timeline
              </button>
            </div>
  
            <!-- Dokumen List -->
            <div v-if="activeView === 'docs'" class="space-y-4">
              <p v-if="docs.length === 0" class="text-center text-gray-500 italic">
                Belum ada dokumen di-upload.
              </p>
              <div
                v-for="doc in docs"
                :key="doc.id"
                class="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                @click="selectDoc(doc.id)"
              >
                <DocumentTextIcon class="h-6 w-6 text-blue-500" />
                <div class="flex-1">
                  <p class="font-semibold text-gray-800">{{ doc.name }}</p>
                  <p class="text-sm text-gray-500">
                    {{ formatDate(doc.uploaded_at) }}
                  </p>
                </div>
                <a
                  :href="doc.url"
                  target="_blank"
                  class="text-green-600 hover:underline flex items-center space-x-1"
                >
                  <ArrowUpOnSquareIcon class="h-5 w-5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
  
            <!-- Timeline View -->
            <div v-else class="relative pl-8">
              <div class="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-200" />
              <ul class="space-y-8">
                <li v-for="(evt, idx) in timeline" :key="idx" class="relative">
                  <div
                    class="absolute left-0 top-1 bg-white rounded-full p-1"
                    :class="statusColor(evt.status)"
                  >
                    <component :is="statusIcon(evt.status)" class="h-5 w-5" />
                  </div>
                  <div class="pl-8">
                    <p class="font-semibold text-gray-800">{{ evt.status }}</p>
                    <p class="text-sm text-gray-500">{{ formatDate(evt.timestamp) }}</p>
                    <p v-if="evt.note" class="text-sm text-gray-600 mt-1">{{ evt.note }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    UserIcon,
    UserCircleIcon,
    EnvelopeIcon,
    ArrowUpOnSquareIcon,
    DocumentTextIcon,
    ClockIcon,
    CheckCircleIcon,
    XCircleIcon,
    ArchiveBoxArrowDownIcon
  } from '@heroicons/vue/24/outline';
  
  const route = useRoute();
  const idLayanan = route.params.idLayanan;
  console.log(idLayanan);
  
  // State
  const user = ref({ name: '', email: '' });
  const fileName = ref('');
  const docs = ref([]);
  const timeline = ref([]);
  const activeView = ref('docs');
  
  // Helpers
  const formatDate = (iso) => new Date(iso).toLocaleString();
  const statusIcon = (status) =>
    status === 'Disetujui' ? CheckCircleIcon :
    status === 'Ditolak'   ? XCircleIcon :
                             ClockIcon;
  const statusColor = (status) =>
    status === 'Terkirim'   ? 'text-gray-400' :
    status === 'Diproses'  ? 'text-blue-500' :
    status === 'Disetujui' ? 'text-green-500' :
                             'text-red-500';
  
  // Fetchers
  async function fetchUser() {
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const body = await res.json();
    user.value = body.data || {};
  }

  async function fetchSK() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/syarat-ketentuan/detail/${idLayanan}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const body = await res.json();
    console.log(body);
  }
  
  async function fetchDocs() {
    const token = localStorage.getItem('token');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user-doc-all`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    docs.value = (await res.json()).data || [];
  }
  
  async function fetchTimeline(docId) {
    const token = localStorage.getItem('token');
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/user-doc-detail/${docId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    timeline.value = (await res.json()).data || [];
  }
  
  // Actions
  function onFileChange(e) {
    const f = e.target.files[0];
    fileName.value = f ? f.name : '';
  }
  
  function selectDoc(docId) {
    activeView.value = 'timeline';
    fetchTimeline(docId);
  }
  
  // Initial load
  onMounted(async () => {
    await fetchUser();
    await fetchDocs();
    await fetchSK();
    const idDoc = route.params.idDoc;
    if (idDoc) {
      activeView.value = 'timeline';
      await fetchTimeline(idDoc);
    }
  });
  
  // Watch route change
  watch(() => route.params.idDoc, (newId) => {
    if (newId) {
      activeView.value = 'timeline';
      fetchTimeline(newId);
    }
  });
  </script>
  
  <style scoped>
  /* Semua styling ditangani Tailwind */
  </style>
  