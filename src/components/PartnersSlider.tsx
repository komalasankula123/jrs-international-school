import React from 'react';

interface PartnerLogo {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const PartnersSlider: React.FC = () => {
  const partnerLogos: PartnerLogo[] = [
    {
      id: 'eduten',
      name: 'Eduten Finland Math',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-xl bg-[#008f7a] flex items-center justify-center shadow-xs mb-1">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-[#008f7a] lowercase tracking-tight leading-none">eduten</span>
          <span className="text-[11px] font-black text-[#00695c] uppercase tracking-wider leading-none mt-0.5">FINLAND MATH®</span>
        </div>
      ),
    },
    {
      id: 'oxford',
      name: 'Oxford University Press',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center px-1">
          {/* Oxford Crest */}
          <div className="w-8 h-8 rounded-full border border-slate-700 bg-slate-900/5 flex items-center justify-center mb-1">
            <span className="font-serif text-sm font-black text-slate-900">𝔒</span>
          </div>
          <span className="font-serif text-[12px] font-black text-slate-900 tracking-wider leading-none">OXFORD</span>
          <span className="text-[8px] font-semibold uppercase text-slate-600 tracking-widest leading-none mt-0.5">UNIVERSITY PRESS</span>
        </div>
      ),
    },
    {
      id: 'ted-ed',
      name: 'TED-Ed',
      renderLogo: () => (
        <div className="flex items-center justify-center">
          <span className="text-2xl font-black text-[#e62b1e] tracking-tighter leading-none">TED</span>
          <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">Ed</span>
        </div>
      ),
    },
    {
      id: 'cognospace',
      name: 'CognoSpace',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              🧠
            </div>
            <span className="text-[13px] font-black text-slate-900 tracking-tight">Cogno<span className="text-orange-600">Space</span></span>
          </div>
          <span className="text-[7.5px] font-medium text-slate-500 uppercase tracking-widest leading-none mt-1">Experiential Learning</span>
        </div>
      ),
    },
    {
      id: 'ratna-sagar',
      name: 'Ratna Sagar',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center px-1">
          <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-xs mb-0.5">
            🐚
          </div>
          <span className="font-serif text-[14px] font-extrabold text-[#b31b1b] tracking-wide leading-none">Ratna Sagar</span>
          <span className="text-[7.5px] font-medium text-slate-500 leading-none mt-0.5">Educational Publications</span>
        </div>
      ),
    },
    {
      id: 'british-council',
      name: 'British Council',
      renderLogo: () => (
        <div className="flex items-center justify-center gap-2">
          {/* 4 Dots */}
          <div className="grid grid-cols-2 gap-1 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0098db]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0098db]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0098db]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0098db]" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[11px] font-black text-slate-900 tracking-wider uppercase leading-none">BRITISH</div>
            <div className="text-[11px] font-black text-slate-900 tracking-wider uppercase leading-none mt-0.5">COUNCIL</div>
          </div>
        </div>
      ),
    },
    {
      id: 'cbse',
      name: 'CBSE Curriculum',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center px-1">
          <div className="w-7 h-7 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center text-xs font-bold mb-0.5 shadow-xs">
            ★
          </div>
          <span className="text-[12px] font-black text-blue-950 tracking-wider leading-none">CBSE DELHI</span>
          <span className="text-[8px] font-semibold text-slate-600 uppercase tracking-wider leading-none mt-0.5">Affiliated #3630397</span>
        </div>
      ),
    },
    {
      id: 'trinity',
      name: 'Trinity College London',
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif text-[13px] font-black text-slate-900 tracking-widest uppercase leading-none">TRINITY</span>
          <span className="text-[8px] font-semibold uppercase text-slate-600 tracking-widest leading-none mt-0.5">COLLEGE LONDON</span>
          <span className="text-[7.5px] text-blue-700 font-bold leading-none mt-0.5">Certified Center</span>
        </div>
      ),
    },
  ];

  // Quadruple for smooth infinite marquee looping
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-8 sm:py-10 bg-white text-slate-900 relative overflow-hidden border-y border-slate-200/80 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center relative z-10">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-red-600 block mb-1">
          Pedagogical Alliances &amp; Curriculum Partners
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-serif tracking-tight">
          JRS INTERNATIONAL SCHOOL
        </h2>
      </div>

      {/* Infinite Scrolling Logo Cards Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft Vignette Gradients on Edges matching white background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track using GPU animation */}
        <div className="animate-gallery-left gallery-track flex gap-4 sm:gap-6 py-2">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[140px] sm:w-[170px] h-[90px] sm:h-[105px] rounded-2xl bg-white shadow-md hover:shadow-xl border border-slate-200/90 flex items-center justify-center p-3 shrink-0 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {item.renderLogo()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
