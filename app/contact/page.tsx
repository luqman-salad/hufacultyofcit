"use client";

import React from 'react';
import { InnerHero } from "@/components/layout/InnerHero";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaClock, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn,
  FaPaperPlane 
} from "react-icons/fa6";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Email Us",
      value: "info@faculty.edu.so",
      icon: <FaEnvelope />,
      color: "text-[#E31E24]"
    },
    {
      title: "Call Us",
      value: "+252 61 XXX XXXX",
      icon: <FaPhone />,
      color: "text-[#4c9c6f]"
    },
    {
      title: "Location",
      value: "Mogadishu, Banadir, Somalia",
      icon: <FaLocationDot />,
      color: "text-[#BF833D]"
    },
    {
      title: "Working Hours",
      value: "Sat - Thu: 8:00 AM - 4:00 PM",
      icon: <FaClock />,
      color: "text-[#1a2b4a]"
    }
  ];

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title="Contact Us" 
        backgroundImage="/researchimg.png" 
      />

      <div className="container max-w-[1300px] mx-auto px-6 md:px-10 mt-24">
        
        {/* 1. Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {contactInfo.map((info, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300 group text-center">
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl mb-6 ${info.color} group-hover:bg-[#1a2b4a] group-hover:text-white transition-all`}>
                {info.icon}
              </div>
              <h4 className="text-[#1a2b4a] font-bold text-sm uppercase tracking-widest mb-2">{info.title}</h4>
              <p className="text-gray-600 font-semibold">{info.value}</p>
            </div>
          ))}
        </div>

        {/* 2. Form & Socials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Message Form */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-50">
            <div className="mb-12">
              <h3 className="text-4xl font-black text-[#1a2b4a] mb-4">Send us a Message</h3>
              <p className="text-gray-500">Have a question about our programs or research? We're here to help.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Subject</label>
                <input type="text" placeholder="Admission Inquiry" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1a2b4a] uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} placeholder="How can we assist you?" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all resize-none"></textarea>
              </div>

              <button className="w-full md:w-auto bg-[#1a2b4a] hover:bg-[#E31E24] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-red-100">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Right: Socials & Map Placeholder */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h4 className="text-2xl font-black text-[#1a2b4a] mb-6">Connect with us</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Stay updated with the latest research milestones, student achievements, and faculty events 
                through our social media channels.
              </p>
              <div className="flex gap-4">
                {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />].map((icon, i) => (
                  <button key={i} className="w-14 h-14 rounded-2xl bg-[#1a2b4a] text-white flex items-center justify-center hover:bg-[#E31E24] hover:-translate-y-1 transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-sm aspect-square lg:aspect-auto lg:h-[400px] border-4 border-white bg-gray-100">
               {/* Map Placeholder or Actual Google Maps Embed */}
               <div className="absolute inset-0 flex items-center justify-center text-[#1a2b4a]/20">
                  <FaLocationDot size={80} className="animate-bounce" />
               </div>
               <img src="/map-placeholder.png" alt="Campus Map" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}