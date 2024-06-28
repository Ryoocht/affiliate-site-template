import { defaults } from '../defaults'
import { useAsyncSanity } from './useAsyncSanity'
import type { SeoArgs } from '../types'

import { dummySeoData } from '@/assets/fake/seo'

export default async function useAffiliateSeo(seoArgs: SeoArgs) {
  if (!seoArgs.slug) return
  const dummyData = ref(dummySeoData)

  const data = await useAsyncSanity(seoArgs)
  console.log({ data })

  const { seoData } = mergeSeoData(defaults, dummyData)

  return seoData
}
