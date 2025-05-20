import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  
  ],
  // server: {
  //   // potre opsi ini jika kamu hanya mau mengizinkan satu host ngrok:
  //    allowedHosts: 'all',

  //   host:'0.0.0.0'
  //   // atau, untuk mengizinkan semua host (ngrok dinamis, LAN, dsb):
  //   // allowedHosts: 'all',
  // }
})
