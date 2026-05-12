"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { FaEye, FaBullseye, FaLightbulb, FaShieldAlt, FaUsers, FaGraduationCap } from "react-icons/fa";

export default function VisionMissionPage() {
  const coreValues = [
    {
      title: "Academic Excellence",
      description: "Commitment to the highest standards of teaching and research in the field of technology.",
      icon: <FaGraduationCap className="text-[#E31E24] text-3xl" />,
    },
    {
      title: "Innovation",
      description: "Encouraging creative thinking and the development of futuristic technological solutions.",
      icon: <FaLightbulb className="text-[#E31E24] text-3xl" />,
    },
    {
      title: "Integrity",
      description: "Maintaining ethical standards and transparency in all academic and administrative processes.",
      icon: <FaShieldAlt className="text-[#E31E24] text-3xl" />,
    },
    {
      title: "Collaboration",
      description: "Partnering with global institutions and local industries to bridge the gap between theory and practice.",
      icon: <FaUsers className="text-[#E31E24] text-3xl" />,
    },
  ];

  return (
    <main className="bg-white pb-24">
      {/* Reusable Hero Component */}
      <InnerHero 
        title="Vision & Mission" 
        backgroundImage="/vision-mision.png" 
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
                "To be a faculty of choice in the Somalia region and beyond, widely recognized for both its high-quality education programs and innovative research programs."
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
                "To provide a quality education for our students, partner with the professional communities of engineering and computer science, and provide a strong connection between students' education and professional practice."
              </p>
            </div>
          </div>
        </div>

        {/* 2. Core Values Section (Inspired by Core Features Design) */}
        <div className="text-center mb-16">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2b4a]">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all text-center">
              <div className="mb-6 flex justify-center">
                {value.icon}
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