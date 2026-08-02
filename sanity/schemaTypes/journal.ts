export default {
  name: 'journal',
  title: 'Journals & Publications',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      initialValue: 'Faculty Research Journals & Publications',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'journals',
      title: 'Published Journals',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'journalItem',
          title: 'Journal Item',
          fields: [
            {
              name: 'id',
              title: 'Journal ID / Identifier',
              type: 'string',
              description: 'e.g. JRN-2026-001',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Journal Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'authors',
              title: 'Authors',
              type: 'string',
              description: 'Comma-separated names of faculty members or researchers',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'category',
              title: 'Research Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Artificial Intelligence', value: 'Artificial Intelligence' },
                  { title: 'Cybersecurity', value: 'Cybersecurity' },
                  { title: 'Software Engineering', value: 'Software Engineering' },
                  { title: 'Data Science', value: 'Data Science' },
                  { title: 'Networking & Systems', value: 'Networking & Systems' },
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'abstract',
              title: 'Abstract',
              type: 'text',
              rows: 4,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'date',
              title: 'Defense / Publication Date',
              type: 'date',
              options: {
                dateFormat: 'YYYY-MM-DD',
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'doi',
              title: 'DOI (Optional)',
              type: 'string',
              description: 'Digital Object Identifier e.g. 10.1016/j.jocs.2026.05.012',
            },
            {
              name: 'pdfFile',
              title: 'Upload PDF Document',
              type: 'file',
              options: {
                accept: '.pdf',
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'authors',
              category: 'category',
            },
            prepare(selection: { title?: string; subtitle?: string; category?: string }) {
              const { title, subtitle, category } = selection;
              return {
                title: title,
                subtitle: `${subtitle} (${category || 'General'})`,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare(selection: { title?: string }) {
      const { title } = selection;
      return {
        title: title || 'Journals & Publications Page',
      };
    },
  },
};