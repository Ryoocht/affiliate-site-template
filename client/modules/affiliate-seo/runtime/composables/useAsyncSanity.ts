import type { SeoArgs } from '../types'
import type { GetSeoMetadataResult } from '~/types/sanity'

export async function useAsyncSanity(
  seoArgs: SeoArgs,
): Promise<Ref<GetSeoMetadataResult> | null> {
  if (!seoArgs.slug) throw new Error('Slug must be provided')

  try {
    const sanity = useSanity()

    const getSeoMetadata = groq`
    *[_type == 'page' && slug.current == $slug] {
      "seo": seo {
        headInput,
        seoMetaInput,
        headOptions,
        seoMetaOptions
      }
    }
  `

    const params = { slug: seoArgs.slug }

    const { data, status, error } = await useAsyncData('seo', () =>
      sanity.fetch(getSeoMetadata, params),
    )

    if (status.value === 'success') return data
    if (status.value === 'error') throw new Error(error.value?.message)
    else return null
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    return null
  }
}
