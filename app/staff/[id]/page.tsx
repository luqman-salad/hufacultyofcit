"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { FaEnvelope, FaPhone, FaBuilding, FaAward, FaBookOpen } from "react-icons/fa6";

export default function StaffDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch data using the params.id
  return (
    <main className="bg-white pb-24">
      <div className="bg-[#1a2b4a] pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white/10 shrink-0">
             <img src="https://ui-avatars.com/api/?name=Staff+Member&background=E31E24&color=fff&size=512" className="w-full h-full object-cover" />
          </div>
          <div className="text-white text-center md:text-left">
            <span className="bg-[#E31E24] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Professor</span>
            <h1 className="text-5xl font-black mt-4 mb-2">Academic Member Name</h1>
            <p className="text-xl text-white/70 italic">Senior Lecturer in Computer Applications</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
              <h3 className="text-[#1a2b4a] font-bold mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#E31E24]" /> Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <FaEnvelope className="text-[#E31E24]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Email Address</p>
                    <p className="text-sm font-bold text-[#1a2b4a]">staff@faculty.edu</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <FaBuilding className="text-[#E31E24]" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400">Office</p>
                    <p className="text-sm font-bold text-[#1a2b4a]">Block A, Room 302</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Biography & Research */}
          <div className="lg:col-span-2 space-y-12 py-10">
            <section>
              <h3 className="text-2xl font-black text-[#1a2b4a] mb-6 flex items-center gap-3">
                <FaAward className="text-[#BF833D]" /> Biography
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                This academic member has contributed significantly to the faculty's progress in developing 
                modern software solutions. With over 10 years of experience in both industry and academia...
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-black text-[#1a2b4a] mb-6 flex items-center gap-3">
                <FaBookOpen className="text-[#4c9c6f]" /> Research Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Blockchain", "Cloud Computing", "AI Ethics", "Arabic NLP"].map((interest) => (
                  <span key={interest} className="px-6 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-bold text-gray-600">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}