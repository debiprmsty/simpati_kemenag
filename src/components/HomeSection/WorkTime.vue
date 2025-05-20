<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Working Hours Card -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-y-green-900">
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-medium text-gray-900">Office Working Hours</h2>
            <div class="mt-2 text-gray-600">
              <p>
                <span class="font-medium">Monday - Thursday:</span> 07:30 - 16:00 WITA
              </p>
              <p><span class="font-medium">Friday:</span> 07:30 - 16:30 WITA</p>
              <p class="mt-2 text-sm text-blue-600">
                Services will only be provided during these hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Registration Form -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <!-- Full Name -->
            <div class="sm:col-span-2">
              <label for="fullName" class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  id="fullName"
                  v-model="form.fullName"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email Address</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <div class="mt-1">
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Service Type -->
            <div class="sm:col-span-2">
              <label for="serviceType" class="block text-sm font-medium text-gray-700"
                >Service Type</label
              >
              <div class="mt-1">
                <select
                  id="serviceType"
                  v-model="form.serviceType"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled selected>Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="document">Document Processing</option>
                  <option value="application">Application Submission</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <!-- Preferred Date -->
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700"
                >Preferred Date</label
              >
              <div class="mt-1">
                <input
                  type="date"
                  id="date"
                  v-model="form.date"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <!-- Preferred Time -->
            <div>
              <label for="time" class="block text-sm font-medium text-gray-700"
                >Preferred Time</label
              >
              <div class="mt-1">
                <select
                  id="time"
                  v-model="form.time"
                  required
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled selected>Select a time</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                </select>
              </div>
            </div>

            <!-- Additional Notes -->
            <div class="sm:col-span-2">
              <label for="notes" class="block text-sm font-medium text-gray-700"
                >Additional Notes</label
              >
              <div class="mt-1">
                <textarea
                  id="notes"
                  v-model="form.notes"
                  rows="4"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Terms and Conditions -->
          <div class="mt-6">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  v-model="form.termsAccepted"
                  required
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-medium text-gray-700"
                  >I agree to the terms and conditions</label
                >
                <p class="text-gray-500">
                  I understand that services will only be provided during office hours.
                </p>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="mt-8">
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>

      <!-- Additional Information -->
      <div class="mt-8 text-center text-sm text-gray-500">
        <p>For urgent matters, please contact us directly at (0123) 456-7890</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
