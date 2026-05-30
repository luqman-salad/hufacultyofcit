"use client";

import React from 'react';
import { Laptop, GraduationCap, Microscope, Network } from 'lucide-react';
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "01",
    title: "Innovation & Tech",
    description: "Leading digital transformation through advanced software engineering architectures and localized machine learning research.",
    icon: Laptop,
    iconColor: "text-[#BF833D]",
  },
  {
    id: "02",
    title: "Academic Excellence",
    description: "Rigorous computation curricula engineered to cultivate the next lineage of type-safe systems and data platforms.",
    icon: GraduationCap,
    iconColor: "text-[#BF833D]",
  },
  {
    id: "03",
    title: "Modern Research",
    description: "Investigating cryptographically secure frameworks and distributed models to safeguard regional infrastructure.",
    icon: Microscope,
    iconColor: "text-[#BF833D]",
  },
  {
    id: "04",
    title: "Civic Infrastructure",
    description: "Translating theoretical computation into functional software systems built for public scaling and enterprise utility.",
    icon: Network,
    iconColor: "text-[#BF833D]",
  },
];

export const Pillars = () => {
  return (
    <section className="relative z-30 max-w-[1200px] mx-auto px-6 md:px-8 -mt-20 md:-mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200/70 border border-gray-200/70 rounded-xl overflow-hidden bg-white shadow-[0_16px_45px_rgba(26,43,74,0.04)]">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={index}
              className="p-8 md:p-9 bg-white hover:bg-[#FAFBFB] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header Index */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] text-gray-400 font-semibold tracking-widest">
                    [{pillar.id}]
                  </span>
                  <div className={cn("text-gray-400 group-hover:scale-105 transition-all duration-300", pillar.iconColor)}>
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>

                {/* Structural Typography Block */}
                <h3 className="text-[#1a2b4a] text-base font-bold tracking-tight mb-3 group-hover:text-[#E31E24] transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-500 font-light text-xs md:text-[13px] leading-relaxed tracking-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Minimal Line Base Accent Rule */}
              <div className="pt-6 mt-6 border-t border-gray-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </section>
  );
};