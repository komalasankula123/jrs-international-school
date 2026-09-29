import React from 'react';
import { 
  GraduationCap, Sparkles, Building2, HeartHandshake, ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { fivePillars } from '../data/schoolData';

export const FivePillarsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#17479d]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#17479d]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#17479d]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#17479d]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#17479d]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#17479d]" />;
    }
  };

  const pillarImages = [
    "https://jrsinternationalschooluppal.com/wp-content/uploads/2022/11/15.jpg",
    "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/Untitled-1.webp",
    "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/jrs-international-school.webp",
    "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/WhatsApp-Image-2025-09-24-at-10.55.24_58c56a7f.jpg",
    "https://jrsinternationalschooluppal.com/wp-content/uploads/2023/03/jrs-save.jpg",
  ];

  return (
    <section id="pillars" className="py-20 lg:py-28 bg-white relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="horsera-tag mx-auto">
            <Sparkles className="w-4 h-4 text-[#17479d]" />
            <span>Our Five Pillars of Schooling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            The Foundational Pillars of <span className="text-[#17479d]">JRS Education</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every aspect of education at JRS International School is guided by these five core tenets to empower students physically, emotionally, and intellectually.
          </p>
        </div>

        {/* 5 Pillars Grid with Compact Visual Cards & Hover Text Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {fivePillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative h-[310px] sm:h-[320px] rounded-2xl lg:rounded-3xl overflow-hidden border border-blue-400/25 hover:border-blue-400/60 shadow-lg hover:shadow-2xl transition-all duration-400 ease-out hover:scale-[1.02] bg-[#0d2c63] cursor-pointer"
            >
              {/* 1. Full-Bleed Background Image (Always Visible Underneath) */}
              <img
                src={pillarImages[idx]}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/jrs-international-school.webp";
                }}
              />

              {/* 2. Base Subtle Ambient Vignette (Keeps top tags readable) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#071938]/60 via-transparent to-[#071938]/40 transition-opacity duration-400"></div>

              {/* 3. Smooth Dark/Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071938]/95 via-[#0d2c63]/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"></div>

              {/* 4. Top Badges (Pillar Tag & Circular Number) */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                <div className="bg-[#071938]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-blue-400/30 shadow-md">
                  Pillar {pillar.id}
                </div>
                <div className="w-8 h-8 rounded-full bg-white text-[#17479d] font-serif font-black text-xs flex items-center justify-center shadow-md border border-blue-200">
                  {pillar.id}
                </div>
              </div>

              {/* 5. Floating Icon Badge (Subtle resting state, elevates on hover) */}
              <div className="absolute top-14 left-3.5 p-2 rounded-xl bg-white/90 backdrop-blur-md text-[#17479d] shadow-md border border-white/60 transition-all duration-400 group-hover:scale-110 z-10">
                {getIcon(pillar.iconName)}
              </div>

              {/* 6. Content Container (Hidden by default, fades + slides up on hover) */}
              <div className="absolute inset-x-0 bottom-0 p-5 pt-10 flex flex-col justify-end z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed font-normal line-clamp-3 sm:line-clamp-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-semibold text-sky-300">
                  <span>JRS Core Tenet</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Admissions Callout Card (Matching Compact & Hover Reveal Behavior) */}
          <div className="group relative h-[310px] sm:h-[320px] rounded-2xl lg:rounded-3xl overflow-hidden border border-blue-400/40 hover:border-blue-400/70 shadow-lg hover:shadow-2xl transition-all duration-400 ease-out hover:scale-[1.02] bg-[#0d2c63] cursor-pointer">
            {/* Background Image */}
            <img
              src="https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/JRS-International-School-1.webp"
              alt="JRS Admissions Experience"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/jrs-international-school.webp";
              }}
            />

            {/* Base Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#071938]/60 via-transparent to-[#071938]/40 transition-opacity duration-400"></div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071938]/95 via-[#0d2c63]/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"></div>

            {/* Top Tag */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
              <div className="bg-[#17479d]/90 backdrop-blur-md text-sky-200 text-[11px] font-bold px-3 py-1 rounded-full border border-blue-400/40 shadow-md">
                Admissions 2026-27
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-[#17479d] font-serif font-black text-xs flex items-center justify-center shadow-md border border-blue-200">
                06
              </div>
            </div>

            {/* Content Container (Reveals smoothly on hover) */}
            <div className="absolute inset-x-0 bottom-0 p-5 pt-10 flex flex-col justify-end z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto">
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  Experience the JRS Difference Firsthand
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed font-normal line-clamp-2">
                  Schedule a personalized campus walkthrough and explore our modern science labs, sports arena, and classrooms.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/15">
                <a
                  href="#enquiry-form"
                  className="w-full py-2.5 px-4 bg-white hover:bg-blue-50 text-[#17479d] font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Campus Visit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#17479d]" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

