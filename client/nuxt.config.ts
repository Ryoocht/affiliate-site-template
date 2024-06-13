export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxt/content',
    '@nuxtjs/sanity',
  ],
  plugins: ['~/plugins/scrollToTop.client.ts'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    keepalive: true,
    pageTransition: { name: 'center', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicons/safari-pinned-tab.svg',
          color: '#0b1120',
        },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#9f00a7' },
        { name: 'theme-color', content: '#f3f5fc' },
      ],
    },
  },
  sanity: {
    apiVersion: '2022-03-07',
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
  },
  imports: {
    dirs: ['types', 'types/sanity'],
  },
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
  svgo: {
    defaultImport: 'component',
  },
  image: {
    format: ['jpg', 'png', 'webp'],
  },
})
