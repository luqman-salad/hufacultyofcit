"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { FaFlag, FaMicrochip, FaUsers, FaAward, FaBuildingColumns } from "react-icons/fa6";

export default function HistoryPage() {
  const timelineEvents = [
    {
      year: "2010",
      title: "Founding Year",
      desc: "The Faculty of Computer & IT was established with the vision to provide high-quality technical education in Somalia, starting with the Bachelor of Science in Computer Applications.",
      icon: <FaFlag />,
      color: "border-[#E31E24]"
    },
    {
      year: "2015",
      title: "Digital Expansion",
      desc: "Introduced specialized tracks in Networking and Cybersecurity to address the growing demand for digital infrastructure security in the local banking sector.",
      icon: <FaMicrochip />,
      color: "border-[#4c9c6f]"
    },
    {
      year: "2018",
      title: "Research Milestone",
      desc: "Established the first formal Research Strategy, focusing on translational technology for the underprivileged and local innovation.",
      icon: <FaBuildingColumns />,
      color: "border-[#BF833D]"
    },
    {
      year: "2022",
      title: "Innovation Hub Launch",
      desc: "Launched advanced computer labs and smart classrooms, providing a 1:1 student-to-computer ratio for all practical sessions.",
      icon: <FaUsers />,
      color: "border-[#1a2b4a]"
    },
    {
      year: "2026",
      title: "Regional Leadership",
      desc: "Recognized as a leading faculty in the region with over 100+ active researchers and a robust portfolio of civic tech solutions.",
      icon: <FaAward />,
      color: "border-[#E31E24]"
    }
  ];

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title="Faculty History" 
        backgroundImage="/researchimg.png" 
      />

      <div className="container mx-auto px-6 md:px-10 mt-24">
        
        {/* 1. Legacy Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Our Journey</p>
          <h2 className="text-5xl font-black text-[#1a2b4a] leading-tight mb-8">
            A Decade of Academic Excellence & Digital Transformation
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Since its inception, the Faculty of Computer & IT has been at the forefront of the technological 
            renaissance in the region. We have evolved from a small department into a comprehensive 
            center for innovation, training the next generation of software engineers and tech leaders.
          </p>
        </div>

        {/* 2. Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-100 hidden md:block" />

          <div className="space-y-24">
            {timelineEvents.map((event, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="md:w-1/2 w-full">
                  <div className={`p-8 bg-white border-t-4 ${event.color} shadow-md  transition-transform hover:-translate-y-2 duration-300`}>
                    <span className="text-[#BF833D] font-black text-2xl mb-2 block">{event.year}</span>
                    <h4 className="text-xl font-bold text-[#1a2b4a] mb-4 uppercase tracking-tight">{event.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-50 rounded-full shadow-lg shrink-0">
                  <div className="text-[#1a2b4a] text-xl">
                    {event.icon}
                  </div>
                </div>

                {/* Empty Side (For Layout) */}
                <div className="md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Founding Values Quote (Inspired by image_effff3.png) */}
        <section className="mt-40 bg-[#1a2b4a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24] opacity-5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-white text-3xl font-black italic leading-relaxed mb-8">
              "Our strategy is characterized by ambition and creativity, building technology for the underprivileged and the needy."
            </h3>
            <div className="w-16 h-1 bg-[#BF833D] mx-auto mb-6" />
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">
              The Founding Vision of the Faculty
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}