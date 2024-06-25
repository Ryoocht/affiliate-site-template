export default defineEventHandler(async event => {
  const query = getQuery(event)
  const { slug } = query

  const sanity = useSanity()

  if (!slug)
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug must be provided',
    })

  const getSeoMetadata = groq`
    *[_type == 'page' && slug.current == $slug] {
      seo -> {
        headInput,
        seoMetaInput,
        headOptions,
        seoMetaOptions
      }
    }
  `

  const params = { slug }

  try {
    const seoData = await sanity.fetch(getSeoMetadata, params)

    return seoData || null
  } catch (error) {
    console.error('Error fetching SEO data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
