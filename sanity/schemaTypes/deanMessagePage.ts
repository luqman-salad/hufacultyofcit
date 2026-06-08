import { defineField, defineType } from 'sanity'
import { FaUserTie } from 'react-icons/fa6'

export default defineType({
  name: 'deanMessagePage',
  title: "Dean's Message Page",
  type: 'document',
  icon: FaUserTie,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      initialValue: "Dean's Message",
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'deanName',
      title: "Dean's Full Name",
      type: 'string',
      initialValue: 'Engr. Abdulrahman Ali Haji',
    }),
    defineField({
      name: 'deanTitle',
      title: "Dean's Professional Title",
      type: 'string',
      initialValue: 'Dean, Faculty of Computer Science & IT (CIT)',
    }),
    defineField({
      name: 'deanImage',
      title: "Dean's Portrait Image",
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter/X Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email Address',
      type: 'string',
      initialValue: 'cit@just.edu.so',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
      initialValue: '+252 61 XXX XXX',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow Text',
      type: 'string',
      initialValue: 'Welcome to CIT',
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading Text',
      type: 'string',
      initialValue: 'Message From The Dean',
    }),
    defineField({
      name: 'messageParagraphs',
      title: 'Message Content Body',
      description: 'Enter each paragraph separately to keep your clean layout layout spacing.',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
  ],
})