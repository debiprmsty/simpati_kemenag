<template>
  <!-- FULLSCREEN CONTAINER WITH BACKGROUND IMAGE -->
  <section class="relative h-screen overflow-hidden">
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full px-4 md:-mt-2"
    >
      <!-- DESKTOP LAYOUT -->
      <div class="hidden md:flex h-screen overflow-hidden w-screen">
        <!-- Left: Registration Form -->
        <div class="w-3/5 p-8 lg:p-16 flex flex-col justify-center mt-7">
          <h3
            class="relative inline-block text-3xl font-bold mb-12 acme-regular bg-gradient-to-r from-green-600 via-blue-700 to-blue-500 bg-clip-text text-transparent uppercase tracking-wider"
          >
            Daftar Akun
            <span
              class="absolute left-0 -bottom-3 w-28 h-1 bg-[#16423C] rounded-sm"
            ></span>
          </h3>

          <!-- Registration Form -->
          <form @submit.prevent="register">
            <div class="space-y-4">
              <!-- Name Field -->
              <div class="relative">
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <UserIcon class="h-5 w-5 text-[#16423C]" />
                </div>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-200"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <!-- Email Field -->
              <div class="relative">
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <EnvelopeIcon class="h-5 w-5 text-[#16423C]" />
                </div>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-200"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>

              <!-- WhatsApp Field -->
              <div class="relative">
                <div
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
                          d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,4.0791 1.11869,7.88588 2.98438,11.20898l-2.94727,10.52148c-0.09582,0.34262 -0.00241,0.71035 0.24531,0.96571c0.24772,0.25536 0.61244,0.35989 0.95781,0.27452l10.9707,-2.71875c3.22369,1.72098 6.88165,2.74805 10.78906,2.74805c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-3.72198,0 -7.20788,-0.97037 -10.23828,-2.66602c-0.22164,-0.12385 -0.48208,-0.15876 -0.72852,-0.09766l-9.60742,2.38086l2.57617,-9.19141c0.07449,-0.26248 0.03851,-0.54399 -0.09961,-0.7793c-1.84166,-3.12289 -2.90234,-6.75638 -2.90234,-10.64648c0,-11.60953 9.39047,-21 21,-21zM16.64258,13c-0.64104,0 -1.55653,0.23849 -2.30859,1.04883c-0.45172,0.48672 -2.33398,2.32068 -2.33398,5.54492c0,3.36152 2.33139,6.2621 2.61328,6.63477h0.00195v0.00195c-0.02674,-0.03514 0.3578,0.52172 0.87109,1.18945c0.5133,0.66773 1.23108,1.54472 2.13281,2.49414c1.80347,1.89885 4.33914,4.09336 7.48633,5.43555c1.44932,0.61717 2.59271,0.98981 3.45898,1.26172c1.60539,0.5041 3.06762,0.42747 4.16602,0.26563c0.82216,-0.12108 1.72641,-0.51584 2.62109,-1.08203c0.89469,-0.56619 1.77153,-1.2702 2.1582,-2.33984c0.27701,-0.76683 0.41783,-1.47548 0.46875,-2.05859c0.02546,-0.29156 0.02869,-0.54888 0.00977,-0.78711c-0.01897,-0.23823 0.0013,-0.42071 -0.2207,-0.78516c-0.46557,-0.76441 -0.99283,-0.78437 -1.54297,-1.05664c-0.30567,-0.15128 -1.17595,-0.57625 -2.04883,-0.99219c-0.8719,-0.41547 -1.62686,-0.78344 -2.0918,-0.94922c-0.29375,-0.10568 -0.65243,-0.25782 -1.16992,-0.19922c-0.51749,0.0586 -1.0286,0.43198 -1.32617,0.87305c-0.28205,0.41807 -1.4175,1.75835 -1.76367,2.15234c-0.0046,-0.0028 0.02544,0.01104 -0.11133,-0.05664c-0.42813,-0.21189 -0.95173,-0.39205 -1.72656,-0.80078c-0.77483,-0.40873 -1.74407,-1.01229 -2.80469,-1.94727v-0.00195c-1.57861,-1.38975 -2.68437,-3.1346 -3.0332,-3.7207c0.0235,-0.02796 -0.00279,0.0059 0.04687,-0.04297l0.00195,-0.00195c0.35652,-0.35115 0.67247,-0.77056 0.93945,-1.07812c0.37854,-0.43609 0.54559,-0.82052 0.72656,-1.17969c0.36067,-0.71583 0.15985,-1.50352 -0.04883,-1.91797v-0.00195c0.01441,0.02867 -0.11288,-0.25219 -0.25,-0.57617c-0.13751,-0.32491 -0.31279,-0.74613 -0.5,-1.19531c-0.37442,-0.89836 -0.79243,-1.90595 -1.04102,-2.49609v-0.00195c-0.29285,-0.69513 -0.68904,-1.1959 -1.20703,-1.4375c-0.51799,-0.2416 -0.97563,-0.17291 -0.99414,-0.17383h-0.00195c-0.36964,-0.01705 -0.77527,-0.02148 -1.17773,-0.02148zM16.64258,15c0.38554,0 0.76564,0.0047 1.08398,0.01953c0.32749,0.01632 0.30712,0.01766 0.24414,-0.01172c-0.06399,-0.02984 0.02283,-0.03953 0.20898,0.40234c0.24341,0.57785 0.66348,1.58909 1.03906,2.49023c0.18779,0.45057 0.36354,0.87343 0.50391,1.20508c0.14036,0.33165 0.21642,0.51683 0.30469,0.69336v0.00195l0.00195,0.00195c0.08654,0.17075 0.07889,0.06143 0.04883,0.12109c-0.21103,0.41883 -0.23966,0.52166 -0.45312,0.76758c-0.32502,0.37443 -0.65655,0.792 -0.83203,0.96484c-0.15353,0.15082 -0.43055,0.38578 -0.60352,0.8457c-0.17323,0.46063 -0.09238,1.09262 0.18555,1.56445c0.37003,0.62819 1.58941,2.6129 3.48438,4.28125c1.19338,1.05202 2.30519,1.74828 3.19336,2.2168c0.88817,0.46852 1.61157,0.74215 1.77344,0.82227c0.38438,0.19023 0.80448,0.33795 1.29297,0.2793c0.48849,-0.05865 0.90964,-0.35504 1.17773,-0.6582l0.00195,-0.00195c0.3568,-0.40451 1.41702,-1.61513 1.92578,-2.36133c0.02156,0.0076 0.0145,0.0017 0.18359,0.0625v0.00195h0.00195c0.0772,0.02749 1.04413,0.46028 1.90625,0.87109c0.86212,0.41081 1.73716,0.8378 2.02148,0.97852c0.41033,0.20308 0.60422,0.33529 0.6543,0.33594c0.00338,0.08798 0.0068,0.18333 -0.00586,0.32813c-0.03507,0.40164 -0.14243,0.95757 -0.35742,1.55273c-0.10532,0.29136 -0.65389,0.89227 -1.3457,1.33008c-0.69181,0.43781 -1.53386,0.74705 -1.8457,0.79297c-0.9376,0.13815 -2.05083,0.18859 -3.27344,-0.19531c-0.84773,-0.26609 -1.90476,-0.61053 -3.27344,-1.19336c-2.77581,-1.18381 -5.13503,-3.19825 -6.82031,-4.97266c-0.84264,-0.8872 -1.51775,-1.71309 -1.99805,-2.33789c-0.4794,-0.62364 -0.68874,-0.94816 -0.86328,-1.17773l-0.00195,-0.00195c-0.30983,-0.40973 -2.20703,-3.04868 -2.20703,-5.42578c0,-2.51576 1.1685,-3.50231 1.80078,-4.18359c0.33194,-0.35766 0.69484,-0.41016 0.8418,-0.41016z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-200"
                  placeholder="Masukkan nomor WhatsApp Anda"
                  required
                />
              </div>

              <!-- Address Field -->
              <div class="relative">
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <MapPinIcon class="h-5 w-5 text-[#16423C]" />
                </div>
                <input
                  id="name"
                  v-model="form.address"
                  type="text"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-200"
                  placeholder="Masukkan alamat tempat tinggal Anda"
                  required
                />
              </div>

              <!-- Password Field -->
              <div class="relative">
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <LockClosedIcon class="h-5 w-5 text-[#16423C]" />
                </div>
                <!-- 1. Bind `type` secara dinamis -->
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-200"
                  placeholder="Masukkan password Anda"
                  required
                />
                <!-- 2. Tombol toggle -->
                <button
                  type="button"
                  @click="togglePassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                >
                  <!-- Pilih icon sesuai state -->
                  <component
                    :is="showPassword ? EyeSlashIcon : EyeIcon"
                    class="h-5 w-5"
                  />
                </button>
              </div>

              <div class="flex items-center">
                <input
                  id="terms"
                  v-model="form.terms"
                  type="checkbox"
                  class="h-4 w-4 border-green-800 rounded"
                  required
                />
                <label for="terms" class="ml-2 block text-sm text-gray-700">
                  Saya menyetujui
                  <a href="#" class="text-blue-600 underline">Ketentuan Layanan</a>
                  dan
                  <a href="#" class="text-blue-600 underline">Kebijakan Privasi</a>
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-xl hover:bg-[#16423C] transition duration-200 uppercase font-bold"
              >
                Buat Akun
              </button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <p class="text-gray-600">
              Sudah memiliki akun?
              <a href="#" class="text-blue-600 hover:underline font-medium"
                >Masuk ke Akun</a
              >
            </p>
          </div>
        </div>

        <!-- Right: Yellow stripe + Info card -->
        <div class="relative w-2/5 h-full">
          <div class="flex justify-end mr-17 mt-6">
            <router-link
              to="/"
              class="bg-[#16423C] flex text-white px-2 py-1 rounded-lg shadow-lg hover:cursor-pointer"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0,0,256,256"
                  class="mt-1.5 mr-2"
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
                        d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"
                      ></path>
                    </g>
                  </g></svg
              ></span>
              <p>Beranda</p>
            </router-link>
          </div>

          <div class="bg-gray-50 rounded-2xl shadow w-68 h-68 mt-32 ml-20 pt-5">
            <img
              class="md:w-20 h-auto ml-24 mb-10"
              src="/public/image/logo_web.png"
              alt="Logo SIMPATI"
            />
            <h1
              class="md:text-4xl text-4xl acme-regular bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent ml-18 mt-3"
            >
              SIMPATI
            </h1>
            <div class="flex flex-col justify-start pt-8 lg:pt-0 mt-1">
              <div class="flex justify-center space-x-4 md:mt-3">
                <a
                  rel="noopener noreferrer"
                  href="https://wa.me/+6285928877957"
                  title="WhatsApp"
                  class="flex items-center justify-center md:w-7 md:h-7 rounded-full text-[#16423C]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
                  title="Instagram"
                  class="flex items-center justify-center md:w-7 md:h-7 rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
                          d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/share/1Hd41qxV5u/"
                  title="Facebook"
                  class="flex items-center justify-center md:w-[29px] md:h-[29px] rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
                  title="TikTok"
                  class="flex items-center justify-center md:w-[30px] md:h-[30px] rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
                  title="YouTube"
                  class="flex items-center justify-center md:w-9 md:h-9 rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#16423c"
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
        </div>
      </div>

      <!-- MOBILE LAYOUT -->
      <div class="md:hidden relative min-h-screen w-full bg-cover bg-right">
        <!-- logo + teks, center-horizontal, sedikit di atas form -->
        <div class="absolute inset-x-0 top-10 flex justify-center items-center z-10">
          <img
            class="w-8 h-auto mr-4"
            src="/public/image/logo_web.png"
            alt="Logo SIMPATI"
          />
          <h3
            class="text-4xl acme-regular bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            SIMPATI
          </h3>
        </div>

        <!-- floating white card dengan form -->
        <div
          class="absolute inset-x-0 top-24 mx-auto w-[96%] sm:w-2/3 max-w-md bg-white rounded-2xl shadow-lg p-4 z-20"
        >
          <h3 class="text-lg font-semibold mb-3 text-gray-800">Daftar Akun</h3>
          <form @submit.prevent="handleSubmit" class="space-y-3">
            <div>
              <label class="block text-gray-600 mb-1 text-sm">Nama Lengkap</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            <div>
              <label class="block text-gray-600 mb-1 text-sm">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label class="block text-gray-600 mb-1 text-sm">WhatsApp</label>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                placeholder="Masukkan nomor WhatsApp Anda"
              />
            </div>
            <div>
              <label class="block text-gray-600 mb-1 text-sm">Alamat</label>
              <input
                v-model="form.address"
                type="text"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                placeholder="Masukkan alamat tempat tinggal Anda"
              />
            </div>
            <div class="relative">
              <label class="block text-gray-600 mb-1 text-sm">Password</label>
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm"
                placeholder="Masukkan password Anda"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                <component :is="showPassword ? EyeSlashIcon : EyeIcon" class="h-4 w-4" />
              </button>
            </div>
            <div class="relative">
              <label class="block text-gray-600 mb-1 text-sm">Konfirmasi Password</label>
              <input
                v-model="form.confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm"
                placeholder="Ulangi password Anda"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                <component :is="showPassword ? EyeSlashIcon : EyeIcon" class="h-4 w-4" />
              </button>
            </div>
            <div class="flex items-center text-sm">
              <input
                id="terms-mobile"
                v-model="form.terms"
                type="checkbox"
                class="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
                required
              />
              <label for="terms-mobile" class="ml-2 text-gray-700">
                Saya menyetujui
                <a href="#" class="text-[#16423C] hover:underline">Ketentuan Layanan</a>
                dan
                <a href="#" class="text-[#16423C] hover:underline">Kebijakan Privasi</a>
              </label>
            </div>
            <button
              type="submit"
              class="w-full bg-[#1B4D3E] text-white py-2 rounded-lg text-sm hover:bg-[#16423C] transition"
            >
              Buat Akun
            </button>
          </form>
          <p class="mt-3 text-center text-gray-600 text-xs">
            Sudah punya akun?
            <a href="#" class="text-[#16423C] font-medium hover:underline">Masuk</a>
          </p>
        </div>
        <div
          class="md:hidden absolute inset-x-0 top-205 flex justify-center items-center space-x-4 z-20"
        >
          <a
            rel="noopener noreferrer"
            href="https://wa.me/+6285928877957"
            title="WhatsApp"
            class="flex items-center justify-center w-7 h-7 rounded-full text-[#16423C]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#16423c"
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
            title="Instagram"
            class="flex items-center justify-center w-7 h-7 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#16423c"
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
                    d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/share/1Hd41qxV5u/"
            title="Facebook"
            class="flex items-center justify-center w-[29px] h-[29px] rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#16423c"
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
            title="TikTok"
            class="flex items-center justify-center w-[30px] h-[30px] rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#16423c"
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
            title="YouTube"
            class="flex items-center justify-center w-9 h-9 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#16423c"
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
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/vue/24/outline";

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const showPassword = ref(false);
function togglePassword() {
  showPassword.value = !showPassword.value;
}

function handleSubmit() {
  // validasi & kirim data
  console.log("Submitting", form);
  alert("Registrasi sukses!");
}
</script>

<style scoped>
/* Kelas kustom untuk gradient border pada focus */
.focus\:bg-gradient-border:focus {
  /* Border jadi transparent */
  border-color: transparent !important;
  /* Dua lapis background:
     - lapis atas putih untuk isi input
     - lapis bawah gradient untuk border */
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #16a34a, #3b82f6);
  /* Atur origin & clip supaya:
     - lapis putih hanya di padding-box (isi)
     - gradient hanya di border-box */
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
}
section::before {
  content: "";
  position: absolute;
  inset: 0; /* top/right/bottom/left = 0 */
  background-image: url("/public/image/bg-auth.png");
  background-size: cover;
  background-position: center;
  z-index: 0; /* di bawah konten */
}
section::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(241, 237, 237, 0.95); /* putih 80% opacity */
  z-index: 10; /* di atas gambar, tapi di bawah konten */
}
</style>
