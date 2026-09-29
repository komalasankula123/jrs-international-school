import React from 'react';

const marqueeItems = [
  'Apply Now - Admissions 2026-27',
  'Admissions are Open! Nursery to Grade X — CBSE Affiliated (#3630283)',
  'Sprawling 10+ Acre Eco-Friendly Campus in Uppal, Hyderabad',
  '100% Board Pass Track Record with Dedicated Faculty Mentorship',
  'World-Class STEM Robotics Labs & Athletic Sports Arena',
  'Indian Ethos Blended with Global Educational Excellence',
];

export const SchoolMarquee: React.FC = () => {
  return (
    <div 
      className="w-full bg-[#a81c24] py-2 sm:py-2.5 relative overflow-hidden z-40 select-none shadow-inner border-y border-red-900/40"
      aria-label="Admissions Marquee Announcement"
    >
      {/* Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#a81c24] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#a81c24] to-transparent z-10 pointer-events-none" />

      {/* Marquee Row */}
      <div className="overflow-hidden w-full flex">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-0.5 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:gap-6 text-white text-xs sm:text-sm font-bold tracking-wide shrink-0"
            >
              <span>{item}</span>
              <span className="text-white text-xs sm:text-sm select-none opacity-90">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

