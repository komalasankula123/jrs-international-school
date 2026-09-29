import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenAdmissionModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden select-none border-b border-slate-200">
      {/* Full-Screen Dynamic Responsive Hero Container with Full Bleed Photo Under Transparent Header */}
      <div className="relative w-full h-[90vh] sm:h-[94vh] lg:h-[98vh] min-h-[600px] max-h-[1100px] overflow-hidden bg-slate-950 flex flex-col justify-end">
        
        {/* Full Bleed High-Resolution Image Starting at y=0 Directly Under Transparent Header */}
        <img
          src="/jrs-campus-hero.png"
          alt="JRS International School Campus Building"
          className="absolute inset-0 w-full h-full object-cover object-top sm:object-[center_12%]"
          loading="eager"
        />

        {/* Top-Right Sky Patch to Cover Any Image Watermark Seamlessly */}
        <div className="absolute top-0 right-0 w-36 sm:w-48 h-12 sm:h-16 bg-[#2576b2] blur-[4px] pointer-events-none z-10 opacity-90" />

        {/* Left Bottom Completely Transparent 2-Line Content (Zero White Card Box) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 sm:pb-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg pointer-events-auto"
          >
            {/* Minimalist Eyebrow */}
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-red-600 block mb-1 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
              ✦ JRS International School
            </span>

            {/* Reduced 2 Lines Heading with High-Contrast Crisp Shadow */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug font-serif drop-shadow-[0_2px_5px_rgba(255,255,255,0.9)]">
              <span>Nurturing Global Minds,</span>
              <br />
              <span className="text-green-800 drop-shadow-[0_2px_5px_rgba(255,255,255,0.9)]">Empowering Future Leaders.</span>
            </h1>
          </motion.div>
        </div>

        {/* Animated Mouse & Chevron Scroll Down Indicator (Theme Colors: Red, Green, White, Black) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={scrollToAbout}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center cursor-pointer group select-none"
          role="button"
          aria-label="Scroll down to About section"
        >
          {/* Animated Mouse Body in Crisp White & Red */}
          <div className="w-6 sm:w-7 h-9 sm:h-10 rounded-full border-2 border-slate-900 bg-white/90 backdrop-blur-sm group-hover:border-red-600 flex items-start justify-center p-1.5 transition-all duration-300 shadow-md group-hover:shadow-lg">
            {/* Animated Mouse Wheel / Dot in Crimson Red & Green Cycle */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.3, 1],
                backgroundColor: ['#dc2626', '#16a34a', '#dc2626'],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-2 rounded-full shadow-xs"
            />
          </div>

          {/* Cascading 3 Downward Animated Chevrons in Theme Colors */}
          <div className="flex flex-col items-center -space-y-2 mt-0.5">
            {[
              { color: 'text-red-600' },
              { color: 'text-slate-900' },
              { color: 'text-green-700' },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              >
                <ChevronDown className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${item.color} group-hover:text-red-600 stroke-[2.8]`} />
              </motion.div>
            ))}
          </div>

          {/* Text: SCROLL DOWN */}
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 group-hover:text-red-600 transition-colors">
            Scroll Down
          </span>
        </motion.div>

      </div>
    </section>
  );
};
