import type { GetSeoMetadataResult } from '@/types/sanity'
import type { AffiliateSeoResponse } from '../types'
import flattenSeoData from './format-seo-data'

function applyDefaults() {}

export default function mergeSeoData(
  defaults: AffiliateSeoResponse,
  data: Ref<GetSeoMetadataResult> | null,
): { seoData: ComputedRef<AffiliateSeoResponse> } {
  const seoData = computed(() => {
    /*
     * 1. format GetSeoMetadataResult data
     * 2. apply default values to data
     * 3. return ComputedRef<GetSeoMetadataResult>
     */
    const formattedData = flattenSeoData(data?.value)
    console.log({ formattedData })

    /* TODO: start from here */
    applyDefaults()

    const input = defaults
    return input
  })

  return {
    seoData,
  }
}
