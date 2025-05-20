<template>
  <div :class="appClasses">
    <SkipToContentLink />
    <NavBar v-if="showComponents" />
    <main id="main-content" tabindex="-1" class="flex-grow">
      <RouterView />
    </main>
    <Footer v-if="showComponents" />
    <AccessibilityMenu />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SkipToContentLink from './components/SkipToContentLink.vue'
import AccessibilityMenu from './components/AccessibilityMenu.vue'

const route = useRoute()
const hidePaths = ['/maintenance','/layanan-publik/auth/login','/layanan-publik/auth/register']
const showComponents = computed(() => !hidePaths.includes(route.path))
const isHome = computed(() => route.path==='/' )
const appClasses = computed(() =>`flex flex-col min-h-screen${isHome.value?' bg-white':' bg-gray-50'}`)
</script>

<style>
html,body,#app{height:100%;margin:0}
</style>