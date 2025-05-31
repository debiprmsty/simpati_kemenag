<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8 relative">
    <div class="md:max-w-[94vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Left Column: Syarat & Ketentuan -->
      <div class="md:col-span-2 bg-white rounded-2xl shadow p-6">
        <h2 class="text-2xl font-bold mb-4 flex items-center space-x-2">
          <p class="text-green-500 mr-2">#</p>
          <span class="-mt-1">Syarat dan Ketentuan</span>
        </h2>

        <!-- Jika belum ada sections -->
        <div
          v-if="!sections.length"
          class="text-center text-gray-500 py-10 md:mt-20 mt-0"
        >
          Belum ada data syarat &amp; ketentuan.
        </div>

        <!-- Jika ada sections -->
        <div v-else class="text-gray-700 space-y-10">
          <div
            v-for="section in sections"
            :key="section.key"
            class="flex items-start space-x-4"
          >
            <component :is="section.icon" class="h-6 w-6 text-green-500 flex-shrink-0" />
            <div class="flex-1">
              <h3 class="text-slate-900 font-semibold mb-2">
                {{ section.title }}
              </h3>
              <div
                v-html="section.html"
                class="text-slate-700 leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Informasi Pribadi & Upload -->
      <div class="space-y-6">
        <div class="bg-white rounded-2xl shadow p-6 space-y-4">
          <h3 class="text-xl font-semibold flex items-center space-x-2">
            <UserCircleIcon class="h-6 w-6 text-blue-500 mr-2" />
            Informasi Pribadi
          </h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-2">
              <UserIcon class="h-5 w-5 text-gray-400 mr-2" />
              <span class="text-gray-800">{{ user.name || "-" }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <EnvelopeIcon class="h-5 w-5 text-gray-400 mr-2" />
              <span class="text-gray-800">{{ user.email || "-" }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <PhoneIcon class="h-5 w-5 text-gray-400 mr-2" />
              <span class="text-gray-800">{{ user.no_hp || "-" }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <MapPinIcon class="h-6 w-6 text-gray-400 mr-1" />
              <span class="text-gray-800">{{ user.alamat || "-" }}</span>
            </div>
          </div>

          <!-- Catatan -->
          <div>
            <label class="block text-gray-600 mb-1">Catatan</label>
            <textarea
              v-model="note"
              rows="3"
              placeholder="Masukkan catatan..."
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <!-- Daftar File -->
          <div v-if="fileList.length" class="mt-2 space-y-1">
            <p class="text-sm text-gray-700 font-semibold">
              {{ fileList.length }} file siap di-submit ✅
            </p>
            <ul>
              <li
                v-for="(file, index) in fileList"
                :key="index"
                class="text-sm text-gray-600 flex items-center gap-2"
              >
                <i class="fa fa-link text-blue-500"></i>
                {{ file.name }}
              </li>
            </ul>
          </div>

          <!-- Unggah File & Submit Buttons -->
          <div class="flex items-center space-x-4 mt-4">
            <label
              class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUpOnSquareIcon class="h-5 w-5 mr-2" />
              Unggah File
              <input
                type="file"
                multiple
                @change="onFileChange"
                class="hidden"
                accept="*"
                :disabled="isSubmitting"
              />
            </label>

            <button
              @click="submitForm"
              :disabled="isSubmitting"
              class="relative px-6 py-2 bg-blue-600 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <template v-if="!isSubmitting"> Submit </template>
              <template v-else>
                <span class="flex items-center space-x-2">
                  <svg
                    class="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Loading...</span>
                </span>
              </template>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <div class="fixed top-4 right-4 flex flex-col space-y-2 z-50">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="px-4 py-2 rounded shadow-lg text-white flex justify-between items-center"
        :class="t.type === 'error' ? 'bg-red-500' : 'bg-green-500'"
      >
        <span>{{ t.message }}</span>
        <button @click="removeToast(t.id)" class="font-bold ml-4">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import {
  UserIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowUpOnSquareIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  TagIcon,
  BanknotesIcon,
  MapPinIcon,
} from "@heroicons/vue/24/outline";

// Axios instance with auth header
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

// Route params
const route = useRoute();
const idLayanan = route.params.idLayanan;
const idRole = route.params.idRole || route.params.id;

// State
const user = ref({ name: "", email: "", no_hp: "", alamat: "" });
const sections = ref([]);
const note = ref("");
const fileList = ref([]);
const toasts = ref([]);
const isSubmitting = ref(false);

// Toast helpers
function showToast(msg, type = "success") {
  const id = Date.now();
  toasts.value.push({ id, message: msg, type });
  setTimeout(() => removeToast(id), 3000);
}
function removeToast(id) {
  toasts.value = toasts.value.filter((t) => t.id !== id);
}

// Handle file selection
function onFileChange(e) {
  const newFiles = Array.from(e.target.files);
  const existingNames = fileList.value.map((f) => f.name);
  const uniqueFiles = newFiles.filter((f) => !existingNames.includes(f.name));
  fileList.value = fileList.value.concat(uniqueFiles);
}

// Submit form with loading state
async function submitForm() {
  if (!fileList.value.length) return showToast("⚠️ Pilih minimal satu file!", "error");
  if (!note.value.trim()) return showToast("⚠️ Isi catatan!", "error");

  isSubmitting.value = true;
  try {
    const formData = new FormData();
    formData.append("role_id", idRole);
    formData.append("produk_id", idLayanan);
    formData.append("catatan", note.value);
    fileList.value.forEach((f) => formData.append("filenames[]", f));

    const res = await api.post("/pengajuan-dokumen/unggah", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    showToast(res.data.message || "✅ Dokumen berhasil di-submit!", "success");
    note.value = "";
    fileList.value = [];
  } catch (err) {
    const msg = err.response?.data?.message || err.message;
    showToast(`❌ ${msg}`, "error");
  } finally {
    isSubmitting.value = false;
  }
}

// Fetch authenticated user
async function fetchUser() {
  try {
    const res = await api.get("/me");
    user.value = res.data.data || {};
  } catch {
    showToast("Gagal memuat data user", "error");
  }
}

// Fetch Syarat & Ketentuan
async function fetchSK() {
  try {
    const res = await api.get(`/syarat-ketentuan/detail-by-jenis/${idLayanan}`);
    const data = res.data.data;

    // Jika API tidak mengembalikan apa-apa, sections tetap kosong
    if (!Array.isArray(data) || data.length === 0) {
      sections.value = [];
      return;
    }

    // Kalau ada, baru kita isi sections dengan data nyata
    const sk = data[0];
    sections.value = [
      {
        key: "persyaratan",
        icon: CheckCircleIcon,
        title: "Persyaratan",
        html: sk.persyaratan,
      },
      {
        key: "simpro",
        icon: DocumentTextIcon,
        title: "Sistem & Prosedur",
        html: sk.simpro,
      },
      {
        key: "durasi",
        icon: ClockIcon,
        title: "Jangka Waktu",
        html: `<p>${sk.durasi}</p>`,
      },
      {
        key: "biaya",
        icon: BanknotesIcon,
        title: "Biaya/Tarif",
        html: `<p>Rp ${sk.biaya}</p>`,
      },
      {
        key: "produk",
        icon: TagIcon,
        title: "Produk Layanan",
        html: `<p>${sk.produk_layanan}</p>`,
      },
      {
        key: "penanganan",
        icon: ArrowUpOnSquareIcon,
        title: "Penanganan & Masukan",
        html: sk.penanganan,
      },
    ];
  } catch (err) {
    showToast("Gagal memuat syarat & ketentuan", "error");
  }
}

onMounted(() => {
  fetchUser();
  fetchSK();
});
</script>

<style scoped>
/* All styling via Tailwind CSS */
</style>
