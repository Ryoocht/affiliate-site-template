import { defineField, defineType } from 'sanity'
import { StackCompactIcon } from '@sanity/icons'

const tagPositionOptions = [
  { title: 'Head', value: 'head' },
  { title: 'Body Open', value: 'bodyOpen' },
  { title: 'Body Close', value: 'bodyClose' },
]

const tagPriorityOptions = [
  { title: 'Critical', value: 'critical' },
  { title: 'High', value: 'high' },
  { title: 'Low', value: 'low' },
  { title: 'Before', value: 'before' },
  { title: 'After', value: 'after' },
]

export const headOptions = defineType({
  name: 'headOptions',
  title: 'Head Options',
  description: 'Options for configuring the HTML head',
  type: 'object',
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: 'mode',
      title: 'Mode',
      description: 'The mode that the entry should be used in.',
      type: 'string',
      options: {
        list: [
          { title: 'Server', value: 'server' },
          { title: 'Client', value: 'client' },
        ],
      },
    }),
    defineField({
      name: 'transform',
      title: 'Transform Function',
      description:
        'JavaScript function to transform the input. Use with caution.',
      type: 'text',
    }),
    defineField({
      name: 'tagPosition',
      title: 'Tag Position',
      description:
        "Specify where to render the tag.\
      @default 'head'",
      type: 'string',
      options: {
        list: tagPositionOptions,
      },
    }),
    defineField({
      name: 'tagPriority',
      title: 'Tag Priority',
      description:
        "The priority for rendering the tag, without this all tags are rendered as they are registered\
        (besides some special tags).\
        The following special tags have default priorities:\
        -2 `<meta charset ...>`\
        -1 `<base>`\
        0 `<meta http-equiv='content-security-policy' ...>`\
        All other tags have a default priority of 10: `<meta>`, `<script>`, `<link>`, `<style>`, etc",
      type: 'string',
      options: {
        list: tagPriorityOptions,
      },
    }),
    defineField({
      name: 'processTemplateParams',
      title: 'Process Template Params',
      description: 'Whether to process template parameters.',
      type: 'boolean',
    }),
  ],
})
