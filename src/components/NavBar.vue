<template>
  <nav
    class="w-full m-4 md:m-4.5 md:max-w-[93vw] max-w-[86vw] mx-auto md:mx-auto bg-white border border-gray-300 rounded-2xl shadow-md px-3 py-2"
  >
    <!-- Desktop View: Tiga Kolom -->
    <div class="hidden md:flex items-center justify-between">
      <!-- Kiri: Logo & Brand -->
      <div class="flex items-center space-x-2">
        <img src="/image/logo_web.png" alt="Logo" class="h-8" />
        <span class="text-gray-900 font-semibold text-lg">SIMPATI</span>
      </div>
      <!-- Tengah: Menu Navigasi -->
      <div class="flex items-center space-x-8">
        <a
          href="#"
          class="flex items-center space-x-2 bg-[#E9EFEC] rounded-2xl px-3 py-2 transition border border-[#C4DAD2]"
        >
          <span class="font-semibold text-gray-800">Beranda</span>
        </a>
        <a href="#" class="font-semibold text-gray-800 hover:text-gray-900 transition">
          FAQ
        </a>
        <div class="relative">
          <!-- Tombol toggle dropdown -->
          <button
            class="inline-flex items-center space-x-1 font-medium text-gray-800 hover:text-gray-900 transition"
            @click="toggleDropdown"
          >
            <span>Pengaduan Publik</span>
            <!-- Panah ▼ -->
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
          <!-- Dropdown desktop -->
          <div
            v-if="showDropdown"
            class="absolute left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl w-40"
          >
            <a
              href="#"
              class="block px-4 py-2 text-md text-gray-700 hover:bg-[#E9EFEC] hover:rounded-xl hover:cursor-pointer"
            >
              SP4N Lapor
            </a>
            <a
              href="https://wa.me/+6285928877957"
              class="block px-4 py-2 text-md text-gray-700 hover:bg-[#E9EFEC] hover:rounded-xl hover:cursor-pointer"
            >
              WhatsApp Center
            </a>
          </div>
        </div>
      </div>
      <!-- Kanan: Login & Daftar -->
      <div class="flex items-center space-x-4">
        <router-link
          to="/layanan-publik/auth/login"
          class="text-gray-800 hover:text-[#16423C] font-semibold"
        >
          Masuk
        </router-link>
        <a
          href="#"
          class="px-4 py-2 bg-[#1B4D3E] text-white rounded-2xl hover:bg-[#16423C] font-semibold"
        >
          Daftar
        </a>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden">
      <div class="flex items-center justify-between">
        <!-- Kiri: Logo & Brand -->
        <div class="flex items-center space-x-2">
          <img src="/image/logo_web.png" alt="Logo" class="h-8" />
          <span class="text-gray-900 font-semibold text-lg">SIMPATI</span>
        </div>
        <!-- Kanan: Hamburger Menu -->
        <button @click="toggleMobileMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800"
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
      </div>
      <!-- Mobile Menu Dropdown -->
      <div v-if="mobileMenuOpen" class="mt-4">
        <a
          href="#"
          class="block px-4 py-2 text-gray-800 bg-[#E9EFEC] rounded-xl mb-2 font-semibold"
        >
          Beranda
        </a>
        <a
          href="#"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-xl mb-2 font-semibold"
        >
          FAQ
        </a>
        <!-- Dropdown untuk Pengaduan Publik di mobile -->
        <div class="mb-2">
          <button
            class="w-full flex justify-between items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-xl font-semibold"
            @click="toggleDropdown"
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
          <div v-if="showDropdown" class="mt-2 pl-4">
            <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl mb-1 hover:cursor-pointer"
            >
              SP4N Lapor
            </a>
            <a
              href="https://wa.me/+6285928877957"
              class="block px-4 py-2 text-gray-700 hover:bg-[#E9EFEC] rounded-xl hover:cursor-pointer"
            >
              WhatsApp Center
            </a>
          </div>
        </div>
        <router-link
          to="/layanan-publik/auth/login"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-xl mb-2 font-semibold"
        >
          Masuk
        </router-link>
        <a
          href="#"
          class="block px-4 py-2 bg-[#1B4D3E] text-white rounded-2xl font-semibold text-center"
        >
          Daftar
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuOpen: false,
      showDropdown: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (!this.mobileMenuOpen) {
        this.showDropdown = false;
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
