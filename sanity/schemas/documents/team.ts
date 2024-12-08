import { defineField, defineType } from 'sanity';

export const teamSchema = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Team Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'head',
      title: 'Team Head',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    }),
  ],
});
