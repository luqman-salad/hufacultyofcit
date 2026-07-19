import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InnerHero } from "@/components/layout/InnerHero";
import { client } from "@/sanity/lib/client";
import { urlFor as imageUrlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaQuoteLeft } from "react-icons/fa6";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const urlFor = (source: SanityImageSource) => imageUrlFor(source).url();

async function getDeanMessageData() {
  const query = `*[_type == "deanMessagePage"][0]{
    heroTitle,
    heroImage,
    deanName,
    deanTitle,
    deanImage,
    facebookUrl,
    twitterUrl,
    linkedinUrl,
    email,
    phone,
    eyebrow,
    mainHeading,
    messageParagraphs
  }`;
  return await client.fetch(query);
}

export default async function DeansMessagePage() {
  const data = await getDeanMessageData();

  if (!data) {
    return (
      <div className="py-24 text-center font-mono text-xs text-gray-400">
        [ SYSTEM // INITIALIZING DEAN REGISTRY ENGINE... ]
      </div>
    );
  }

  return (
    <main className="bg-white pb-24">
      <InnerHero 
        title={data.heroTitle || "Dean's Message"} 
        backgroundImage={data.heroImage ? urlFor(data.heroImage) : "/multimediaimg.png"} 
      />

      <div className="container max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Profile Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                
                {/* Dean Portrait */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-white shadow-lg mb-6 bg-gray-200">
                  <Image 
                    src={data.deanImage ? urlFor(data.deanImage) : "/admin1.png"} 
                    alt={data.deanName || "Dean Portrait"} 
                    fill 
                    className="object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-[#1a2b4a] leading-tight mb-2">
                  {data.deanName || "Engr. Abdulrahman Ali Haji"}
                </h2>
                <p className="text-[#E31E24] font-bold text-sm uppercase tracking-wider mb-6">
                  {data.deanTitle || "Dean, Faculty of Computer Science & IT (CIT)"}
                </p>

                {/* Social & Contact links */}
                <div className="flex justify-center gap-4 mb-8">
                  <Link href={data.facebookUrl || "#"} className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaFacebookF />
                  </Link>
                  <Link href={data.twitterUrl || "#"} className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaTwitter />
                  </Link>
                  <Link href={data.linkedinUrl || "#"} className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <FaLinkedinIn />
                  </Link>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 text-sm justify-center">
                    <HiEnvelope className="text-[#E31E24]" />
                    <span>{data.email || "cit@just.edu.so"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm justify-center">
                    <HiPhone className="text-[#E31E24]" />
                    <span>{data.phone || "+252 61 XXX XXX"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Message */}
          <div className="lg:col-span-8">
            <div className="relative">
              <FaQuoteLeft className="absolute -top-10 -left-10 text-gray-100 text-8xl -z-10" />
              
              <header className="mb-12">
                <h3 className="text-[#E31E24] font-black text-lg uppercase tracking-widest mb-4">
                  {data.eyebrow || "Welcome to CIT"}
                </h3>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b4a] leading-[1.1]">
                  {data.mainHeading ? (
                    <>
                      {data.mainHeading.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2b4a] to-[#4c9c6f]">
                        {data.mainHeading.split(' ').pop()}
                      </span>
                    </>
                  ) : (
                    <>
                      Message From The{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a2b4a] to-[#4c9c6f]">
                        Dean
                      </span>
                    </>
                  )}
                </h1>
              </header>

              <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
                {data.messageParagraphs && data.messageParagraphs.length > 0 ? (
                  data.messageParagraphs.map((para: string, idx: number) => (
                    <p key={idx} className="font-medium text-[#1a2b4a] text-justify">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="font-medium text-[#1a2b4a] text-justify">
                    Please populate the message fields inside your content studio panel.
                  </p>
                )}
              </div>

              {/* Signature Section */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex items-center gap-6">
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-bold">Best Regards,</p>
                  <h4 className="text-2xl font-bold text-[#1a2b4a]">{data.deanName || "Engr. Abdulrahman Ali Haji"}</h4>
                  <p className="text-[#4c9c6f] font-bold">Dean Faculty of Computer Science and IT</p>
                  <p className="text-gray-600">Hormuud University</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
