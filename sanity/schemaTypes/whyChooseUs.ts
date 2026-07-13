// sanity/schemaTypes/whyChooseUs.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'videoUrl', title: 'YouTube Video URL', type: 'url' }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'text' },
          { name: 'icon', type: 'string', description: 'Lucide icon name (e.g., laptop, ruler)' }
        ]
      }]
    })
  ]
});