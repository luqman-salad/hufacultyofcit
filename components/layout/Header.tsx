import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { HeaderClient, type NavChild } from "./HeaderClient";

async function getDepartmentLinks(): Promise<NavChild[]> {
  const query = groq`*[_type == "department" && defined(slug.current)] | order(title asc) {
    title,
    "href": "/departments/" + slug.current
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching navigation departments:", error);
    return [];
  }
}

export async function Header() {
  const academicChildren = await getDepartmentLinks();

  return <HeaderClient academicChildren={academicChildren} />;
}
