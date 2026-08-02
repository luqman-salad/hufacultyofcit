import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ResearchClientLayout from "./ResearchClientLayout";

async function getResearchPageData() {
  const query = groq`{
    "theses": *[_type == "theses"][0]{
      heroTitle,
      "heroImage": heroImage.asset->url,
      strategyTitle,
      strategyDescription,
      activeParadigmsCount,
      publishedPapersCount,
      researchAreas[]{
        id,
        title,
        iconKey,
        desc
      }
    },
    "thesesData": *[_type == "theses"][0]{
      heroTitle,
      "heroImage": heroImage.asset->url,
      theses[]{
        id,
        title,
        author,
        advisor,
        degree,
        category,
        customCategory,
        abstract,
        date,
        "pdfUrl": pdfFile.asset->url
      }
    }
  }`;

  return await client.fetch(query);
}

export default async function ResearchPage() {
  const result = await getResearchPageData();
  const pageData = result?.researchPage;
  const thesesDoc = result?.thesesData;

  // Map Sanity theses items or fall back to static pastTopics if empty
  const mappedTheses = thesesDoc?.theses?.length > 0
    ? thesesDoc.theses.map((t: any, index: number) => ({
        id: t.id || `TH00${index + 1}`,
        title: t.title,
        context: t.category === "Other" && t.customCategory ? t.customCategory : t.category,
        author: t.author,
        advisor: t.advisor,
        degree: t.degree,
        abstract: t.abstract,
        date: t.date,
        pdfUrl: t.pdfUrl,
      }))
    : [
        { id: "TH001", title: "Virtual Private Network for Local Bank Branches", context: "Network Security" },
        { id: "TH002", title: "Public District Registration System", context: "Distributed Systems" },
        { id: "TH003", title: "Driving License Management", context: "Database Systems" },
        { id: "TH004", title: "School Management System", context: "Application Architectures" },
        { id: "TH005", title: "Car Rental Management", context: "Information Systems" },
        { id: "TH006", title: "Online Traditional Herbal Management", context: "Knowledge Discovery" },
        { id: "TH007", title: "Online Examination System", context: "Web Engineering" },
      ];

  const fallbackData = {
    heroTitle: pageData?.heroTitle || thesesDoc?.heroTitle || "Faculty Research & Artifacts",
    resolvedHeroImage: pageData?.heroImage || thesesDoc?.heroImage || "/researchimg.png",
    strategyTitle: pageData?.strategyTitle || "Research Strategy & Objectives",
    strategyDescription: pageData?.strategyDescription || 
      "Our investigative edge is dictated by methodological precision, technological utility, and civic enablement. The faculty focuses on constructing translational frameworks that bridge the divide between theoretical computation and production-grade infrastructure, generating direct societal and technical equity.",
    activeParadigmsCount: pageData?.activeParadigmsCount || "09",
    publishedPapersCount: pageData?.publishedPapersCount || (thesesDoc?.theses?.length ? `${thesesDoc.theses.length}+` : "100+"),
    researchAreas: pageData?.researchAreas || [
      { id: "01", title: "Artificial Intelligence", iconKey: "brain", desc: "Investigating localized language modeling protocols, neural networks, and optimization heuristics for contextual regional applications." },
      { id: "02", title: "Information Security", iconKey: "shield", desc: "Developing cryptographically secure architectural primitives for resilient regional banking infrastructures and institutional access control." },
      { id: "03", title: "Databases & Data Mining", iconKey: "database", desc: "Optimizing relational schema processing configurations and high-throughput data distribution pipelines for registration frameworks." },
      { id: "04", title: "Software Engineering", iconKey: "code", desc: "Advancing structural correctness in full-stack compilation runtime strategies and type-safe systems modeling for public tools." },
    ],
    pastTopics: mappedTheses
  };

  return <ResearchClientLayout content={fallbackData} />;
}