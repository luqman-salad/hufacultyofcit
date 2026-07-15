import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import DepartmentClientLayout from "./DepartmentClientLayout";

interface Props {
  // params must be treated as a Promise in Next.js 15+ / 16
  params: Promise<{
    slug: string;
  }>;
}

async function getDepartmentData(slug: string) {
  const query = groq`*[_type == "department" && slug.current == $slug][0]{
    title,
    description,
    duration,
    level,
    semesterFees,
    requirements,
    learningOutcomes,
    "backgroundImage": heroImage.asset->url,
    
    // Dereference courses
    curriculum[]{
      semesterNumber,
      courses[]->{
        title,
        description,
        type,
        credits,
        assessment,
        courseCode
      }
    },
    
    // Dereference faculty (using your 'facultyAdmins' schema)
    faculty[]->{
      name,
      role,
      bio,
      image
    },
    
    // Dereference labs
    labs[]->{
      name,
      description,
      room,
      capacity
    },
    
    careerPaths
  }`;

  return await client.fetch(query, { slug });
}

export default async function DepartmentPage({ params }: Props) {
  // 1. Await the params Promise before using its keys
  const { slug } = await params;

  // 2. Pass the resolved string into the fetcher
  const data = await getDepartmentData(slug);

  if (!data) {
    notFound();
  }

  const resolvedHeroImage = data.backgroundImage || "/computerScienceimg.png";

  return (
    <DepartmentClientLayout 
      departmentData={data} 
      resolvedHeroImage={resolvedHeroImage} 
    />
  );
}