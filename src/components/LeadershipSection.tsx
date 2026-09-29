import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { leadershipMembers } from '../data/schoolData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#f8fbfd] relative overflow-hidden">
      {/* Ambient Brand Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left-to-Right Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-left">
          <div className="horsera-tag mx-auto">
            <Sparkles className="w-4 h-4 text-[#17479d]" />
            <span>Guiding Vision &amp; Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 reveal-text-left">
            Messages from the <span className="text-[#17479d]">School Leadership</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed reveal-text-left">
            Meet the experienced educators and visionaries dedicated to upholding uncompromised standards of academic excellence and moral integrity at JRS.
          </p>
        </div>

        {/* Leadership Cards Grid (Left Card reveal-left, Right Card reveal-right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Chairman (Slide from Left) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative flex flex-col justify-between group hover:border-[#17479d]/40 transition-all duration-300 reveal-left">
            <div className="space-y-6">
              
              {/* Profile Top Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-32 h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-400/30 bg-slate-100">
                    <img
                      src={leadershipMembers[0].image}
                      alt={leadershipMembers[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 -right-2 bg-[#17479d] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-white/20">
                    Chairman
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17479d] block">
                    Leadership &amp; Governance
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {leadershipMembers[0].name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    Chairman, JRS International School
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Carrying forward the vision of Dr. C Rajal Rao
                  </p>
                </div>
              </div>

              {/* Bio & Quote */}
              <div className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <Quote className="w-8 h-8 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-slate-700 text-sm italic leading-relaxed relative z-10">
                  "{leadershipMembers[0].quote}"
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {leadershipMembers[0].bio}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Uncompromised Quality &amp; Discipline</span>
              <span className="text-[#17479d] font-bold">JRS Governance</span>
            </div>
          </div>

          {/* Card 2: Principal (Slide from Right) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative flex flex-col justify-between group hover:border-[#17479d]/40 transition-all duration-300 reveal-right">
            <div className="space-y-6">
              
              {/* Profile Top Row */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-32 h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-400/30 bg-slate-100">
                    <img
                      src={leadershipMembers[1].image}
                      alt={leadershipMembers[1].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2.5 -right-2 bg-[#17479d] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-white/20">
                    Principal
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17479d] block">
                    Pedagogical Leadership
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {leadershipMembers[1].name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    Principal ({leadershipMembers[1].qualifications})
                  </p>
                  <p className="text-xs text-emerald-600 font-semibold pt-1">
                    “Tamaso Ma Jyotirgamaya” — Lead me from darkness to light
                  </p>
                </div>
              </div>

              {/* Bio & Quote */}
              <div className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <Quote className="w-8 h-8 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-slate-700 text-sm italic leading-relaxed relative z-10">
                  "{leadershipMembers[1].quote}"
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {leadershipMembers[1].bio}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Academic Excellence &amp; Compassion</span>
              <span className="text-[#17479d] font-bold">Principal's Desk</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
