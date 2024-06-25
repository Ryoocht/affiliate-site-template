import { defineField, defineType } from 'sanity'

export const bodyAttrs = defineType({
  name: 'bodyAttrs',
  title: 'Body Attributes',
  description:
    'Represents standard attributes and events applicable to the <body> element.',
  type: 'object',
  fields: [
    defineField({
      name: 'class',
      title: 'Class',
      description:
        'Specifies one or more class names for the element (space-separated).',
      type: 'string',
    }),
    defineField({
      name: 'style',
      title: 'Style',
      description: 'Specifies CSS styling declarations for the element.',
      type: 'string',
    }),
    defineField({
      name: 'onload',
      title: 'On Load',
      description: 'Script to be run when the document is finished loading.',
      type: 'string',
    }),
    defineField({
      name: 'onunload',
      title: 'On Unload',
      description:
        'Script to be run when the document is about to be unloaded (closed).',
      type: 'string',
    }),
  ],
})
