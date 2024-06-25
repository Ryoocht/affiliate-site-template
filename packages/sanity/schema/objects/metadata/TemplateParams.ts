import { defineType } from 'sanity'

export const templateParams = defineType({
  name: 'templateParams',
  title: 'Template Params',
  description: 'Parameters for the title template',
  type: 'object',
  fields: [
    {
      name: 'separator',
      title: 'Separator',
      type: 'string',
      description: 'Separator used in the title template',
      options: {
        list: ['|', '-', '·', 'Custom'],
      },
    },
    {
      name: 'params',
      title: 'Params',
      type: 'array',
      description: 'Additional parameters for the template',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
              description: 'Parameter key',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Parameter value',
            },
          ],
        },
      ],
    },
  ],
})
