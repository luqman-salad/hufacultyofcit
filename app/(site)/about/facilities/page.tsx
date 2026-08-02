import React from 'react';
import Image from 'next/image';
import { InnerHero } from "@/components/layout/InnerHero";
import { client } from "@/sanity/lib/client";
import { urlFor as imageUrlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { 
  FaChalkboardUser, 
  FaMicrochip, 
  FaWifi, 
  FaBookBookmark, 
  FaServer, 
  FaLaptopCode
} from "react-icons/fa6";

const urlFor = (source: SanityImageSource) => imageUrlFor(source).url();

// Dynamic Icon Registry Resolver Map matching your schema keys
const iconMap: Record<string, React.ReactNode> = {
  "laptop-code": <FaLaptopCode />,
  "chalkboard-user": <FaChalkboardUser />,
  "book-bookmark": <FaBookBookmark />,
  "server": <FaServer />,
  "wifi": <FaWifi />,
  "microchip": <FaMicrochip />,
};

async function getFacilitiesData() {
  const query = `*[_type == "facilitiesPage"][0]{
    heroTitle,
    heroImage,
    eyebrow,
    mainHeading,
    introduction,
    mainFacilities,
    infrastructureHeading,
    infrastructureDesc,
    features
  }`;
  return await client.fetch(query);
}

export default async function FacilitiesPage() {
  const data = await getFacilitiesData();

  if (!data) {
    return (
      <div className="py-24 text-center font-mono text-xs text-gray-400">
        [ SYSTEM // INITIALIZING FACILITIES REGISTRY MODULE... ]
      </div>
    );
  }

  return (
    <main className="bg-white pb-24 overflow-x-hidden">
      <InnerHero 
        title={data.heroTitle || "Our Facilities"} 
        backgroundImage={data.heroImage ? urlFor(data.heroImage) : "/researchimg.png"} 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-16 md:mt-24">
        
        {/* 1. Introduction Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">
            {data.eyebrow || "World-Class Infrastructure"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2b4a] leading-tight mb-6">
            {data.mainHeading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            {data.introduction}
          </p>
        </div>

        {/* 2. Main Facilities Grid (Staggered Layout) */}
        <div className="space-y-20 md:space-y-32 mb-28 md:mb-40">
          {data.mainFacilities?.map((facility: any, i: number) => (
            <div 
              key={i} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-2 md:-inset-4 bg-gray-100 rounded-[2rem] md:rounded-[2.5rem] -rotate-1 md:-rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl aspect-video border-4 border-white bg-gray-50">
                  {facility.image && (
                    <Image 
                      src={urlFor(facility.image)} 
                      alt={facility.title || "Facility Layout"} 
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 text-[#E31E24] rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm">
                  {iconMap[facility.iconKey] || <FaLaptopCode />}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1a2b4a]">{facility.title}</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {facility.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                  <span className="px-4 md:px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#BF833D] uppercase tracking-widest">
                    {facility.availability || "Available 8:00 AM - 8:00 PM"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Tech Stack & Services Structural Panel */}
        <section className="bg-[#1a2b4a] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-6 md:mb-8 leading-tight">
                {data.infrastructureHeading}
              </h3>
              <p className="text-white/60 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
                {data.infrastructureDesc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {data.features?.map((feature: any, i: number) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <div className="text-[#BF833D] text-xl shrink-0">
                      {iconMap[feature.iconKey] || <FaWifi />}
                    </div>
                    <span className="font-bold text-sm tracking-tight break-words">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 lg:pt-0">
               <div className="bg-[#E31E24] p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between aspect-square shadow-lg">
                  <FaServer className="text-3xl sm:text-4xl opacity-50" />
                  <span className="font-black text-xl sm:text-2xl leading-tight">High-End Servers</span>
               </div>
               <div className="bg-[#4c9c6f] p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between lg:translate-y-8 aspect-square shadow-lg">
                  <FaWifi className="text-3xl sm:text-4xl opacity-50" />
                  <span className="font-black text-xl sm:text-2xl leading-tight">Full Campus Coverage</span>
               </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}