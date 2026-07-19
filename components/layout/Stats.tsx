import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { ComponentType } from 'react';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type StatIcon = ComponentType<{ className?: string }>;

// Helper to map string to Icon component
const getIcon = (name: string) => {
  const IconComponent = (LucideIcons as unknown as Record<string, StatIcon>)[name] || LucideIcons.HelpCircle;
  return IconComponent;
};

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface StatsData {
  stats?: StatItem[];
}

async function getStats() {
  return client.fetch<StatsData | null>(groq`*[_type == "statsSection"][0]`);
}

export const Stats = async () => {
  const data = await getStats();

  // Safety check: if data or stats are missing, render nothing
  if (!data?.stats) return null;

  return (
    <section className="relative py-20 bg-[#1F2E4F]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-10 w-px h-full bg-white" />
        <div className="absolute top-0 right-10 w-px h-full bg-white" />
      </div>

      <div className="max-w-[1250px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {data.stats.map((stat, i) => {
            const Icon = getIcon(stat.icon);
            return (
              <div 
                key={i} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#BF833D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#BF833D]/20 flex items-center justify-center group-hover:bg-[#BF833D] transition-colors duration-500">
                    <Icon className="text-[#BF833D] group-hover:text-white w-6 h-6 transition-colors duration-500" />
                  </div>
                  
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-[#BF833D]/80 text-[10px] uppercase font-bold tracking-[0.15em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
