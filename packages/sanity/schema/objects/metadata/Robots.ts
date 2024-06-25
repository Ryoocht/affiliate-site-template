import { defineField, defineType } from 'sanity'

export const robots = defineType({
  name: 'robots',
  title: 'Robots Meta',
  description: 'Schema type for defining robots meta directives.',
  type: 'object',
  fields: [
    defineField({
      name: 'index',
      title: 'Allow Indexing',
      description: 'Allow search engines to index this page.',
      type: 'boolean',
    }),
    defineField({
      name: 'follow',
      title: 'Allow Following Links',
      description: 'Allow search engines to follow links on this page.',
      type: 'boolean',
    }),
    defineField({
      name: 'all',
      title: 'All',
      description: 'No restrictions for indexing or serving.',
      type: 'boolean',
    }),
    defineField({
      name: 'noindex',
      title: 'No Index',
      description:
        'Do not show this page, media, or resource in search results.',
      type: 'boolean',
    }),
    defineField({
      name: 'nofollow',
      title: 'No Follow',
      description: 'Do not follow the links on this page.',
      type: 'boolean',
    }),
    defineField({
      name: 'none',
      title: 'None',
      description: 'Equivalent to noindex, nofollow.',
      type: 'boolean',
    }),
    defineField({
      name: 'noarchive',
      title: 'No Archive',
      description: 'Do not show a cached link in search results.',
      type: 'boolean',
    }),
    defineField({
      name: 'nositelinkssearchbox',
      title: 'No Sitelinks Search Box',
      description:
        'Do not show a sitelinks search box in the search results for this page.',
      type: 'boolean',
    }),
    defineField({
      name: 'nosnippet',
      title: 'No Snippet',
      description:
        'Do not show a text snippet or video preview in the search results for this page.',
      type: 'boolean',
    }),
    defineField({
      name: 'indexifembedded',
      title: 'Index if Embedded',
      description:
        'Google is allowed to index the content if it’s embedded in another page through iframes or similar HTML tags.',
      type: 'boolean',
    }),
    defineField({
      name: 'maxSnippet',
      title: 'Max Snippet',
      description:
        'Use a maximum of [number] characters as a textual snippet for this search result.',
      type: 'number',
    }),
    defineField({
      name: 'maxImagePreview',
      title: 'Max Image Preview',
      description:
        'Set the maximum size of an image preview for this page in search results.',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Standard', value: 'standard' },
          { title: 'Large', value: 'large' },
        ],
      },
    }),
    defineField({
      name: 'maxVideoPreview',
      title: 'Max Video Preview',
      description:
        'Use a maximum of [number] seconds as a video snippet for videos on this page in search results.',
      type: 'number',
    }),
    defineField({
      name: 'notranslate',
      title: 'No Translate',
      description: 'Do not offer translation of this page in search results.',
      type: 'boolean',
    }),
    defineField({
      name: 'unavailable_after',
      title: 'Unavailable After',
      description:
        'Do not show this page in search results after the specified date/time.',
      type: 'string',
    }),
    defineField({
      name: 'noimageindex',
      title: 'No Image Index',
      description: 'Do not index images on this page.',
      type: 'boolean',
    }),
  ],
})
