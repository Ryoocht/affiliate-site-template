import { defineField, defineType } from 'sanity'

export const style = defineType({
  name: 'style',
  title: 'Style',
  description:
    'Represents a style element with various attributes for defining styles in HTML documents.',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media Query',
      description:
        'Specifies the media query for which the style should be applied.',
      type: 'string',
    }),
    defineField({
      name: 'nonce',
      title: 'Nonce',
      description:
        'A cryptographic nonce used to allow inline styles in a Content-Security-Policy.',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Specifies alternative style sheet sets.',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      description: 'Specifies a unique identifier for the style element.',
      type: 'string',
    }),
  ],
})
