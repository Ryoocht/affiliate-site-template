import { defineField, defineType } from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  description:
    'Represents a link element with various attributes for specifying relationships, content types, and behaviors.',
  type: 'object',
  fields: [
    defineField({
      name: 'as',
      title: 'As',
      description: 'The type of content being loaded',
      type: 'string',
      options: {
        list: [
          { title: 'Audio', value: 'audio' },
          { title: 'Document', value: 'document' },
          { title: 'Embed', value: 'embed' },
          { title: 'Fetch', value: 'fetch' },
          { title: 'Font', value: 'font' },
          { title: 'Image', value: 'image' },
          { title: 'Object', value: 'object' },
          { title: 'Script', value: 'script' },
          { title: 'Style', value: 'style' },
          { title: 'Track', value: 'track' },
          { title: 'Video', value: 'video' },
          { title: 'Worker', value: 'worker' },
        ],
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description: 'Color for mask-icon link type',
      type: 'string',
    }),
    defineField({
      name: 'crossorigin',
      title: 'Crossorigin',
      description: 'CORS settings for the resource',
      type: 'string',
      options: {
        list: [
          { title: 'Anonymous', value: 'anonymous' },
          { title: 'Use Credentials', value: 'use-credentials' },
        ],
      },
    }),
    defineField({
      name: 'fetchpriority',
      title: 'Fetch Priority',
      description:
        'Hint of the relative priority to use when fetching a preloaded resource',
      type: 'string',
      options: {
        list: [
          { title: 'High', value: 'high' },
          { title: 'Low', value: 'low' },
          { title: 'Auto', value: 'auto' },
        ],
      },
    }),
    defineField({
      name: 'href',
      title: 'Href',
      description: 'URL of the linked resource',
      type: 'string',
    }),
    defineField({
      name: 'hreflang',
      title: 'Href Lang',
      description: 'Language of the linked resource',
      type: 'string',
    }),
    defineField({
      name: 'imagesizes',
      title: 'Image Sizes',
      description: 'Sizes attribute for rel="preload" and as="image"',
      type: 'string',
    }),
    defineField({
      name: 'imagesrcset',
      title: 'Image Srcset',
      description: 'Sourceset attribute for rel="preload" and as="image"',
      type: 'string',
    }),
    defineField({
      name: 'integrity',
      title: 'Integrity',
      description: 'Base64-encoded cryptographic hash of the resource',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      description: 'Media type / media query',
      type: 'string',
    }),
    defineField({
      name: 'prefetch',
      title: 'Prefetch',
      description: 'Resource that might be required by the next navigation',
      type: 'url',
    }),
    defineField({
      name: 'referrerpolicy',
      title: 'Referrer Policy',
      description: 'Referrer policy for fetching the resource',
      type: 'string',
    }),
    defineField({
      name: 'rel',
      title: 'Rel',
      description:
        'Relationship of the linked document to the current document',
      type: 'string',
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      description: 'Sizes of the icons for visual media',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the linked resource',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      description: 'Type of the content linked to (MIME type)',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      description: 'Unique ID',
      type: 'string',
    }),
    defineField({
      name: 'onabort',
      title: 'On Abort',
      description: 'Script to be run on abort',
      type: 'string',
    }),
    defineField({
      name: 'onerror',
      title: 'On Error',
      description: 'Script to be run when an error occurs',
      type: 'string',
    }),
    defineField({
      name: 'onload',
      title: 'On Load',
      description: 'Script to be run when the file is loaded',
      type: 'string',
    }),
    defineField({
      name: 'onprogress',
      title: 'On Progress',
      description: 'Script to be run when a request receives more data',
      type: 'string',
    }),
    defineField({
      name: 'onloadstart',
      title: 'On Load Start',
      type: 'string',
      description: 'Script to be run just as the file begins to load',
    }),
    defineField({
      name: 'dataAttributes',
      title: 'Data Attributes',
      description: 'Custom data attributes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'key',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
  ],
})
