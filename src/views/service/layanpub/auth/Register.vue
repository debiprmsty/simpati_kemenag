<template>
  <section class="relative h-screen overflow-hidden">
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full px-4 md:-mt-2"
    >
      <!-- Logo dan Judul -->
      <div class="flex items-center mb-8">
        <img
          class="md:w-9 w-8 h-auto mr-2"
          src="/public/image/logo_web.png"
          alt="Logo SIMPATI"
        />
        <h3
          class="md:text-3xl text-4xl acme-regular bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
        >
          SIMPATI
        </h3>
      </div>

      <!-- Container Form -->
      <div
        class="w-full max-w-md md:max-w-xl space-y-6 rounded-2xl bg-white p-6 shadow-lg"
      >
        <p class="text-center text-xl text-slate-700 poppins-light">
          Daftarkan Akun Anda
        </p>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="fullname" class="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              v-model="fullname"
              type="teks"
              id="fullname"
              class="mt-1 block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:bg-gradient-border"
              placeholder="Masukkan nama lengkap anda"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="mt-1 block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:bg-gradient-border"
              placeholder="nama@email.com"
              required
            />
          </div>

          <div>
            <label for="nohp" class="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              v-model="nohp"
              type="number"
              id="nohp"
              class="mt-1 block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:bg-gradient-border"
              placeholder="08xxxxxxxxxx"
              required
            />
          </div>

          <div>
            <label for="address" class="block text-sm font-medium text-gray-700">
              Alamat
            </label>
            <input
              v-model="address"
              type="teks"
              id="address"
              class="mt-1 block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:bg-gradient-border"
              placeholder="Masukkan alamat anda"
              required
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="relative mt-1">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="block w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:bg-gradient-border"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              >
                <component
                  :is="showPassword ? 'EyeSlashIcon' : 'EyeIcon'"
                  class="h-5 w-5"
                />
              </button>
            </div>
          </div>

          <div class="w-full">
            <button
              type="submit"
              class="rounded-md w-full bg-gradient-to-r from-green-600 to-blue-600 px-4 py-1.5 text-white font-semibold"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>

      <!-- Link Bawah -->
      <p class="mt-6 text-sm text-[#16423C]">
        Sudah punya akun?
        <router-link to="/layanan-publik/auth/login" class="text-blue-600 underline">
          Masuk ke akun
        </router-link>
      </p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

export default {
  name: "LoginView",
  components: { EyeIcon, EyeSlashIcon },
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      showPassword: false,
      isLoading: false, // untuk disable tombol saat loading
    };
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
