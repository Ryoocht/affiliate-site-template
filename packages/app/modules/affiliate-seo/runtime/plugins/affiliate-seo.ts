import type { AffiliateSeoOptions } from '../types'

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()
  if (nuxtApp.isHydrating) return

  const runtimeConfig = useRuntimeConfig()
  const seoConfig = runtimeConfig?.affiliateSeo || {}
  const { locale, dataset } = seoConfig

  addRouteMiddleware(
    'affiliate-seo',
    async to => {
      const slug = useRouteInfo(to)
      const seoOptions = to.meta?.affiliateSeoOptions as AffiliateSeoOptions

      const { seoData } = await useAffiliateSeo({
        slug: seoOptions?.slug || slug?.value,
        options: {
          locale: seoOptions?.locale || locale,
          dataset,
        },
      })

      if (seoData?.value) {
        const { headInput, headOptions, seoMetaInput, seoMetaOptions } =
          seoData.value
        nuxtApp.runWithContext(() => {
          if (headInput) useHead(headInput, headOptions || undefined)
          if (seoMetaInput)
            useServerSeoMeta(seoMetaInput, seoMetaOptions || undefined)
        })
      }
    },
    { global: true },
  )
})
