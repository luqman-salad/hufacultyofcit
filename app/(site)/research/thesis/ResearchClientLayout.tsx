"use client";

import React, { useState } from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaMagnifyingGlass,
  FaLock,
  FaBookBookmark,
  FaLightbulb,
  FaFileLines,
  FaUserGraduate,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

interface ThesisRegistryItem {
  id: string;
  title: string;
  context: string;
  author?: string;
  year?: string;
}

interface LayoutContent {
  heroTitle: string;
  resolvedHeroImage: string;
  pastTopics: ThesisRegistryItem[];
}

interface Props {
  content: LayoutContent;
}

export default function ResearchClientLayout({ content }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = content.pastTopics.filter((topic) => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (topic.author && topic.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="bg-[#FAFBFB] pb-32 antialiased selection:bg-gray-200 text-gray-900">
      <InnerHero 
        title={content.heroTitle || "Graduate Thesis & Defense Registry"} 
        backgroundImage={content.resolvedHeroImage} 
      />

      <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* SECTION 1: Guidelines & Proposal Policy Overview */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-gray-200/80 pb-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">// Policy & Protocol</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">
              Defense Guidelines & Topic Uniqueness
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1a2b4a] flex items-center justify-center mb-4 text-sm">
                  <FaBookBookmark />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Mandatory Verification</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All graduate candidates must verify their proposed thesis theme against this official registry before submitting their formal research proposal to the faculty board.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 text-sm">
                  <FaLightbulb />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">Originality Requirement</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  To prevent duplicate work and ensure novel academic contributions, topics matching or substantially overlapping with previously defended theses will be automatically rejected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Submission Statistics & Quick Metrics */}
        <section className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-gray-50 text-[#1a2b4a] flex items-center justify-center text-lg shrink-0">
                <FaFileLines />
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-[#1a2b4a]">
                  {content.pastTopics.length}+
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-0.5 block">Defended Theses</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-gray-50 text-[#1a2b4a] flex items-center justify-center text-lg shrink-0">
                <FaUserGraduate />
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-[#1a2b4a]">
                  Active
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-0.5 block">Graduate Cohort</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-gray-50 text-[#1a2b4a] flex items-center justify-center text-lg shrink-0">
                <FaLock />
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-[#1a2b4a]">
                  Restricted
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-0.5 block">Duplicate Protection</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Graduate Thesis Defense Registry & Duplicate Checker */}
        <section className="mt-24">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
            <div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-2">Vector 03</span>
              <h3 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">Defended Thesis Registry</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-xl font-medium">
                Verify existing thesis topics before proposal submission to avoid duplicate research claims. Topics listed below are officially defended and restricted.
              </p>
            </div>
            
            {/* Live Search Filter Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <FaMagnifyingGlass className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Search taken topics or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a2b4a] transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Availability Notice Banner */}
          <div className="mb-6 bg-blue-50/60 border border-blue-100 rounded-xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100/80 text-[#1a2b4a] flex items-center justify-center shrink-0">
                <FaLock className="text-xs" />
              </div>
              <p className="text-xs text-blue-900 font-medium">
                <strong className="font-bold">Topic Protection Active:</strong> If your proposed research matches an entry below, it is considered <span className="underline font-bold">already taken</span> and requires modification or unique expansion.
              </p>
            </div>
            <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded shrink-0 hidden sm:block">
              {filteredTopics.length} Records Found
            </span>
          </div>

          {/* Tabular Registry Log Container */}
          <div className="border border-gray-200/60 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="bg-gray-50/80 px-6 py-3 border-b border-gray-200/60 flex items-center justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest">
              <span>Identifier & Defended Title</span>
              <span>Status & Context</span>
            </div>

            <div className="divide-y divide-gray-100">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, idx) => (
                  <div 
                    key={topic.id || idx} 
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-gray-400 shrink-0 tracking-wider pt-0.5">
                        {topic.id}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 tracking-tight group-hover:text-[#1a2b4a] transition-colors">
                          {topic.title}
                        </h4>
                        {topic.author && (
                          <p className="text-[11px] text-gray-400 mt-1 font-medium">
                            Researcher: <span className="text-gray-600">{topic.author}</span> {topic.year ? `(${topic.year})` : ''}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-red-50 text-red-700 px-2.5 py-1 rounded-md border border-red-200/60 font-semibold">
                        <FaLock className="text-[9px]" /> Taken / Defended
                      </span>
                      <span className="text-gray-300 hover:text-gray-600 transition-colors cursor-pointer text-xs hidden sm:block">
                        <FaArrowUpRightFromSquare />
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-16 text-center bg-white">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-base">
                    ✓
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">No Matching Taken Topics Found</h4>
                  <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                    Your search query <strong className="text-gray-800">"{searchQuery}"</strong> did not match any restricted registry entries. This theme may potentially be available for your graduate proposal.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}