import { Hero } from "@/components/layout/Hero";
import { Pillars } from "@/components/layout/Pillars";
import { DeansWelcome } from "@/components/layout/DeansWelcome";
import { Departments } from "@/components/layout/Departments";
import { Stats } from "@/components/layout/Stats.tsx";
import {AcademicNews} from "@/components/layout/AcademicNews";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import FacultyAdministration from "@/components/layout/FacultyAdministration.tsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";


export default async function Home() {
  const query = groq`*[_type == "whyChooseUs"][0]{
    heading,
    features,
    videoUrl,
    "image": image.asset->url
  }`;
  
  const data = await client.fetch(query);

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Pillars />
      <DeansWelcome />
      <Departments />
      
      {/* Only render if data exists to prevent runtime errors */}
      {data && <WhyChooseUs data={data} />}
      
      <Stats />
      <AcademicNews />
      <FacultyAdministration />
    </div>
  );
}