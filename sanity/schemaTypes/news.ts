import { defineField, defineType } from 'sanity';
import { FaRegNewspaper } from 'react-icons/fa6';

export default defineType({
  name: 'newsItem',
  title: 'Academic News',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'author', title: 'Author', type: 'string', initialValue: 'Faculty Admin' }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string', 
      options: { list: ['Investing', 'Academic', 'Campus Life', 'Research', 'Events'] } 
    }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Short Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'content', title: 'Full Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  // Optional: Preview settings for a better Studio experience
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'image'
    }
  }
});