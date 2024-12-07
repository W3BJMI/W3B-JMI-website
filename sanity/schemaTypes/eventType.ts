import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Event Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "date",
      type: "datetime",
      title: "Event Date",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Event Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Event Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
    }),
    defineField({
      name: "registrationLink",
      type: "url",
      title: "Registration Link",
    }),
    defineField({
      name: "upcoming",
      type: "boolean",
      title: "Is Upcoming?",
      description: "Enable this to mark the event as upcoming.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      location: "location",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, date, location } = selection;
      const subtitleParts = [
        location && `at ${location}`,
        date && `on ${new Date(date).toLocaleDateString()}`,
      ].filter(Boolean);

      return {
        title,
        subtitle: subtitleParts.join(" | "),
        media: selection.media,
      };
    },
  },
});
