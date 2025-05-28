<template>
  <section
    class="overflow-hidden w-full md:max-w-[97vw] max-w-[100vw] mx-auto sm:grid sm:grid-cols-2 md:pt-9 md:p-2 lg:p-5"
  >
    <div class="md:py-10 md:mr-15 md:p-0 lg:p-0 p-4 md:mt-10">
      <div class="mx-auto md:text-center text-start ltr:sm:text-left rtl:sm:text-right">
        <h1
          class="text-3xl leading-tight font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent md:text-5xl"
        >
          Selamat Datang di <br />
          Website SIMPATI
        </h1>

        <h2 class="md:text-2xl text-xl mt-4 font-semibold text-[#16423C]">
          Kantor Kementerian Agama Kabupaten Buleleng
        </h2>

        <p class="text-gray-500 md:mt-4 mt-5 text-justify">
          Selamat datang di SIMPATI –
          <b>Sistem Informasi Layanan Agama Terintegrasi</b> Kantor Kementerian Agama
          Kabupaten Buleleng. Situs ini dirancang untuk memberikan informasi dan layanan
          keagamaan yang cepat, transparan, dan terintegrasi bagi masyarakat.
        </p>

        <div class="mt-8 md:mt-8">
          <a
            href="#"
            @click.prevent="$emit('scroll-service')"
            class="inline-block rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 px-6 py-3 text-md font-semibold text-white shadow-md transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </div>

    <div class="md:mx-0 md:p-0 p-4 lg:mt-2">
      <video
        src="/public/video/jv.mp4"
        type="video/mp4"
        class="w-full h-[50vh] md:h-[76vh] object-cover rounded-xl md:rounded-3xl shadow-lg"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
  </section>
</template>

<script setup>
defineEmits(["scroll-service"]);
</script>
