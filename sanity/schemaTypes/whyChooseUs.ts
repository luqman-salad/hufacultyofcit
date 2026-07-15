import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us',
  type: 'document',
  fields: [
    defineField({ name: 'heading', type: 'string', title: 'Section Heading' }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'icon', type: 'string', description: 'Lucide icon name (e.g., Laptop)' }
        ]
      }]
    }),
    defineField({ name: 'videoUrl', type: 'url', title: 'YouTube Video URL' }),
    defineField({ name: 'image', type: 'image', title: 'Video Thumbnail' })
  ]
});