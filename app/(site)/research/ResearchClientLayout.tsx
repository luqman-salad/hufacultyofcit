"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaBrain, 
  FaDatabase, 
  FaShieldHalved, 
  FaCode, 
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

// Static mapping to convert Sanity string entries safely back to original React-Icons
const iconMap: Record<string, React.ReactNode> = {
  brain: <FaBrain />,
  shield: <FaShieldHalved />,
  database: <FaDatabase />,
  code: <FaCode />
};

interface ResearchAreaItem {
  id: string;
  title: string;
  iconKey?: string;
  desc: string;
}

interface ThesisRegistryItem {
  id: string;
  title: string;
  context: string;
}

interface LayoutContent {
  heroTitle: string;
  resolvedHeroImage: string;
  strategyTitle: string;
  strategyDescription: string;
  activeParadigmsCount: string;
  publishedPapersCount: string;
  researchAreas: ResearchAreaItem[];
  pastTopics: ThesisRegistryItem[];
}

interface Props {
  content: LayoutContent;
}

export default function ResearchClientLayout({ content }: Props) {
  return (
    <main className="bg-[#FAFBFB] pb-32 antialiased selection:bg-gray-200 text-gray-900">
      <InnerHero 
        title={content.heroTitle} 
        backgroundImage={content.resolvedHeroImage} 
      />

      <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* SECTION 1: Strategic Intent Statement */}
        <section className="mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-gray-200/80 pb-20">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">// System Overview</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">
              {content.strategyTitle}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-gray-600 text-lg leading-relaxed font-light tracking-tight max-w-3xl">
              {content.strategyDescription}
            </p>
            
            {/* Dynamic Stat Counter Matrices */}
            <div className="flex gap-16 pt-4">
              <div>
                <span className="block font-mono text-3xl font-light text-[#1a2b4a]">
                  {content.activeParadigmsCount}
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1 block">Active Paradigms</span>
              </div>
              <div className="w-px h-12 bg-gray-200 self-center" />
              <div>
                <span className="block font-mono text-3xl font-light text-[#1a2b4a]">
                  {content.publishedPapersCount}
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1 block">Published Papers</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Core Expertise Matrices */}
        <section className="mt-24">
          <div className="mb-16">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Vector 02</span>
            <h3 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">Primary Domains of Inquiry</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200/70 border border-gray-200/70 rounded-xl overflow-hidden shadow-sm">
            {content.researchAreas.map((area, idx) => (
              <div key={area.id || idx} className="p-8 md:p-10 bg-white hover:bg-gray-50/50 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-gray-400">[{area.id}]</span>
                    <div className="text-gray-400 group-hover:text-[#1a2b4a] transition-colors text-lg">
                      {area.iconKey ? iconMap[area.iconKey] : <FaCode />}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#1a2b4a] tracking-tight mb-3">
                    {area.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium tracking-normal max-w-sm">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Historic Logs & Repository */}
        <section className="mt-28">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Vector 03</span>
              <h3 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">Completed Thesis Registries</h3>
            </div>
            <button className="inline-flex items-center gap-2.5 font-mono text-xs font-bold text-[#1a2b4a] hover:text-[#E31E24] transition-colors border-b border-[#1a2b4a] hover:border-[#E31E24] pb-1 self-start sm:self-auto">
              ACCESS REPOSITORY <FaArrowUpRightFromSquare className="text-[10px]" />
            </button>
          </div>

          {/* Tabular Registry Log Container */}
          <div className="border border-gray-200/60 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="divide-y divide-gray-100">
              {content.pastTopics.map((topic, idx) => (
                <div 
                  key={topic.id || idx} 
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <span className="font-mono text-xs text-gray-400 shrink-0 tracking-wider">
                      {topic.id}
                    </span>
                    <h4 className="text-sm font-bold text-gray-800 tracking-tight">
                      {topic.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0">
                    <span className="text-[10px] font-mono uppercase bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200/40">
                      {topic.context}
                    </span>
                    <span className="text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-xs hidden sm:block">
                      <FaArrowUpRightFromSquare />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}