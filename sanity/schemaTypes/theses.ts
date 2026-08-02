export default {
  name: 'theses',
  title: 'Theses & Dissertations',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      initialValue: 'Faculty Graduate Theses & Dissertations',
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
      name: 'theses',
      title: 'Published Theses',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'thesisItem',
          title: 'Thesis Item',
          fields: [
            {
              name: 'id',
              title: 'Thesis ID / Identifier',
              type: 'string',
              description: 'e.g. THS-2026-001',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Thesis Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'author',
              title: 'Author / Student Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'advisor',
              title: 'Advisor / Supervisor',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'degree',
              title: 'Degree Program',
              type: 'string',
              options: {
                list: [
                  { title: 'Master of Science (M.Sc.)', value: 'Master of Science' },
                  { title: 'Bachelor of Science (B.Sc.)', value: 'Bachelor of Science' },
                  { title: 'Doctor of Philosophy (Ph.D.)', value: 'Doctor of Philosophy' },
                ],
              },
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
                  { title: 'Other', value: 'Other' },
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'customCategory',
              title: 'Custom Research Category',
              type: 'string',
              description: 'Specify the research category if you selected "Other"',
              hidden: ({ parent }: { parent?: { category?: string } }) => parent?.category !== 'Other',
              validation: (Rule: any) =>
                Rule.custom((value: string, context: { parent?: { category?: string } }) => {
                  if (context.parent?.category === 'Other' && !value) {
                    return 'Please specify a custom category when "Other" is selected.';
                  }
                  return true;
                }),
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
              name: 'pdfFile',
              title: 'Upload Thesis PDF',
              type: 'file',
              options: {
                accept: '.pdf',
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              author: 'author',
              degree: 'degree',
            },
            prepare(selection: { title?: string; author?: string; degree?: string }) {
              const { title, author, degree } = selection;
              return {
                title: title,
                subtitle: `${author} — [${degree || 'Thesis'}]`,
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
        title: title || 'Theses & Dissertations Page',
      };
    },
  },
};