"use client";

import React from 'react';
import { Building2, BookOpen, Award, Users, Briefcase, Globe } from 'lucide-react';

const stats = [
  { label: "Active Students", value: "1,200+", icon: Users },
  { label: "Expert Lecturers", value: "85+", icon: Globe },
  { label: "Grad. Employment", value: "94%", icon: Briefcase },
  { label: "Industry Partners", value: "40+", icon: Building2 },
  { label: "Publications", value: "200+", icon: BookOpen },
  { label: "Lab Facilities", value: "12+", icon: Award },
];

export const Stats = () => {
  return (
    <section className="relative py-20 bg-[#1F2E4F]">
      {/* Decorative lines for a technical look */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-10 w-px h-full bg-white" />
        <div className="absolute top-0 right-10 w-px h-full bg-white" />
      </div>

      <div className="max-w-[1250px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#BF833D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF833D]/20 flex items-center justify-center group-hover:bg-[#BF833D] transition-colors duration-500">
                  <stat.icon className="text-[#BF833D] group-hover:text-white w-6 h-6 transition-colors duration-500" />
                </div>
                
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-[#BF833D]/80 text-[10px] uppercase font-bold tracking-[0.15em] mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};