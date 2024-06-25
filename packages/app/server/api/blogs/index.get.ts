export default defineEventHandler(() => {
  const sanity = useSanity()

  const getBlogs = groq`
    {
      "featuredBlog": *[_type == 'blogPost' && featured == true][0] {
        "slug": *[_type == 'page' && references(^._id)][0].slug.current,
        title,
        excerpt,
        timeToRead,
        "mainImage": {
          "altText": mainImage.altText,
          "assetId": mainImage.mobileAsset.asset->_id,
          "assetUrl": mainImage.mobileAsset.asset->url,
          "caption": mainImage.mobileAsset.caption
        }
      },
      "categoryList": *[_type == "blogCategory" && count(*[_type == "blogPost" && references(^._id)]) > 3] {
        "slug": category.slug.current,
        "title": category.title,
        "posts": *[_type == "blogPost" && references(^._id)] | order(_createdAt desc) [0..2] {
          "slug": *[_type == 'page' && references(^._id)][0].slug.current,
          title,
          excerpt,
          timeToRead,
          "mainImage": {
            "altText": mainImage.altText,
            "assetId": mainImage.mobileAsset.asset->_id,
            "assetUrl": mainImage.mobileAsset.asset->url,
            "caption": mainImage.mobileAsset.caption
          }
        }
      }
    }`

  return sanity.fetch(getBlogs)
})
