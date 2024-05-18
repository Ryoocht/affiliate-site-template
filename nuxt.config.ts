export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    "@nuxt/image"
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  ui: {
    global: true,
    icons: ['material-symbols'],
  },
})