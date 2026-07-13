"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const DeansWelcome = () => {
  return (
    <section className="py-24 bg-white text-[#1F2E4F]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-200 pb-10">
          <span className="text-[#E31E24] font-bold text-sm tracking-[0.2em] uppercase mb-3 block">
            Dean's Perspective
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2E4F] tracking-tight">
            Message from the <span className="text-[#BF833D]">Faculty Dean</span>
          </h2>
        </div>

        {/* Main Content Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Image with Subtle Frame */}
          <div className="relative group">
            <div className="aspect-4/4 relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <Image
                src="/luqman.jpg"
                alt="Dean of CIT"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/60 to-transparent" />
            </div>
            
            {/* Identity Badge */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Dr. Abdullahi Mohamed</h3>
              <p className="text-[#BF833D] font-mono tracking-widest text-xs uppercase font-bold">Dean of Faculty</p>
            </div>
          </div>

          {/* Right: Modern Content Block */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed italic mb-8 border-l-4 border-[#E31E24] pl-6">
                "Our mission transcends traditional education. We are building a tech-ecosystem 
                that prepares graduates to thrive in a digital-first global economy."
              </p>
              
              <div className="space-y-4 mb-10 text-gray-600">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#E31E24] rounded-full" />
                  Industry-aligned curriculum & real-world projects.
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#BF833D] rounded-full" />
                  Entrepreneurial mindset focused on local impact.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#1F2E4F] text-white px-8 py-4 font-bold hover:bg-[#E31E24] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
                Explore Faculty Vision <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};