import { defineField, defineType } from 'sanity'
import { StackCompactIcon } from '@sanity/icons'

export const seoMetaInput = defineType({
  name: 'seoMetaInput',
  title: 'Seo Meta Input',
  description: '',
  type: 'object',
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:
        "The `<title>` HTML element defines the document's title that is shown in a browser's title bar or a page's tab.\
      It only contains text; tags within the element are ignored.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title",
      type: 'string',
    }),
    defineField({
      name: 'titleTemplate',
      title: 'Title Template',
      description: 'Generate the title from a template.',
      type: 'string',
    }),
    /* This field need to be flattened */
    defineField({
      name: 'metaFlat',
      title: 'Meta Flat',
      description: 'Meta information structured as per MetaFlat schema.',
      type: 'metaFlat',
    }),
  ],
})
