import { defineType, defineField } from "sanity";
import { FaEnvelopeOpen } from "react-icons/fa6";

export default defineType({
  name: "contactPage",
  title: "Contact Page Workspace",
  type: "document",
  icon: FaEnvelopeOpen,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Contact Us",
      
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "Official Faculty Email Address",
      type: "string",
      initialValue: "info@faculty.edu.so",
    }),
    defineField({
      name: "phone",
      title: "Primary Contact Phone Line",
      type: "string",
      initialValue: "+252 61 XXX XXXX",
    }),
    defineField({
      name: "location",
      title: "Physical Office Location Coordinates",
      type: "string",
      initialValue: "Mogadishu, Banadir, Somalia",
    }),
    defineField({
      name: "hours",
      title: "Active Institutional Working Hours",
      type: "string",
      initialValue: "Sat - Thu: 8:00 AM - 4:00 PM",
    }),
    defineField({
      name: "connectText",
      title: "Social Section Description Text",
      type: "text",
      rows: 3,
      initialValue: "Stay updated with the latest research milestones, student achievements, and faculty events through our social media channels.",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook Channel Link",
      type: "url",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter / X Profile Link",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Institution Link",
      type: "url",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Maps Redirect Share Link URL",
      type: "url",
      description: "Paste the raw browser location share link from Google Maps here.",
      initialValue: "https://maps.google.com",
    })
  ]
});