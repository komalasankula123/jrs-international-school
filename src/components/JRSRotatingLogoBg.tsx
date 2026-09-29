import React from 'react';

interface JRSRotatingLogoBgProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center' | 'middle-right' | 'middle-left';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: string;
  isDark?: boolean;
  imageSrc?: string;
  className?: string;
}

export const JRSRotatingLogoBg: React.FC<JRSRotatingLogoBgProps> = ({
  position = 'top-right',
  size = 'lg',
  opacity = 'opacity-20',
  isDark = false,
  imageSrc = '/jrs-globe-hero.png',
  className = '',
}) => {
  const positionClasses = {
    'top-right': 'top-[-40px] right-[-40px] sm:top-[-60px] sm:right-[-60px]',
    'top-left': 'top-[-40px] left-[-40px] sm:top-[-60px] sm:left-[-60px]',
    'bottom-right': 'bottom-[-40px] right-[-40px] sm:bottom-[-60px] sm:right-[-60px]',
    'bottom-left': 'bottom-[-40px] left-[-40px] sm:bottom-[-60px] sm:left-[-60px]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'middle-right': 'top-1/2 right-[-40px] sm:right-[-60px] -translate-y-1/2',
    'middle-left': 'top-1/2 left-[-40px] sm:left-[-60px] -translate-y-1/2',
  };

  const sizeClasses = {
    sm: 'w-48 h-48 sm:w-64 sm:h-64',
    md: 'w-64 h-64 sm:w-80 sm:h-80',
    lg: 'w-80 h-80 sm:w-[440px] sm:h-[440px]',
    xl: 'w-[400px] h-[400px] sm:w-[580px] sm:h-[580px]',
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none select-none z-0 ${opacity} ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ambient Radial Color Glow */}
        <div
          className={`absolute inset-4 rounded-full blur-3xl ${
            isDark ? 'bg-red-500/20' : 'bg-red-600/15'
          } animate-globe-aura`}
        />

        {/* Outer 3D Orbital Ring (Clockwise Rotation) */}
        <div className="absolute inset-0 animate-orbit-slow flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
            <ellipse
              cx="200"
              cy="200"
              rx="185"
              ry="72"
              fill="none"
              stroke={isDark ? '#f87171' : '#dc2626'}
              strokeWidth="2.5"
              strokeDasharray="14 8"
              transform="rotate(-26 200 200)"
              className="opacity-70"
            />
            {/* Orbiting Satellite Dots */}
            <circle cx="372" cy="152" r="7" fill={isDark ? '#f87171' : '#dc2626'} className="filter drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <circle cx="30" cy="248" r="5" fill="#16a34a" className="filter drop-shadow-[0_0_6px_rgba(22,163,74,0.8)]" />
          </svg>
        </div>

        {/* Inner Counter-Orbital Ring (Counter-Clockwise Rotation) */}
        <div className="absolute inset-4 animate-orbit-reverse flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="54"
              fill="none"
              stroke={isDark ? '#4ade80' : '#16a34a'}
              strokeWidth="2"
              transform="rotate(34 200 200)"
              className="opacity-60"
            />
            {/* Inner Orbiting Satellite Dot */}
            <circle cx="335" cy="230" r="6" fill="#16a34a" className="filter drop-shadow-[0_0_6px_rgba(22,163,74,0.8)]" />
            <circle cx="65" cy="170" r="4.5" fill={isDark ? '#f87171' : '#dc2626'} />
          </svg>
        </div>

        {/* Center 3D Logo/Globe Image with Feathered Mask */}
        <div 
          className={`relative w-[76%] h-[76%] flex items-center justify-center animate-hero-globe rounded-full overflow-hidden ${
            isDark ? 'mix-blend-screen' : 'mix-blend-multiply'
          }`}
          style={{
            maskImage: 'radial-gradient(circle at center, black 50%, rgba(0,0,0,0.6) 70%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 50%, rgba(0,0,0,0.6) 70%, transparent 80%)',
          }}
        >
          <img
            src={imageSrc}
            alt="JRS Animated Emblem"
            className={`w-full h-full object-contain ${
              isDark 
                ? 'filter brightness-125 contrast-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                : 'filter contrast-110 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

