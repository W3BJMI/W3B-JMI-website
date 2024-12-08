import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Team",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Team Name",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "head",
      title: "Team Head",
      type: "reference",
      to: [{ type: "person" }],
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "reference", to: { type: "person" } }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});

