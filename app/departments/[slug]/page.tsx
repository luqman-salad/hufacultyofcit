"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaClock, FaGraduationCap, FaMoneyBillWave, FaCheckCircle, 
  FaBriefcase, FaSearch, FaChevronRight, FaFileDownload 
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi2";

export default function DepartmentDetailPage() {
  const departmentData = {
    title: "Bachelor of Science in Computer Applications",
    description: `Bachelor of Science in Computer Applications is an Undergraduate Computer Science course. 
    Application software or computer application are two aspects of the same thing; it is computer software 
    designed to help the user to perform singular or multiple related specific tasks.`,
    duration: "4 Years (8 Semesters)",
    type: "Full-Time / Part-Time",
    level: "Undergraduate (Bachelor)",
    monthlyFees: "65$",
    semesterFees: "390$",
    requirements: [
      "Must have completed Secondary school.",
      "Should bring the original Secondary School Leaving Certificate with two copies.",
      "Should bring four (4) passport-size photos with white backgrounds.",
      "For part-time program applicants, an experience of two years is recommended.",
      "Admission and ID Fee: USD 30."
    ],
    careerPaths: [
      "Computer Operator",
      "Computer Programmer",
      "Computer Application Tutor",
      "Laboratory Technician",
      "Mobile Application Developer",
      "Senior Applications Support Analyst"
    ],
    latestUpdates: [
      { title: "Empowering Future Networking Engineers", date: "21 Oct, 2023" },
      { title: "Unlock Your Future: Admission Now Open", date: "09 Sep, 2023" }
    ]
  };

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title={departmentData.title} 
        backgroundImage="/computerScienceimg.png" 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: MAIN CONTENT (8 Cols) */}
          <div className="lg:col-span-8">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-[#E31E24] font-black text-sm uppercase tracking-[0.2em] mb-4">Department Overview</h2>
              <h3 className="text-3xl font-black text-[#1a2b4a] mb-6 leading-tight">
                Welcome to {departmentData.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {departmentData.description}
              </p>

              {/* Stats Table Grid (Based on image_eeb235.png) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {[
                  { label: "Duration", val: departmentData.duration, icon: <FaClock /> },
                  { label: "Level", val: departmentData.level, icon: <FaGraduationCap /> },
                  { label: "Semester Fee", val: departmentData.semesterFees, icon: <FaMoneyBillWave /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                    <div className="text-[#4c9c6f] mb-3 text-2xl">{stat.icon}</div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</span>
                    <span className="text-[#1a2b4a] font-bold">{stat.val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Entry Requirements (Based on image_eeb1fe.png) */}
            <section className="mb-12 bg-[#1a2b4a]/5 p-10 rounded-3xl border border-[#1a2b4a]/10">
              <h3 className="text-2xl font-black text-[#1a2b4a] mb-8 flex items-center gap-3">
                <FaCheckCircle className="text-[#4c9c6f]" /> Entry Requirements
              </h3>
              <ul className="space-y-4">
                {departmentData.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#E31E24] mt-2 shrink-0" />
                    <span className="text-sm font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Career Paths Section */}
            <section className="mb-12">
              <h3 className="text-2xl font-black text-[#1a2b4a] mb-8 flex items-center gap-3">
                <FaBriefcase className="text-[#E31E24]" /> Career Opportunities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departmentData.careerPaths.map((path, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-[#4c9c6f] hover:text-white transition-all group cursor-default">
                    <div className="bg-gray-100 group-hover:bg-white/20 p-3 rounded-lg">
                      <HiOutlineLightBulb className="text-[#4c9c6f] group-hover:text-white" />
                    </div>
                    <span className="font-bold text-sm">{path}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: SIDEBAR (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* 1. Search Box (image_eeb235.png) */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="text-[#1a2b4a] font-bold mb-4">Search Courses</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..." 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#E31E24] text-white px-4 rounded-lg hover:bg-[#c4191f]">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* 2. Contact Card (image_eeb235.png) */}
            <div className="bg-[#E31E24] p-8 rounded-2xl text-white shadow-xl shadow-red-500/20">
              <h4 className="text-xl font-black mb-4 leading-tight">Department Contact Info</h4>
              <p className="text-white/80 text-sm mb-6">Need more details about this program? Reach out to our admissions team.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#E31E24] px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors w-full justify-center">
                Get Started Today <FaChevronRight />
              </Link>
            </div>

            {/* 3. Latest Updates (image_eeb235.png) */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-[#1a2b4a] font-bold mb-6 border-b border-gray-100 pb-4">Latest Updates</h4>
              <div className="space-y-6">
                {departmentData.latestUpdates.map((update, i) => (
                  <div key={i} className="group cursor-pointer">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{update.date}</span>
                    <h5 className="text-sm font-bold text-[#1a2b4a] group-hover:text-[#4c9c6f] transition-colors leading-snug mt-1">
                      {update.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Downloads Section (Additional Appropriate Section) */}
            <div className="bg-[#1F2E4F] p-8 rounded-2xl text-white">
              <h4 className="font-bold mb-6">Course Resources</h4>
              <button className="flex items-center justify-between w-full p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium border border-white/10 mb-3">
                Full Curriculum (PDF) <FaFileDownload className="text-[#4c9c6f]" />
              </button>
              <button className="flex items-center justify-between w-full p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
                Fee Structure (PDF) <FaFileDownload className="text-[#4c9c6f]" />
              </button>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}