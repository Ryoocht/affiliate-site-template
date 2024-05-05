export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@nuxt/ui',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  typescript: {
    typeCheck: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
})
