"use client";

import React from 'react';
import { Laptop, GraduationCap, Microscope } from 'lucide-react';
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Innovation & Tech",
    description: "Leading digital transformation through advanced software engineering and AI research.",
    icon: Laptop,
    bgColor: "bg-white",
    textColor: "text-[#1F2E4F]",
    iconBg: "bg-[#FDF5EB]",
    iconColor: "text-[#BF833D]",
  },
  {
    title: "Academic Excellence",
    description: "World-class curriculum designed to produce the next generation of global IT leaders.",
    icon: GraduationCap,
    bgColor: "bg-white",
    textColor: "text-[#1F2E4F]",
    iconBg: "bg-[#FDF5EB]",
    iconColor: "text-[#BF833D]",
  },
  {
    title: "Modern Research",
    description: "Exploring cybersecurity and data science to solve complex regional and global challenges.",
    icon: Microscope,
    bgColor: "bg-white",
    textColor: "text-[#1F2E4F]",
    iconBg: "bg-[#FDF5EB]",
    iconColor: "text-[#BF833D]",
  },
  {
    title: "Modern Research",
    description: "Exploring cybersecurity and data science to solve complex regional and global challenges.",
    icon: Microscope,
    bgColor: "bg-white",
    textColor: "text-[#1F2E4F]",
    iconBg: "bg-[#FDF5EB]",
    iconColor: "text-[#BF833D]",
  },

];

export const Pillars = () => {
  return (
    <section className="relative z-20 max-w-[1240px] mx-auto px-6 -mt-16 md:-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 shadow-2xl rounded-xl overflow-hidden border border-gray-100">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={index}
              className={cn(
                "p-10 flex flex-col items-center text-center transition-all duration-300 group",
                pillar.bgColor,
                pillar.textColor
              )}
            >
              {/* Icon Container */}
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                pillar.iconBg
              )}>
                <Icon className={cn("w-8 h-8", pillar.iconColor)} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
                {pillar.title}
              </h3>
              <p className={cn(
                "text-sm leading-relaxed opacity-80",
                pillar.bgColor === "bg-white" ? "text-gray-600" : "text-white/90"
              )}>
                {pillar.description}
              </p>

              {/* Subtle Bottom Accent for White Cards */}
              {pillar.bgColor === "bg-white" && (
                <div className="mt-8 w-10 h-1 bg-[#E31E24] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};