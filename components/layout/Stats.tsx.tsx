"use client";

import React from 'react';
import { Users, Briefcase, Globe, graduationCap } from 'lucide-react';

const stats = [
  { label: "Active Students", value: "1,200+", icon: Users },
  { label: "Expert Lecturers", value: "85+", icon: Globe },
  { label: "Graduate Employment", value: "94%", icon: Briefcase },
];

export const Stats = () => {
  return (
    <section className="bg-[#1F2E4F] py-16 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#BF833D]/5 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#BF833D] group-hover:rotate-6 transition-all duration-500">
                <stat.icon className="text-white w-8 h-8" />
              </div>
              <div>
                <div className="text-white text-4xl font-black tracking-tighter group-hover:text-[#BF833D] transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs uppercase font-bold tracking-[0.2em] mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};