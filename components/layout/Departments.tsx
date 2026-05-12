"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code2, Network, Layout, ArrowRight } from 'lucide-react';

const depts = [
  {
    title: "Computer Science",
    description: "Focusing on software development, database management, and enterprise system design.",
    icon: Code2,
    href: "/academic/ca",
    image: "/computerScienceimg.png" // Make sure these images exist in your public folder
  },
  {
    title: "Information Technology (IT)",
    description: "Focusing on software development, database management, and enterprise system design.",
    icon: Code2,
    href: "/academic/ca",
    image: "/computerScienceimg.png" // Make sure these images exist in your public folder
  },
  {
    title: "Software Engineering",
    description: "Mastering infrastructure, cloud computing, and protecting digital assets from global threats.",
    icon: Network,
    href: "/academic/networking",
    image: "/softengimg.png"
  },
  {
    title: "Multimedia & Design",
    description: "Combining creativity with tech to build immersive UI/UX, graphics, and digital media.",
    icon: Layout,
    href: "/academic/multimedia",
    image: "/multimediaimg.png"
  },
  {
    title: "Data Science",
    description: "Analyzing complex data sets to extract insights and drive informed decision-making.",
    icon: Layout,
    href: "/academic/data-science",
    image: "/dataimg.png"
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring the frontiers of machine learning and intelligent systems.",
    icon: Layout,
    href: "/academic/ai",
    image: "/aiimg.png"
  },

];

export const Departments = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-[1300px] mx-auto px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E31E24] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Academic Excellence
            </span>
            <h2 className="text-[#1F2E4F] text-4xl font-extrabold leading-tight">
              Explore Our Specialized <br />
              <span className="text-[#BF833D]">Departments</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-sm leading-relaxed">
            Choose a path that aligns with your career goals. Our programs are 
            aligned with international standards and local industry needs.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depts.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Visual Top with Real Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient (Ensures the icon and bottom of image blend well) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/80 via-[#1F2E4F]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Icon Box */}
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#BF833D] transition-colors duration-300 z-10">
                    <Icon className="text-[#1F2E4F] group-hover:text-white w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-[#1F2E4F] text-xl font-bold mb-4 group-hover:text-[#BF833D] transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-1">
                    {dept.description}
                  </p>
                  
                  <Link 
                    href={dept.href}
                    className="flex items-center gap-2 text-[#1F2E4F] font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    View Curriculum
                    <ArrowRight className="w-4 h-4 text-[#BF833D] group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};