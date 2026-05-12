"use client";

import React from 'react';
import Link from 'next/link';
import { InnerHero } from "@/components/layout/InnerHero";
import { FaEnvelope, FaLinkedinIn, FaGraduationCap } from "react-icons/fa6";

// Sample Data - This would ideally come from a CMS or database
const staffMembers = [
  {
    id: "dr-ahmed-hassan",
    name: "Dr. Ahmed Hassan",
    role: "Dean of Faculty",
    specialization: "Artificial Intelligence & ML",
    image: "/admin1.png",
    email: "dean@faculty.edu",
  },
  {
    id: "eng-sahal-ali",
    name: "Engr. Sahal Ali",
    role: "Head of Software Engineering",
    specialization: "Full-stack Development",
    image: "/admin2.png",
    email: "sahal@faculty.edu",
  },
  {
    id: "dr-jamila-mohamud",
    name: "Dr. Jamila Mohamud",
    role: "Associate Professor",
    specialization: "Cybersecurity & Cryptography",
    image: "/admin3.png",
    email: "jamila@faculty.edu",
  },
  {
    id: "prof-abdullahi-dirie",
    name: "Prof. Abdullahi Dirie",
    role: "Senior Lecturer",
    specialization: "Data Science & Big Data",
    image: "/admin4.png",
    email: "abdullahi@faculty.edu",
  },
  {
    id: "prof-abdullahi-dirie-2",
    name: "Prof. Abdullahi Dirie",
    role: "Senior Lecturer",
    specialization: "Data Science & Big Data",
    image: "/admin4.png",
    email: "abdullahi@faculty.edu",
  },
  {
    id: "prof-abdullahi-dirie-3",
    name: "Prof. Abdullahi Dirie",
    role: "Senior Lecturer",
    specialization: "Data Science & Big Data",
    image: "/admin4.png",
    email: "abdullahi@faculty.edu",
  },
];

export default function StaffPage() {
  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title="Faculty Staff" 
        backgroundImage="/researchimg.png" 
      />

      <div className="container mx-auto px-6 md:px-10 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#E31E24] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Our Experts</p>
          <h2 className="text-4xl font-black text-[#1a2b4a]">Meet Our Academic Staff</h2>
        </div>

        <div className="grid grid-cols-1 md:max-w-[1300px] md:mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffMembers.map((staff) => (
            <Link 
              key={staff.id} 
              href={`/staff/${staff.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/5] mb-6">
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4a] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                
                <img 
                  src={staff.image} 
                  alt={staff.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + staff.name + "&background=1a2b4a&color=fff&size=512";
                  }}
                />
                
                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E31E24] flex items-center justify-center text-white">
                      <FaEnvelope size={14} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a2b4a]">
                      <FaLinkedinIn size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#E31E24] mb-1">
                   <FaGraduationCap size={16} />
                   <span className="text-[10px] uppercase font-bold tracking-widest">{staff.role}</span>
                </div>
                <h4 className="text-xl font-black text-[#1a2b4a] group-hover:text-[#E31E24] transition-colors">
                  {staff.name}
                </h4>
                <p className="text-sm text-gray-500">{staff.specialization}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}