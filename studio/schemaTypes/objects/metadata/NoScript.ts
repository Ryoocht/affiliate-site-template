import { defineField, defineType } from 'sanity'

export const noscript = defineType({
  name: 'noscript',
  title: 'NoScript',
  description:
    'Represents content to be displayed if the browser does not support scripting or the scripting is disabled.',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      description: 'Specifies a unique identifier for the noscript element.',
      type: 'string',
    }),
    defineField({
      name: 'class',
      title: 'Class',
      description:
        'Specifies one or more class names for the noscript element (space-separated).',
      type: 'string',
    }),
    defineField({
      name: 'style',
      title: 'Style',
      description:
        'Specifies CSS styling declarations to be applied to the noscript element.',
      type: 'string',
    }),
  ],
})
