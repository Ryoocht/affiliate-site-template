export default defineNuxtPlugin(() => {
  /*
   * 1. get Module options from nuxt config
   * 2. get router info (slug, locale, etc)
   */
  // const nuxtApp = useNuxtApp()

  addRouteMiddleware(
    'test',
    async () => {
      const seoData = await useAffiliateSeo({
        slug: 'how-to-choose-page',
      })

      if (seoData?.value) {
        const { headInput, headOptions, seoMetaInput, seoMetaOptions } =
          seoData.value

        if (headInput) useHead(headInput, headOptions || undefined)

        if (seoMetaInput)
          useServerSeoMeta(seoMetaInput, seoMetaOptions || undefined)
      }
    },
    { global: true },
  )
})
