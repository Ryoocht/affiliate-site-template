import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  description: 'A blog post with title, content, and metadata.',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the blog post.',
      type: 'string',
      validation: rule => rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A short excerpt of the blog post.',
      type: 'text',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      description: 'Indicates whether the blog post is featured.',
      type: 'boolean',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'The responsive image asset to use for this blog post.',
      type: 'responsiveAsset',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The body of the blog post.',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'sectionBlock' }],
    }),
    defineField({
      name: 'timeToRead',
      title: 'Estimated Time to Read (minutes)',
      type: 'number',
      validation: rule =>
        rule
          .integer()
          .min(1)
          .error('Estimated time should be a positive integer'),
    }),
    defineField({
      name: 'releaseTime',
      title: 'Release Time',
      description: 'The date and time that the blog post is released.',
      type: 'datetime',
      validation: rule => rule.required().error('Release time is required.'),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      description: 'The categories that apply to this blog post.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blogCategory' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'mainImage.mobileAsset',
    },
  },
})
