<template>
  <div class="w-full flex flex-col justify-center px-4 md:px-8 bg-gray-50">
    <!-- Banner Kecil -->
    <div
      class="mb-6 mt-6 p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-md"
    >
      <h2 class="text-lg md:text-xl font-bold">Bank Data</h2>
      <p class="text-xs md:text-[1rem] opacity-90 mt-1">
        Pusat data keagamaan terintegrasi yang menghadirkan informasi akurat untuk
        mendukung kebijakan dan pelayanan publik
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
                class="w-1/12 px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Nomor
              </th>
              <th
                class="w-10/12 px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Nama Data
              </th>
              <th
                class="w-1/12 px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-white uppercase tracking-wide"
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="item in paginatedItems"
              :key="item.nomor"
              class="bg-white hover:shadow hover:bg-gray-50 transform hover:-translate-y-0.5 transition duration-200"
            >
              <td
                class="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-700"
              >
                {{ item.nomor }}
              </td>
              <td
                class="px-4 py-2 md:px-6 md:py-4 whitespace-normal break-words text-xs md:text-sm text-gray-700"
              >
                {{ item.nama_data }}
              </td>
              <td
                class="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700 flex items-center justify-end"
              >
                <a
                  :href="item.link"
                  target="_blank"
                  class="inline-block w-20 h-8 leading-8 text-center bg-[#1B4D3E] text-white rounded-lg hover:bg-green-800 transition flex-none"
                >
                  Lihat Data
                </a>
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
import { ref, computed } from "vue";

const requests = ref([
  {
    nomor: 1,
    nama_data: "Jumlah Penduduk menurut Agama dan Kepercayaan 2022",
    link:
      "https://docs.google.com/spreadsheets/d/17aHXQbECVk77j4Z7m_Rsho8RWzzlZLxd/edit?gid=1601419570#gid=1601419570",
  },
  {
    nomor: 2,
    nama_data: "Data Peristiwa Nikah KUA",
    link:
      "https://docs.google.com/spreadsheets/d/1H5c0yBIWyxwXciCBMa-pY4zmp8yqrcFa/edit?gid=1650920442#gid=1650920442",
  },
  {
    nomor: 3,
    nama_data:
      "Jumlah Pembinaan Keluarga menurut Agama Kementerian Agama Kabupaten Buleleng",
    link:
      "https://docs.google.com/spreadsheets/d/1Twt7u5eQNTpZt0q-Ne5Gdq32k1YRwQxj/edit?gid=238980539#gid=238980539",
  },
  {
    nomor: 4,
    nama_data: "Jumlah Daftar Tunggu dan Kuota Haji Buleleng",
    link:
      "https://docs.google.com/spreadsheets/d/1ZJfvAMZ0BZ97RuyTywdCDlG2Ewk-7Duo/edit?gid=1892319610#gid=1892319610",
  },
  {
    nomor: 5,
    nama_data: "Jumlah Lembaga Pontren, Madin dan TPQ menurut Kecamatan Tahun 2023",
    link:
      "https://docs.google.com/spreadsheets/d/1HyWmST2Vmn8pTpuklKC_LPZjMJS5fIvs/edit?gid=705274124#gid=705274124",
  },
  {
    nomor: 6,
    nama_data: "Jumlah Penyuluh Agama menurut Agama Kementerian Agama Kabupaten Buleleng",
    link:
      "https://docs.google.com/spreadsheets/d/144mqxeBfF_cpz1LvBj56j4XdUyesQGmt/edit?gid=205988949#gid=205988949",
  },
  {
    nomor: 7,
    nama_data:
      "Jumlah Sekolah, Guru, dan Murid Raudatul Athfal (RA) di Bawah Kementerian Agama Menurut Kecamatan di Kabupaten Buleleng, 2022/2023 dan 2023/2024",
    link:
      "https://docs.google.com/spreadsheets/d/10FCGbYWqr-qBYuPvRvXZId408FG_qGQG/edit?gid=1374889307#gid=1374889307",
  },
  {
    nomor: 8,
    nama_data:
      "Jumlah Sekolah, Guru, dan Murid Madrasah Ibtidaiyah (MI) di Bawah Kementerian Agama Menurut Kecamatan Menurut Kecamatan di Kabupaten Buleleng, 2020/2021 dan 2022/2023",
    link:
      "https://docs.google.com/spreadsheets/d/10FCGbYWqr-qBYuPvRvXZId408FG_qGQG/edit?gid=1374889307#gid=1374889307",
  },
  {
    nomor: 9,
    nama_data:
      "Jumlah Sekolah, Guru, dan Murid Madrasah Tsanawiyah (MTs) di Bawah Kementerian Agama Menurut Kecamatan di Kabupaten Buleleng, 2020/2021 dan 2022/2023",
    link:
      "https://docs.google.com/spreadsheets/d/1HyWmST2Vmn8pTpuklKC_LPZjMJS5fIvs/edit?gid=705274124#gid=705274124",
  },
  {
    nomor: 10,
    nama_data:
      "Jumlah Sekolah, Guru, dan Murid Madrasah Aliyah (MA) di Bawah Kementerian Agama Menurut Kecamatan di Kabupaten Buleleng, 2020/2021 dan 2022/2023",
    link:
      "https://docs.google.com/spreadsheets/d/1HyWmST2Vmn8pTpuklKC_LPZjMJS5fIvs/edit?gid=705274124#gid=705274124",
  },
  {
    nomor: 11,
    nama_data: "Jumlah Tempat Peribadatan Menurut Kecamatan di Kabupaten Buleleng, 2023",
    link:
      "https://docs.google.com/spreadsheets/d/1HyWmST2Vmn8pTpuklKC_LPZjMJS5fIvs/edit?gid=705274124#gid=705274124",
  },
]);

const searchTerm = ref("");
const selectedSeksi = ref("");
const currentPage = ref(1);
const perPage = 5;

const seksiOptions = computed(() => [...new Set(requests.value.map((r) => r.seksi))]);

const filteredItems = computed(() =>
  requests.value.filter((item) => {
    const q = searchTerm.value.toLowerCase();
    const matchSearch =
      item.nomor.toString().includes(q) ||
      item.seksi.toLowerCase().includes(q) ||
      item.jenisPelayanan.toLowerCase().includes(q) ||
      item.bentukLayanan.toLowerCase().includes(q) ||
      item.waktuPenyelesaian.toLowerCase().includes(q) ||
      item.syarat.toLowerCase().includes(q);

    const matchSeksi = !selectedSeksi.value || item.seksi === selectedSeksi.value;

    return matchSearch && matchSeksi;
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
