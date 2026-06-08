import { defineField, defineType } from 'sanity'
import { FaCompass } from 'react-icons/fa6'

export default defineType({
  name: 'visionMissionPage',
  title: 'Vision & Mission Page',
  type: 'document',
  icon: FaCompass,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      initialValue: 'Vision & Mission',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'visionText',
      title: 'Our Vision Statement',
      type: 'text',
      rows: 4,
      initialValue: "To be a faculty of choice in the Somalia region and beyond, widely recognized for both its high-quality education programs and innovative research programs.",
    }),
    defineField({
      name: 'missionText',
      title: 'Our Mission Statement',
      type: 'text',
      rows: 4,
      initialValue: "To provide a quality education for our students, partner with the professional communities of engineering and computer science, and provide a strong connection between students' education and professional practice.",
    }),
    defineField({
      name: 'valuesEyebrow',
      title: 'Core Values Section Eyebrow',
      type: 'string',
      initialValue: 'Why Choose Us',
    }),
    defineField({
      name: 'valuesHeading',
      title: 'Core Values Section Heading',
      type: 'string',
      initialValue: 'Our Core Values',
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values List',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Core Value Item',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string' },
            { name: 'description', title: 'Value Description', type: 'text', rows: 3 },
            {
              name: 'iconKey',
              title: 'Icon Type',
              type: 'string',
              description: 'Use key options: graduation, lightbulb, shield, users',
              options: {
                list: [
                  { title: 'Academic Excellence (Graduation Cap)', value: 'graduation' },
                  { title: 'Innovation (Lightbulb)', value: 'lightbulb' },
                  { title: 'Integrity (Shield)', value: 'shield' },
                  { title: 'Collaboration (Users Group)', value: 'users' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
})