import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { client } from "@/sanity/lib/client";
import { urlFor as imageUrlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { FaFlag, FaMicrochip, FaUsers, FaAward, FaBuildingColumns } from "react-icons/fa6";

const urlFor = (source: SanityImageSource) => imageUrlFor(source).url();

// Icon mapping layer matching your schema selections
const timelineIconMap: Record<string, React.ReactNode> = {
  flag: <FaFlag />,
  microchip: <FaMicrochip />,
  building: <FaBuildingColumns />,
  users: <FaUsers />,
  award: <FaAward />,
};

async function getHistoryPageData() {
  const query = `*[_type == "historyPage"][0]{
    heroTitle,
    heroImage,
    introEyebrow,
    introHeading,
    introDescription,
    timelineEvents,
    quoteText,
    quoteSubtext
  }`;
  return await client.fetch(query);
}

export default async function HistoryPage() {
  const data = await getHistoryPageData();

  if (!data) {
    return (
      <div className="py-24 text-center font-mono text-xs text-gray-400">
        [ SYSTEM // RUNNING HISTORICAL TIMELINE RETRIEVAL ENGINE... ]
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title={data.heroTitle || "Faculty History"} 
        backgroundImage={data.heroImage ? urlFor(data.heroImage) : "/researchimg.png"} 
      />

      <div className="container mx-auto px-6 md:px-10 mt-24">
        
        {/* 1. Legacy Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">
            {data.introEyebrow || "Our Journey"}
          </p>
          <h2 className="text-5xl font-black text-[#1a2b4a] leading-tight mb-8">
            {data.introHeading || "A Decade of Academic Excellence & Digital Transformation"}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {data.introDescription}
          </p>
        </div>

        {/* 2. Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Vertical Divider Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-100 hidden md:block" />

          <div className="space-y-24">
            {data.timelineEvents?.map((event: any, i: number) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side Box Card */}
                <div className="md:w-1/2 w-full">
                  <div className={`p-8 bg-white border-t-4 ${event.accentColor || 'border-[#E31E24]'} shadow-md transition-transform hover:-translate-y-2 duration-300`}>
                    <span className="text-[#BF833D] font-black text-2xl mb-2 block">{event.year}</span>
                    <h4 className="text-xl font-bold text-[#1a2b4a] mb-4 uppercase tracking-tight">{event.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node Circle Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-50 rounded-full shadow-lg shrink-0">
                  <div className="text-[#1a2b4a] text-xl">
                    {timelineIconMap[event.iconKey] || <FaFlag />}
                  </div>
                </div>

                {/* Empty Balancing Spacer Side Column */}
                <div className="md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Founding Values Quote Section */}
        <section className="mt-40 bg-[#1a2b4a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24] opacity-5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-white text-3xl font-black italic leading-relaxed mb-8">
              {data.quoteText}
            </h3>
            <div className="w-16 h-1 bg-[#BF833D] mx-auto mb-6" />
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">
              {data.quoteSubtext || "The Founding Vision of the Faculty"}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
