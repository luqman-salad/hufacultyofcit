"use client";

import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaAward, 
  FaBookOpen, 
  FaGraduationCap, 
  FaFlask,
  FaLink,
  FaQuoteLeft,
  FaLinkedin,
  FaGoogleScholar
} from "react-icons/fa6";

export default function StaffDetailPage({ params }: { params: { id: string } }) {
  
  // Mock Data - In production, fetch this via Sanity or an API based on params.id
  const staff = {
    name: "Dr. Abdullahi Nur Mohamed",
    role: "Senior Associate Professor",
    department: "Computer & Information Technology",
    status: "Permanent Faculty",
    specialty: "Distributed Systems & Cybersecurity",
    image: "/staff-placeholder.png", // Replace with actual image path
    email: "a.nur@hormuud.edu.so",
    office: "Main Campus, Block C, Suite 402",
    hours: "Mon - Wed: 09:00 AM - 01:00 PM",
    bio: "Dr. Abdullahi is a veteran academic with over 15 years of experience in system architecture and network security. His work focuses on the intersection of blockchain protocols and regional data privacy. He has served as a consultant for several pan-African digital infrastructure projects.",
    stats: [
      { label: "Years Exp.", value: "15+" },
      { label: "Publications", value: "24" },
      { label: "Projects", value: "12" }
    ],
    education: [
      { degree: "Ph.D. in Computer Science", school: "University of Malaya", year: "2015" },
      { degree: "M.Sc. in Information Security", school: "Osmania University", year: "2010" }
    ],
    publications: [
      { title: "Resilient VPN Protocols for Emerging Markets", journal: "Intl. Journal of Network Security", year: "2023" },
      { title: "Localized AI Training Sets for Somali NLP", journal: "IEEE Systems Journal", year: "2021" }
    ],
    taughtCourses: [
      "Advanced Computer Networking",
      "Cryptography & Network Security",
      "Cloud Computing Architecture"
    ],
    interests: ["Blockchain Architecture", "Machine Learning", "IoT Security", "Ethical Hacking"]
  };

  return (
    <main className="bg-[#FAFBFB] pb-32 antialiased">
      {/* 1. PREMIUM HERO SECTION */}
      <div className="bg-[#1a2b4a] relative overflow-hidden pt-10 pb-15 px-6 max-h-[500px]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E31E24]/5 skew-x-12 translate-x-20" />
        
        <div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all" />
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white/20 shadow-2xl relative">
              <img 
                src={`https://ui-avatars.com/api/?name=${staff.name}&background=E31E24&color=fff&size=512`} 
                alt={staff.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="text-white text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BF833D] rounded text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <FaAward className="text-white" /> {staff.role}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
              {staff.name}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium italic flex items-center justify-center md:justify-start gap-3">
              {staff.specialty}
            </p>
            
            {/* Academic Stats */}
            <div className="flex gap-8 mt-10 justify-center md:justify-start border-t border-white/10 pt-8">
              {staff.stats.map((stat, i) => (
                <div key={i}>
                  <span className="block text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold text-white/50 tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BODY CONTENT */}
      <div className="container max-w-[1200px] mx-auto px-6 md:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* SIDEBAR: CONTACT & HOURS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-[#1a2b4a] text-xs font-black uppercase tracking-widest mb-8 pb-4 border-b border-gray-50 flex items-center gap-3">
                Information Registry
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Official Email</span>
                    <a href={`mailto:${staff.email}`} className="text-sm font-bold text-[#1a2b4a] hover:text-[#E31E24] transition-colors">
                      {staff.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <FaBuilding />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Office Location</span>
                    <span className="text-sm font-bold text-[#1a2b4a]">{staff.office}</span>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#E31E24] shrink-0">
                    <FaClock className="rotate-0" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Consultation Hours</span>
                    <span className="text-sm font-bold text-gray-600 leading-relaxed">{staff.hours}</span>
                  </div>
                </li>
              </ul>

              {/* Scholar Links */}
              <div className="mt-10 pt-8 border-t border-gray-50 flex gap-4">
                <a href="#" className="flex-1 bg-gray-50 p-3 rounded-xl flex items-center justify-center text-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white transition-all">
                  <FaLinkedin />
                </a>
                <a href="#" className="flex-1 bg-gray-50 p-3 rounded-xl flex items-center justify-center text-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white transition-all">
                  <FaGoogleScholar />
                </a>
                <a href="#" className="flex-1 bg-gray-50 p-3 rounded-xl flex items-center justify-center text-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white transition-all text-xs font-black">
                  CV
                </a>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 space-y-12 py-6">
            
            {/* BIO SECTION */}
            <section className="relative">
              <FaQuoteLeft className="absolute -top-4 -left-4 text-gray-100 text-6xl -z-10" />
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-[#BF833D]" /> Executive Summary
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                {staff.bio}
              </p>
            </section>

            {/* QUALIFICATIONS TIMELINE */}
            <section className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a2b4a] mb-8 flex items-center gap-3">
                <FaGraduationCap className="text-[#BF833D]" /> Academic Credentials
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
                {staff.education.map((edu, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#BF833D] z-10" />
                    <span className="font-mono text-xs text-gray-400 block mb-1">{edu.year}</span>
                    <h4 className="font-bold text-[#1a2b4a] text-base">{edu.degree}</h4>
                    <p className="text-xs text-gray-500 font-medium">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RESEARCH INTERESTS TAGS */}
            <section>
              <h3 className="text-lg font-bold text-[#1a2b4a] mb-6 flex items-center gap-3">
                <FaFlask className="text-[#4c9c6f]" /> Research Domains
              </h3>
              <div className="flex flex-wrap gap-2">
                {staff.interests.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:border-[#1a2b4a] transition-colors cursor-default">
                    # {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* TEACHING PORTFOLIO */}
            <section>
              <h3 className="text-lg font-bold text-[#1a2b4a] mb-6 flex items-center gap-3">
                <FaBookOpen className="text-[#E31E24]" /> Active Teaching Portfolio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {staff.taughtCourses.map((course, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50/50 border border-gray-100 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                    <span className="text-sm font-bold text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PUBLICATIONS LEDGER */}
            <section className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a2b4a] mb-8 flex items-center gap-3">
                <FaBookOpen className="text-[#1a2b4a]" /> Selected Publications
              </h3>
              <div className="space-y-6">
                {staff.publications.map((pub, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-[#1a2b4a] text-base leading-tight group-hover:text-[#E31E24] transition-colors max-w-xl">
                        {pub.title}
                      </h4>
                      <span className="font-mono text-xs text-gray-400">{pub.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      <span>{pub.journal}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="flex items-center gap-1 text-[#4c9c6f]"><FaLink /> DOI Entry</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

// Minimalist Consultation Hours Icon helper
function FaClock(props: any) {
  return (
    <svg 
      stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" 
      height="1em" width="1em" {...props}>
      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
    </svg>
  );
}