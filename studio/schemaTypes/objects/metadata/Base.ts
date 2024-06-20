import { defineField, defineType } from 'sanity'

export const base = defineType({
  name: 'base',
  title: 'Base',
  description:
    'The base tag, represented by <base>, specifies the base URL for all relative links within the HTML code of a specific page or document.',
  type: 'object',
  fields: [
    defineField({
      name: 'href',
      title: 'Href',
      description: 'The base URL for relative URLs in the document',
      type: 'string',
    }),
    defineField({
      name: 'target',
      title: 'Target',
      description:
        'A keyword or author-defined name of the default browsing context to show the results of navigation from `<a>`,\
      `<area>`, or `<form>` elements without explicit target attributes.',
      type: 'string',
    }),
  ],
})
