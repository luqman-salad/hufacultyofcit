import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface Dept {
  title: string;
  description: string;
  slug: { current: string } | null;
  heroImage: string;
}

async function getDepartments() {
  return client.fetch<Dept[]>(
    groq`*[_type == "department" && defined(slug.current)] | order(title asc) {
      title,
      description,
      slug,
      "heroImage": heroImage.asset->url
    }`
  );
}

export const Departments = async () => {
  const depts = await getDepartments();

  // Safety check: if depts is null/undefined, render nothing
  if (!depts || depts.length === 0) return null;

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-[1300px] mx-auto px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E31E24] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
              Academic Excellence
            </span>
            <h2 className="text-[#1F2E4F] text-4xl font-extrabold leading-tight">
              Explore Our Specialized <br />
              <span className="text-[#BF833D]">Departments</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-sm leading-relaxed">
            Choose a path that aligns with your career goals. Our programs are 
            aligned with international standards and local industry needs.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depts.map((dept: Dept, index: number) => {
            if (!dept.slug?.current) return null;

            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dept.heroImage || "/placeholder.png"}
                    alt={dept.title || "Department"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/80 via-[#1F2E4F]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Floating Icon Box */}
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#BF833D] transition-colors duration-300 z-10">
                    <BookOpen className="text-[#1F2E4F] group-hover:text-white w-6 h-6" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-[#1F2E4F] text-xl font-bold mb-4 group-hover:text-[#BF833D] transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-1 line-clamp-3">
                    {dept.description}
                  </p>
                  
                  <Link 
                    href={`/departments/${dept.slug?.current}`}
                    className="flex items-center gap-2 text-[#1F2E4F] font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    View Curriculum
                    <ArrowRight className="w-4 h-4 text-[#BF833D] group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
