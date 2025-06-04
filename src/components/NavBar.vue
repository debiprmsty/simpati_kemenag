<template>
  <nav
    class="w-full mt-4 md:max-w-[94vw] max-w-[92vw] mx-auto px-4 py-3 bg-white border border-gray-300 rounded-2xl shadow-md flex items-center justify-between"
  >
    <!-- Logo -->
    <div class="flex items-center space-x-2">
      <router-link to="/" class="flex gap-2">
        <img src="/image/logo_web.png" alt="Logo" class="h-8 hover:cursor-pointer" />
        <span class="text-gray-900 font-semibold text-lg hover:cursor-pointer md:mt-0.5"
          >SIMPATI</span
        >
      </router-link>
    </div>

    <!-- Mid Menu -->
    <div class="hidden md:flex items-center space-x-6">
      <router-link
        to="/"
        class="px-3 py-2 rounded-2xl bg-[#E9EFEC] border border-[#C4DAD2] font-semibold text-gray-800 hover:bg-[#D5E3DA] transition"
      >
        Beranda
      </router-link>
      <router-link
        to="/faq"
        class="font-semibold text-gray-800 hover:text-gray-900 transition"
      >
        FAQ
      </router-link>
      <div class="relative">
        <button
          @click="togglePengaduanDropdown"
          ref="pengaduanDropdownButton"
          class="inline-flex items-center space-x-1 font-medium text-gray-800 hover:text-gray-900 transition"
        >
          <span>Pengaduan Publik</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 011.08 1.04l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            />
          </svg>
        </button>
        <div
          v-if="pengaduanDropdownOpen"
          ref="pengaduanDropdownContent"
          class="absolute right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg w-44 z-20"
        >
          <router-link
            to="/sp4n-lapor"
            class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          >
            SP4N Lapor
          </router-link>
          <a
            href="https://wa.me/+6285928877957"
            class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          >
            WhatsApp Center
          </a>
        </div>
      </div>
    </div>

    <div class="hidden md:flex items-center space-x-4">
      <router-link
        v-if="!isLoggedIn"
        to="/layanan-publik/auth/login"
        class="font-semibold text-gray-800 hover:text-[#16423C] transition"
      >
        Masuk
      </router-link>
      <router-link
        v-if="!isLoggedIn"
        to="/layanan-publik/auth/register"
        class="px-4 py-2 bg-[#1B4D3E] text-white rounded-2xl hover:bg-[#16423C] font-semibold transition"
      >
        Daftar
      </router-link>

      <div v-if="isLoggedIn" class="relative">
        <button
          @click="toggleProfileDropdown"
          ref="profileDropdownButton"
          class="flex items-center space-x-2 group focus:outline-none"
        >
          <span
            v-if="user.name"
            class="text-gray-800 font-medium group-hover:text-[#16423C] transition"
          >
            {{ user.name }}
          </span>
          <img
            :src="user.avatarUrl"
            alt="Avatar"
            class="h-8 w-8 rounded-full border-2 border-gray-300 group-hover:border-[#16423C] transition"
          />
        </button>
        <div
          v-if="profileDropdownOpen"
          ref="profileDropdownContent"
          class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-20 py-1"
        >
          <router-link
            to="/profile"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E9EFEC] transition"
            @click="profileDropdownOpen = false"
          >
            Profil Saya
          </router-link>
          <router-link
            to="/list-satker#me-progress"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E9EFEC] transition"
            @click="profileDropdownOpen = false"
          >
            Pengajuan Saya
          </router-link>
          <button
            @click="triggerLogoutConfirmation"
            class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-[#E9EFEC] hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </nav>

  <!-- Mobile Navbar -->
  <div
    v-if="mobileOpen"
    class="md:hidden bg-white border-t border-gray-200 shadow-md mx-4 rounded-xl"
  >
    <!-- Link Beranda -->
    <router-link
      to="/"
      class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
      @click="mobileOpen = false"
    >
      Beranda
    </router-link>

    <!-- Link FAQ -->
    <router-link
      to="/faq"
      class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
      @click="mobileOpen = false"
    >
      FAQ
    </router-link>

    <!-- Pengaduan Publik -->
    <div class="border-t border-gray-100">
      <button
        @click.stop="togglePengaduanDropdown"
        ref="pengaduanDropdownButton"
        class="w-full flex justify-between items-center px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
      >
        <span>Pengaduan Publik</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 transition-transform"
          :class="{ 'rotate-180': pengaduanDropdownOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 011.08 1.04l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>
      <div
        v-if="pengaduanDropdownOpen"
        ref="pengaduanDropdownContent"
        class="pl-4 border-t border-gray-100"
      >
        <router-link
          to="/sp4n-lapor"
          class="block px-4 py-2 font-medium text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          @click="
            mobileOpen = false;
            pengaduanDropdownOpen = false;
          "
        >
          SP4N Lapor
        </router-link>
        <a
          href="https://wa.me/+6285928877957"
          class="block px-4 py-2 font-medium text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          @click="
            mobileOpen = false;
            pengaduanDropdownOpen = false;
          "
        >
          WhatsApp Center
        </a>
      </div>
    </div>

    <!-- Auth (Masuk/Daftar) jika belum login -->
    <div v-if="!isLoggedIn" class="border-t border-gray-100">
      <router-link
        to="/layanan-publik/auth/login"
        class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
        @click="mobileOpen = false"
      >
        Masuk
      </router-link>
      <router-link
        to="/layanan-publik/auth/register"
        class="block mx-4 my-2 px-4 py-2 text-center bg-[#1B4D3E] text-white rounded-2xl font-semibold hover:bg-[#16423C] transition"
        @click="mobileOpen = false"
      >
        Daftar
      </router-link>
    </div>

    <!-- Profile & Logout jika sudah login -->
    <div v-if="isLoggedIn" class="border-t border-gray-100">
      <button
        @click="toggleProfileDropdown"
        ref="profileMobileDropdownButton"
        class="w-full flex justify-between items-center px-4 py-3 group"
      >
        <div class="flex items-center space-x-3">
          <img
            :src="user.avatarUrl || '/image/cartoon.png'"
            alt="Avatar"
            class="h-10 w-10 rounded-full border-2 border-gray-300 group-hover:border-[#16423C] transition"
          />
          <span
            v-if="user.name"
            class="text-gray-800 font-semibold group-hover:text-[#16423C] transition"
          >
            {{ user.name }}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 transition-transform"
          :class="{ 'rotate-180': profileDropdownOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 011.08 1.04l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>

      <!-- Dropdown Menu Profil Mobile -->
      <div
        v-if="profileDropdownOpen"
        ref="profileMobileDropdownContent"
        class="pl-4 border-t border-gray-100"
      >
        <router-link
          to="/profile"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E9EFEC] transition"
          @click="
            mobileOpen = false;
            profileDropdownOpen = false;
          "
        >
          Profil Saya
        </router-link>
        <router-link
          to="/list-satker#me-progress"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E9EFEC] transition"
          @click="
            mobileOpen = false;
            profileDropdownOpen = false;
          "
        >
          Pengajuan Saya
        </router-link>
      </div>

      <button
        @click="
          () => {
            triggerLogoutConfirmation();
            mobileOpen = false;
          }
        "
        class="w-full text-left block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 hover:text-red-500 transition"
      >
        Logout
      </button>
    </div>
  </div>

  <!-- Overlay dengan blur, tanpa warna solid -->
  <div
    v-if="showLogoutConfirmModal"
    class="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4"
  >
    <!-- Modal putih tetap ada -->
    <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
      <h3 class="text-lg font-semibold mb-4 text-gray-900">Konfirmasi Logout</h3>
      <p class="text-gray-700 mb-6">Apakah Anda yakin ingin keluar?</p>
      <div class="flex justify-end space-x-3">
        <button
          @click="cancelLogout"
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Batal
        </button>
        <button
          @click="executeLogout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Ya, Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const mobileOpen = ref(false);
