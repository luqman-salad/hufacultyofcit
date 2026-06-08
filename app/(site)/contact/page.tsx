import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ContactClientLayout from "./ContactClientLayout";

async function getContactPageData() {
  const query = groq`*[_type == "contactPage"][0]{
    heroTitle,
    "heroImage": heroImage.asset->url,
    email,
    phone,
    location,
    hours,
    connectText,
    facebookUrl,
    twitterUrl,
    linkedinUrl,
    googleMapsUrl
  }`;

  return await client.fetch(query);
}

export default async function ContactPage() {
  const data = await getContactPageData();

  // Unified fallback configuration matching your design system parameters exactly
  const fallbackContent = {
    heroTitle: data?.heroTitle || "Contact Us",
    resolvedHeroImage: data?.heroImage || "/researchimg.png",
    email: data?.email || "info@faculty.edu.so",
    phone: data?.phone || "+252 61 XXX XXXX",
    location: data?.location || "Mogadishu, Banadir, Somalia",
    hours: data?.hours || "Sat - Thu: 8:00 AM - 4:00 PM",
    connectText: data?.connectText || "Stay updated with the latest research milestones, student achievements, and faculty events through our social media channels.",
    facebookUrl: data?.facebookUrl || "#",
    twitterUrl: data?.twitterUrl || "#",
    linkedinUrl: data?.linkedinUrl || "#",
    googleMapsUrl: data?.googleMapsUrl || "https://maps.google.com"
  };

  return <ContactClientLayout content={fallbackContent} />;
}