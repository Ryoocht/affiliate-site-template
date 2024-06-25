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

export async function useAsyncSanity() {
  try {
    const sanity = useSanity()

    const params = { slug: 'home-page' }

    const { data, status, error } = await useAsyncData('seo', () =>
      sanity.fetch(getSeoMetadata, params),
    )
    if (status.value === 'success') return data
    if (status.value === 'error') throw new Error(error.value?.message)
  } catch (error) {
    console.error({ error })
    return null
  }
}
