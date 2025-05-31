<template>
  <div class="min-h-screen bg-gray-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-green-500 to-blue-600 rounded-full blur-2xl animate-float"
      ></div>
      <div
        class="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-full blur-xl animate-float-delayed"
      ></div>
      <div
        class="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-green-700 to-blue-700 rounded-full blur-xl animate-float-slow"
      ></div>
    </div>

    <!-- Geometric patterns -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                stroke-width="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" class="text-gray-400" />
        </svg>
      </div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full animate-ping"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 3 + 's',
          animationDuration: 2 + Math.random() * 2 + 's',
        }"
      ></div>
    </div>

    <div class="mx-auto md:px-8 px-4 md:py-12 py-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center md:w-20 md:h-20 w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl md:mb-6 mb-4 shadow-2xl"
        >
          <User class="md:w-10 md:h-10 w-7 h-7 text-white" />
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-slate-800 mb-2 tracking-tight">
          PROFIL SAYA
        </h1>
        <p class="text-gray-600 md:text-xl text-md font-medium">
          Sesuaikan profil Anda agar tetap akurat dan terkini.
        </p>
        <div class="flex items-center justify-center md:mt-6 mt-4">
          <div
            class="w-32 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
          ></div>
        </div>
      </div>

      <!-- Main content -->
      <div class="w-full mx-auto md:-mt-5 -mt-8">
        <div
          class="bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-3xl p-5 md:p-8 shadow-2xl shadow-blue-500/10 relative overflow-hidden"
        >
          <!-- Decorative elements -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
          ></div>

          <!-- Profile Image Section -->
          <div class="text-center md:mb-10 mb-5">
            <h2
              class="md:text-3xl text-xl md:font-bold font-medium text-gray-900 md:mb-8 mb-4 flex items-center justify-center space-x-3"
            >
              <div
                class="md:w-8 md:h-8 w-6 h-6 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <User class="md:w-5 md:h-5 w-4 h-4 text-white" />
              </div>
              <span>Edit Profile</span>
            </h2>

            <div class="relative inline-block group">
              <!-- Profile image container -->
              <div class="text-center mb-5">
                <div class="relative inline-block group">
                  <!-- Profile image container -->
                  <div class="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                    <div
                      class="w-full h-full rounded-full bg-gradient-to-br from-green-600 to-blue-600 p-1 animate-pulse"
                    >
                      <div
                        class="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center"
                      >
                        <img
                          v-if="profileImage"
                          :src="profileImage"
                          class="w-full h-full object-cover rounded-full"
                        />
                        <User v-else class="w-16 h-16 text-gray-400" />
                      </div>
                    </div>

                    <!-- Upload overlay -->
                    <div
                      class="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <Camera class="w-8 h-8 text-white" />
                    </div>

                    <!-- Upload button -->
                    <button
                      @click="triggerImageUpload"
                      class="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <Edit class="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <!-- Hidden file input -->
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    @change="handleImageUpload"
                    class="hidden"
                  />
                </div>

                <p class="text-gray-500 md:text-md text-sm md:mt-4 mt-3 md:font-medium">
                  Klik tombol edit untuk mengunggah foto profil baru
                </p>
              </div>

              <!-- Hidden file input -->
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
            </div>
          </div>

          <!-- Form Section -->
          <form @submit.prevent="saveProfile" class="md:space-y-7 space-y-4">
            <!-- Two Column Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
              <!-- Column 1: Name and Email -->
              <div class="md:space-y-8 space-y-5">
                <!-- Full Name -->
                <div class="space-y-3">
                  <label
                    class="flex items-center md:space-x-3 space-x-2 text-gray-800 font-semibold text-lg"
                  >
                    <div
                      class="md:w-8 md:h-8 w-6.5 h-6.5 bg-gradient-to-br from-blue-500 to-cyan-500 md:rounded-xl rounded-lg flex items-center justify-center"
                    >
                      <UserCheck class="md:w-5 md:h-5 w-4 h-4 text-white" />
                    </div>
                    <span>Nama Lengkap</span>
                  </label>
                  <div class="relative group">
                    <input
                      v-model="profile.name"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      class="w-full md:px-6 md:py-3 px-3 py-2 bg-gray-50/80 border-2 border-gray-200 md:rounded-2xl rounded-xl text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm text-md"
                      :class="{
                        'border-red-400 focus:border-red-400 focus:ring-red-400/20':
                          errors.name,
                      }"
                    />
                    <div
                      class="absolute inset-0 md:rounded-2xl rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"
                    ></div>
                  </div>
                  <p v-if="errors.name" class="text-red-500 text-sm md:font-medium">
                    {{ errors.name }}
                  </p>
                </div>

                <!-- Email -->
                <div class="space-y-3">
                  <label
                    class="flex items-center md:space-x-3 space-x-2 text-gray-800 font-semibold text-lg"
                  >
                    <div
                      class="md:w-8 md:h-8 w-6.5 h-6.5 bg-gradient-to-br from-purple-500 to-pink-500 md:rounded-xl rounded-lg flex items-center justify-center"
                    >
                      <Mail class="md:w-5 md:h-5 w-4 h-4 text-white" />
                    </div>
                    <span>Alamat Email</span>
                  </label>
                  <div class="relative group">
                    <input
                      v-model="profile.email"
                      type="email"
                      placeholder="Masukkan alamat email Anda"
                      class="w-full md:px-6 md:py-3 px-3 py-2 bg-gray-50/80 border-2 border-gray-200 md:rounded-2xl rounded-xl text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-md"
                      :class="{
                        'border-red-400 focus:border-red-400 focus:ring-red-400/20':
                          errors.email,
                      }"
                    />
                    <div
                      class="absolute inset-0 md:rounded-2xl rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"
                    ></div>
                  </div>
                  <p v-if="errors.email" class="text-red-500 text-sm md:font-medium">
                    {{ errors.email }}
                  </p>
                </div>

                <!-- Location -->
                <div class="space-y-3">
                  <label
                    class="flex items-center md:space-x-3 space-x-2 text-gray-800 font-semibold text-lg"
                  >
                    <div
                      class="md:w-8 md:h-8 w-6.5 h-6.5 bg-gradient-to-br from-green-600 to-indigo-600 md:rounded-xl rounded-lg flex items-center justify-center"
                    >
                      <MapPinHouseIcon class="md:w-5 md:h-5 w-4 h-4 text-white" />
                    </div>
                    <span>Alamat</span>
                  </label>
                  <div class="relative group">
                    <input
                      v-model="profile.alamat"
                      type="text"
                      placeholder="Masukkan alamat tempat tinggal Anda"
                      class="w-full md:px-6 md:py-3 px-3 py-2 bg-gray-50/80 border-2 border-gray-200 md:rounded-2xl rounded-xl text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 backdrop-blur-sm text-md"
                      :class="{
                        'border-red-400 focus:border-red-400 focus:ring-red-400/20':
                          errors.alamat,
                      }"
                    />
                    <div
                      class="absolute inset-0 md:rounded-2xl rounded-xl bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"
                    ></div>
                  </div>
                  <p v-if="errors.alamat" class="text-red-500 text-sm md:font-medium">
                    {{ errors.alamat }}
                  </p>
                </div>
              </div>

              <!-- Column 2: WhatsApp and Password -->
              <div class="md:space-y-8 space-y-5">
                <!-- WhatsApp Number -->
                <div class="space-y-3">
                  <label
                    class="flex items-center md:space-x-3 space-x-2 text-gray-800 font-semibold text-lg"
                  >
                    <div
                      class="md:w-8 md:h-8 w-6.5 h-6.5 bg-gradient-to-br from-green-500 to-emerald-500 md:rounded-xl rounded-lg flex items-center justify-center"
                    >
                      <Phone class="md:w-5 md:h-5 w-4 h-4 text-white" />
                    </div>
                    <span>Nomor WhatsApp</span>
                  </label>
                  <div class="relative group">
                    <input
                      v-model="profile.no_hp"
                      type="tel"
                      placeholder="Masukkan nomor WhatsApp Anda"
                      class="w-full md:px-6 md:py-3 px-3 py-2 bg-gray-50/80 border-2 border-gray-200 md:rounded-2xl rounded-xl text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 backdrop-blur-sm text-md"
                      :class="{
                        'border-red-400 focus:border-red-400 focus:ring-red-400/20':
                          errors.no_hp,
                      }"
                    />
                    <div
                      class="absolute inset-0 md:rounded-2xl rounded-xl bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-300 pointer-events-none"
                    ></div>
                  </div>
                  <p v-if="errors.no_hp" class="text-red-500 text-sm md:font-medium">
                    {{ errors.no_hp }}
                  </p>
                </div>

                <!-- Password -->
                <div class="space-y-3">
                  <label
                    class="flex items-center md:space-x-3 space-x-2 text-gray-800 font-semibold text-lg"
                  >
                    <div
                      class="md:w-8 md:h-8 w-6.5 h-6.5 bg-gradient-to-br from-red-500 to-orange-500 md:rounded-xl rounded-lg flex items-center justify-center"
                    >
                      <Lock class="md:w-5 md:h-5 w-4 h-4 text-white" />
                    </div>
                    <span>Password</span>
                  </label>
                  <div class="relative group">
                    <input
                      v-model="profile.password"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="Masukkan kata sandi Anda"
                      class="w-full md:px-6 md:py-3 px-3 py-2 pr-14 bg-gray-50/80 border-2 border-gray-200 md:rounded-2xl rounded-xl text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 transition-all duration-300 backdrop-blur-sm text-md"
                      :class="{
                        'border-red-400 focus:border-red-400 focus:ring-red-400/20':
                          errors.password,
                      }"
                    />
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                    >
                      <Eye v-if="showPassword" class="w-4 h-4" />
                      <EyeOff v-else class="w-4 h-4" />
                    </button>
                    <div
                      class="absolute inset-0 md:rounded-2xl rounded-xl bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none"
                    ></div>
                  </div>
                  <p v-if="errors.password" class="text-red-500 text-sm md:font-medium">
                    {{ errors.password }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 pt-3"
            >
              <button
                type="submit"
                :disabled="isLoading"
                class="flex-1 relative group overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-semibold md:py-3 py-2.5 px-8 md:rounded-2xl rounded-xl transition-all duration-500 transform hover:scale-101 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-blue-500/25 uppercase"
              >
                <span
                  v-if="!isLoading"
                  class="flex items-center justify-center space-x-3 text-md"
                >
                  <Save class="w-5 h-5" />
                  <span>Simpan Pembaruan</span>
                </span>
                <span v-else class="flex items-center justify-center space-x-3 text-md">
                  <div
                    class="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"
                  ></div>
                  <span>PEMROSESAN...</span>
                </span>

                <!-- Button shine effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                ></div>
              </button>

              <button
                type="button"
                @click="resetForm"
                class="flex-1 bg-white/5 hover:bg-gray-100 border border-red-800 hover:border-red-800 text-red-800 font-semibold md:py-3 py-2.5 px-8 md:rounded-2xl rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 uppercase text-md"
              >
                <RotateCcw class="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success notification -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 transform translate-y-4 scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-4 scale-95"
    >
      <div
        v-if="showSuccess"
        class="fixed top-8 right-8 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-2xl shadow-2xl backdrop-blur-sm border-2 border-green-400/20 z-50"
      >
        <div class="flex items-center space-x-3">
          <CheckCircle class="w-4 h-4" />
          <span class="font-semibold text-sm">PROFIL BERHASIL DIPERBARUI</span>
        </div>
      </div>
    </Transition>

    <!-- Scanning line effect -->
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"
    ></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  User,
  UserCheck,
  Mail,
  Phone,
  Lock,
  Camera,
  Edit,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  CheckCircle,
  MapPinHouseIcon,
} from "lucide-vue-next";

