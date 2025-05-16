<template>
  <section class="overflow-hidden sm:grid sm:grid-cols-2 md:pr-10 md:pt-7">
    <div class="p-7 md:p-12 lg:px-10 lg:py-10">
      <div
        class="mx-auto max-w-xl md:text-center text-start ltr:sm:text-left rtl:sm:text-right"
      >
        <h1
          class="text-3xl leading-tight font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent md:text-5xl"
        >
          Selamat Datang di <br />
          Website SIMPATI
        </h1>

        <h2 class="md:text-2xl text-xl mt-4 font-semibold text-[#16423C]">
          Kantor Kementerian Agama Kabupaten Buleleng
        </h2>

        <p class="text-gray-500 md:mt-4 mt-5">
          Selamat datang di SIMPATI – <b>SIsteM Pelayananan Agama TerintegrasI</b> Kantor
          Kementerian Agama Kabupaten Buleleng. Situs ini dirancang untuk memberikan
          informasi dan layanan keagamaan yang cepat, transparan, dan terintegrasi bagi
          masyarakat.
        </p>

        <div class="mt-8 md:mt-8">
          <a
            href="#"
            class="inline-block rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 px-6 py-3 text-md font-semibold text-white shadow-md transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </div>

    <div class="mx-2 md:mx-0">
      <video
        src="/public/video/jv.mp4"
        type="video/mp4"
        class="md:h-[76vh] w-full object-cover md:rounded-3xl rounded-xl shadow-lg h-[50vh] md:-mr-12"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
  </section>
</template>

<script setup></script>
