"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Laptop, Ruler, BookOpenText, Clock, Award, Shield, Users, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

const iconMap: Record<string, LucideIcon> = {
  Laptop, Ruler, BookOpenText, Clock, Award, Shield, Users, Target
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsData {
  heading: string;
  features: Feature[];
  videoUrl: string;
  image: SanityImageSource;
}

export const WhyChooseUsClient = ({ data }: { data: WhyChooseUsData }) => {
  const [showModal, setShowModal] = useState(false);

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  if (!data) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="mb-14">
              <span className="text-[#E31E24] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-[#1F2E4F] text-5xl font-black leading-tight tracking-tight">
                {data.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {data.features.map((feature, i) => {
                const IconComponent = iconMap[feature.icon] || Laptop;
                return (
                  <div key={i} className="flex flex-col group">
                    <div className="w-14 h-14 flex items-center justify-center mb-5">
                      <IconComponent className="text-[#E31E24] w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h4 className="text-[#1F2E4F] text-xl font-bold mb-3 tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <button
              type="button"
              aria-label="Play faculty overview video"
              className="relative w-[min(480px,80vw)] h-[min(480px,80vw)] rounded-full overflow-hidden border-8 border-white shadow-2xl group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E31E24]/40"
              onClick={() => setShowModal(true)}
            >
              <Image
                src={urlFor(data.image).width(720).height(720).quality(75).url()}
                alt="Feature visual"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 80vw, 480px"
              />
              <div className="absolute inset-0 bg-[#1F2E4F]/20" />
              <div className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Play className="text-[#E31E24] fill-[#E31E24] w-8 h-8 ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm">
          <button
            onClick={() => setShowModal(false)}
            aria-label="Close video"
            className="absolute top-8 right-8 text-white hover:text-[#E31E24] transition-colors"
          >
            <X size={40} />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Faculty overview video"
              className="w-full h-full"
              src={getEmbedUrl(data.videoUrl)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
