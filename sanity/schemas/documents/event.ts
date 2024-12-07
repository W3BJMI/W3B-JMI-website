import { CalendarIcon } from "@sanity/icons";
import { format, parseISO } from "date-fns";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  icon: CalendarIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A slug is required for creating unique URLs for the event.",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description: "Provide the registration link or event details URL.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "upcoming",
      title: "Is this an upcoming event?",
      type: "boolean",
      description: "Toggle this to enable or disable the registration link.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      location: "location",
      media: "coverImage",
      upcoming: "upcoming",
    },
    prepare({ title, media, date, location, upcoming }) {
      const subtitles = [
        location && `at ${location}`,
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
        upcoming !== undefined ? (upcoming ? "Upcoming Event" : "Past Event") : "",
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(" | ") };
    },
  },
});
