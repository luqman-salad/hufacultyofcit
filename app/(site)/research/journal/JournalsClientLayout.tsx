"use client";

import React, { useState } from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaMagnifyingGlass, 
  FaBook, 
  FaFilePdf, 
  FaCalendarDays, 
  FaUserPen, 
  FaArrowUpRightFromSquare,
  FaFilter
} from "react-icons/fa6";

interface JournalItem {
  id: string;
  title: string;
  authors: string;
  category: string;
  customCategory?: string;
  abstract: string;
  date: string;
  doi?: string;
  pdfUrl?: string;
}

interface LayoutContent {
  heroTitle?: string;
  resolvedHeroImage?: string;
  journals?: JournalItem[];
}

interface Props {
  content?: LayoutContent;
}

// Dummy data to instantly preview the layout and filtering features
const dummyJournals: JournalItem[] = [
  {
    id: "JRN-2026-001",
    title: "Optimizing Deep Learning Architectures for Resource-Constrained Edge Computing Nodes",
    authors: "Dr. Ahmed Mohamed, Prof. Fadumo Abdi",
    category: "Artificial Intelligence",
    abstract: "This paper investigates lightweight quantization and pruning techniques designed to deploy transformer-based models onto low-power edge hardware without significant degradation in inference accuracy.",
    date: "2026-07-14",
    doi: "10.1016/j.jocs.2026.05.012",
    pdfUrl: "#"
  },
  {
    id: "JRN-2026-002",
    title: "Blockchain-Based Decentralized Identity Management for Higher Education Credentials",
    authors: "Eng. Liban Warsame, Dr. Ahmed Mohamed",
    category: "Cybersecurity",
    abstract: "A comprehensive framework utilizing smart contracts on Ethereum-compatible networks to securely issue, verify, and revoke university degrees and academic transcripts, eliminating forgery risks.",
    date: "2026-06-28",
    doi: "10.1038/s41598-2026-891",
    pdfUrl: "#"
  },
  {
    id: "JRN-2026-003",
    title: "Real-Time Telecommunications Dispatch Ticketing Systems Using React Native and WebSockets",
    authors: "Luqman Salad, Eng. Mahad Ali",
    category: "Software Engineering",
    abstract: "An examination of real-time event-driven architectures deployed to eliminate customer-technician mismatches and streamline automated dispatch ticketing workflows for modern telecom operators.",
    date: "2026-05-10",
    doi: "10.1109/TSE.2026.34129",
    pdfUrl: "#"
  },
  {
    id: "JRN-2026-004",
    title: "Natural Language Processing for Low-Resource Afro-Asiatic Languages: Somali Corpus Expansion",
    authors: "Prof. Amina Sheikh, Luqman Salad",
    category: "Data Science",
    abstract: "This study presents a newly curated text corpus and baseline tokenization models to improve sentiment analysis and automated machine translation performance for the Somali language ecosystem.",
    date: "2026-04-02",
    doi: "10.1016/j.acl.2026.02.004",
    pdfUrl: "#"
  }
];

export default function JournalsClientLayout({ content }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use dummy journals if content.journals is empty or undefined
  const rawJournalsList = (content?.journals && content.journals.length > 0) 
    ? content.journals 
    : dummyJournals;

  // Resolve categories (handling 'Other' with customCategory)
  const journalsList = rawJournalsList.map((journal) => ({
    ...journal,
    resolvedCategory: journal.category === "Other" && journal.customCategory 
      ? journal.customCategory 
      : journal.category
  }));

  // Extract unique categories for filtering safely
  const categories = ["All", ...Array.from(new Set(journalsList.map((j) => j.resolvedCategory).filter(Boolean)))];

  // Filter journals based on search query and category
  const filteredJournals = journalsList.filter((journal) => {
    const matchesSearch = 
      (journal.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (journal.authors?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      (journal.abstract?.toLowerCase() || "").includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || journal.resolvedCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-[#FAFBFB] pb-32 antialiased selection:bg-gray-200 text-gray-900">
      <InnerHero 
        title={content?.heroTitle || "Faculty Research Journals & Publications"} 
        backgroundImage={content?.resolvedHeroImage || ""} 
      />

      <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* SECTION 1: Overview & Info Banner */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-gray-200/80 pb-16">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">// Scholarly Repository</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a2b4a]">
              Published Research & Faculty Papers
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Explore peer-reviewed articles, academic journals, and technical publications authored by our faculty members and researchers. Filter by category or search through abstracts to discover ongoing scholarly contributions.
            </p>
          </div>
        </section>

        {/* SECTION 2: Search & Category Filter Controls */}
        <section className="mt-16">
          <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                  <FaMagnifyingGlass className="text-xs" />
                </span>
                <input
                  type="text"
                  placeholder="Search journals, authors, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-11 pr-4 py-3 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#1a2b4a] transition-all"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <span className="text-xs font-mono text-gray-400 uppercase flex items-center gap-1.5 shrink-0 mr-1">
                  <FaFilter className="text-[10px]" /> Filter:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                      selectedCategory === cat 
                        ? "bg-[#1a2b4a] text-white shadow-sm" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200/70"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: Journals Listing Grid (2-column layout) */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6 px-1">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold">
              // Available Publications ({filteredJournals.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJournals.length > 0 ? (
              filteredJournals.map((journal, idx) => (
                <div 
                  key={journal.id || idx}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[10px] font-mono uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-semibold border border-blue-100">
                        {journal.resolvedCategory}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarDays className="text-gray-300" /> {journal.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#1a2b4a] transition-colors leading-snug">
                      {journal.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-xs font-medium text-gray-600 flex items-center gap-2">
                      <FaUserPen className="text-gray-400 text-sm shrink-0" /> 
                      <span className="truncate">Authors: <strong className="text-gray-800">{journal.authors}</strong></span>
                    </p>

                    {/* Abstract */}
                    <p className="text-xs text-gray-500 leading-relaxed font-normal pt-2 border-t border-gray-100 line-clamp-3">
                      {journal.abstract}
                    </p>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <span className="font-mono text-[11px] text-gray-400">
                      {journal.doi ? `DOI: ${journal.doi}` : `ID: ${journal.id}`}
                    </span>

                    <div className="flex items-center gap-3">
                      {journal.pdfUrl ? (
                        <a 
                          href={journal.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#1a2b4a] hover:bg-[#1a2b4a]/90 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                        >
                          <FaFilePdf className="text-sm" /> PDF <FaArrowUpRightFromSquare className="text-[9px]" />
                        </a>
                      ) : (
                        <button 
                          disabled 
                          className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 px-3.5 py-2 rounded-xl text-xs font-bold cursor-not-allowed"
                        >
                          <FaFilePdf className="text-sm" /> N/A
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full bg-white p-16 rounded-2xl border border-gray-200/80 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center mx-auto mb-4 text-xl">
                  <FaBook />
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">No Matching Journals Found</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Your search criteria did not match any published papers in our repository. Try adjusting your search query or category filter.
                </p>
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}