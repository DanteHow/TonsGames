// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui', 
    '@nuxt/icon'
  ],
  css: ["~/assets/css/tailwind.css"],
  ui: {
    colorMode: false
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})