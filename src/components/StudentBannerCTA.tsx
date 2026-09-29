import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

interface StudentBannerCTAProps {
  onOpenAdmissionModal: () => void;
}

export const StudentBannerCTA: React.FC<StudentBannerCTAProps> = ({ onOpenAdmissionModal }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
      {/* Horizontal Banner Container Inspired by Reference Design */}
      <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#071938] via-[#0d2c63] to-[#17479d] border border-blue-400/35 shadow-2xl overflow-hidden text-white">
        
        {/* JRS 3D Rotating Logo Orb in Background */}
        <JRSRotatingLogoBg position="top-right" size="lg" opacity="opacity-20" isDark={true} />
        <JRSRotatingLogoBg position="bottom-left" size="md" opacity="opacity-15" isDark={true} />

        {/* Ambient Radial Color Glows */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* 2-Column Content Grid: Left Content + Right 2 Students */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
          
          {/* Left Side: Headline, Subtitle, CTA Button (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 space-y-5 sm:space-y-6 reveal-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-semibold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>Admissions Open 2026 – 2027</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Start Your Child’s <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                Educational Journey
              </span> with JRS Today!
            </h2>

            {/* Subtext Description */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Empowering young minds with comprehensive CBSE curriculum, smart digital classrooms, modern STEM laboratories, sports excellence, and traditional Indian ethos.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-sky-50 text-[#17479d] font-bold text-sm shadow-xl transition-all duration-300 flex items-center gap-2.5 hover:scale-105 cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 text-[#17479d]" />
              </button>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Discover More</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-blue-200/90 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>CBSE Affiliated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sky-400" />
                <span>100% Pass Record</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>1:25 Teacher Ratio</span>
              </div>
            </div>

          </div>

          {/* Right Side: 2 Students in Uniform Image Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end pr-0 lg:pr-8 h-[320px] sm:h-[380px] lg:h-[440px] reveal-right">
            
            {/* Student Frame with Soft Vignette & Realistic Cutout Appearance */}
            <div className="relative w-full max-w-[420px] h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
              <img
                src="/jrs-students-campus.jpg"
                alt="2 JRS International School Students in Uniform"
                className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071938]/95 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge on Student Image (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#17479d] py-1.5 px-3.5 rounded-xl shadow-xl font-bold text-xs flex items-center gap-1.5 border border-white">
                <GraduationCap className="w-4 h-4 text-[#17479d]" />
                <span>Future-Ready Scholars</span>
              </div>

              {/* Bottom Floating Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">
                  JRS International School Uppal
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Nurturing Leaders for Tomorrow
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
