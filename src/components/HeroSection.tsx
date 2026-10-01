import React from 'react';
import { MapPin, Phone, ChevronDown } from 'lucide-react';

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

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />

        {/* Top Spacer for Navbar */}
        <div className="pt-14 sm:pt-16 lg:pt-20" />

        {/* Hero Body Bottom Area: Luxury Minimalist Scroll Indicator */}
        <div className="flex-1 flex flex-col items-center justify-end text-center px-4 sm:px-6 relative z-10 pb-4 sm:pb-5">
          <a
            href="#about"
            onClick={handleScrollToAbout}
            className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110 select-none"
            aria-label="Scroll down to explore"
          >
            {/* Transparent Outline Capsule with Glowing Gold Sliding Bead */}
            <div className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-[1.5px] border-white/80 group-hover:border-amber-400 flex justify-center pt-1.5 transition-colors shadow-[0_4px_16px_rgba(0,0,0,0.6)] bg-black/25 backdrop-blur-xs">
              <div className="w-1.5 h-2 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full animate-bounce shadow-[0_0_8px_#f59e0b]" />
            </div>

            {/* Micro Caption & Animated Chevron */}
            <div className="flex flex-col items-center mt-1.5 text-white/90 group-hover:text-amber-300 transition-colors">
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.3em] uppercase text-white/95 group-hover:text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                SCROLL
              </span>
              <ChevronDown className="w-3.5 h-3.5 -mt-0.5 text-amber-400 animate-pulse" />
            </div>
          </a>
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
