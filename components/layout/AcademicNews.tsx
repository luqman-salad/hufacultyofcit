"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    title: "Equity Providence: Connect for Health Info",
    image: "/news1img.png", // Replace with your actual image path
    alt: "Students in a collaborative classroom setting",
    excerpt: "Morbi congue leo et est sodales consequat a quis est. Bowling Means Real Fun Marketing...",
    href: "/news/equity-providence"
  },
  {
    title: "Tea with the Alpha Delta Phi Society",
    image: "/new2img.png", // Replace with your actual image path
    alt: "Students working together with coffee and laptops",
    excerpt: "reshers week can be a daunting but exciting time for anyone, but maybe more so...",
    href: "/news/alpha-delta-phi"
  },
  {
    title: "Power and drive Proin quis to create lives",
    image: "/news3img.png", // Replace with your actual image path
    alt: "Close up of student using a tablet and laptop",
    excerpt: "In dignissim feugiat gravida. Proin feugiat quam sed gravida fringilla. Proin quis mauris ut magna...",
    href: "/news/power-and-drive"
  }
];

export function AcademicNews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-10">
        
        {/* Section Header */}
        <h2 className="text-[#1F2E4F] text-4xl font-semibold text-center mb-16 tracking-tight">
          Academic&apos;s News
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col group h-full">
              
              {/* Image Container */}
              <div className="relative aspect-[1.5/1] overflow-hidden rounded-sm mb-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title - Using the Navy Blue from your theme */}
              <h3 className="text-[#1F2E4F] text-xl font-bold mb-4 leading-tight min-h-[56px] line-clamp-2">
                {item.title}
              </h3>

              {/* Excerpt - Grayish text for readability */}
              <p className="text-[#4A5568] text-[15px] leading-relaxed mb-8 flex-grow line-clamp-3">
                {item.excerpt}
              </p>

              {/* Link Styled as the Green Button from reference */}
              <Link 
                href={item.href}
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