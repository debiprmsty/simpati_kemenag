<template>
  <button
    @click="$emit('click')"
    :aria-pressed="active"
    class="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    <slot name="icon" />
    <span class="mt-1 text-xs text-gray-800">{{ label }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ label: String, active: Boolean })
</script>

<style scoped>
button[aria-pressed="true"] { box-shadow: 0 0 0 2px white inset; }
</style>