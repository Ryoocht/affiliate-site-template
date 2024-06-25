import { defineField, defineType } from 'sanity'
import { StackCompactIcon } from '@sanity/icons'

export const headInput = defineType({
  name: 'headInput',
  title: 'Head Input',
  description:
    'Input fields for managing HTML head metadata such as title, meta tags, styles, and scripts.',
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
    defineField({
      name: 'templateParams',
      title: 'Title Params',
      description:
        'Variables used to substitute in the title and meta content.',
      type: 'templateParams',
    }),
    defineField({
      name: 'base',
      title: 'Base',
      description:
        'The `<base>` HTML element specifies the base URL to use for all relative URLs in a document.\
        There can be only one <base> element in a document.\
        @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base',
      type: 'base',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      description:
        'The `<link>` HTML element specifies relationships between the current document and an external resource.\
        This element is most commonly used to link to stylesheets, but is also used to establish site icons\
        (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.\
        @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as',
      type: 'array',
      of: [{ type: 'link' }],
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      description:
        'The `<meta>` element represents metadata that cannot be expressed in other HTML elements, like `<link>` or `<script>`.\
        @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
      type: 'array',
      of: [{ type: 'meta' }],
    }),
    defineField({
      name: 'style',
      title: 'Style',
      description:
        'The `<style>` HTML element contains style information for a document, or part of a document.\
      It contains CSS, which is applied to the contents of the document containing the `<style>` element.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style',
      type: 'array',
      of: [{ type: 'style' }],
    }),
    defineField({
      name: 'script',
      title: 'Script',
      description:
        'The `<script>` HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script',
      type: 'array',
      of: [{ type: 'script' }],
    }),
    defineField({
      name: 'noscript',
      title: 'NoScript',
      description:
        'The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported\
        or if scripting is currently turned off in the browser.\
        @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript',
      type: 'array',
      of: [{ type: 'noscript' }],
    }),
    defineField({
      name: 'htmlAttrs',
      title: 'HtmlAttrs',
      description:
        'Attributes for the `<html>` HTML element.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html',
      type: 'htmlAttrs',
    }),
    defineField({
      name: 'bodyAttrs',
      title: 'BodyAttrs',
      description:
        'Attributes for the `<body>` HTML element.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body',
      type: 'bodyAttrs',
    }),
  ],
})
