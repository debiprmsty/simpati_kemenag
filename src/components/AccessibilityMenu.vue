<template>
  <div
    class="accessibility-menu fixed bottom-4 right-4 bg-gradient-to-br from-green-500 to-blue-500 shadow-2xl rounded-2xl p-4 z-50 text-white text-sm"
  >
    <button
      @click="togglePanel"
      aria-label="Accessibility Menu"
      class="p-2 bg-black/20 rounded-full hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white flex items-center gap-1"
    >
      <span class="text-base">♿</span>
      <h3 class="text-white text-sm font-semibold">Menu Disabilitas</h3>
    </button>
    
    <div v-if="open" class="mt-3 grid grid-cols-2 gap-2">
      <button @click="toggleSaturation" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 col-span-2 text-xs">
        {{ highSaturation ? 'Normal Saturation' : 'Saturation' }}
      </button>
     

      <!-- Baris 1: Contrast + & Smart Contrast -->
      <button @click="toggleContrast" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ contrastPlus ? 'Normal Contrast' : 'Contrast +' }}
      </button>
      <button @click="toggleSmartContrast" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ smartContrast ? 'Normal Smart' : 'Smart Contrast' }}
      </button>

      <!-- Baris 2 -->
      <button @click="toggleScreenReader" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ screenReader ? 'Disable SR' : 'Screen Reader' }}
      </button>
      <button @click="toggleHighlightLinks" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ highlightLinks ? 'Normal Links' : 'Highlight Links' }}
      </button>

      <!-- Baris 3 -->
      <button @click="toggleBiggerText" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ biggerText ? 'Normal Text' : 'Bigger Text' }}
      </button>
      <button @click="toggleTextSpacing" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ textSpacing ? 'Normal Spacing' : 'Text Spacing' }}
      </button>

      <!-- Baris 4 -->
      <button @click="toggleAnimations" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ pausedAnimations ? 'Play Animations' : 'Pause Animations' }}
      </button>
      <button @click="toggleHideImages" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ hideImages ? 'Show Images' : 'Hide Images' }}
      </button>

      <!-- Baris 5 -->
      <button @click="toggleDyslexiaFont" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ dyslexiaFont ? 'Normal Font' : 'Dyslexia Friendly' }}
      </button>
      <button @click="toggleCursor" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ customCursor ? 'Normal Cursor' : 'Big Cursor' }}
      </button>

      <!-- Baris 6 -->
      <button @click="toggleTooltips" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ showTooltips ? 'Hide Tooltips' : 'Tooltips' }}
      </button>
      <button @click="togglePageStructure" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ showPageStructure ? 'Hide Structure' : 'Page Structure' }}
      </button>

      <!-- Baris 7 -->
      <button @click="toggleLineHeight" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ increasedLineHeight ? 'Normal Height' : 'Line Height' }}
      </button>
      <button @click="toggleTextAlign" class="flex items-center justify-center p-2 bg-white/20 rounded-lg hover:bg-white/30 text-xs">
        {{ justifiedText ? 'Normal Align' : 'Text Align' }}
      </button>

      <!-- Baris 8 -->
      


      <!-- Reset -->
      <button @click="resetSettings" class="col-span-2 p-2 bg-white/30 rounded-lg hover:bg-white/40 mt-1 text-xs">
        Reset All
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State baru
const open = ref(false)
const accessibilityProfiles = ref(false)
const language = ref('en')
const contrastPlus = ref(false)
const smartContrast = ref(false)
const screenReader = ref(false)
const dictionary = ref(false)

// State lama
const highlightLinks = ref(false)
const biggerText = ref(false)
const textSpacing = ref(false)
const pausedAnimations = ref(false)
const hideImages = ref(false)
const dyslexiaFont = ref(false)
const customCursor = ref(false)
const showTooltips = ref(false)
const showPageStructure = ref(false)
const increasedLineHeight = ref(false)
const justifiedText = ref(false)
const highSaturation = ref(false)

const allKeys = {
  accessibilityProfiles,
  language,
  contrastPlus,
  smartContrast,
  screenReader,
  dictionary,
  highlightLinks,
  biggerText,
  textSpacing,
  pausedAnimations,
  hideImages,
  dyslexiaFont,
  customCursor,
  showTooltips,
  showPageStructure,
  increasedLineHeight,
  justifiedText,
  highSaturation
}

// Toggle panel
function togglePanel() { open.value = !open.value }

