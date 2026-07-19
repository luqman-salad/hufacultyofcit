import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { WhyChooseUsClient, type WhyChooseUsData } from "./WhyChooseUsClient";

async function getWhyChooseUsData() {
  return client.fetch<WhyChooseUsData | null>(
    groq`*[_type == "whyChooseUs"][0]{
      heading,
      features,
      videoUrl,
      image
    }`
  );
}

export const WhyChooseUs = async () => {
  const data = await getWhyChooseUsData();

  if (!data) return null;

  return <WhyChooseUsClient data={data} />;
};
