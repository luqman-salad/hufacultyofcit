import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetch function
async function getNews() {
  const query = `*[_type == "newsItem"] | order(publishedAt desc)[0...3]{
    title,
    image,
    excerpt,
    "slug": slug.current
  }`;
  return await client.fetch(query);
}

export async function AcademicNews() {
  const newsItems = await getNews();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-10">
        
        {/* Section Header */}
        <h2 className="text-[#1F2E4F] text-4xl font-semibold text-center mb-16 tracking-tight">
          Academic&apos;s News
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((item: any, index: number) => (
            <div key={index} className="flex flex-col group h-full">
              
              {/* Image Container */}
              <div className="relative aspect-[1.5/1] overflow-hidden rounded-sm mb-6">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title || "News image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="text-[#1F2E4F] text-xl font-bold mb-4 leading-tight min-h-[56px] line-clamp-2">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#4A5568] text-[15px] leading-relaxed mb-8 flex-grow line-clamp-3">
                {item.excerpt}
              </p>

              {/* Read More Link */}
              <Link 
                href={`/news/${item.slug}`}
                className={cn(
                  "inline-flex items-center justify-center self-start",
                  "bg-[#4c9c6f] hover:bg-[#3d835d] text-white",
                  "px-5 py-2.5 rounded text-[13px] font-semibold uppercase tracking-wide",
                  "transition-colors duration-200"
                )}
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}