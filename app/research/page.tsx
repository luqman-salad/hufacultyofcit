"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaMicroscope, 
  FaBrain, 
  FaDatabase, 
  FaShield, 
  FaCode, 
  FaChartLine, 
  FaFlask, 
  FaArrowRight,
  FaArrowRightLong
} from "react-icons/fa6";

export default function ResearchPage() {
  const researchAreas = [
    { 
      title: "Artificial Intelligence", 
      icon: <FaBrain />, 
      desc: "Focusing on neural networks, machine learning, and local language processing." 
    },
    { 
      title: "Information Security", 
      icon: <FaShield />, 
      desc: "Developing secure protocols for local bank branch networks and district systems." 
    },
    { 
      title: "Databases & Data Mining", 
      icon: <FaDatabase />, 
      desc: "Optimizing large-scale district registration and school management systems." 
    },
    { 
      title: "Software Engineering", 
      icon: <FaCode />, 
      desc: "Advancing full-stack frameworks and programming languages for institutional capacity." 
    },
  ];

  const pastTopics = [
    { id: "TH001", title: "Virtual Private Network for Local Bank Branches" },
    { id: "TH002", title: "Public District Registration System" },
    { id: "TH003", title: "Driving License Management" },
    { id: "TH004", title: "School Management System" },
    { id: "TH005", title: "Car Rental Management" },
    { id: "TH006", title: "Online Traditional Herbal Management" },
    { id: "TH007", title: "Online Examination System" },
  ];

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title="Faculty Research" 
        backgroundImage="/researchimg.png" 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10">
        
        {/* 1. Research Strategy Section */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-red-50 rounded-full">
              <h2 className="text-[#E31E24] font-black text-xs uppercase tracking-[0.2em]">Research Strategy</h2>
            </div>
            <h3 className="text-4xl font-bold text-[#1a2b4a] leading-tight">
              Exploring the Research Fields of Computer Science
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our research edge is characterized by ambition, creativity, and cross-disciplinary collaboration. 
              We aim to build translational research centers that generate new technological platforms.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 border-l-4 border-[#4c9c6f]">
                <span className="block text-4xl font-black text-[#1a2b4a] mb-1">9+</span>
                <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Major Research Areas</span>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-[#E31E24]">
                <span className="block text-4xl font-black text-[#1a2b4a] mb-1">100+</span>
                <span className="text-[11px] uppercase font-bold text-gray-500 tracking-widest">Active Researchers</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#BF833D]/10 rounded-2xl blur-2xl group-hover:bg-[#BF833D]/20 transition-all duration-500" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-md border-4 border-white">
              <img 
                src="/researchimg.png" 
                alt="Research Strategy" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* 2. Research Areas Grid */}
        <section className="mt-40">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Core Expertise</p>
            <h2 className="text-4xl font-black text-[#1a2b4a]">Major Research Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, i) => (
              <div key={i} className="relative p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#E31E24] text-2xl mb-8 group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-[#1a2b4a] mb-4">{area.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Past Research Topics (Updated to White Background) */}
        <section className="mt-40">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-10 md:p-16">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-[#1a2b4a]">Past Research Topics</h3>
                  <div className="w-20 h-1.5 bg-[#E31E24] rounded-full" />
                  <p className="text-gray-500 max-w-xl text-lg">
                    A comprehensive record of completed thesis and institutional research projects within the faculty.
                  </p>
                </div>
                <button className="flex items-center gap-4 bg-[#1a2b4a] hover:bg-[#E31E24] text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-red-200">
                  Full Repository <FaArrowRightLong />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-4">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-[#BF833D] font-black uppercase text-xs tracking-widest border-b border-gray-50">ID</th>
                      <th className="px-6 py-4 text-[#BF833D] font-black uppercase text-xs tracking-widest border-b border-gray-50">Research Title</th>
                      <th className="px-6 py-4 border-b border-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastTopics.map((topic, i) => (
                      <tr key={i} className="group hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-6 font-mono text-gray-400 text-sm group-hover:text-[#E31E24] transition-colors">{topic.id}</td>
                        <td className="px-6 py-6 font-bold text-[#1a2b4a] text-lg lg:text-xl">{topic.title}</td>
                        <td className="px-6 py-6 text-right">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#E31E24] group-hover:text-white transition-all shadow-sm">
                            <FaArrowRight className="text-xs" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Bottom Accent Bar */}
            {/* <div className="h-2 bg-gradient-to-r from-[#1a2b4a] via-[#E31E24] to-[#BF833D]" /> */}
          </div>
        </section>

      </div>
    </main>
  );
}