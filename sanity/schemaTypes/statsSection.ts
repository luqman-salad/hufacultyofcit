// sanity/schemaTypes/statsSection.ts
import { defineField, defineType } from 'sanity';
import { FaChartLine } from 'react-icons/fa6';

export default defineType({
  name: 'statsSection',
  title: 'Statistics Section',
  type: 'document',
  icon: FaChartLine,
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Our Impact' }),
    defineField({
      name: 'stats',
      title: 'Statistics List',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
          { 
            name: 'icon', 
            title: 'Icon Name', 
            type: 'string', 
            description: 'Name of Lucide icon (e.g., Users, Globe, Briefcase)' 
          }
        ]
      }]
    })
  ]
});