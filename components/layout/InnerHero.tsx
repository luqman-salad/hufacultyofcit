"use client";

import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa6";

interface InnerHeroProps {
  title: string;
  backgroundImage?: string;
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
}

export const InnerHero = ({ 
  title, 
  backgroundImage = "/images/default-hero.jpg", 
  breadcrumb 
}: InnerHeroProps) => {
  return (
    <section className="relative h-[200px] md:h-[230px] w-full flex items-center overflow-hidden">
      {/* 1. Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Dark overlay to make text pop, matching image_f00752.jpg */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* 2. Content Container */}
      <div className="container max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight animate-fade-in-up">
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm md:text-base">
            <Link 
              href="/" 
              className="text-white/80 hover:text-[#4c9c6f] transition-colors font-medium"
            >
              Home
            </Link>
            
            {breadcrumb ? (
              breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <FaChevronRight className="text-white/40 text-[10px]" />
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="text-white/80 hover:text-[#4c9c6f] transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#4c9c6f] font-semibold">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <FaChevronRight className="text-white/40 text-[10px]" />
                <span className="text-[#4c9c6f] font-semibold">{title}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* 3. Decorative Bottom Border (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4c9c6f] to-[#1F2E4F]" />
    </section>
  );
};