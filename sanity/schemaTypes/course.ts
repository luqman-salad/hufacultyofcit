import { defineField, defineType } from 'sanity';
import { FaBookOpen } from 'react-icons/fa6';

export default defineType({
  name: 'course',
  title: 'Courses',
  type: 'document',
  icon: FaBookOpen,
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courseCode',
      title: 'Course Code (e.g., CS101)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Syllabus Description',
      type: 'text',
      rows: 4,
      description: 'A brief summary of what students will learn in this course.',
    }),
    defineField({
      name: 'type',
      title: 'Module Classification',
      type: 'string',
      options: {
        list: [
          { title: 'Core Module', value: 'core' },
          { title: 'Elective', value: 'elective' },
          { title: 'Humanities', value: 'humanities' },
          { title: 'General Education', value: 'general' },
        ],
      },
      initialValue: 'core',
    }),
    defineField({
      name: 'credits',
      title: 'Credit Weight',
      type: 'number',
      description: 'Number of credit hours (e.g., 3, 4)',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'assessment',
      title: 'Assessment Style',
      type: 'string',
      placeholder: 'e.g., Exam + Practical Project',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'courseCode',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle ? `[${subtitle}]` : '',
      };
    },
  },
});