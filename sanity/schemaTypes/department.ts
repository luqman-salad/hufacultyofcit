import { defineField, defineType } from 'sanity';
import { FaLaptopCode } from 'react-icons/fa';

export default defineType({
  name: 'department',
  title: 'Academic Departments',
  type: 'document',
  icon: FaLaptopCode,
  fields: [
    defineField({
      name: 'title',
      title: 'Department Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug Route Key',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Program Overview Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Page Background Banner',
      type: 'image',
      options: { hotspot: true },
    }),

    // Program Stats Core
    defineField({
      name: 'duration',
      title: 'Program Duration Text',
      type: 'string',
      initialValue: '4 Years (8 Semesters)',
    }),
    defineField({
      name: 'level',
      title: 'Degree Program Level',
      type: 'string',
      initialValue: 'Undergraduate (Bachelor)',
    }),
    defineField({
      name: 'semesterFees',
      title: 'Semester Tuition Fee',
      type: 'string',
      initialValue: '$390',
    }),

    // Requirements & Learning Outcomes
    defineField({
      name: 'requirements',
      title: 'Entry & Eligibility Criteria',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'Intended Learning Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // Curriculum: Linked to 'course' documents
    defineField({
      name: 'curriculum',
      title: 'Academic Matrix Curriculum',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Semester Block',
          fields: [
            { name: 'semesterNumber', 
              title: 'Semester Number', 
              type: 'number',
              validation: (Rule) => Rule.required().min(1) 
            },
            {
              name: 'courses',
              title: 'Courses in this Semester',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'course' }] }], 
            },
          ],
        },
      ],
    }),

    // Faculty: Linked to 'facultyAdmins' documents
    defineField({
      name: 'faculty',
      title: 'Department Faculty Leadership',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'facultyAdmins' }] }],
    }),

    // Labs: Linked to 'lab' documents
    defineField({
      name: 'labs',
      title: 'Department Infrastructure Labs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'lab' }] }],
    }),

    defineField({
      name: 'careerPaths',
      title: 'Potential Career Paths',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});