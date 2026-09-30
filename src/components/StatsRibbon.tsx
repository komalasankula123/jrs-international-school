import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Users, Award, Trees, Trophy } from 'lucide-react';
import { heroStats } from '../data/schoolData';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

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
    numericTarget = parseInt(value.replace('1:', ''), 10) || 25;
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
      // Ease-out cubic curve
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
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
      {prefix}{isInView ? displayValue : 0}{suffix}
    </span>
  );
};

export const StatsRibbon: React.FC = () => {
  const iconConfigs = [
    { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-sky-300" />, bg: 'bg-sky-500/15 border-sky-400/30' },
    { icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-red-300" />, bg: 'bg-red-500/15 border-red-400/30' },
    { icon: <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300" />, bg: 'bg-emerald-500/15 border-emerald-400/30' },
    { icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />, bg: 'bg-blue-500/15 border-blue-400/30' },
  ];

  return (
    <section className="relative z-20 py-5 sm:py-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Luxury Royal Blue & Forest Green Gradient Ribbon */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#091b36] via-[#0a3528] to-[#0c2347] border border-sky-500/30 shadow-2xl py-6 sm:py-7 px-6 sm:px-10 lg:px-12 backdrop-blur-xl overflow-hidden ring-1 ring-white/10">
        
        {/* Animated JRS Logo in Ribbon */}
        <JRSRotatingLogoBg position="middle-right" size="sm" opacity="opacity-30" isDark={true} />
        
        {/* Ambient Blue & Green Glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* 4 Counter Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/15 items-center relative z-10">
          {heroStats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center sm:items-start text-center sm:text-left group ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-3.5 mb-2.5">
                <div className={`p-2.5 sm:p-3 rounded-2xl border shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md ${iconConfigs[idx].bg}`}>
                  {iconConfigs[idx].icon}
                </div>
                <AnimatedCounter value={stat.value} />
              </div>
              <h4 className="text-white font-bold text-sm sm:text-base tracking-wide mt-1 flex items-center gap-1.5">
                <span>{stat.label}</span>
              </h4>
              <p className="text-xs sm:text-sm text-sky-100/80 mt-1 font-normal leading-relaxed">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
