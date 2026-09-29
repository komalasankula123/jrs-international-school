import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

interface AcademicStagesProps {
  onOpenAdmissionModal?: () => void;
}

const showcaseItems = [
  {
    id: 'learning',
    tabName: 'Learning',
    title: 'Academic Excellence & Learning',
    badge: 'Core Academic Excellence',
    description: 'Master conceptual depth and analytical thinking with our CBSE curriculum, smart digital classrooms, and dedicated faculty mentorship at every grade level.',
    image: '/jrs-classroom-study.png',
    alt: 'Interactive classroom study and collaborative learning at JRS School',
    highlights: ['CBSE Curriculum Mastery', 'Interactive Smart Classrooms', 'Individual Faculty Mentorship'],
  },
  {
    id: 'exploring',
    tabName: 'Exploring',
    title: 'Research & Creative Discovery',
    badge: 'Library & Innovation Labs',
    description: 'Dive deep into expansive library literature, language clubs, digital research, and modern science & robotics laboratories where curiosity turns into breakthrough discoveries.',
    image: '/jrs-library-reading.png',
    alt: 'Students reading and researching in the quiet JRS library',
    highlights: ['STEM & Robotics Labs', 'Rich Multi-Genre Library', 'Language & Coding Clubs'],
  },
  {
    id: 'showcasing',
    tabName: 'Showcasing',
    title: 'Projects & Public Showcase',
    badge: 'Exhibitions & Competitions',
    description: "Bring your hard work into the world—whether presenting scientific research, launching innovations, or representing JRS at prestigious inter-school Olympiads and arts exhibitions.",
    image: '/jrs-thumbs-up.jpg',
    alt: 'Confident JRS Students celebrating academic milestones',
    highlights: ['Inter-School Olympiads', 'Annual Science Exhibitions', 'Public Speaking & Debate'],
  },
  {
    id: 'leading',
    tabName: 'Leading',
    title: 'Athletics & Student Leadership',
    badge: 'Campus Life & Athletics',
    description: 'Build resilience, discipline, and character across our sprawling 10+ acre campus, athletic tracks, sports arenas, and democratic student council governance.',
    image: '/jrs-campus-walk.jpg',
    alt: 'Senior students in uniform and blazer embodying JRS leadership and discipline',
    highlights: ['10+ Acre Green Campus', 'Athletic Tracks & Courts', 'Student Council Governance'],
  },
];

export const AcademicStages: React.FC<AcademicStagesProps> = ({ onOpenAdmissionModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = showcaseItems[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <section 
      id="academic-stages" 
      className="relative bg-[#f8fafc] w-full py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative Rotating JRS Logo Background */}
      <JRSRotatingLogoBg position="top-right" size="lg" opacity="opacity-15" />
      <JRSRotatingLogoBg position="bottom-left" size="md" opacity="opacity-15" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Centered Lead Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Interactive Learning Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-serif mb-3">
            Holistic Growth Beyond the Blackboard
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            Courses are hands-on, project-based, and designed to help students build real-world skills through clubs, research, competitions, and leadership.
          </p>
        </div>

        {/* Clean Interactive Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {showcaseItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-700 hover:bg-red-50/50'
                }`}
              >
                <span>{item.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Showcase Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-[#090f0c] border border-slate-800 ring-1 ring-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px]"
              >
                {/* Left Side: High-Resolution Showcase Image */}
                <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden bg-slate-950">
                  <img
                    src={activeItem.image}
                    alt={activeItem.alt}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                </div>

                {/* Right Side: Deep Elegant Content Panel */}
                <div className="lg:col-span-6 p-6 sm:p-9 lg:p-11 flex flex-col justify-between relative bg-[#0a100d] text-white">
                  
                  {/* Decorative Star Watermark */}
                  <div className="absolute top-6 right-6 w-24 h-24 sm:w-28 sm:h-28 opacity-[0.06] pointer-events-none select-none text-white">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 0 C60 30 70 40 100 50 C70 60 60 70 50 100 C40 70 30 60 0 50 C30 40 40 30 50 0 Z" />
                    </svg>
                  </div>

                  {/* Text Details */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <span className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-green-400 bg-green-950/80 border border-green-700/60 px-3.5 py-1.5 rounded-full shadow-sm">
                        {activeItem.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-white tracking-tight leading-snug">
                      {activeItem.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                      {activeItem.description}
                    </p>

                    {/* Quick Highlights Checkpoints */}
                    <div className="pt-2 space-y-2">
                      {activeItem.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                    {/* Explore / Admission CTA */}
                    <button
                      onClick={onOpenAdmissionModal}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-red-600 hover:text-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
                    >
                      <span>Apply for Admission</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                    </button>

                    {/* Navigation Arrow Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        aria-label="Previous Stage"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 hover:bg-red-600 text-white border border-slate-700 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-sm"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next Stage"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 hover:bg-red-600 text-white border border-slate-700 flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-sm"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
