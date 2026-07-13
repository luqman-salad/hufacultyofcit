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
  FaMapMarkerAlt 
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#1F2E4F] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-widest">Faculty of CIT</h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of tech innovators through practical education and digital excellence.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E31E24] transition-all"><FaFacebookF size={14} /></Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E31E24] transition-all"><FaTwitter size={14} /></Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E31E24] transition-all"><FaLinkedinIn size={14} /></Link>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-[#BF833D] uppercase text-sm tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Faculty</Link></li>
              <li><Link href="/staff" className="hover:text-white transition-colors">Staff Directory</Link></li>
              <li><Link href="/research" className="hover:text-white transition-colors">Research Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="space-y-4 text-sm text-gray-300">
            <h3 className="font-bold mb-6 text-[#BF833D] uppercase text-sm tracking-widest">Reach Us</h3>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#E31E24]" /> Mogadishu, Banadir, Somalia</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-[#E31E24]" /> (+252) 61 XXXXXXX</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-[#E31E24]" /> info@cit.edu.so</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-[11px] text-gray-400 uppercase tracking-widest">
          <p>© 2026 Faculty of CIT. Designed & Developed by Luqman</p>
        </div>
      </div>
    </footer>
  );
};