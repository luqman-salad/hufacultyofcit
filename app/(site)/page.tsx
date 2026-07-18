import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Hero } from "@/components/layout/Hero";
import { Pillars } from "@/components/layout/Pillars";
import { DeansWelcome } from "@/components/layout/DeansWelcome";
import { Departments } from "@/components/layout/Departments";
import { Stats } from "@/components/layout/Stats";
import { AcademicNews } from "@/components/layout/AcademicNews";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import FacultyAdministration from "@/components/layout/FacultyAdministration";

export default async function Home() {
  const query = groq`{
    "whyChooseUs": *[_type == "whyChooseUs"][0]{ heading, features, videoUrl, "image": image.asset->url },
    "departments": *[_type == "department" && defined(slug.current)]{ title, description, slug, "heroImage": heroImage.asset->url },
    "dean": *[_type == "deanMessagePage"][0]{ deanName, deanTitle, "deanImage": deanImage.asset._ref, messageParagraphs },
    "stats": *[_type == "statsSection"][0],
    "news": *[_type == "newsItem"] | order(publishedAt desc)[0...3]{ title, image, excerpt, "slug": slug.current },
    "admin": *[_type == "facultyAdmins"]{ name, role, office, email, image, social }
  }`;

  const data = await client.fetch(query);

  // LOGGING THE DATA
  console.log("--- DEBUGGING ADMIN DATA ---");
  console.log("Total members found:", data.admin ? data.admin.length : "undefined");
  console.log(JSON.stringify(data.admin, null, 2));
  console.log("----------------------------");

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Pillars />
      <DeansWelcome data={data.dean} />
      <Departments depts={data.departments} />
      <WhyChooseUs data={data.whyChooseUs} />
      <Stats data={data.stats} />
      <AcademicNews newsItems={data.news} />
      <FacultyAdministration members={data.admin} />
    </div>
  );
}