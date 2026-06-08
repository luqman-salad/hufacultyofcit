import { defineField, defineType } from 'sanity'
import { FaLaptopCode } from 'react-icons/fa'

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
      description: 'Used for generating dynamic navigation URLs (e.g., bsc-computer-applications)',
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
      title: 'Entry & Eligibility Criteria Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'Intended Program Learning Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // Interactive Multi-Semester Array Curriculum Builder
    defineField({
      name: 'curriculum',
      title: 'Academic Matrix Curriculum',
      type: 'array',
      description: 'Add and organize individual modules directly mapped under explicit semester blocks.',
      of: [
        {
          type: 'object',
          title: 'Semester Curriculum Frame',
          fields: [
            { name: 'semesterNumber', title: 'Semester Rank Number (e.g., 1, 2, 3)', type: 'number' },
            {
              name: 'courses',
              title: 'Semester Course Syllabus List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'Course Module Metadata',
                  fields: [
                    { name: 'title', title: 'Course/Module Title', type: 'string' },
                    { name: 'description', title: 'Syllabus Core Description Summary', type: 'text', rows: 4 },
                    { name: 'type', title: 'Module Classification (e.g., Core Module, Humanities)', type: 'string', initialValue: 'Core Module' },
                    { name: 'credits', title: 'Credit Weight (e.g., 4 Credit Hours)', type: 'string' },
                    { name: 'assessment', title: 'Assessment Rule Style (e.g., Exam + Project)', type: 'string' },
                  ]
                }
              ]
            }
          ]
        }
      ]
    }),

    // Team Mentorship & Lab Allocations arrays
    defineField({
      name: 'faculty',
      title: 'Assigned Department Faculty Leadership',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Professor Name', type: 'string' },
            { name: 'role', title: 'Academic Title Assignment', type: 'string' },
            { name: 'exp', title: 'Credentials Degree Summary', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'labs',
      title: 'Allocated Department Infrastructure Labs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Lab Name Facility', type: 'string' },
            { name: 'desc', title: 'Hardware Profile Description', type: 'text' },
            { name: 'room', title: 'Physical Block Room Coordinates', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'careerPaths',
      title: 'Potential Vocational Career Paths',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})