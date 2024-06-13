export default defineEventHandler(async event => {
  const sanity = useSanity()
  const slug = getRouterParam(event, 'slug')

  if (!slug) return null

  const getBlogPage = groq`
    *[_type == "page" && slug.current == $slug][0] {
        "pageSectionRef": pageSections[_type == "blogPost"][0]._ref
    }`

  const pageResult = await sanity.fetch(getBlogPage, { slug })

  const pageSectionRef = pageResult?.pageSectionRef
  if (!pageSectionRef) return null

  const getBlog = groq`
    *[_type == "blogPost" && _id == $pageSectionRef][0] {
      title,
      excerpt,
      releaseTime,
      timeToRead,
      "mainImage": {
        "altText": mainImage.altText,
        "assetId": mainImage.mobileAsset.asset->_id,
        "assetUrl": mainImage.mobileAsset.asset->url,
        "caption": mainImage.mobileAsset.caption
      },
      body,
      "categories": categories[]->category {
        title,
        "slug": slug.current
      }
    }
  `

  const blogPostResult = await sanity.fetch(getBlog, { pageSectionRef })

  return blogPostResult ? { ...blogPostResult } : null
})
