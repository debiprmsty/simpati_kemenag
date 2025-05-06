<template>
  <nav
    class="w-full mt-5 max-w-[92vw] mx-auto px-4 py-3 bg-white border border-gray-300 rounded-2xl shadow-md flex items-center justify-between"
  >
    <!-- Brand -->
    <div class="flex items-center space-x-2">
      <router-link to="/" class="flex gap-2">
        <img src="/image/logo_web.png" alt="Logo" class="h-8 hover:cursor-pointer" />
        <span class="text-gray-900 font-semibold text-lg hover:cursor-pointer">SIMPATI</span>
      </router-link>
    </div>

    <!-- Desktop Nav Links -->
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
          @click="dropdownOpen = !dropdownOpen"
          class="inline-flex items-center space-x-1 font-medium text-gray-800 hover:text-gray-900 transition"
        >
          <span>Pengaduan Publik</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 011.08 1.04l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" />
          </svg>
        </button>
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg w-44 z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          >
            SP4N Lapor
          </a>
          <a
            href="https://wa.me/+6285928877957"
            class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
          >
            WhatsApp Center
          </a>
        </div>
      </div>
    </div>

    <!-- Desktop Auth / Avatar -->
    <div class="hidden md:flex items-center space-x-4">
      <!-- If not logged in, show Masuk & Daftar -->
      <router-link
        v-if="!isLoggedIn"
        to="/layanan-publik/auth/login"
        class="font-semibold text-gray-800 hover:text-[#16423C] transition"
      >
        Masuk
      </router-link>
      <a
        v-if="!isLoggedIn"
        href="#"
        class="px-4 py-2 bg-[#1B4D3E] text-white rounded-2xl hover:bg-[#16423C] font-semibold transition"
      >
        Daftar
      </a>
      <!-- If logged in, show avatar circle -->
      <router-link v-if="isLoggedIn" to="/profile" class="block">
        <img
          :src="user.avatarUrl"
          alt="Avatar"
          class="h-8 w-8 rounded-full border-2 border-gray-300 hover:border-[#16423C] transition"
        />
      </router-link>
    </div>

    <!-- Mobile Hamburger -->
    <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="mobileOpen" class="md:hidden bg-white border-t border-gray-200 shadow-md">
    <router-link
      to="/"
      class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
    >
      Beranda
    </router-link>
    <router-link
      to="/faq"
      class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
    >
      FAQ
    </router-link>
    <div class="border-t border-gray-100">
      <button
        @click="dropdownOpen = !dropdownOpen"
        class="w-full flex justify-between items-center px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
      >
        <span>Pengaduan Publik</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 011.08 1.04l-4.24 4.29a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </button>
      <div v-if="dropdownOpen" class="pl-4 border-t border-gray-100">
        <a
          href="#"
          class="block px-4 py-2 font-medium text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
        >
          SP4N Lapor
        </a>
        <a
          href="https://wa.me/+6285928877957"
          class="block px-4 py-2 font-medium text-gray-700 hover:bg-[#E9EFEC] rounded-xl transition"
        >
          WhatsApp Center
        </a>
      </div>
    </div>

    <!-- Mobile Auth Links -->
    <router-link
      v-if="!isLoggedIn"
      to="/layanan-publik/auth/login"
      class="block px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 transition"
    >
      Masuk
    </router-link>
    <a
      v-if="!isLoggedIn"
      href="#"
      class="block mx-4 my-2 px-4 py-2 text-center bg-[#1B4D3E] text-white rounded-2xl font-semibold hover:bg-[#16423C] transition"
    >
      Daftar
    </a>

    <!-- Mobile Avatar -->
    <router-link
      v-if="isLoggedIn"
      to="/profile"
      class="flex justify-center my-2"
    >
      <img
        :src="user.avatarUrl"
        alt="Avatar"
        class="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-[#16423C] transition"
      />
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mobileOpen = ref(false);
const dropdownOpen = ref(false);
const isLoggedIn = ref(false);
const user = ref({ avatarUrl: "" });

onMounted(() => {
  const token = localStorage.getItem("token");
  isLoggedIn.value = !!token;

  if (isLoggedIn.value) {
    // Ganti dengan fetch actual profile/avatar API jika ada
    user.value.avatarUrl =
      localStorage.getItem("avatarUrl") ||
      "https://via.placeholder.com/150/1B4D3E/FFFFFF?text=U";
  }
});
</script>

<style>
/* Pastikan html/body penuh di global */
html,
body,
#app {
  margin: 0;
  height: 100%;
}
</style>
