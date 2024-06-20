import { defineField, defineType } from 'sanity'

export const meta = defineType({
  name: 'meta',
  title: 'Meta Tag',
  description:
    'Represents a meta tag element with various attributes for specifying metadata in HTML documents.',
  type: 'object',
  fields: [
    defineField({
      name: 'charset',
      title: 'Character Encoding',
      type: 'string',
      description: 'Specifies the character encoding for the document.',
      options: {
        list: ['utf-8'],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description:
        'Specifies the value for the http-equiv, name, or property attribute.',
      type: 'string',
    }),
    defineField({
      name: 'httpEquiv',
      title: 'HTTP Equivalent',
      type: 'string',
      description: 'Defines a pragma directive or other HTTP header.',
      options: {
        list: [
          'content-security-policy',
          'content-type',
          'default-style',
          'x-ua-compatible',
          'refresh',
          'accept-ch',
        ],
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Specifies the name of the metadata.',
      options: {
        list: ['viewport', 'description', 'keywords', 'author', 'generator'],
      },
    }),
    defineField({
      name: 'property',
      title: 'Property',
      type: 'string',
      description: 'Defines a property associated with the content attribute.',
      options: {
        list: [
          'og:title',
          'og:description',
          'og:image',
          'twitter:title',
          'twitter:description',
          'twitter:image',
        ],
      },
    }),
    defineField({
      name: 'id',
      title: 'ID',
      description: 'Specifies a unique identifier for the meta tag.',
      type: 'string',
    }),
    defineField({
      name: 'media',
      title: 'Media Query',
      type: 'string',
      description:
        'Specifies the media query list for the theme-color metadata.',
      options: {
        list: ['(prefers-color-scheme: light)', '(prefers-color-scheme: dark)'],
      },
    }),
  ],
})
