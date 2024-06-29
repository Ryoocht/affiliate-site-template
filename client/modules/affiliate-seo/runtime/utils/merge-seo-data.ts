import type { GetSeoMetadataResult } from '@/types/sanity'
import type { AffiliateSeoResponse } from '../types'
import flattenSeoData from './format-seo-data'

import { dummySeoData } from '~/assets/fake/seo'

function applyDefaults(
  defaults: AffiliateSeoResponse,
  data: AffiliateSeoResponse,
) {
  return {
    headInput: null,
    seoMetaInput: null,
    headOptions: null,
    seoMetaOptions: null,
  } as AffiliateSeoResponse
}

export default function mergeSeoData(
  defaults: AffiliateSeoResponse,
  data: Ref<GetSeoMetadataResult> | null,
): { seoData: ComputedRef<AffiliateSeoResponse> } {
  const formattedData = flattenSeoData(dummySeoData)
  console.log({ formattedData })
  console.log({ defaults })

  const seoData = computed(() => {
    const formattedData = flattenSeoData(dummySeoData)
    console.log({ defaults })
    console.log({ formattedData })

    return applyDefaults(defaults, formattedData)
  })

  return {
    seoData,
  }
}
