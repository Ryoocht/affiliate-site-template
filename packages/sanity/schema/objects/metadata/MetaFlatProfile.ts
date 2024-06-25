import { defineField, defineType } from 'sanity'

export const metaFlatProfile = defineType({
  name: 'metaFlatProfile',
  title: 'Meta Flat Profile',
  description: 'Metadata specific to profiles for SEO purposes.',
  type: 'object',
  fields: [
    defineField({
      name: 'profileFirstName',
      title: 'First Name',
      description:
        'A name normally given to an individual by a parent or self-chosen.',
      type: 'string',
    }),
    defineField({
      name: 'profileGender',
      title: 'Gender',
      description: 'Their gender.',
      type: 'string',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'profileLastName',
      title: 'Last Name',
      description:
        'A name inherited from a family or marriage and by which the individual is commonly known.',
      type: 'string',
    }),
    defineField({
      name: 'profileUsername',
      title: 'Username',
      description: 'A short unique string to identify them.',
      type: 'string',
    }),
  ],
})
