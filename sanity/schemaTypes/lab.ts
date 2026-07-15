import { defineField, defineType } from 'sanity';
import { FaFlask } from 'react-icons/fa6';

export default defineType({
  name: 'lab',
  title: 'Laboratories',
  type: 'document',
  icon: FaFlask,
  fields: [
    defineField({
      name: 'name',
      title: 'Lab Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'room',
      title: 'Physical Block/Room',
      type: 'string',
      placeholder: 'e.g., Block A, Room 102',
    }),
    defineField({
      name: 'capacity',
      title: 'Seating Capacity',
      type: 'number',
      description: 'Number of student workstations available.',
    }),
    defineField({
      name: 'description',
      title: 'Hardware/Facility Profile',
      type: 'text',
      rows: 4,
      description: 'Describe the hardware, software, or specialized equipment available here.',
    }),
    defineField({
      name: 'image',
      title: 'Lab Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'room',
      media: 'image',
    },
  },
});