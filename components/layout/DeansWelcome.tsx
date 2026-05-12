"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';

export const DeansWelcome = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Texture (Subtle code pattern from references) */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <Image
          src="/code-pattern-bg.png" // Use a very subtle code pattern overlay
          alt="texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Re-designed Portrait Block (authoritative and cohesive) */}
          <div className="lg:col-span-5 relative">
            {/* The Navy Blue background "frame" - anchors the image */}
            <div className="absolute -inset-4 bg-[#1F2E4F] rounded-2xl transform rotate-2 shadow-2xl z-0" />
            
            {/* The Actual Portrait Container */}
            <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-xl group border-4 border-white">
              <Image
                src="/deanimage.png" // Place your high-quality portrait here
                alt="Dean of CIT"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Branded gradient overlay (Navy to transparent) to tie it into the site theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/50 to-transparent opacity-80" />
              
              {/* Internal Accent - Brand Orange line at the very bottom */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[#BF833D]" />
            </div>

            {/* Subtle decorative "gradient blur" node (refined version of image_3.png) */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E31E24]/10 rounded-full blur-3xl z-0" />
          </div>

          {/* RIGHT: Polished Typography and Layout */}
          <div className="lg:col-span-7 flex flex-col relative">
            {/* Design Decor - large faded quote icon */}
            <Quote className="absolute -top-16 -left-10 w-32 h-32 text-[#1F2E4F]/5 z-0" />

            <div className="relative z-10">
              {/* Eyebrow - specific and tracking for premium feel */}
              <span className="text-[#E31E24] font-bold text-[13px] uppercase tracking-[0.25em] mb-4 block">
                DEAN'S MESSAGE
              </span>
              
              {/* Main Heading - Refined, tight leading */}
              <h2 className="text-[#1F2E4F] text-4xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                Welcome To The <br />
                <span className="text-[#BF833D]">Future of Computing & Tech</span>
              </h2>

              {/* Body Text - split into logical paragraphs, better tracking */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  It is my sincere pleasure to welcome you to the Faculty of Computer and Information 
                  Technology (CIT) at Hormuud University. In an era where digital innovation 
                  shapes the global economy, our mission is to prepare the next generation of 
                  technologists to lead with excellence.
                </p>
                <p>
                  Our faculty is a vibrant community of over 100 dedicated lecturers and staff, 
                  all focused on a singular goal: your success. Our graduates are consistently 
                  sought after by major corporations in Mogadishu and beyond because of the 
                  practical, forward-thinking, and entrepreneurial spirit instilled here.
                </p>
              </div>

              {/* Polished Button and Name */}
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 border-t border-gray-100 pt-10">
                <button 
                  className="bg-[#E31E24] hover:bg-[#c1181d] text-white px-8 py-4 rounded-md text-[13px] font-bold flex items-center gap-2 transition-all group active:scale-95 uppercase tracking-wider"
                >
                  Read the Full Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                {/* Formal Signature/Name block added */}
                <div className="flex flex-col">
                    <p className="text-[#1F2E4F] font-bold text-lg">Dr. Abdullahi Mohamed</p>
                    <p className="text-[#BF833D] font-semibold text-xs uppercase tracking-wider">Dean, Faculty of CIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};