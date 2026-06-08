export default {
  name: 'facilitiesPage',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Banner Title',
      type: 'string',
      initialValue: 'Our Facilities'
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'eyebrow',
      title: 'Section Eyebrow Label',
      type: 'string',
      initialValue: 'World-Class Infrastructure'
    },
    {
      name: 'mainHeading',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'Environment Built for Innovation & Learning'
    },
    {
      name: 'introduction',
      title: 'Introduction Paragraph',
      type: 'text'
    },
    {
      name: 'mainFacilities',
      title: 'Primary Facilities Matrix',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Facility Title', type: 'string' },
          { 
            name: 'iconKey', 
            title: 'Icon Type Identifier', 
            type: 'string',
            description: 'Choose from: laptop-code, chalkboard-user, book-bookmark, server, wifi, microchip'
          },
          { name: 'description', title: 'Detailed Description', type: 'text' },
          { name: 'image', title: 'Facility Photo Asset', type: 'image', options: { hotspot: true } },
          { name: 'availability', title: 'Availability Label', type: 'string', initialValue: 'Available 8:00 AM - 8:00 PM' }
        ]
      }]
    },
    {
      name: 'infrastructureHeading',
      title: 'Support Section Heading',
      type: 'string',
      initialValue: 'Technology & Support Services'
    },
    {
      name: 'infrastructureDesc',
      title: 'Support Section Description',
      type: 'text'
    },
    {
      name: 'features',
      title: 'Supplemental Features Ledger',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Feature Name', type: 'string' },
          { name: 'iconKey', title: 'Icon Identifier Key', type: 'string' }
        ]
      }]
    }
  ]
}