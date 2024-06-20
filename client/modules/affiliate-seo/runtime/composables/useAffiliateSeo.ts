import { useAsyncSanity } from './useAsyncSanity'

export async function useAffiliateSeo() {
  /* fetch data from sanity and format it for seo meta */
  const seoData = await useAsyncSanity()
  return seoData
}
