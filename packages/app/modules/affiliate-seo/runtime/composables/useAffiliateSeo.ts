import { defaults } from '../defaults'
import type { GetSeoMetadataResult } from '@/types/sanity'
import type { AffiliateSeoResponse, SeoArgs } from '../types'

export default async function useAffiliateSeo(seoArgs: SeoArgs): Promise<{
  seoData: globalThis.ComputedRef<AffiliateSeoResponse> | null
}> {
  if (!seoArgs.slug) return { seoData: null }

  const { data } = await useFetch<GetSeoMetadataResult>('/api/sanity-seo', {
    method: 'GET',
    params: {
      slug: seoArgs.slug,
    },
  })

  const { seoData } = mergeSeoData(defaults, data)
  return { seoData }
}
