export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  addRouteMiddleware(
    'affiliate-seo',
    async () => {
      // const { slug } = useRouteInfo()

      /* TODO: get Module options */
      // const options = nuxtApp.$config.public

      // const seoData = await useAffiliateSeo({
      //   slug: 'how-to-choose-page',
      // })

      /* This is correct way to use nuxt composable in plugin */
      nuxtApp.runWithContext(() =>
        useHead({
          title: 'test',
        }),
      )

      // if (seoData?.value) {
      //   const { headInput, headOptions, seoMetaInput, seoMetaOptions } =
      //     seoData.value

      //   if (headInput) useHead(headInput, headOptions || undefined)

      //   if (seoMetaInput)
      //     useServerSeoMeta(seoMetaInput, seoMetaOptions || undefined)
      // }
    },
    { global: true },
  )
})