const pengaduanDropdownOpen = ref(false); // Ganti nama dari dropdownOpen
const profileDropdownOpen = ref(false);
const showLogoutConfirmModal = ref(false);

const isLoggedIn = ref(false);
const user = ref({
  avatarUrl: "",
  name: null,
});

const router = useRouter();
const apiUrl = import.meta.env.VITE_API_URL;

// Refs for dropdown elements to help with handleClickOutside
const pengaduanDropdownButton = ref(null);
const pengaduanDropdownContent = ref(null);
const profileDropdownButton = ref(null);
const profileDropdownContent = ref(null);
const profileMobileDropdownButton = ref(null);
const profileMobileDropdownContent = ref(null);

async function fetchUserData(token) {
  try {
    const response = await fetch(`${apiUrl}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      user.value.name = data.data.name;
      user.value.avatarUrl = `${apiUrl}/my-avatar/${data.data.avatar}`;
      // Jika API juga mengembalikan URL avatar:
      // if (data.data.avatar_url) user.value.avatarUrl = data.data.avatar_url;
      // Jika tidak, pastikan avatarUrl di-set dari localStorage atau default di onMounted
      if (data.data.avatar == null) {
        // Hanya set jika belum ada (misal dari API)
        user.value.avatarUrl = "/image/cartoon.png";
      }
      console.log(user.value.avatarUrl);
    } else {
      console.error("Failed to fetch user data:", response.status);
      if (response.status === 401) {
        // Jika fetch user gagal karena token tidak valid, lakukan logout
        await performClientSideLogout();
        router.push("/layanan-publik/auth/login");
      }
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function togglePengaduanDropdown() {
  pengaduanDropdownOpen.value = !pengaduanDropdownOpen.value;
  profileDropdownOpen.value = false; // Tutup dropdown lain
}

function toggleProfileDropdown() {
  profileDropdownOpen.value = !profileDropdownOpen.value;
  if (profileDropdownOpen.value) pengaduanDropdownOpen.value = false; // Tutup dropdown lain
}

function triggerLogoutConfirmation() {
  profileDropdownOpen.value = false; // Tutup dropdown profil dulu
  mobileOpen.value = false; // Tutup menu mobile jika terbuka
  showLogoutConfirmModal.value = true;
}

function cancelLogout() {
  showLogoutConfirmModal.value = false;
}

async function performClientSideLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("avatarUrl"); // Hapus avatar jika disimpan
  isLoggedIn.value = false;
  user.value = { avatarUrl: "", name: null };
  profileDropdownOpen.value = false;
  pengaduanDropdownOpen.value = false;
  mobileOpen.value = false;
}

async function executeLogout() {
  showLogoutConfirmModal.value = false;
  const token = localStorage.getItem("token");

  if (token && apiUrl) {
    // Hanya panggil API jika ada token dan apiUrl
    try {
      // Panggil API logout di backend (opsional tapi direkomendasikan)
      const response = await fetch(`${apiUrl}/logout`, {
        method: "POST", // atau 'GET', sesuai implementasi backend Anda
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        // Meskipun API logout gagal, tetap lanjutkan logout di client
        console.warn("API logout request failed:", response.status);
      }
    } catch (error) {
      console.error("Error calling logout API:", error);
    }
  }

  await performClientSideLogout();
  router.push("/layanan-publik/auth/login"); // Arahkan ke halaman login
}

onMounted(() => {
  const token = localStorage.getItem("token");
  isLoggedIn.value = !!token;

  if (isLoggedIn.value) {
    // Inisialisasi avatarUrl dari localStorage atau default, akan dioverride oleh fetchUserData jika API menyediakannya
    user.value.avatarUrl = localStorage.getItem("avatarUrl") || "/image/cartoon.png";
    fetchUserData(token);
  }

  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  // Cek untuk dropdown pengaduan
  if (
    pengaduanDropdownOpen.value &&
    pengaduanDropdownButton.value &&
    !pengaduanDropdownButton.value.contains(event.target) &&
    pengaduanDropdownContent.value &&
    !pengaduanDropdownContent.value.contains(event.target)
  ) {
    pengaduanDropdownOpen.value = false;
  }

  // Cek untuk dropdown profil (desktop dan mobile)
  if (profileDropdownOpen.value) {
    const isDesktopButton = profileDropdownButton.value?.contains(event.target);
    const isDesktopContent = profileDropdownContent.value?.contains(event.target);
    const isMobileButton = profileMobileDropdownButton.value?.contains(event.target);
    const isMobileContent = profileMobileDropdownContent.value?.contains(event.target);

    if (!isDesktopButton && !isDesktopContent && !isMobileButton && !isMobileContent) {
      profileDropdownOpen.value = false;
    }
  }
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
