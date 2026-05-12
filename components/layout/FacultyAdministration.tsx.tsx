"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importing from Font Awesome 6 and Hero Icons 2
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const administration = [
  {
    name: "Dr. Abdirahman Ahmed",
    role: "Chancellor",
    office: "Office of the Chancellor, Hormuud University",
    email: "chancellor@hormuud.edu.so",
    image: "/admin1.png", 
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Eng. Mohamed Ali",
    role: "Vice Chancellor",
    office: "Academic Affairs & Research Department",
    email: "v.chancellor@hormuud.edu.so",
    image: "/admin2.png",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Saredo Hassan",
    role: "Registrar",
    office: "Admissions & Student Records Office",
    email: "registrar@hormuud.edu.so",
    image: "/admin3.png",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Abdisalam Yusuf",
    role: "Finance Director",
    office: "Strategic Planning & Finance Department",
    email: "finance@hormuud.edu.so",
    image: "/admin4.png",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

export default function FacultyAdministration() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1300px] mx-auto">
        
        <h2 className="text-4xl font-semibold text-[#1a2b4a] text-center mb-16 tracking-tight">
          Faculty Administration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {administration.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-lg hover:border-gray-200 group"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#4c9c6f] mb-1 tracking-tight">
                {member.name}
              </h3>
              
              <p className="text-sm font-medium text-[#1a2b4a] mb-5 uppercase tracking-wide">
                {member.role}
              </p>

              <p className="text-sm text-[#5a6a85] leading-relaxed mb-8 flex-grow">
                {member.office}
              </p>

              {/* Social Links using React Icons */}
              <div className="flex items-center justify-center gap-5 mt-auto pt-6 border-t border-gray-100 w-full">
                <Link href={member.social.facebook} className="text-[#a0aec0] hover:text-[#1877F2] transition-colors">
                  <FaFacebookF size={18} />
                </Link>
                <Link href={member.social.twitter} className="text-[#a0aec0] hover:text-[#1DA1F2] transition-colors">
                  <FaTwitter size={18} />
                </Link>
                <Link href={member.social.linkedin} className="text-[#a0aec0] hover:text-[#0A66C2] transition-colors">
                  <FaLinkedinIn size={18} />
                </Link>
                <Link href={`mailto:${member.email}`} className="text-[#a0aec0] hover:text-[#4c9c6f] transition-colors">
                  <HiEnvelope size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}