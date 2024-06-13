/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type SectionBlock = {
  _type: 'sectionBlock'
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?:
          | 'normal'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
  >
}

export type ReviewCategory = {
  _id: string
  _type: 'reviewCategory'
  _createdAt: string
  _updatedAt: string
  _rev: string
  category?: Category
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  pageSections?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'blogPost'
  }>
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type BlogCategory = {
  _id: string
  _type: 'blogCategory'
  _createdAt: string
  _updatedAt: string
  _rev: string
  category?: Category
}

export type Category = {
  _type: 'category'
  title?: string
  slug?: Slug
  description?: string
}

export type BlogPost = {
  _id: string
  _type: 'blogPost'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  excerpt?: string
  featured?: boolean
  mainImage?: ResponsiveAsset
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?:
          | 'normal'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | ({
        _key: string
      } & SectionBlock)
  >
  timeToRead?: number
  releaseTime?: string
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'blogCategory'
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type ResponsiveAsset = {
  _type: 'responsiveAsset'
  name?: string
  slug?: Slug
  altText?: string
  assetType?: 'image' | 'video'
  mobileAsset?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    caption?: string
    poster?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    _type: 'image'
  }
  desktopAsset?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    caption?: string
    poster?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    _type: 'image'
  }
}
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./server/api/blogs/[slug].get.ts
// Variable: getBlogPage
// Query:     *[_type == "page" && slug.current == $slug][0] {        "pageSectionRef": pageSections[_type == "blogPost"][0]._ref    }
export type GetBlogPageResult = {
  pageSectionRef: null
} | null
// Variable: getBlog
// Query:     *[_type == "blogPost" && _id == $pageSectionRef][0] {      title,      excerpt,      releaseTime,      timeToRead,      "mainImage": {        "altText": mainImage.altText,        "assetId": mainImage.mobileAsset.asset->_id,        "assetUrl": mainImage.mobileAsset.asset->url,        "caption": mainImage.mobileAsset.caption      },      body,      "categories": categories[]->category {        title,        "slug": slug.current      }    }  
export type GetBlogResult = {
  title: string | null
  excerpt: string | null
  releaseTime: string | null
  timeToRead: number | null
  mainImage: {
    altText: string | null
    assetId: string | null
    assetUrl: string | null
    caption: string | null
  }
  body: Array<
    | ({
        _key: string
      } & SectionBlock)
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?:
          | 'blockquote'
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
          | 'normal'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
  > | null
  categories: Array<{
    title: string | null
    slug: string | null
  } | null> | null
} | null
// Source: ./server/api/blogs/index.get.ts
// Variable: getBlogs
// Query:     {      "featuredBlog": *[_type == 'blogPost' && featured == true][0] {        "slug": *[_type == 'page' && references(^._id)][0].slug.current,        title,        excerpt,        timeToRead,        "mainImage": {          "altText": mainImage.altText,          "assetId": mainImage.mobileAsset.asset->_id,          "assetUrl": mainImage.mobileAsset.asset->url,          "caption": mainImage.mobileAsset.caption        }      },      "categoryList": *[_type == "blogCategory" && count(*[_type == "blogPost" && references(^._id)]) > 3] {        "slug": category.slug.current,        "title": category.title,        "posts": *[_type == "blogPost" && references(^._id)] | order(_createdAt desc) [0..2] {          "slug": *[_type == 'page' && references(^._id)][0].slug.current,          title,          excerpt,          timeToRead,          "mainImage": {            "altText": mainImage.altText,            "assetId": mainImage.mobileAsset.asset->_id,            "assetUrl": mainImage.mobileAsset.asset->url,            "caption": mainImage.mobileAsset.caption          }        }      }    }
export type GetBlogsResult = {
  featuredBlog: {
    slug: string | null
    title: string | null
    excerpt: string | null
    timeToRead: number | null
    mainImage: {
      altText: string | null
      assetId: string | null
      assetUrl: string | null
      caption: string | null
    }
  } | null
  categoryList: Array<{
    slug: string | null
    title: string | null
    posts: Array<{
      slug: string | null
      title: string | null
      excerpt: string | null
      timeToRead: number | null
      mainImage: {
        altText: string | null
        assetId: string | null
        assetUrl: string | null
        caption: string | null
      }
    }>
  }>
}
