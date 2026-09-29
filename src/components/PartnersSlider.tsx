import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

interface PartnerItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badgeContent: React.ReactNode;
}

export const PartnersSlider: React.FC = () => {
  const partners: PartnerItem[] = [
    {
      id: 'eduten',
      name: 'Eduten Finland Math®',
      tagline: 'World-Leading Finnish Math Learning Platform',
      category: 'Digital Pedagogy',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-emerald-700 text-white shadow-md border border-emerald-600">
          <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center font-black text-xs">
            E
          </div>
          <div className="text-left leading-tight">
            <div className="text-[11px] font-medium tracking-wide text-emerald-100 uppercase">eduten</div>
            <div className="text-xs font-black tracking-wider text-white">FINLAND MATH®</div>
          </div>
        </div>
      ),
    },
    {
      id: 'oxford',
      name: 'Oxford University Press',
      tagline: 'Global Standard Academic & English Curriculum',
      category: 'Publications',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-700">
          <div className="w-7 h-7 rounded-full bg-blue-900/60 border border-blue-400/40 flex items-center justify-center text-xs font-serif font-bold text-sky-200">
            📖
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-serif font-black tracking-wider text-white uppercase">OXFORD</div>
            <div className="text-[9px] font-medium text-slate-300 tracking-wide uppercase">University Press</div>
          </div>
        </div>
      ),
    },
    {
      id: 'ted-ed',
      name: 'TED-Ed Student Talks',
      tagline: 'Public Speaking, Oratory & Thought Leadership',
      category: 'Life Skills',
      badgeContent: (
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-md border border-slate-200">
          <span className="text-base font-black tracking-tighter text-[#e62b1e]">TED</span>
          <span className="text-base font-bold text-slate-900">Ed</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold ml-1">Clubs</span>
        </div>
      ),
    },
    {
      id: 'cognospace',
      name: 'CognoSpace Learning',
      tagline: 'Hands-On Experiential & Cognitive Science Labs',
      category: 'Experiential STEM',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white shadow-md border border-slate-200">
          <div className="w-7 h-7 rounded-xl bg-orange-500/15 text-orange-600 flex items-center justify-center font-bold text-sm">
            ⚙️
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-black text-slate-900 tracking-tight">CognoSpace</div>
            <div className="text-[9px] font-semibold text-orange-600">Experiential Learning</div>
          </div>
        </div>
      ),
    },
    {
      id: 'ratnasagar',
      name: 'Ratna Sagar',
      tagline: 'Renowned CBSE & NCERT Educational Publishers',
      category: 'Academic Books',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white shadow-md border border-slate-200">
          <div className="w-7 h-7 rounded-full bg-amber-500/15 text-amber-700 flex items-center justify-center text-sm font-serif">
            🐚
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-serif font-black text-red-800 tracking-wide">Ratna Sagar</div>
            <div className="text-[9px] font-medium text-slate-500">Educative Books</div>
          </div>
        </div>
      ),
    },
    {
      id: 'cbse',
      name: 'CBSE Affiliated',
      tagline: 'Central Board of Secondary Education, New Delhi',
      category: 'National Board',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0d2c63] text-white shadow-md border border-blue-400/30">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-sky-300">
            ★
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-black tracking-wider text-white">CBSE DELHI</div>
            <div className="text-[9px] font-medium text-blue-200">Affiliated Curriculum</div>
          </div>
        </div>
      ),
    },
    {
      id: 'trinity',
      name: 'Trinity College London',
      tagline: 'International English & Communication Certifications',
      category: 'Global Assessment',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-700">
          <div className="w-7 h-7 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center font-serif text-xs font-bold">
            TR
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-serif font-black text-white">TRINITY</div>
            <div className="text-[9px] font-medium text-slate-300">College London</div>
          </div>
        </div>
      ),
    },
    {
      id: 'stem-robotics',
      name: 'Robotics & STEM Labs',
      tagline: 'Coding, AI Literacy & Robotics Workshops',
      category: 'Future Tech',
      badgeContent: (
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md border border-blue-500/30">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-cyan-300 flex items-center justify-center text-xs font-bold">
            🤖
          </div>
          <div className="text-left leading-tight">
            <div className="text-xs font-black tracking-wide text-white">STEM & AI</div>
            <div className="text-[9px] font-medium text-cyan-200">Robotics Lab</div>
          </div>
        </div>
      ),
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-12 lg:py-16 bg-[#071938] text-white border-y border-blue-900/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="horsera-tag-dark mx-auto mb-3">
          <Award className="w-3.5 h-3.5 text-sky-400" />
          <span>Educational Alliances & Curriculum Partners</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Empowered by World-Class Pedagogical Collaborations
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mt-2 font-normal">
          JRS International School integrates certified international platforms, digital math engines, and renowned publishing houses into everyday student learning.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track with Fade Mask Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient masks for clean infinity edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#071938] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#071938] to-transparent z-20 pointer-events-none"></div>

        {/* Moving Marquee Strip */}
        <div className="animate-marquee py-3 flex gap-5 items-center">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 bg-[#0d2c63]/90 hover:bg-[#17479d] border border-blue-400/25 hover:border-blue-400/60 rounded-2xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-4 min-w-[290px] sm:min-w-[320px] backdrop-blur-md group cursor-pointer"
            >
              {/* Logo / Badge container */}
              <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {partner.badgeContent}
              </div>

              {/* Partner Information */}
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-sky-300 mb-0.5">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  <span>{partner.category}</span>
                </div>
                <div className="font-serif font-bold text-white text-sm truncate group-hover:text-sky-100">
                  {partner.name}
                </div>
                <p className="text-[11px] text-slate-300 leading-snug truncate">
                  {partner.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
