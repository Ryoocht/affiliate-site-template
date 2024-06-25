import { defineField, defineType } from 'sanity'

export const metaFlatArticle = defineType({
  name: 'metaFlatArticle',
  title: 'Meta Flat Article',
  description: 'Metadata specific to articles for SEO purposes.',
  type: 'object',
  fields: [
    defineField({
      name: 'articleAuthor',
      title: 'Article Author',
      description:
        "Writers of the article.\
      @example ['https://example.com/some.html', 'https://example.com/one.html']",
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({
      name: 'articleExpirationTime',
      title: 'Article Expiration Time',
      description:
        "When the article is out of date after.\
      @example '1970-01-01T00:00:00.000Z'",
      type: 'datetime',
    }),
    defineField({
      name: 'articleModifiedTime',
      title: 'Article Modified Time',
      description:
        "When the article was last changed.\
      @example '1970-01-01T00:00:00.000Z'",
      type: 'datetime',
    }),
    defineField({
      name: 'articlePublishedTime',
      title: 'Article Published Time',
      description:
        "When the article was first published.\
      @example '1970-01-01T00:00:00.000Z'",
      type: 'datetime',
    }),
    defineField({
      name: 'articleSection',
      title: 'Article Section',
      description:
        "A high-level section name.\
      @example 'Technology'",
      type: 'string',
    }),
    defineField({
      name: 'articleTag',
      title: 'Article Tag',
      type: 'array',
      description:
        "Tag words associated with this article.\
      @example ['Apple', 'Steve Jobs]",
      of: [{ type: 'string' }],
    }),
  ],
})
