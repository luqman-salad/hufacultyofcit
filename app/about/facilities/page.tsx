"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaChalkboardUser, 
  FaMicrochip, 
  FaWifi, 
  FaBookBookmark, 
  FaServer, 
  FaLaptopCode,
  FaArrowRight
} from "react-icons/fa6";

export default function FacilitiesPage() {
  const mainFacilities = [
    {
      title: "Advanced Computer Labs",
      icon: <FaLaptopCode />,
      desc: "High-performance workstations equipped with modern development tools and IDEs for full-stack and mobile engineering.",
      image: "/computerScienceimg.png"
    },
    {
      title: "Smart Classrooms",
      icon: <FaChalkboardUser />,
      desc: "The classrooms are equipped with interactive whiteboards and digital projection systems to enhance the learning experience.",
      image: "/dataimg.png"
    },
    {
      title: "Digital Library",
      icon: <FaBookBookmark />,
      desc: "Access to global research databases, IEEE journals, and a vast collection of technical literature in Computer Science.",
      image: "/researchimg.png"
    }
  ];

  const features = [
    { name: "High-Speed Campus WiFi", icon: <FaWifi /> },
    { name: "Dedicated Server Room", icon: <FaServer /> },
    { name: "Hardware & IoT Kits", icon: <FaMicrochip /> },
  ];

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title="Our Facilities" 
        backgroundImage="/researchimg.png" 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-24">
        
        {/* 1. Introduction Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">World-Class Infrastructure</p>
          <h2 className="text-5xl font-black text-[#1a2b4a] leading-tight mb-6">
            Environment Built for Innovation & Learning
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The Faculty of Computer & IT provides a modern environment tailored to the needs of 21st-century 
            technologists. From specialized labs to collaborative study spaces, our facilities empower 
            students to turn theory into functional digital solutions.
          </p>
        </div>

        {/* 2. Main Facilities Grid (Staggered Layout) */}
        <div className="space-y-32 mb-40">
          {mainFacilities.map((facility, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gray-100 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video border-4 border-white">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-red-50 text-[#E31E24] rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                  {facility.icon}
                </div>
                <h3 className="text-3xl font-black text-[#1a2b4a]">{facility.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {facility.desc}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-[#BF833D] uppercase tracking-widest">
                    Available 8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Tech Stack & Services (Layout inspired by image_51c360.jpg) */}
        <section className="bg-[#1a2b4a] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-black mb-8 leading-tight">Technology & Support Services</h3>
              <p className="text-white/60 mb-10 text-lg">
                We ensure that our students have the tools necessary for modern software 
                development and research, maintaining a 1:1 student-to-computer ratio in practical sessions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="text-[#BF833D] text-xl">{feature.icon}</div>
                    <span className="font-bold text-sm tracking-tight">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#E31E24] p-8 rounded-[2rem] flex flex-col justify-between aspect-square">
                  <FaServer className="text-4xl opacity-50" />
                  <span className="font-black text-2xl">High-End Servers</span>
               </div>
               <div className="bg-[#4c9c6f] p-8 rounded-[2rem] flex flex-col justify-between translate-y-8 aspect-square">
                  <FaWifi className="text-4xl opacity-50" />
                  <span className="font-black text-2xl">Full Campus Coverage</span>
               </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}