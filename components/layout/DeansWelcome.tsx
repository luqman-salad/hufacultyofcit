import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { groq } from "next-sanity";

interface DeanData {
  deanName?: string;
  deanTitle?: string;
  deanImage?: SanityImageSource;
  messageParagraphs?: string[];
}

async function getDeanData() {
  return client.fetch<DeanData | null>(
    groq`*[_type == "deanMessagePage"][0]{
      deanName,
      deanTitle,
      "deanImage": deanImage.asset._ref,
      messageParagraphs
    }`
  );
}

export const DeansWelcome = async () => {
  const data = await getDeanData();

  if (!data) return null;

  // Grab the first paragraph
  const shortMessage = data.messageParagraphs && data.messageParagraphs.length > 0 
    ? data.messageParagraphs[0] 
    : "Welcome to our faculty. Please visit the full message page to learn more.";

  return (
    <section className="py-24 bg-white text-[#1F2E4F]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-200 pb-10">
          <span className="text-[#E31E24] font-bold text-sm tracking-[0.2em] uppercase mb-3 block">
            Dean&apos;s Perspective
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2E4F] tracking-tight">
            Message from the <span className="text-[#BF833D]">Faculty Dean</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Image */}
          <div className="relative group">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              {data.deanImage && (
                <Image
                  src={urlFor(data.deanImage).width(720).height(720).quality(75).url()}
                  alt={data.deanName || "Dean of Faculty"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/60 to-transparent" />
            </div>
            
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{data.deanName}</h3>
              <p className="text-[#BF833D] font-mono tracking-widest text-xs uppercase font-bold">{data.deanTitle}</p>
            </div>
          </div>

          {/* Right: Modern Content Block */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed italic mb-8 border-l-4 border-[#E31E24] pl-6">
                &quot;{shortMessage}&quot;
              </p>
              
              <Link 
                href="/dean-message" 
                className="inline-flex items-center gap-2 bg-[#1F2E4F] text-white px-8 py-4 font-bold hover:bg-[#E31E24] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
              >
                Read Full Message <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
