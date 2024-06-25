import { defineField, defineType } from 'sanity'

export const viewport = defineType({
  name: 'viewport',
  title: 'Viewport Meta',
  description: 'Schema type for defining viewport meta tag settings.',
  type: 'object',
  fields: [
    defineField({
      name: 'width',
      title: 'Viewport Width',
      type: 'string',
      description:
        'Defines the pixel width of the viewport that you want the web site to be rendered at.',
    }),
    defineField({
      name: 'height',
      title: 'Viewport Height',
      type: 'string',
      description:
        'Defines the height of the viewport. Not used by any browser.',
    }),
    defineField({
      name: 'initialScale',
      title: 'Initial Scale',
      type: 'string',
      description:
        'Defines the ratio between the device width and the viewport size.',
    }),
    defineField({
      name: 'maximumScale',
      title: 'Maximum Scale',
      type: 'string',
      description: 'Defines the maximum amount to zoom in.',
    }),
    defineField({
      name: 'minimumScale',
      title: 'Minimum Scale',
      type: 'string',
      description: 'Defines the minimum zoom level.',
    }),
    defineField({
      name: 'userScalable',
      title: 'User Scalable',
      type: 'string',
      description: 'Controls whether the user is able to zoom in the webpage.',
    }),
    defineField({
      name: 'viewportFit',
      title: 'Viewport Fit',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Contain', value: 'contain' },
          { title: 'Cover', value: 'cover' },
        ],
      },
      description: 'Controls how the webpage is rendered in the viewport.',
    }),
  ],
})
