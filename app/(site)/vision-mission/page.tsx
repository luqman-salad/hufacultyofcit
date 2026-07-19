import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { client } from "@/sanity/lib/client";
import { urlFor as imageUrlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { 
  FaEye, 
  FaBullseye, 
  FaLightbulb, 
  FaShieldCat, 
  FaUsers, 
  FaGraduationCap 
} from "react-icons/fa6";

const urlFor = (source: SanityImageSource) => imageUrlFor(source).url();

// Icon map matching our schema keys with your custom styles
const iconMap: Record<string, React.ReactNode> = {
  "graduation": <FaGraduationCap className="text-[#E31E24] text-3xl" />,
  "lightbulb": <FaLightbulb className="text-[#E31E24] text-3xl" />,
  "shield": <FaShieldCat className="text-[#E31E24] text-3xl" />,
  "users": <FaUsers className="text-[#E31E24] text-3xl" />,
};

async function getVisionMissionData() {
  const query = `*[_type == "visionMissionPage"][0]{
    heroTitle,
    heroImage,
    visionText,
    missionText,
    valuesEyebrow,
    valuesHeading,
    coreValues
  }`;
  return await client.fetch(query);
}

export default async function VisionMissionPage() {
  const data = await getVisionMissionData();

  if (!data) {
    return (
      <div className="py-24 text-center font-mono text-xs text-gray-400">
        [ SYSTEM // INITIALIZING VISION REGISTRY MODULE... ]
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title={data.heroTitle || "Vision & Mission"} 
        backgroundImage={data.heroImage ? urlFor(data.heroImage) : "/vision-mision.png"} 
      />

      <div className="container max-w-7xl mx-auto px-6 md:px-10 mt-20">
        
        {/* 1. Vision & Mission Section (Horizontal Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Vision Card */}
          <div className="bg-[#1F2E4F] text-white p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaEye size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-[#4c9c6f] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaEye className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h2>
              <p className="text-lg text-white/80 leading-relaxed italic">
                "{data.visionText}"
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 border border-gray-100 p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaBullseye size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-[#E31E24] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-black text-[#1a2b4a] mb-6 tracking-tight">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                "{data.missionText}"
              </p>
            </div>
          </div>
        </div>

        {/* 2. Core Values Section */}
        <div className="text-center mb-16">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.2em] text-sm mb-3">
            {data.valuesEyebrow || "Why Choose Us"}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2b4a]">
            {data.valuesHeading || "Our Core Values"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.coreValues?.map((value: any, index: number) => (
            <div key={index} className="p-8 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all text-center">
              <div className="mb-6 flex justify-center">
                {iconMap[value.iconKey] || <FaGraduationCap className="text-[#E31E24] text-3xl" />}
              </div>
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-4">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