// Toggle fitur
function toggleProfiles()    { accessibilityProfiles.value = !accessibilityProfiles.value; applySettings(); saveSettings() }
function toggleLanguage()    { language.value = language.value === 'en' ? 'id' : 'en'; saveSettings() }
function toggleContrast()    { contrastPlus.value = !contrastPlus.value; applySettings(); saveSettings() }
function toggleSmartContrast(){ smartContrast.value = !smartContrast.value; applySettings(); saveSettings() }
function toggleScreenReader(){ screenReader.value = !screenReader.value; applySettings(); saveSettings() }
function toggleDictionary()  { dictionary.value = !dictionary.value; applySettings(); saveSettings() }
function toggleHighlightLinks(){ highlightLinks.value = !highlightLinks.value; applySettings(); saveSettings() }
function toggleBiggerText()     { biggerText.value = !biggerText.value; applySettings(); saveSettings() }
function toggleTextSpacing()    { textSpacing.value = !textSpacing.value; applySettings(); saveSettings() }
function toggleAnimations()     { pausedAnimations.value = !pausedAnimations.value; applySettings(); saveSettings() }
function toggleHideImages()     { hideImages.value = !hideImages.value; applySettings(); saveSettings() }
function toggleDyslexiaFont()    { dyslexiaFont.value = !dyslexiaFont.value; applySettings(); saveSettings() }
function toggleCursor()         { customCursor.value = !customCursor.value; applySettings(); saveSettings() }
function toggleTooltips()       { showTooltips.value = !showTooltips.value; applySettings(); saveSettings() }
function togglePageStructure()  { showPageStructure.value = !showPageStructure.value; applySettings(); saveSettings() }
function toggleLineHeight()     { increasedLineHeight.value = !increasedLineHeight.value; applySettings(); saveSettings() }
function toggleTextAlign()      { justifiedText.value = !justifiedText.value; applySettings(); saveSettings() }
function toggleSaturation()     { highSaturation.value = !highSaturation.value; applySettings(); saveSettings() }

function resetSettings() {
  Object.values(allKeys).forEach(r => { if (typeof r.value === 'boolean') r.value = false })
  language.value = 'en'
  applySettings()
  clearSettings()
}

function applySettings() {
  const d = document.documentElement

  d.classList.toggle('oversized-widget', accessibilityProfiles.value)
  d.setAttribute('lang', language.value)
  d.classList.toggle('contrast-plus', contrastPlus.value)
  d.classList.toggle('smart-contrast', smartContrast.value)
  d.classList.toggle('screen-reader', screenReader.value)
  d.classList.toggle('dictionary-mode', dictionary.value)
  d.classList.toggle('highlight-links', highlightLinks.value)
  d.classList.toggle('bigger-text', biggerText.value)
  d.classList.toggle('text-spacing', textSpacing.value)
  d.classList.toggle('paused-animations', pausedAnimations.value)
  d.classList.toggle('hide-images', hideImages.value)
  d.classList.toggle('dyslexia-font', dyslexiaFont.value)
  d.classList.toggle('custom-cursor', customCursor.value)
  d.classList.toggle('show-tooltips', showTooltips.value)
  d.classList.toggle('show-structure', showPageStructure.value)
  d.classList.toggle('line-height', increasedLineHeight.value)
  d.classList.toggle('justified-text', justifiedText.value)
  d.style.filter = highSaturation.value ? 'saturate(200%)' : ''
}

function saveSettings() {
  const s = {}
  Object.entries(allKeys).forEach(([k, r]) => { s[k] = r.value })
  localStorage.setItem('accessibility', JSON.stringify(s))
}

function loadSettings() {
  const json = localStorage.getItem('accessibility')
  if (!json) return
  const data = JSON.parse(json)
  Object.entries(data).forEach(([k, v]) => { if (k in allKeys) allKeys[k].value = v })
  applySettings()
}

function clearSettings() {
  localStorage.removeItem('accessibility')
}

onMounted(loadSettings)
</script>

<style>
/* Profil: oversized widget */
.oversized-widget .accessibility-menu { transform: scale(1.1) }
/* Contrast + */
.contrast-plus { filter: contrast(150%) brightness(110%) }
/* Smart Contrast */
.smart-contrast { filter: invert(1) contrast(120%) }
/* Highlight Links */
.highlight-links a { outline: 2px solid yellow !important; padding: 1px }
/* Bigger Text */
.bigger-text body { font-size: 110% }
/* Text Spacing */
.text-spacing p { letter-spacing: 0.05em; line-height: 1.6 }
/* Paused Animations */
.paused-animations * { animation-play-state: paused !important; transition: none !important }
/* Hide Images */
.hide-images img { visibility: hidden }
/* Dyslexia Font */
.dyslexia-font { font-family: 'OpenDyslexic', sans-serif }
/* Custom Cursor */
.custom-cursor { cursor: url('big-cursor.png'), auto }
/* Show Tooltips */
.show-tooltips [title]:hover::after { content: attr(title); position: absolute; background: #000; color: #fff; padding: 2px; font-size: 0.75rem }
/* Page Structure */
.show-structure * { outline: 1px solid #ff00ff !important }
/* Line Height */
.line-height { line-height: 1.5 }
/* Justified Text */
.justified-text { text-align: justify }
</style>
