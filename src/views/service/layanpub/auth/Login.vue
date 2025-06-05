<template>
  <section class="relative h-screen overflow-hidden">
    <div class="relative z-20 flex flex-col items-center justify-center h-full px-4">
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div class="px-6 py-4">
          <div class="flex justify-center mx-auto">
            <img
              class="w-auto h-12 sm:h-14"
              src="/public/image/logo_web.png"
              alt="logo_simpati"
            />
          </div>

          <h3
            class="mt-1.5 md:text-[1.5rem] text-xl font-bold text-center text-green-900"
          >
            Selamat Datang Kembali!
          </h3>

          <p class="text-center md:text-[0.78rem] text-[0.65rem] text-gray-500 mb-3">
            Masuk menggunakan akun yang sudah didaftarkan
          </p>

          <form @submit.prevent="handleLogin">
            <div class="w-full mt-5">
              <label for="email" class="block text-sm font-medium text-green-900 mb-1.5">
                Alamat Email
              </label>
              <input
                v-model="email"
                type="email"
                id="email"
                class="w-full px-3 py-1.5 bg-white/5 border border-gray-300 rounded-lg text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                placeholder="nama@email.com"
                required
              />
            </div>

            <div class="relative w-full mt-4">
              <label
                for="password"
                class="block text-sm font-medium text-green-900 mb-1.5"
              >
                Kata Sandi
              </label>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="w-full px-3 py-1.5 bg-white/5 border border-gray-300 rounded-lg text-sm text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition-all duration-300"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 top-6.5 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                <component
                  :is="showPassword ? 'EyeSlashIcon' : 'EyeIcon'"
                  class="h-4 w-4"
                />
              </button>
            </div>

            <div class="flex items-center justify-between mt-4 mb-2">
              <a href="#" class="text-[0.85rem] text-gray-600 hover:text-gray-500"
                >Lupa Kata Sandi?</a
              >

              <button
                type="submit"
                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-800 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50"
              >
                Masuk
              </button>
            </div>
          </form>
        </div>

        <div class="bg-gray-100 flex flex-col items-center py-2 border-t border-gray-200">
          <div class="text-sm text-slate-900">
            Belum punya akun?
            <router-link
              to="/layanan-publik/auth/register"
              class="font-semibold text-blue-600 hover:underline"
            >
              Buat Akun
            </router-link>
          </div>
          <div>
            <router-link
              to="/"
              class="text-sm font-semibold text-blue-600 hover:underline"
            >
              Kembali ke Beranda
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="max-w-md grid md:gap-2 gap-1 text-center grid-cols-6 mx-auto overflow-hidden md:mt-5 mt-3 md:pl-10 pl-8"
      >
        <div class="flex items-center justify-center">
          <img
            src="/public/image/logo_kemenag.png"
            alt="Logo Kemenag"
            class="block object-contain md:h-8.5 h-6 -mr-3 md:-mr-5 -mt-1"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="/public/image/bmb.png"
            alt="Bangga Melayani Bangsa"
            class="block object-contain md:h-8.5"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="/public/image/berakhlak.png"
            alt="Berakhlak"
            class="block object-contain h-8.5"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="/public/image/melasti.png"
            alt="Melasti"
            class="block object-contain h-8.5"
          />
        </div>
        <div class="flex items-center justify-center">
          <img
            src="/public/image/susila.png"
            alt="Susila"
            class="block object-contain h-8.5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
// import { requestAndSaveFcmToken } from "../../../../main";

export default {
  name: "LoginView",
  components: { EyeIcon, EyeSlashIcon },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      showPassword: false,
      isLoading: false, // untuk disable tombol saat loading
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$router.push({ name: "ListSatker" });
    }
  },
  methods: {
    async handleLogin() {
      const API_URL = import.meta.env.VITE_API_URL;

      try {
        const response = await axios.post(`${API_URL}/login`, {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;
        localStorage.setItem("token", token);

        // requestAndSaveFcmToken(token);

        await Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Anda akan dialihkan ke Daftar Satker",
          timer: 1500,
          showConfirmButton: false,
        });

        this.$router.push({ name: "ListSatker" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: error.response?.data?.message || "Terjadi kesalahan",
        });
      }
    },
  },
};
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
