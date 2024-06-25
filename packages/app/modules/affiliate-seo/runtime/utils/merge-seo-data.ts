import defu from 'defu'
import flattenSeoData from './format-seo-data'
import type { GetSeoMetadataResult } from '@/types/sanity'
import type { AffiliateSeoResponse } from '../types'

function applyDefaults<T extends AffiliateSeoResponse>(defaults: T, data: T) {
  return defu(data, defaults) as T
}

export default function mergeSeoData(
  defaults: AffiliateSeoResponse,
  data: Ref<GetSeoMetadataResult | null>,
): { seoData: ComputedRef<AffiliateSeoResponse> } {
  const seoData = computed(() => {
    const formattedData = flattenSeoData(data)

    return applyDefaults(defaults, formattedData)
  })

  return {
    seoData,
  }
}
