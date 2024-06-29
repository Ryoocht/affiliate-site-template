import { defaults } from '../defaults'
import { useAsyncSanity } from './useAsyncSanity'
import type { SeoArgs } from '../types'

export default async function useAffiliateSeo(seoArgs: SeoArgs) {
  if (!seoArgs.slug) return

  const data = await useAsyncSanity(seoArgs)

  const { seoData } = mergeSeoData(defaults, data)

  return seoData
}
