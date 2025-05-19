<template>
  <div
    class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-10 px-5 md:px-0">
      <h2
        class="mb-6 font-sans text-3xl font-bold leading-10 tracking-tight text-gray-900 md:text-5xl md:mx-auto"
      >
        Layanan & Informasi Publik
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
    <!-- Grid responsive: 1 kolom mobile, 2 kolom sm, 3 kolom lg -->
    <div
      class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-2 md:mx-0 mx-3"
    >
      <!-- Layanan Publik -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div
            class="w-full h-56 md:pt-0 pt-1 bg-white bg-center bg-cover rounded-lg shadow-lg"
          >
            <DotLottieVue
              class="object-cover md:w-full md:h-full w-72 h-44 mx-auto"
              autoplay
              loop
              src="https://lottie.host/e3bc5738-a007-43ab-b55e-000607926986/kuJbIHMMui.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Layanan Publik
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/layanan-publik/auth/login"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>

      <!-- Layanan Internal -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div
            class="w-full h-56 md:pt-0 pt-2 bg-white bg-center bg-cover rounded-lg shadow-lg"
          >
            <DotLottieVue
              class="object-cover md:w-[21rem] md:h-52 w-[16rem] h-48 mx-auto"
              autoplay
              loop
              src="https://lottie.host/26363ba2-32ee-4371-abcf-0ef8973085d4/smEMUpz1VH.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Layanan Internal
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/maintenance"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>

      <!-- Syarat Layanan -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div
            class="w-full h-56 md:pt-1 pt-2 bg-white bg-center bg-cover rounded-lg shadow-lg"
          >
            <DotLottieVue
              class="object-cover md:w-[17.5rem] md:h-44 w-[16.5rem] h-[10.5rem] mx-auto"
              autoplay
              loop
              src="https://lottie.host/689fee33-5b1a-43c0-94c6-9db0a1c56360/D3imntQGnT.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Syarat Layanan
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/maintenance"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>

      <!-- PPID -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div class="w-full h-56 bg-white bg-center bg-cover rounded-lg shadow-lg">
            <DotLottieVue
              class="object-cover md:w-[20rem] md:h-48 w-[19rem] h-[12.5rem] mx-auto"
              autoplay
              loop
              src="https://lottie.host/3ed3687b-e908-4302-96d0-260fc1fa76bc/jqnSmuZZNU.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            PPID
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <a
              href="https://bali.kemenag.go.id/buleleng"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</a
            >
          </div>
        </div>
      </div>

      <!-- Bank Data -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div class="w-full h-56 bg-white bg-center bg-cover rounded-lg shadow-lg">
            <DotLottieVue
              class="object-cover md:w-[21rem] md:h-48 w-[21rem] h-48 mx-auto"
              autoplay
              loop
              src="https://lottie.host/8350d44e-996f-449e-8c9f-6a3ffccf7162/thARrXd7ZF.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Bank Data
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/maintenance"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>

      <!-- Progress Permohonan -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div class="w-full h-56 bg-white bg-center bg-cover rounded-lg shadow-lg">
            <DotLottieVue
              class="object-cover md:w-full md:h-full w-[22rem] h-56 mx-auto"
              autoplay
              loop
              src="https://lottie.host/fafa106e-88a8-4879-ab68-84c5bad2cdb3/4Hup4hO1ot.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Progress Permohonan
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/progress-permohonan"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>

      <!-- Dosen ZI -->
      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div class="p-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg w-full">
          <div class="w-full h-56 bg-white bg-center bg-cover rounded-lg shadow-lg">
            <DotLottieVue
              class="object-cover md:w-[19rem] md:h-48 w-80 h-48 mx-auto"
              autoplay
              loop
              src="https://lottie.host/502cf393-0643-4034-baee-070a364bc8d0/evpBQLGaiS.lottie"
            />
          </div>
        </div>
        <div
          class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 border border-gray-300"
        >
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
            Dosen ZI
          </h3>
          <div class="flex items-center justify-center px-3 py-2 bg-gray-200">
            <router-link
              to="/maintenance"
              class="px-2 py-1 text-xs font-semibold text-white transition-colors duration-300 transform bg-[#16423C] rounded-lg hover:bg-gray-700 dark:hover:bg-[#1B4D3E] focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none cursor-pointer"
              >Lihat Selengkapnya</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>
