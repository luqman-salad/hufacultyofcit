export default {
  name: 'statsSection',
  title: 'Statistics Section',
  type: 'document',
  fields: [
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value (e.g. 1,200+)', type: 'string' },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Use the name from lucide-react (e.g., Users, BookOpen, Briefcase)',
            },
          ],
        },
      ],
    },
  ],
};