import { defineField, defineType } from 'sanity'

export const script = defineType({
  name: 'script',
  title: 'Script',
  type: 'object',
  description:
    'Represents a script element with various attributes for loading and executing scripts in HTML documents.',
  fields: [
    defineField({
      name: 'async',
      title: 'Async',
      description:
        'Specifies whether the script should be executed asynchronously.',
      type: 'boolean',
    }),
    defineField({
      name: 'crossorigin',
      title: 'Crossorigin',
      description: 'Specifies how the script can be fetched cross-origin.',
      type: 'string',
      options: {
        list: ['anonymous', 'use-credentials'],
      },
    }),
    defineField({
      name: 'defer',
      title: 'Defer',
      description:
        'Specifies whether the script should be executed after the page has been parsed.',
      type: 'boolean',
    }),
    defineField({
      name: 'fetchpriority',
      title: 'Fetch Priority',
      description: 'Specifies the relative priority for fetching the script.',
      type: 'string',
      options: {
        list: ['high', 'low', 'auto'],
      },
    }),
    defineField({
      name: 'integrity',
      title: 'Integrity',
      description:
        'Specifies a cryptographic hash to verify the integrity of the script resource.',
      type: 'string',
    }),
    defineField({
      name: 'nomodule',
      title: 'No Module',
      description:
        'Specifies that the script should be ignored if the browser supports ES modules.',
      type: 'boolean',
    }),
    defineField({
      name: 'referrerpolicy',
      title: 'Referrer Policy',
      description:
        'Specifies which referrer to send when fetching the script and resources fetched by it.',
      type: 'string',
      options: {
        list: [
          'no-referrer',
          'no-referrer-when-downgrade',
          'origin',
          'origin-when-cross-origin',
          'same-origin',
          'strict-origin',
          'strict-origin-when-cross-origin',
          'unsafe-url',
        ],
      },
    }),
    defineField({
      name: 'src',
      title: 'Source URL',
      description:
        'Specifies the URL of an external script to be fetched and executed.',
      type: 'url',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      description: 'Specifies the MIME type of the script.',
      type: 'string',
      options: {
        list: [
          'text/javascript',
          'module',
          'application/json',
          'application/ld+json',
          'speculationrules',
        ],
      },
    }),
    defineField({
      name: 'id',
      title: 'ID',
      description: 'Specifies a unique identifier for the script element.',
      type: 'string',
    }),
  ],
})
