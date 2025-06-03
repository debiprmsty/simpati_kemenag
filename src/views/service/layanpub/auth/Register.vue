<template>
  <!-- Wrapper utama: posisi relative, full‐screen, dan pakai background‐image -->
  <div
    class="relative min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/public/image/bg-auth.png')"
  >
    <!-- Overlay putih semi‐transparan menutupi seluruh area ini ada perubahan terakhir -->
    <div class="absolute inset-0 bg-white opacity-93"></div>

    <!-- Konten utama: posisi relatif agar berada di atas overlay -->
    <div class="relative overflow-hidden" style="width: 94vw; height: 95vh">
      <div class="mx-auto grid h-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <!-- Left Column - Form -->
        <div class="flex flex-col justify-center">
          <h1
            class="mb-6 text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-indigo-600 md:text-4xl"
          >
            Buat Akun Anda
          </h1>
          <div class="h-1 md:w-40 bg-green-900 rounded -mt-4 mb-3"></div>
          <h5 class="text-green-800 -mt-2 mb-5 font-medium">
            * Silakan isi data berikut untuk membuat akun Anda.
          </h5>
          <form @submit.prevent="handleRegister">
            <div class="space-y-5 md:mb-7">
              <!-- Name Field -->
              <div class="relative">
                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <UserIcon class="h-5 w-5 text-[#16423C]" />
                </div>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-300"
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
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-300"
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
                  v-model="form.no_hp"
                  type="tel"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-300"
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
                  v-model="form.alamat"
                  type="text"
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-300"
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
                  class="w-full bg-gray-50 rounded-2xl py-3 pl-12 pr-4 text-m text-green-950 placeholder-gray-500 focus:outline-none focus:bg-gradient-border border-[1.5px] border-gray-300"
                  placeholder="Masukkan kata sandi Anda"
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
                  v-model="terms"
                  type="checkbox"
                  class="h-4 w-4 border-green-800 rounded"
                  required
                />
                <label for="terms" class="ml-2 block text-md text-gray-700">
                  Saya menyetujui
                  <a href="#" class="text-blue-600 underline">Ketentuan Layanan</a>
                  dan
                  <a href="#" class="text-blue-600 underline">Kebijakan Privasi</a>
                </label>
              </div>

              <button
                type="submit"
                :disabled="!terms"
                :class="
                  terms == true
                    ? 'w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 px-4 rounded-xl hover:bg-[#16423C] transition duration-200 uppercase font-bold mt-2 hover:cursor-pointer'
                    : 'w-full bg-gradient-to-r from-green-300 to-blue-300 text-white py-2 px-4 rounded-xl hover:bg-[#16423C] transition duration-200 uppercase font-bold mt-2 hover:cursor-not-allowed'
                "
              >
                Buat Akun
              </button>
            </div>
          </form>
        </div>

        <!-- Right Column - Logo and Social -->
        <div
          class="relative hidden flex-col items-center justify-center px-6 py-12 lg:flex"
        >
          <div
            class="mb-8 flex h-35 w-35 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-blue-600 p-1 shadow-lg"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-gray-100"
            >
              <img
                class="h-30 w-auto"
                src="/public/image/logo_web.png"
                alt="Logo SIMPATI"
              />
            </div>
          </div>

          <h2
            class="mb-8 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 md:text-3xl"
          >
            SIMPATI <br /><span class="text-2xl -mt-2"
              >Kementerian Agama Kabupaten Buleleng</span
            >
          </h2>

          <div class="flex space-x-6">
            <!-- WhatsApp -->
            <a
              href="#"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/20 shadow-lg transition-all duration-300 hover:bg-green-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-800 transition-colors group-hover:text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-600/20 shadow-lg transition-all duration-300 hover:bg-pink-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-pink-800 transition-colors group-hover:text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 shadow-lg transition-all duration-300 hover:bg-blue-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-800 transition-colors group-hover:text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>

            <!-- TikTok -->
            <a
              href="#"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-700/20 shadow-lg transition-all duration-300 hover:bg-indigo-700/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-950 transition-colors group-hover:text-indigo-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="#"
              class="group flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/20 shadow-lg transition-all duration-300 hover:bg-red-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-800 transition-colors group-hover:text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Mobile version of right column content -->
        <div class="flex flex-col items-center space-y-6 px-6 py-8 lg:hidden">
          <button
            @click="goToHomepage"
            class="w-full rounded-md border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-gray-700/50"
          >
            Go to Homepage
          </button>

          <div
            class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 p-1 shadow-lg"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-gray-900"
            >
              <span class="text-xl font-bold text-white">LOGO</span>
            </div>
          </div>

          <h2
            class="text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          >
            Join Our Digital Community
          </h2>

          <div class="flex space-x-4">
            <!-- WhatsApp -->
            <a
              href="#"
              class="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-green-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-colors group-hover:text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="#"
              class="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-pink-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-colors group-hover:text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-blue-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>

            <!-- TikTok -->
            <a
              href="#"
              class="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-gray-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-colors group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="#"
              class="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 shadow-lg transition-all duration-300 hover:bg-red-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 transition-colors group-hover:text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";

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

const router = useRouter();
const terms = ref(false);

const form = reactive({
  name: "",
  email: "",
  no_hp: "",
  alamat: "",
  password: "",
});

const showPassword = ref(false);
function togglePassword() {
  showPassword.value = !showPassword.value;
}

const handleRegister = async () => {
  const API_URL = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.post(`${API_URL}/register`, {
      name: form.name,
      email: form.email,
      no_hp: form.no_hp,
      alamat: form.alamat,
      password: form.password,
    });
    const result = response.data;

    if (result.status === 201) {
      await Swal.fire({
        icon: "success",
        title: "Anda Berhasil Mendaftarkan Akun",
        text: "Anda akan dialihkan ke halaman Masuk Akun",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push({ name: "Login" }); // <-- gunakan router.push
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Daftar Akun Gagal",
      text: error.response?.data?.message || "Terjadi kesalahan",
    });
  }
};
</script>

<style>
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
</style>
