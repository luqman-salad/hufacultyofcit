"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Headset } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-white px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-[#1F2E4F] rounded-[2rem] overflow-hidden p-12 md:p-20 shadow-2xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BF833D]/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E31E24]/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[#BF833D] font-bold text-sm uppercase tracking-[0.3em] mb-6 block">
                Begin Your Journey
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-6">
                Ready to Shape the Future of <span className="text-[#BF833D]">Technology?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Join the next generation of innovators at Hormuud University. 
                Applications for the upcoming semester are now open.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link 
                  href="/apply"
                  className="group flex items-center gap-3 bg-[#BF833D] hover:bg-[#a67235] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/contact"
                  className="flex items-center gap-3 text-white font-bold hover:text-[#BF833D] transition-colors"
                >
                  <Headset className="w-5 h-5 text-[#BF833D]" />
                  Talk to Admissions
                </Link>
              </div>
            </div>

            {/* Quick Stats/Info Box */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 w-full lg:w-80">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#BF833D]/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-[#BF833D] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Admissions Open</h4>
                    <p className="text-gray-400 text-xs mt-1">Fall Intake 2026</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold mb-2">Location</p>
                  <p className="text-white text-sm font-medium">Mogadishu Main Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};