import { defineType, defineField } from "sanity";

export default defineType({
  name: "researchPage",
  title: "Research Page Content",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Faculty Research & Artifacts",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "strategyTitle",
      title: "Strategy Section Title",
      type: "string",
      initialValue: "Research Strategy & Objectives",
    }),
    defineField({
      name: "strategyDescription",
      title: "Strategy Description",
      type: "text",
    }),
    defineField({
      name: "activeParadigmsCount",
      title: "Active Paradigms Count",
      type: "string",
      initialValue: "09",
    }),
    defineField({
      name: "publishedPapersCount",
      title: "Published Papers Count",
      type: "string",
      initialValue: "100+",
    }),
    defineField({
      name: "researchAreas",
      title: "Primary Domains of Inquiry",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "Display Number (e.g., 01)", type: "string" },
            { name: "title", title: "Domain Title", type: "string" },
            { 
              name: "iconKey", 
              title: "Icon Selection", 
              type: "string",
              description: "Type one of these keys exactly: brain, shield, database, code",
              options: {
                list: [
                  { title: "Brain (AI)", value: "brain" },
                  { title: "Shield (Security)", value: "shield" },
                  { title: "Database", value: "database" },
                  { title: "Code (Software)", value: "code" }
                ]
              }
            },
            { name: "desc", title: "Description", type: "text" },
          ]
        }
      ]
    }),
    defineField({
      name: "pastTopics",
      title: "Completed Thesis Registries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "Thesis Registry ID (e.g., TH001)", type: "string" },
            { name: "title", title: "Thesis Project Title", type: "string" },
            { name: "context", title: "Context / Sub-Domain Label", type: "string" },
          ]
        }
      ]
    })
  ]
});