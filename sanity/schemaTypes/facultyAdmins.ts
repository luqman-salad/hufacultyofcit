import { defineField, defineType } from 'sanity';
import { FaUserTie } from 'react-icons/fa6';

export default defineType({
  name: 'facultyAdmins',
  title: 'Administration Member',
  type: 'document',
  icon: FaUserTie,
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'office', title: 'Office', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ 
      name: 'social', 
      title: 'Social Links', 
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ]
    }),
  ]
});