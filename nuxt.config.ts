export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  typescript: {
    typeCheck: false,
  },
})
