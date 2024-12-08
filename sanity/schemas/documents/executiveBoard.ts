import { defineField, defineType } from 'sanity';

export const executiveBoardSchema = defineType({
  name: 'executiveBoard',
  title: 'Executive Board',
  type: 'document',
  fields: [
    defineField({
      name: 'president',
      title: 'President',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vicePresident',
      title: 'Vice President',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'otherBoardMembers',
      title: 'Other Board Members',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    }),
  ],
});
