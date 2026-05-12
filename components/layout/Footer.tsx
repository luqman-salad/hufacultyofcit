"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFax 
} from "react-icons/fa";

export const Footer = () => {
  const latestNews = [
    {
      title: "Equity Providence: Connect for Health Info",
      date: "February 21, 2026",
      href: "/news/equity-providence"
    },
    {
      title: "Tea with the Alpha Delta Phi Society",
      date: "December 13, 2025",
      href: "/news/alpha-delta-phi"
    }
  ];

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ];

  return (
    <footer className="bg-[#002b34] text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                 {/* Replace with your HU logo */}
                 <Image src="/images/logo-white.png" alt="HU Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-none uppercase tracking-tighter">Academic</h2>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">University & College</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Leading higher education research institution, first of the new wave of U.S. universities founded in the 1960s.
            </p>

            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-gray-400 transition-colors"><FaFacebookF size={16} /></Link>
              <Link href="#" className="hover:text-gray-400 transition-colors"><FaTwitter size={16} /></Link>
              <Link href="#" className="hover:text-gray-400 transition-colors"><FaLinkedinIn size={16} /></Link>
            </div>
          </div>

          {/* 2. Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/20">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <FaMapMarkerAlt className="mt-1 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm leading-snug">Mogadishu Main Campus, <br />Banadir, Somalia</span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaPhoneAlt className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm">(+252) 61 XXXXXXX</span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaFax className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm">555 345 - 8554</span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaEnvelope className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm">office@academic.com</span>
              </li>
            </ul>
          </div>

          {/* 3. Latest News */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/20">
              Latest News
            </h3>
            <div className="space-y-8">
              {latestNews.map((news, i) => (
                <div key={i} className="group">
                  <Link href={news.href} className="block text-sm font-bold leading-tight group-hover:text-gray-300 transition-colors mb-2">
                    {news.title}
                  </Link>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Campus Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/20">
              Campus Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-sm overflow-hidden group bg-gray-800">
                  <Image 
                    src={img} 
                    alt="Campus" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-10 border-t border-white/5 text-center text-xs text-gray-500 tracking-wider">
          <p>Copyrights © 2026 All Rights Reserved by Academic. Developed by Luqman</p>
        </div>
      </div>
    </footer>
  );
};