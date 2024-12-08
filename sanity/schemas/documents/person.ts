import { defineField, defineType } from 'sanity';

export const personSchema = defineType({
  name: 'person',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Member', value: 'member' },
          { title: 'Head', value: 'head' },
          { title: 'President', value: 'president' },
          { title: 'Vice President', value: 'vice_president' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{ type: 'team' }],
    }),
  ],
});
