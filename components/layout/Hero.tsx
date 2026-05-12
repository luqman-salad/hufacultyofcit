"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[620px] py-20 flex items-center overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-computer-lab.png" 
          alt="Faculty Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Subtle radial gradient to focus center text */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl font-bold md:text-6xl leading-[1.05] mb-6 tracking-tighter">
            Faculty Of 
            Computer & <br />
            Information 
            Technology
          </h1>
          
          <p className="text-gray-200 text-sm md:text-[16px] leading-relaxed mb-10 max-w-xl opacity-90 font-medium">
            The Faculty of Computer and Information Technology is an academic department that 
            focuses on the study and application of technology in the field of computing and 
            
          </p>

          <button 
            className="bg-[#E31E24] hover:bg-[#c1181d] text-white px-8 py-4 rounded-md text-[13px] font-bold flex items-center gap-2 transition-all active:scale-95 uppercase tracking-wider"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Brand Accent Bottom Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#BF833D]" /> */}
    </section>
  );
};