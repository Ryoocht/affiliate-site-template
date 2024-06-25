import { defineField, defineType } from 'sanity'
import { DiamondIcon } from '@sanity/icons'

export const seo = defineType({
  name: 'seo',
  title: 'SEO Metadata',
  description:
    'Document type for managing SEO metadata such as head input, meta tags, and options.',
  type: 'document',
  icon: DiamondIcon,
  fields: [
    defineField({
      name: 'headInput',
      title: 'Head Input',
      description:
        'Input fields for HTML head metadata such as title, meta tags, styles, and scripts.',
      type: 'headInput',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'seoMetaInput',
      title: 'SEO Meta Input',
      description: 'Input fields for SEO-specific metadata.',
      type: 'seoMetaInput',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'headOptions',
      title: 'Head Options',
      description: 'Options for configuring head metadata behavior.',
      type: 'headOptions',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'seoMetaOptions',
      title: 'SEO Meta Options',
      description: 'Options for configuring SEO-specific metadata behavior.',
      type: 'headOptions',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
})
