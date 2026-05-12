"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Laptop, Ruler, BookOpenText, Clock, Play } from 'lucide-react';
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Laptop,
    title: "Flexible Classes",
    description: "Flexible In-Person Classes with Diverse Study Options."
  },
  {
    icon: Ruler,
    title: "Structured Access",
    description: "Structured Course Access for Diverse Student Population."
  },
  {
    icon: BookOpenText,
    title: "Flexible Learning",
    description: "Flexible and Student-Centered Learning"
  },
  {
    icon: Clock,
    title: "Educator Support",
    description: "The Importance of Educator Support in Student Success"
  }
];

export const WhyChooseUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text & Features */}
          <div className="lg:col-span-7">
            <div className="mb-14">
              <span className="text-[#E31E24] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-[#1F2E4F] text-5xl font-black leading-tight tracking-tight">
                Our Core Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="w-14 h-14 flex items-center justify-center mb-5">
                    <feature.icon className="text-[#E31E24] w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[#1F2E4F] text-xl font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Video Oval from Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[480px] h-[480px] group">
              {/* Red Ring Detail */}
              <div className="absolute inset-0 rounded-full border-2 border-[#E31E24] scale-[1.02] -rotate-6 opacity-20" />
              
              {/* Main Image Mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/core-features.jpg" 
                  alt="Student in lab"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1F2E4F]/10" />
                
                {/* Play Button */}
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group/play"
                >
                  <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
                  <Play className="text-[#E31E24] fill-[#E31E24] w-8 h-8 ml-1 transition-transform group-hover/play:scale-110" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};