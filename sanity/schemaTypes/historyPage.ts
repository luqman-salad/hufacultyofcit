import { defineField, defineType } from 'sanity'
import { FaBookOpen } from 'react-icons/fa6'

export default defineType({
  name: 'historyPage',
  title: 'Faculty History Page',
  type: 'document',
  icon: FaBookOpen,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      initialValue: 'Faculty History',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introEyebrow',
      title: 'Introduction Eyebrow',
      type: 'string',
      initialValue: 'Our Journey',
    }),
    defineField({
      name: 'introHeading',
      title: 'Introduction Heading',
      type: 'string',
      initialValue: 'A Decade of Academic Excellence & Digital Transformation',
    }),
    defineField({
      name: 'introDescription',
      title: 'Introduction Description Text',
      type: 'text',
      rows: 4,
      initialValue: 'Since its inception, the Faculty of Computer & IT has been at the forefront of the technological renaissance in the region. We have evolved from a small department into a comprehensive center for innovation, training the next generation of software engineers and tech leaders.',
    }),
    defineField({
      name: 'timelineEvents',
      title: 'Timeline Events (Ordered)',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Timeline Milestone',
          fields: [
            { name: 'year', title: 'Year Label', type: 'string' },
            { name: 'title', title: 'Milestone Title', type: 'string' },
            { name: 'desc', title: 'Detailed Description', type: 'text', rows: 3 },
            {
              name: 'iconKey',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Flag (Founding)', value: 'flag' },
                  { title: 'Microchip (Digital/Tech)', value: 'microchip' },
                  { title: 'Columns/University (Milestone)', value: 'building' },
                  { title: 'Users Group (Expansion)', value: 'users' },
                  { title: 'Award (Leadership)', value: 'award' },
                ],
              },
            },
            {
              name: 'accentColor',
              title: 'Accent Border Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Red (Primary Theme)', value: 'border-[#E31E24]' },
                  { title: 'Green (Secondary Theme)', value: 'border-[#4c9c6f]' },
                  { title: 'Gold (Accent Gold)', value: 'border-[#BF833D]' },
                  { title: 'Navy (Dark Base)', value: 'border-[#1a2b4a]' },
                ],
              },
              initialValue: 'border-[#E31E24]',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'quoteText',
      title: 'Bottom Callout Quote',
      type: 'text',
      rows: 3,
      initialValue: '"Our strategy is characterized by ambition and creativity, building technology for the underprivileged and the needy."',
    }),
    defineField({
      name: 'quoteSubtext',
      title: 'Bottom Quote Subtext',
      type: 'string',
      initialValue: 'The Founding Vision of the Faculty',
    }),
  ],
})