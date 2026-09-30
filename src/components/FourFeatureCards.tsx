import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Compass, Award, Sparkles } from 'lucide-react';

export const FourFeatureCards: React.FC = () => {
  const cards = [
    {
      title: "About JRS",
      subtitle: "Legacy of Values & Excellence",
      tag: "Since 2021",
      description: "Nurturing curious minds with a blend of global education standards and rich Indian cultural ethos.",
      highlights: ["100% Board Pass Track Record", "Value-Based Character Building"],
      icon: Compass,
      themeColor: "from-[#002E6D] to-[#0057B8]",
      accentBg: "bg-blue-50 text-[#002E6D] group-hover:bg-[#002E6D] group-hover:text-white",
      btnBg: "bg-[#002E6D] hover:bg-[#0057B8] text-white",
      glowColor: "group-hover:shadow-[#002E6D]/25",
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
      themeColor: "from-[#003F88] to-[#0070C9]",
      accentBg: "bg-sky-50 text-[#003F88] group-hover:bg-[#0070C9] group-hover:text-white",
      btnBg: "bg-[#0070C9] hover:bg-[#003F88] text-white",
      glowColor: "group-hover:shadow-[#0070C9]/25",
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
      themeColor: "from-[#004AAD] to-[#1683D8]",
      accentBg: "bg-blue-50 text-[#004AAD] group-hover:bg-[#1683D8] group-hover:text-white",
      btnBg: "bg-[#1683D8] hover:bg-[#004AAD] text-white",
      glowColor: "group-hover:shadow-[#1683D8]/25",
      image: "/jrs-campus-walk.jpg",
      alt: "Our Differentiators - Student Leadership & Values",
      link: "#academic-stages",
    },
    {
      title: "Beyond Classroom",
      subtitle: "Library, Research & Co-Curricular",
      tag: "360° Growth",
      description: "Fostering well-rounded personalities through science labs, arts, music, robotics, and public speaking clubs.",
      highlights: ["Robotics & Innovation Labs", "Arts, Music & Debate Clubs"],
      icon: Sparkles,
      themeColor: "from-[#173F9E] to-[#4F46B8]",
      accentBg: "bg-indigo-50 text-[#173F9E] group-hover:bg-[#4F46B8] group-hover:text-white",
      btnBg: "bg-[#4F46B8] hover:bg-[#173F9E] text-white",
      glowColor: "group-hover:shadow-[#4F46B8]/25",
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
          {/* Eyebrow in Deep Yellow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
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

        {/* 4 Feature Cards with Compact Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => scrollTo(card.link)}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl ${card.glowColor} transition-all duration-400 ease-out hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden h-[300px] sm:h-[330px]`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.themeColor} z-20`} />

                {/* 1. Full Card Image Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 brightness-95"
                    loading="lazy"
                  />
                  
                  {/* Subtle Base Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent transition-opacity duration-400" />
                  
                  {/* Darker Overlay on Hover for Maximum Text Readability */}
                  <div className="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 2. Top Header Floating Badges (Always Visible) */}
                <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 shadow-2xs group-hover:bg-white group-hover:text-black transition-colors">
                    {card.tag}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm backdrop-blur-md bg-white/90 text-slate-900 group-hover:scale-105`}>
                    <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                </div>

                {/* 3. Bottom Content Box */}
                <div className="relative z-10 p-3.5 sm:p-4 flex flex-col justify-end">
                  
                  {/* Title & Subtitle */}
                  <div className="transform transition-transform duration-300">
                    <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug font-serif drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium drop-shadow-sm mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Expanded content on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-28 group-hover:opacity-100 transition-all duration-300 ease-in-out pt-0 group-hover:pt-2">
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Footer Action Link */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-white/90 pt-2 border-t border-white/20 mt-2 group-hover:text-amber-300 transition-colors">
                    <span className="tracking-wide">Hover to learn more</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

