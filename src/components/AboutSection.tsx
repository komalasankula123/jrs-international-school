import React from 'react';
import { Sparkles, ArrowRight, Compass, Target, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
  onOpenVideoTour?: () => void;
  onOpenAdmissionModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenAdmissionModal,
}) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dual Overlapping Image Collage with Center Rotating Seal Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative flex items-center gap-4 sm:gap-6 w-full max-w-[500px]">
              
              {/* Photo 1: Left / Lower Campus Architecture Photo */}
              <div className="w-1/2 pt-8 sm:pt-12">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/jrs-campus-hero-building.jpg"
                    alt="JRS International School Campus"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Photo 2: Right / Higher Students & Educators Photo */}
              <div className="w-1/2 pb-8 sm:pb-12">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 aspect-[3/4] group">
                  <img
                    src="/jrs-about-students.png"
                    alt="JRS International School Students"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Center Overlapping Circular Rotating Seal Stamp Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#002e6d] text-white flex items-center justify-center shadow-2xl border-4 border-white">
                  {/* Rotating Circular Text SVG */}
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full absolute inset-0 animate-spin"
                    style={{ animationDuration: '20s' }}
                  >
                    <path
                      id="sealCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] font-black tracking-[0.24em] uppercase fill-amber-300">
                      <textPath href="#sealCirclePath" startOffset="0%">
                        • ESTD 2021 • JRS INTERNATIONAL SCHOOL
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner Seal Core */}
                  <div className="w-12 h-12 rounded-full bg-[#17479d] flex flex-col items-center justify-center text-center shadow-inner border border-amber-300/40">
                    <GraduationCap className="w-5 h-5 text-amber-300" />
                    <span className="text-[7.5px] font-black text-white uppercase tracking-wider mt-0.5">JRS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Details Matching Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2 text-[#002e6d] font-bold text-xs uppercase tracking-[0.2em] mb-2.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Know About Our Institution</span>
            </div>

            {/* 2. Main Heading in Bold Serif */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-extrabold text-[#002e6d] leading-tight tracking-tight mb-4">
              About JRS International School
            </h2>

            {/* 3. Lead Paragraph */}
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold mb-3">
              Where dreams take flight and possibilities are limitless. Setting the benchmark for holistic CBSE education in Uppal, Hyderabad.
            </p>

            {/* 4. Description Body */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-6">
              JRS International School is a premier educational institution committed to nurturing global leadership with deep-rooted Indian values. Through innovative teaching methodologies, world-class smart infrastructure, dedicated faculty mentorship, and active student engagement, we empower young scholars to excel in academics, sports, and creative arts.
            </p>

            {/* 5. Two Feature Boxed Cards (Vision & Mission) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {/* Vision Card */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 text-[#002e6d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight">Our School Vision</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Global Values &amp; Mindset</p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-md transition-all flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight">Our School Mission</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Holistic Student Growth</p>
                </div>
              </div>
            </div>

            {/* 6. Call to Action Button */}
            <div>
              <button
                onClick={onOpenAdmissionModal || (() => scrollToSection('enquiry-form'))}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#002e6d] hover:bg-[#17479d] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>How to Apply</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

