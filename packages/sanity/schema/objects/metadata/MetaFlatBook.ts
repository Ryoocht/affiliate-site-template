import { defineField, defineType } from 'sanity'

export const metaFlatBook = defineType({
  name: 'metaFlatBook',
  title: 'Meta Flat Book',
  description: 'Metadata specific to books for SEO purposes.',
  type: 'object',
  fields: [
    defineField({
      name: 'bookAuthor',
      title: 'Book Author',
      description:
        "Who wrote this book.\
      @example ['https://example.com/some.html', 'https://example.com/one.html']",
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({
      name: 'bookIsbn',
      title: 'Book ISBN',
      description:
        "The ISBN.\
      @example '978-3-16-148410-0'",
      type: 'string',
    }),
    defineField({
      name: 'bookReleaseDate',
      title: 'Book Release Date',
      description:
        "The date the book was released.\
      @example '1970-01-01T00:00:00.000Z'",
      type: 'datetime',
    }),
    defineField({
      name: 'bookTag',
      title: 'Book Tag',
      description:
        "Tag words associated with this book.\
      @example ['Apple', 'Steve Jobs']",
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
