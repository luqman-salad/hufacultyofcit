import { defineType, defineField } from "sanity";
import { FaUsers } from "react-icons/fa6";

export default defineType({
  name: "staffPage",
  title: "Academic Staff Directory",
  type: "document",
  icon: FaUsers,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Unique Profile Slug",
      type: "slug",
      description: "Generates the path link for the profile (e.g., dr-ahmed-hassan)",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Academic / Faculty Role Title",
      type: "string",
      initialValue: "Senior Lecturer",
    }),
    defineField({
      name: "specialization",
      title: "Core Area of Specialization",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Portrait Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "Official Email Address",
      type: "string",
    }),
    defineField({
      name: "office",
      title: "Office Location Coordinates",
      type: "string",
      initialValue: "Main Campus, Block C",
    }),
    defineField({
      name: "hours",
      title: "Consultation / Office Hours",
      type: "string",
      initialValue: "Mon - Wed: 09:00 AM - 01:00 PM",
    }),
    defineField({
      name: "bio",
      title: "Executive Summary Biography",
      type: "text",
      rows: 5,
    }),
    
    // Core Statistics Counter Profiles
    defineField({
      name: "yearsExp",
      title: "Years of Academic Experience",
      type: "string",
      initialValue: "5+",
    }),
    defineField({
      name: "publicationsCount",
      title: "Total Publications Count",
      type: "string",
      initialValue: "0",
    }),
    defineField({
      name: "projectsCount",
      title: "Total Research Projects Supervised",
      type: "string",
      initialValue: "0",
    }),

    // Multi-Item Information Arrays
    defineField({
      name: "education",
      title: "Academic Credentials Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "year", title: "Year Conferred", type: "string" },
            { name: "degree", title: "Degree Title (e.g., Ph.D. in CS)", type: "string" },
            { name: "school", title: "Conferring Institution", type: "string" },
          ]
        }
      ]
    }),
    defineField({
      name: "interests",
      title: "Research Domains / Key Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "taughtCourses",
      title: "Active Teaching Portfolio",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publications",
      title: "Selected Publications Ledger",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Paper Title", type: "string" },
            { name: "journal", title: "Journal / Publisher Frame", type: "string" },
            { name: "year", title: "Publication Year", type: "string" },
          ]
        }
      ]
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Profile Link",
      type: "url",
    }),
    defineField({
      name: "scholarUrl",
      title: "Google Scholar Profile Link",
      type: "url",
    })
  ]
});