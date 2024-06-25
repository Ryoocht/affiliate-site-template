/* Document types */
import { blogCategory } from '@schema/documents/categories/BlogCategory'
import { reviewCategory } from '@schema/documents/categories/ReviewCategory'
import { page } from '@schema/documents/Page'
import { seo } from '@schema/documents/Seo'

const documents = [blogCategory, reviewCategory, page, seo]

/* Object types */
import { sectionBlock } from '@schema/objects/blocks/SectionBlock'
// import { affiliateAdBlock } from '@schema/objects/blocks/AffiliateAdBlock'
import { category } from '@schema/objects/fields/Category'
import { headInput } from '@schema/objects/fields/HeadInput'
import { headOptions } from '@schema/objects/fields/HeadOptions'
import { responsiveAsset } from '@schema/objects/fields/ResponsiveAsset'
import { seoMetaInput } from '@schema/objects/fields/SeoMetaInput'
import { base } from '@schema/objects/metadata/Base'
import { bodyAttrs } from '@schema/objects/metadata/BodyAttrs'
import { htmlAttrs } from '@schema/objects/metadata/HtmlAttrs'
import { link } from '@schema/objects/metadata/Link'
import { meta } from '@schema/objects/metadata/Meta'
import { metaFlat } from '@schema/objects/metadata/MetaFlat'
import { metaFlatArticle } from '@schema/objects/metadata/MetaFlatArticle'
import { metaFlatBook } from '@schema/objects/metadata/MetaFlatBook'
import { metaFlatProfile } from '@schema/objects/metadata/MetaFlatProfile'
import { noscript } from '@schema/objects/metadata/NoScript'
import { robots } from '@schema/objects/metadata/Robots'
import { script } from '@schema/objects/metadata/Script'
import { style } from '@schema/objects/metadata/Style'
import { templateParams } from '@schema/objects/metadata/TemplateParams'
import { viewport } from '@schema/objects/metadata/Viewport'

const objects = [
  sectionBlock,
  // affiliateAdBlock,
  category,
  headInput,
  headOptions,
  responsiveAsset,
  seoMetaInput,
  base,
  bodyAttrs,
  htmlAttrs,
  link,
  meta,
  metaFlat,
  metaFlatArticle,
  metaFlatBook,
  metaFlatProfile,
  noscript,
  robots,
  script,
  style,
  templateParams,
  viewport,
]

/* Component types */
import { blogPost } from '@schema/components/BlogPost'

const components = [blogPost]

export const types = [...documents, ...objects, ...components]