// Reactive data
const profileImage = ref("/placeholder.svg?height=176&width=176");
const showPassword = ref(false);
const isLoading = ref(false);
const showSuccess = ref(false);
const fileInput = ref(null);

// Form data
const profile = reactive({
  name: "",
  email: "",
  no_hp: "",
  alamat: "",
  password: "",
});

// Form errors
const errors = reactive({
  name: "",
  email: "",
  no_hp: "",
  alamat: "",
  password: "",
});

// Original data for reset
const originalProfile = {
  name: "",
  email: "",
  no_hp: "",
  alamat: "",
  password: "",
};

// Methods
const triggerImageUpload = () => {
  fileInput.value?.click();
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  let isValid = true;

  // Validate full name
  if (!profile.name.trim()) {
    errors.name = "Nama lengkap wajib diisi";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!profile.email.trim()) {
    errors.email = "Email wajib diisi";
    isValid = false;
  } else if (!emailRegex.test(profile.email)) {
    errors.email = "Harap masukkan alamat email yang valid";
    isValid = false;
  }

  if (!profile.alamat.trim()) {
    errors.alamat = "Alamat wajib diisi";
    isValid = false;
  }

  // Validate WhatsApp number
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!profile.no_hp.trim()) {
    errors.no_hp = "Nomor WhatsApp wajib diisi";
    isValid = false;
  } else if (!phoneRegex.test(profile.no_hp.replace(/[\s\-()]/g, ""))) {
    errors.no_hp = "Harap masukkan nomor WhatsApp yang valid";
    isValid = false;
  }

  // Validate password
  if (!profile.password.trim()) {
    errors.password = "Kata sandi wajib diisi";
    isValid = false;
  } else if (profile.password && profile.password.length < 8) {
    errors.password = "Kata sandi minimal harus terdiri dari 8 karakter";
    isValid = false;
  }

  return isValid;
};

const saveProfile = async () => {
  if (!validateForm()) return;

  isLoading.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 4000);

    console.log("Profile saved:", profile);
  } catch (error) {
    console.error("Error saving profile:", error);
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  Object.assign(profile, originalProfile);
  Object.keys(errors).forEach((key) => (errors[key] = ""));
  profileImage.value = "/placeholder.svg?height=176&width=176";
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-180deg);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(90deg);
  }
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(400%);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-scan {
  animation: scan 3s linear infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>
