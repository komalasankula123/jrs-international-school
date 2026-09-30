import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenAdmissionModal?: () => void;
}

const heroSlides = [
  {
    id: 1,
    image: '/jrs-campus-building.jpg',
    alt: 'JRS International School Modern Campus Uppal',
    eyebrow: '✦ JRS International School',
    titleLine1: 'Nurturing Global Minds,',
    titleLine2: 'Empowering Future Leaders.',
    position: 'object-center sm:object-[center_45%]',
  },
  {
    id: 2,
    image: '/jrs-thumbs-up.jpg',
    alt: 'JRS Confident Students Celebrating Excellence',
    eyebrow: '✦ Holistic CBSE Education',
    titleLine1: 'Inspiring Confident Achievers,',
    titleLine2: 'Building Tomorrow\'s Leaders.',
    position: 'object-center sm:object-[center_35%]',
  },
  {
    id: 3,
    image: '/jrs-library-reading.png',
    alt: 'JRS Collaborative Library & Digital Learning',
    eyebrow: '✦ Discovery & STEM Excellence',
    titleLine1: 'Igniting Boundless Curiosity,',
    titleLine2: 'Shaping Tomorrow\'s Pioneers.',
    position: 'object-center sm:object-[center_35%]',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden select-none border-b border-slate-200">
      {/* Full-Screen Dynamic Responsive Hero Container */}
      <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[94vh] min-h-[550px] max-h-[1000px] overflow-hidden bg-slate-950 flex flex-col justify-end">
        
        {/* Animated Carousel Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover ${slide.position || 'object-center'}`}
              loading="eager"
            />
            {/* Subtle Gradient Overlays for High Contrast Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-black/30 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Left Bottom 2-Line Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 sm:pb-16 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl pointer-events-auto"
            >
              {/* Minimalist Eyebrow */}
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-red-500 block mb-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {slide.eyebrow}
              </span>

              {/* 2 Lines Heading with High-Contrast Crisp Shadow */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                <span>{slide.titleLine1}</span>
                <br />
                <span className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {slide.titleLine2}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Mouse & Chevron Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={scrollToAbout}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center cursor-pointer group select-none"
          role="button"
          aria-label="Scroll down to About section"
        >
          {/* Animated Mouse Body */}
          <div className="w-6 sm:w-7 h-9 sm:h-10 rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-md group-hover:border-red-500 flex items-start justify-center p-1.5 transition-all duration-300 shadow-lg">
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

          {/* Cascading Chevrons */}
          <div className="flex flex-col items-center -space-y-2 mt-0.5">
            {[
              { color: 'text-red-400' },
              { color: 'text-white' },
              { color: 'text-emerald-400' },
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
                <ChevronDown className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${item.color} group-hover:text-red-400 stroke-[2.8]`} />
              </motion.div>
            ))}
          </div>

          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white/90 group-hover:text-red-400 transition-colors drop-shadow-sm">
            Scroll Down
          </span>
        </motion.div>

      </div>
    </section>
  );
};
