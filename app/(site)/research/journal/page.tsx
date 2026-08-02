import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import JournalsClientLayout from "./JournalsClientLayout";

async function getJournalPageData() {
  const query = groq`*[_type == "journal"][0]{
    heroTitle,
    "heroImage": heroImage.asset->url,
    journals[]{
      id,
      title,
      authors,
      category,
      customCategory,
      abstract,
      date,
      doi,
      "pdfUrl": pdfFile.asset->url
    }
  }`;

  return await client.fetch(query);
}

export default async function JournalsPage() {
  const data = await getJournalPageData();

  // Map Sanity journals data or fallback to empty array so client layout uses its dummy data
  const mappedJournals = data?.journals?.length > 0
    ? data.journals.map((j: any) => ({
        id: j.id,
        title: j.title,
        authors: j.authors,
        category: j.category === "Other" && j.customCategory ? j.customCategory : j.category,
        abstract: j.abstract,
        date: j.date,
        doi: j.doi,
        pdfUrl: j.pdfUrl,
      }))
    : [];

  const pageContent = {
    heroTitle: data?.heroTitle || "Faculty Research Journals & Publications",
    resolvedHeroImage: data?.heroImage || "",
    journals: mappedJournals,
  };

  return <JournalsClientLayout content={pageContent} />;
}