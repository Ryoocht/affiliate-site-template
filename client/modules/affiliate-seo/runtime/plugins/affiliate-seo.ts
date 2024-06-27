export default defineNuxtPlugin(() => {
  /*
   * 1. get Module options from nuxt config
   * 2. get router info (slug, locale, etc)
   * 3. get seoMetadata from useAffiliateSeo composable
   * 4. update useHead and useServerSeo composables
   */

  addRouteMiddleware(
    'test',
    () => {
      console.log('global middleware that runs on every route change')
    },
    { global: true },
  )
})
