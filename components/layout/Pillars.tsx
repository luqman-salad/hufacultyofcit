"use client";

import React from 'react';
import { Laptop, GraduationCap, Microscope, Network } from 'lucide-react';
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "01",
    title: "Innovation & Tech",
    description: "Leading digital transformation through advanced software engineering architectures.",
    icon: Laptop,
    accent: "group-hover:bg-[#E31E24]",
  },
  {
    id: "02",
    title: "Academic Excellence",
    description: "Rigorous computation curricula engineered to cultivate the next lineage of experts.",
    icon: GraduationCap,
    accent: "group-hover:bg-[#BF833D]",
  },
  {
    id: "03",
    title: "Modern Research",
    description: "Investigating secure frameworks and distributed models for regional infrastructure.",
    icon: Microscope,
    accent: "group-hover:bg-[#4c9c6f]",
  },
  {
    id: "04",
    title: "Civic Infrastructure",
    description: "Translating theoretical computation into functional software for public scaling.",
    icon: Network,
    accent: "group-hover:bg-[#1a2b4a]",
  },
];

export const Pillars = () => {
  return (
    <section className="relative z-30 max-w-[1200px] mx-auto px-6 -mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background pulse on hover */}
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500", pillar.accent)} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-[10px] text-gray-300 tracking-[0.2em] uppercase">
                    {pillar.id}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-[#1F2E4F]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[#1a2b4a] text-lg font-black tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className={cn("absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out", pillar.accent)} />
            </div>
          );
        })}
      </div>
    </section>
  );
};