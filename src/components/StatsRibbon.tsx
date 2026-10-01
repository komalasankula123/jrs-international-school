import React, { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Sparkles, GraduationCap, Lightbulb, ShieldCheck } from 'lucide-react';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  // Parse prefix, suffix, and numeric target
  let prefix = '';
  let suffix = '';
  let numericTarget = 0;

  if (value.startsWith('1:')) {
    prefix = '1:';
    numericTarget = parseInt(value.replace('1:', ''), 10) || 15;
  } else if (value.endsWith('%')) {
    suffix = '%';
    numericTarget = parseInt(value.replace('%', ''), 10) || 100;
  } else if (value.endsWith('+')) {
    suffix = '+';
    numericTarget = parseInt(value.replace('+', ''), 10) || 10;
  } else {
    numericTarget = parseInt(value, 10) || 0;
  }

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * numericTarget);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [isInView, numericTarget]);

  return (
    <span ref={ref} className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]">
      {prefix}{isInView ? displayValue : 0}{suffix}
    </span>
  );
};

export const StatsRibbon: React.FC = () => {
  const statsCards = [
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors" />,
      value: '100%',
      title: 'Academic Excellence',
    },
    {
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors" />,
      value: '1:15',
      title: 'Teacher-Student Ratio',
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors" />,
      value: '25+',
      title: 'Modern Labs & Activities',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors" />,
      value: '10+',
      title: 'Years of Trust & Legacy',
    },
  ];

  return (
    <section className="relative w-full py-7 sm:py-8 lg:py-9 overflow-hidden bg-[#001c40] border-y border-white/10">
      {/* Background Image - explicit img tag */}
      <img
        src="/jrs-reasons-bg.jpg"
        alt="JRS Students Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Royal Blue Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/85 via-[#002e6d]/70 to-[#001738]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Decorative Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Compact Circular Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {statsCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Circular Icon with Concentric Rings (Reduced Compact Size) */}
              <div className="relative mb-2 sm:mb-2.5 flex items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full border border-amber-400/60 p-1.5 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 flex items-center justify-center bg-[#002e6d]/70 backdrop-blur-md shadow-lg">
                  {/* Middle Ring */}
                  <div className="w-full h-full rounded-full border border-white/50 p-1 flex items-center justify-center group-hover:border-amber-300 transition-colors duration-300">
                    {/* Inner Solid Circle */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#17479d] to-[#002e6d] border border-amber-300/70 flex items-center justify-center shadow-inner group-hover:shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-shadow duration-300">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Counter Metric */}
              <div className="mb-0.5">
                <AnimatedCounter value={card.value} />
              </div>

              {/* Card Title */}
              <h3 className="text-amber-300 text-xs sm:text-sm font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-amber-200 transition-colors">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
