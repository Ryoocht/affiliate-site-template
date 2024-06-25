import { defineField, defineType } from 'sanity'

export const htmlAttrs = defineType({
  name: 'htmlAttrs',
  title: 'HTML Attributes',
  description: 'Represents standard HTML attributes applicable to elements.',
  type: 'object',
  fields: [
    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
      description:
        'Specifies one or more class names for the element (space-separated).',
    }),
  ],
})
