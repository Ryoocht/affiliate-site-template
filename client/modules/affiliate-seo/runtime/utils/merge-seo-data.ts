import type { AffiliateSeoResponse } from '../../types'

export default function mergeSeoData(
  defaults: AffiliateSeoResponse,
  data: unknown,
): { seoData: ComputedRef<AffiliateSeoResponse> } {
  const seoData = computed(() => {
    const response = data
    const input = defaults
    console.log({ response })
    console.log({ input })
    return input
  })

  return {
    seoData,
  }
}
