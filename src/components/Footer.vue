<template>
  <footer
    class="bg-gradient-to-br from-green-900 via-green-950 to-green-900 text-white relative overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-24 h-24 bg-indigo-500 rounded-full blur-xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 rounded-full blur-2xl animate-pulse delay-500"
      ></div>
    </div>

    <!-- Grid lines overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-12 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-cyan-400"></div>
      </div>
    </div>

    <!-- Utama -->
    <div class="mx-auto w-full md:px-8 px-4.5 py-1 relative z-10 md:mt-7 mt-3">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:mb-8">
        <!-- Column 1: Menu -->
        <div class="space-y-6 md:w-40">
          <h2 class="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">Beranda</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">FAQ</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">SP4N Lapor</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">WhatsApp Center</a>
            </li>
          </ul>
        </div>

        <!-- Column 2: Social Media -->
        <div class="space-y-6 md:-ml-50 md:w-100">
          <h2 class="text-xl font-semibold mb-4">Kontak Kami</h2>
          <p class="mb-2">
            <strong>Kantor Kementerian Agama Kabupaten Buleleng</strong>
          </p>
          <p class="mb-2">
            Jl. Dewi Sartika No.25, Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali
            81116
          </p>
          <p class="mb-2">Email: kabbuleleng@kemenag.go.id</p>
          <p>Telepon: (0362) 28554</p>
          <div class="flex flex-col justify-start lg:pt-0">
            <div class="flex justify-start space-x-4 md:mt-4">
              <a
                rel="noopener noreferrer"
                href="https://wa.me/+6285928877957"
                target="_blank"
                title="WhatsApp"
                class="flex items-center justify-center md:w-7 md:h-7 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="md:w-full md:h-full w-8 h-8 md:mt-4"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/kemenagbuleleng"
                target="_blank"
                title="Instagram"
                class="flex items-center justify-center md:w-8 md:h-8 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="md:w-full md:h-full w-9 h-9 md:mt-3"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(4,4)">
                      <path
                        d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/share/1Hd41qxV5u/"
                target="_blank"
                title="Facebook"
                class="flex items-center justify-center md:w-7.5 md:h-7.5 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="md:w-full md:h-full w-8 h-8 md:mt-3.5"
                  viewBox="0 0 256 256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@kemenagbuleleng"
                target="_blank"
                title="TikTok"
                class="flex items-center justify-center md:w-7.5 md:h-7.5 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="md:w-full md:h-full w-8 h-8 md:mt-3.5"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/@kemenagbuleleng819"
                target="_blank"
                title="YouTube"
                class="flex items-center justify-center md:w-10 md:h-10 rounded-full text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="md:w-full md:h-full w-10 h-10 md:mt-1"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path
                        d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Column 3: Maps -->
        <div class="space-y-6 md:-ml-40">
          <h2 class="text-xl font-semibold mb-4">Lokasi Kami</h2>
          <div class="relative">
            <!-- Mock map container -->
            <div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group h-60"
            >
              <div
                class="aspect-video bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-lg relative overflow-hidden h-48 w-full"
              >
                <div class="w-full h-full">
                  <!-- Jika ingin menyematkan google maps, gunakan iframe -->
                  <iframe
                    class="w-full h-full rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.881784897694!2d115.08420363391353!3d-8.113517737974668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19a0cd75be739%3A0x48ebae1baa58d3!2sKantor%20Kementerian%20Agama%20Kabupaten%20Buleleng!5e0!3m2!1sid!2sid!4v1743597704020!5m2!1sid!2sid"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <!-- Map overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="border-t border-white/10 pt-6 mb-6">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div class="text-gray-400 text-sm text-center mx-auto">
            © 2025 Kantor Kementerian Agama Kabupaten Buleleng. All rights reserved.
          </div>
        </div>
      </div>
    </div>

    <!-- Scanning line effect -->
    <div
      class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
    ></div>
  </footer>
</template>

<script setup>
// Hover sound effect (mock function)
const playHoverSound = () => {
  // In a real app, you could play a subtle sci-fi sound effect here
  console.log("Hover sound effect");
};
</script>

<style scoped>
.glow {
  text-shadow: 0 0 10px currentColor;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #7c3aed);
}
</style>
