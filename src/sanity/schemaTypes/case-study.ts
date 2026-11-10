import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Hook title, e.g. “Seven tools. One interface.”",
      validation: (r) => r.required().max(60),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 40 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      validation: (r) => r.required().integer().min(1),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Shown on the homepage",
      initialValue: false,
    }),
    defineField({ name: "sector", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "meta",
      type: "string",
      description: "Mono metadata line: sector · format · duration",
      validation: (r) => r.required(),
    }),
    defineField({ name: "hook", type: "string", validation: (r) => r.required().max(140) }),
    defineField({ name: "summary", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "metrics",
      type: "array",
      description: "Public, rounded figures only",
      validation: (r) => r.max(4),
      of: [
        defineArrayMember({
          type: "object",
          name: "metric",
          fields: [
            defineField({ name: "value", type: "string", validation: (r) => r.required() }),
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "caseSection",
          fields: [
            defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
            defineField({ name: "body", type: "text", rows: 4, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
    }),
    defineField({ name: "outcome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "meta" } },
});
