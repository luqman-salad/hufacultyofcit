"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InnerHero } from "@/components/layout/InnerHero";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaQuoteLeft } from "react-icons/fa6";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

export default function DeansMessagePage() {
  return (
    <main className="bg-white pb-24">
      {/* Reusable Hero from previous step */}
      <InnerHero 
        title="Dean's Message" 
        backgroundImage="/multimediaimg.png" 
      />

      <div className="container max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Profile Sidebar (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                {/* Dean Portrait */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-lg mb-6">
                  <Image 
                    src="/admin1.png" 
                    alt="Engr. Mohamed Abdullahi Ali" 
                    fill 
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-[#1a2b4a] leading-tight mb-2">
                  Engr. Abdulrahman Ali Haji
                </h2>
                <p className="text-[#E31E24] font-bold text-sm uppercase tracking-wider mb-6">
                  Dean, Faculty of Computer Science & IT (CIT)
                </p>

                {/* Social & Contact */}
                <div className="flex justify-center gap-4 mb-8">
                  <Link href="#" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaFacebookF />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaTwitter />
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaLinkedinIn />
                  </Link>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 text-sm justify-center">
                    <HiEnvelope className="text-[#E31E24]" />
                    <span>cit@just.edu.so</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm justify-center">
                    <HiPhone className="text-[#E31E24]" />
                    <span>+252 61 XXX XXX</span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* RIGHT COLUMN: The Message (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <div className="relative">
              <FaQuoteLeft className="absolute -top-10 -left-10 text-gray-100 text-8xl -z-10" />
              
              <header className="mb-12">
                <h3 className="text-[#E31E24] font-black text-lg uppercase tracking-widest mb-4">
                  Welcome to CIT
                </h3>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b4a] leading-[1.1]">
                  Message From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2b4a] to-[#4c9c6f]">Dean</span>
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
                <p className="font-medium text-[#1a2b4a] text-justify">
                  As Dean of the Faculty of Computer Science and IT, I am thrilled to share some exciting updates and reiterate my unwavering commitment to our collective success. Our faculty, comprised of five dynamic departments – Computer Science, Information Technology, Data Science, Software Engineering, and now, Artificial Intelligence – is a vital engine of innovation and progress at Hormuud University.</p>

                    <p className="font-medium text-[#1a2b4a] text-justify">We have accomplished much together, fostering a vibrant learning environment and conducting impactful research across all our departments. I am particularly proud of the dedication and expertise within each department, contributing significantly to the technological advancement of our community and beyond.</p>

                    <p className="font-medium text-[#1a2b4a] text-justify">Today, I am especially delighted to announce the official launch of our newest department: Artificial Intelligence (AI). This is a significant milestone for our faculty and Hormuud University as a whole. The establishment of the AI department reflects our commitment to staying at the forefront of technological innovation and equipping our students with the skills they need to thrive in the 21st century.</p>

                    <p className="font-medium text-[#1a2b4a] text-justify">The AI department will focus on machine learning, natural language processing, computer vision. We are confident that this new department will attract talented students and researchers, further enhancing our faculty's reputation for excellence.</p>

                    <p className="font-medium text-[#1a2b4a] text-justify">Thank you for your dedication, hard work, and commitment to the success of our faculty. I am honored to serve as your Dean and look forward to a bright future together.</p>
                
            </div>

              {/* Signature Section */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex items-center gap-6">
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-bold">Best Regards,</p>
                  <h4 className="text-2xl font-bold text-[#1a2b4a]">Engr. Abdulrahman Ali Haji</h4>
                  <p className="text-[#4c9c6f] font-bold">Dean Faculty of Computer Science and IT</p>
                  <p className="text-gray-600">Hormuud University</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}