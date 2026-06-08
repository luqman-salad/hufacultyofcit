import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ResearchClientLayout from "./ResearchClientLayout";

async function getResearchPageData() {
  // Query the single document workspace for the research layout definition
  const query = groq`*[_type == "researchPage"][0]{
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
    },
    pastTopics[]{
      id,
      title,
      context
    }
  }`;

  return await client.fetch(query);
}

export default async function ResearchPage() {
  const data = await getResearchPageData();

  // Robust structural fallbacks matching your structural design
  const fallbackData = {
    heroTitle: data?.heroTitle || "Faculty Research & Artifacts",
    resolvedHeroImage: data?.heroImage || "/researchimg.png",
    strategyTitle: data?.strategyTitle || "Research Strategy & Objectives",
    strategyDescription: data?.strategyDescription || 
      "Our investigative edge is dictated by methodological precision, technological utility, and civic enablement. The faculty focuses on constructing translational frameworks that bridge the divide between theoretical computation and production-grade infrastructure, generating direct societal and technical equity.",
    activeParadigmsCount: data?.activeParadigmsCount || "09",
    publishedPapersCount: data?.publishedPapersCount || "100+",
    researchAreas: data?.researchAreas || [
      { id: "01", title: "Artificial Intelligence", iconKey: "brain", desc: "Investigating localized language modeling protocols, neural networks, and optimization heuristics for contextual regional applications." },
      { id: "02", title: "Information Security", iconKey: "shield", desc: "Developing cryptographically secure architectural primitives for resilient regional banking infrastructures and institutional access control." },
      { id: "03", title: "Databases & Data Mining", iconKey: "database", desc: "Optimizing relational schema processing configurations and high-throughput data distribution pipelines for registration frameworks." },
      { id: "04", title: "Software Engineering", iconKey: "code", desc: "Advancing structural correctness in full-stack compilation runtime strategies and type-safe systems modeling for public tools." },
    ],
    pastTopics: data?.pastTopics || [
      { id: "TH001", title: "Virtual Private Network for Local Bank Branches", context: "Network Security" },
      { id: "TH002", title: "Public District Registration System", context: "Distributed Systems" },
      { id: "TH003", title: "Driving License Management", context: "Database Systems" },
      { id: "TH004", title: "School Management System", context: "Application Architectures" },
      { id: "TH005", title: "Car Rental Management", context: "Information Systems" },
      { id: "TH006", title: "Online Traditional Herbal Management", context: "Knowledge Discovery" },
      { id: "TH007", title: "Online Examination System", context: "Web Engineering" },
    ]
  };

  return <ResearchClientLayout content={fallbackData} />;
}