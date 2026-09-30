import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Compass, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

export const FourFeatureCards: React.FC = () => {
  const cards = [
    {
      title: "About JRS",
      subtitle: "Legacy of Values & Excellence",
      tag: "Since 2021",
      description: "Nurturing curious minds with a blend of global education standards and rich Indian cultural ethos.",
      highlights: ["100% Board Pass Track Record", "Value-Based Character Building"],
      icon: Compass,
      themeColor: "from-rose-600 to-red-700",
      accentBg: "bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white",
      btnBg: "bg-rose-600 hover:bg-rose-700 text-white",
      glowColor: "group-hover:shadow-rose-600/25",
      image: "/jrs-thumbs-up.jpg",
      alt: "About JRS - Confident Students at Campus Gate",
      link: "#about",
    },
    {
      title: "Academics",
      subtitle: "CBSE Curriculum & Smart Classrooms",
      tag: "Grades Nursery - X",
      description: "Experiential NCERT learning with digital smartboards, personalized faculty care, and STEM inquiry.",
      highlights: ["Smart Interactive Classrooms", "1:25 Teacher-Student Ratio"],
      icon: BookOpen,
      themeColor: "from-emerald-600 to-teal-700",
      accentBg: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
      btnBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      glowColor: "group-hover:shadow-emerald-600/25",
      image: "/jrs-classroom-study.png",
      alt: "Academics - Dedicated Classroom Study & Mentorship",
      link: "#academic-stages",
    },
    {
      title: "Our Differentiators",
      subtitle: "Leadership, Discipline & Sports",
      tag: "10+ Acres",
      description: "Expansive green campus with athletic tracks, sports arenas, disciplined student council, and 24/7 safe surveillance.",
      highlights: ["Athletic Sports Arena", "24/7 GPS & CCTV Safety"],
      icon: Award,
      themeColor: "from-amber-600 to-orange-700",
      accentBg: "bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
      btnBg: "bg-amber-600 hover:bg-amber-700 text-white",
      glowColor: "group-hover:shadow-amber-600/25",
      image: "/jrs-campus-walk.jpg",
      alt: "Our Differentiators - Student Leadership & Values",
      link: "#pillars",
    },
    {
      title: "Beyond Classroom",
      subtitle: "Library, Research & Co-Curricular",
      tag: "360° Growth",
      description: "Fostering well-rounded personalities through science labs, arts, music, robotics, and public speaking clubs.",
      highlights: ["Robotics & Innovation Labs", "Arts, Music & Debate Clubs"],
      icon: Sparkles,
      themeColor: "from-indigo-600 to-blue-700",
      accentBg: "bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white",
      btnBg: "bg-indigo-600 hover:bg-indigo-700 text-white",
      glowColor: "group-hover:shadow-indigo-600/25",
      image: "/jrs-library-reading.png",
      alt: "Beyond Classroom - Library Reading & Exploration",
      link: "#events",
    },
  ];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 relative overflow-hidden border-t border-slate-100">
      {/* Decorative Rotating JRS Logo Background */}
      <JRSRotatingLogoBg position="top-left" size="lg" opacity="opacity-15" />
      <JRSRotatingLogoBg position="bottom-right" size="md" opacity="opacity-10" />
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-rose-50/50 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          {/* Eyebrow in Theme Red */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Discover JRS School</span>
          </div>

          {/* Main Title in Black */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight font-serif mb-3">
            Pillars of Educational Excellence
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Hover over any pillar to explore how our academic rigor, holistic values, modern infrastructure, and student leadership shape tomorrow's pioneers.
          </p>
        </motion.div>

        {/* 4 Feature Cards with Image-First & Interactive Cursor-Hover Content Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => scrollTo(card.link)}
                className={`group relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl ${card.glowColor} transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden h-[420px] sm:h-[450px]`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.themeColor} z-20`} />

                {/* 1. Full Card Image Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 group-hover:blur-[1px] brightness-95"
                    loading="lazy"
                  />
                  
                  {/* Subtle Base Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-500" />
                  
                  {/* Darker Overlay on Hover for Maximum Text Readability */}
                  <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* 2. Top Header Floating Badges (Always Visible) */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 shadow-sm group-hover:bg-white group-hover:text-black transition-colors">
                    {card.tag}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-md bg-white/90 text-slate-900 group-hover:scale-110`}>
                    <Icon className="w-4 h-4 stroke-[2.4]" />
                  </div>
                </div>

                {/* 3. Bottom Content Box (Smooth Slide-Up & Reveal on Cursor Hover) */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                  
                  {/* Title & Subtitle (Always Visible at bottom) */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug font-serif drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-sm mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Hidden Content that Slides Up and Appears on Cursor Placement / Hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out pt-0 group-hover:pt-3">
                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                      {card.description}
                    </p>

                    {/* Quick Highlight Checkpoints */}
                    <div className="space-y-1.5 mb-3.5">
                      {card.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-[11px] text-white/90 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Explore Button */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/15">
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <span>Explore {card.title}</span>
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${card.btnBg}`}>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Prompt cue when not hovered */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-white/80 group-hover:hidden pt-2 border-t border-white/20 mt-2">
                    <span>Hover to learn more</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Description Paragraph */}
        <div className="max-w-4xl mx-auto text-center px-4 pt-4 border-t border-slate-200/60">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            <span className="font-bold text-slate-950">JRS International School</span> has been committed to the promotion of education and human values since 2021. It strives to enhance inherent skills and empower the physical, emotional, and intellectual faculties of its students through comprehensive quality education, incorporating global trends with Indian ethos.
          </p>
        </div>

      </div>
    </section>
  );
};

