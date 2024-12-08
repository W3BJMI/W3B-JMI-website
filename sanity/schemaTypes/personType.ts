import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";



export const personType = defineType({
  name: "person",
  title: "Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Member Name",
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role",
      options: {
        list: [
          { title: "Member", value: "member" },
          { title: "Head", value: "head" },
          { title: "President", value: "president" },
          { title: "Vice President", value: "vice_president" },
        ],
      },
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: [{ type: "team" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
