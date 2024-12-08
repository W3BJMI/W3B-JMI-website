import { defineField, defineType } from "sanity";
import { HeartFilledIcon } from "@sanity/icons";

export const executiveBoardType = defineType({
  name: "executiveBoard",
  title: "Executive Board",
  type: "document",
  icon: HeartFilledIcon,
  fields: [
    defineField({
      name: "president",
      type: "reference",
      title: "President",
      to: [{ type: "person" }],
    }),
    defineField({
      name: "vicePresident",
      type: "reference",
      title: "Vice President",
      to: [{ type: "person" }],
    }),
    defineField({
      name: "otherBoardMembers",
      type: "array",
      title: "Other Board Members",
      of: [{ type: "reference", to: { type: "person" } }],
    }),
  ],
  preview: {
    select: {
      title: "president.name",
      subtitle: "vicePresident.name",
    },
  },
});
