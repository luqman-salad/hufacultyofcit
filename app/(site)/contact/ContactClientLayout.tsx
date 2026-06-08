"use client";

import React, { useState } from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaClock, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn,
  FaPaperPlane,
  FaMapLocationDot
} from "react-icons/fa6";

interface ContactContent {
  heroTitle: string;
  resolvedHeroImage: string;
  email: string;
  phone: string;
  location: string;
  hours: string;
  connectText: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  googleMapsUrl: string;
}

interface Props {
  content: ContactContent;
}

export default function ContactClientLayout({ content }: Props) {
  // Form submission matrix container state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transmission Data Output Array: ", formData);
  };

  const contactInfoGrid = [
    { title: "Email Us", value: content.email, icon: <FaEnvelope />, color: "text-[#E31E24]", href: `mailto:${content.email}` },
    { title: "Call Us", value: content.phone, icon: <FaPhone />, color: "text-[#4c9c6f]", href: `tel:${content.phone}` },
    { title: "Location", value: content.location, icon: <FaLocationDot />, color: "text-[#BF833D]", href: content.googleMapsUrl },
    { title: "Working Hours", value: content.hours, icon: <FaClock />, color: "text-[#1a2b4a]", href: null }
  ];

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title={content.heroTitle} 
        backgroundImage={content.resolvedHeroImage} 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-24">
        
        {/* 1. Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {contactInfoGrid.map((info, i) => {
            const Wrapper = info.href ? 'a' : 'div';
            return (
              <Wrapper 
                key={i} 
                href={info.href || undefined}
                {...(info.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="p-8 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 group text-center block cursor-default data-[has-link=true]:cursor-pointer"
                {...(info.href ? { 'data-has-link': 'true' } : {})}
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl mb-6 ${info.color} group-hover:bg-[#1a2b4a] group-hover:text-white transition-all`}>
                  {info.icon}
                </div>
                <h4 className="text-[#1a2b4a] font-bold text-sm uppercase tracking-widest mb-2">{info.title}</h4>
                <p className="text-gray-600 font-semibold break-words">{info.value}</p>
              </Wrapper>
            );
          })}
        </div>

        {/* 2. Form & Socials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Message Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-50">
            <div className="mb-12">
              <h3 className="text-4xl font-black text-[#1a2b4a] mb-4">Send us a Message</h3>
              <p className="text-gray-500">Have a question about our programs or research? We're here to help.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Admission Inquiry" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5} 
                  required
                  placeholder="How can we assist you?" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto bg-[#1a2b4a] hover:bg-[#E31E24] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-red-100 cursor-pointer">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Right: Socials & Clickable Google Map Box Wrapper */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h4 className="text-2xl font-black text-[#1a2b4a] mb-6">Connect with us</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {content.connectText}
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, url: content.facebookUrl },
                  { icon: <FaTwitter />, url: content.twitterUrl },
                  { icon: <FaLinkedinIn />, url: content.linkedinUrl }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-14 h-14 rounded-2xl bg-[#1a2b4a] text-white flex items-center justify-center hover:bg-[#E31E24] hover:-translate-y-1 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Clickable Map Link Element */}
            <a 
              href={content.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Open Faculty Campus Location in Google Maps"
              className="relative rounded-[3rem] overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-[400px] border-4 border-white bg-gradient-to-br from-gray-50 to-gray-100 group block transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
            >
               {/* Center Location Map Design Matrix */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1a2b4a]/10 pointer-events-none z-10 transition-transform group-hover:-translate-y-2 duration-500">
                  <FaLocationDot size={90} className="text-[#E31E24]/90 drop-shadow-xl animate-bounce" />
                  <FaMapLocationDot size={180} className="text-[#1a2b4a]/5 -mt-6" />
               </div>

               {/* Hover Activation Tooltip Overlay */}
               <div className="absolute inset-0 bg-[#1a2b4a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                 <span className="bg-white text-[#1a2b4a] text-xs font-black tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   Open Google Maps Directions
                 </span>
               </div>
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}