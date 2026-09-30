import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenAdmissionModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const marqueeItems = [
    {
      location: 'Korremula X Road, Narapally, Hyderabad',
      phones: ['+91 95426 64980', '+91 83677 77545'],
      announcement: 'Admissions Open for 2026-2027 (Nursery to VIII Grade)',
    },
  ];

  return (
    <section className="relative w-full bg-[#002e6d] overflow-hidden select-none border-b border-slate-200">
      {/* Responsive Viewport Sized Hero Container */}
      <div className="relative w-full min-h-[540px] sm:min-h-[640px] md:h-[80vh] lg:h-[88vh] xl:h-[92vh] max-h-[960px] flex flex-col justify-between">
        
        {/* 1. Full-Bleed Campus Building Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/jrs-campus-hero-building.jpg"
            alt="JRS International School Campus Building Uppal"
            className="w-full h-full object-cover object-[center_35%] sm:object-[center_25%]"
            loading="eager"
          />
        </div>

        {/* Subtle Ambient Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

        {/* Top Spacer for Navbar */}
        <div className="pt-14 sm:pt-16 lg:pt-20" />

        {/* Hero Body Middle Area: Clean Campus View with Golden Scroll Down Indicator */}
        <div className="flex-1 flex flex-col items-center justify-end text-center px-4 sm:px-6 relative z-10 py-4">
          <div className="pb-2 sm:pb-4">
            {/* Interactive Animated Golden Scroll Down Indicator */}
            <a
              href="#about"
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105"
              aria-label="Scroll down to About section"
            >
              {/* Golden Mouse Shape */}
              <div className="w-6 h-10 sm:w-7 sm:h-11 rounded-full border-2 border-amber-400/90 group-hover:border-amber-300 flex justify-center pt-1.5 shadow-[0_0_12px_rgba(245,158,11,0.4)] backdrop-blur-xs bg-black/20">
                <div className="w-1.5 h-2.5 bg-amber-400 rounded-full animate-bounce" />
              </div>

              {/* Animated Chevrons */}
              <div className="flex flex-col items-center -space-y-1.5 my-1.5 text-amber-400">
                <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none animate-pulse" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '150ms' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '300ms' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              {/* Text Label */}
              <span className="text-amber-400 group-hover:text-amber-300 text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                SCROLL DOWN
              </span>
            </a>
          </div>
        </div>

        {/* 4. Bottom Full-Width Navy Location & Contact Marquee Strip */}
        <div className="relative z-20 w-full bg-[#17479d]/95 hover:bg-[#17479d] backdrop-blur-md text-white py-3 sm:py-3.5 px-4 border-t border-white/20 shadow-2xl overflow-hidden transition-colors">
          <div className="w-full flex items-center overflow-hidden whitespace-nowrap">
            <div 
              className="flex items-center gap-8 sm:gap-12 text-xs sm:text-sm md:text-base font-semibold tracking-wide"
              style={{
                animation: 'marquee 70s linear infinite',
                width: 'max-content',
              }}
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-8">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/95">
                    <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <span className="text-amber-400 font-bold select-none">✦</span>

                  {/* Phone */}
                  <div className="flex items-center gap-2 text-white/95">
                    <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                    <a href={`tel:${item.phones[0]}`} className="hover:text-amber-300 transition-colors">
                      {item.phones[0]}
                    </a>
                    <span>,</span>
                    <a href={`tel:${item.phones[1]}`} className="hover:text-amber-300 transition-colors">
                      {item.phones[1]}
                    </a>
                  </div>

                  <span className="text-amber-400 font-bold select-none">✦</span>

                  {/* Announcement */}
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <span>{item.announcement}</span>
                  </div>

                  <span className="text-amber-400 font-bold select-none">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
