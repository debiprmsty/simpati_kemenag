<template>
  <div class="flex flex-col justify-center items-center h-screen bg-teal-50">
    <DotLottieVue
      class="object-cover md:w-[45rem] md:ml-50 md:-mt-24 md:h-auto w-[28rem] -ml-14 -mt-18 h-auto mx-auto"
      autoplay
      loop
      src="https://lottie.host/77f95da0-b0a8-4c37-a188-3b2013209b81/aQBeB5aG53.lottie"
    />
    <h1 class="md:text-3xl font-bold text-[#16423C] uppercase md:mt-2 mt-0">
      Maaf! Sistem Sedang dalam perbaikan
    </h1>
    <p class="text-gray-400 max-w-sm md:my-0 my-2 md:max-w-2xl text-center md:mt-2 mb-8">
      Kami sedang melakukan perbaikan untuk meningkatkan pengalaman Anda. Mohon maaf atas
      ketidaknyamanan ini, dan silakan kunjungi kembali dalam waktu dekat.
    </p>
    <a
      href="/"
      class="block px-4 py-2 bg-[#1B4D3E] text-white rounded-2xl font-semibold text-center md:mt-8 text-xs"
    >
      Kembali ke Beranda
    </a>
  </div>
</template>

<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>
