import React, { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Sparkles, GraduationCap, Lightbulb, ShieldCheck } from 'lucide-react';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

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

    const duration = 1800;
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
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
      {prefix}{isInView ? displayValue : 0}{suffix}
    </span>
  );
};

export const StatsRibbon: React.FC = () => {
  const statsCards = [
    {
      icon: <Sparkles className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />,
      value: '100%',
      title: 'Academic Excellence',
      subtitle: 'Top-tier CBSE curriculum with 100% board success and conceptual clarity.',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />,
      value: '1:15',
      title: 'Teacher-Student Ratio',
      subtitle: 'Dedicated personalized attention ensuring no child is left behind.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />,
      value: '25+',
      title: 'Modern Labs & Activities',
      subtitle: 'STEM robotics, digital smart classes, arts, music, and sports arena.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white group-hover:text-amber-300 transition-colors" />,
      value: '10+',
      title: 'Years of Trust & Legacy',
      subtitle: 'Safe, CCTV-monitored green campus nurturing tomorrow’s global leaders.',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#001c40]">
      {/* Background Image - explicit img tag for 100% reliable rendering */}
      <img
        src="/jrs-reasons-bg.jpg"
        alt="JRS Students Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Balanced Royal Blue Tint Overlay for High Contrast & Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/70 via-[#002e6d]/50 to-[#001738]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Decorative Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Circular Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-10">
          {statsCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Circular Icon with Concentric Rings */}
              <div className="relative mb-5 flex items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400/50 p-2 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 flex items-center justify-center bg-[#002e6d]/70 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
                  {/* Middle Ring */}
                  <div className="w-full h-full rounded-full border border-white/60 p-2 flex items-center justify-center group-hover:border-amber-300 transition-colors duration-300">
                    {/* Inner Solid Circle */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#17479d] to-[#002e6d] border border-amber-300/80 flex items-center justify-center shadow-inner group-hover:shadow-[0_0_20px_rgba(245,158,11,0.7)] transition-shadow duration-300">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Counter Metric */}
              <div className="mb-2">
                <AnimatedCounter value={card.value} />
              </div>

              {/* Card Title - High visibility with golden amber styling and drop shadow */}
              <h3 className="text-amber-300 text-base sm:text-lg lg:text-xl font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-amber-200 transition-colors">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
