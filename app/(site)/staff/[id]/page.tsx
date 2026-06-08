import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import StaffDetailClientLayout from "./StaffDetailClientLayout";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getStaffMemberData(slug: string) {
  const query = groq`*[_type == "staffPage" && slug.current == $slug][0]{
    name,
    role,
    specialization,
    "image": image.asset->url,
    email,
    office,
    hours,
    bio,
    yearsExp,
    publicationsCount,
    projectsCount,
    education[]{
      year,
      degree,
      school
    },
    interests,
    taughtCourses,
    publications[]{
      title,
      journal,
      year
    },
    linkedinUrl,
    scholarUrl
  }`;
  return await client.fetch(query, { slug });
}

export default async function StaffDetailPage({ params }: Props) {
  const { id } = await params;
  const staffData = await getStaffMemberData(id);

  if (!staffData) {
    notFound();
  }

  return <StaffDetailClientLayout staff={staffData} />;
}