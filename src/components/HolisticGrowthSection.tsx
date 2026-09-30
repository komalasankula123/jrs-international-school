import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Compass, Award, Users } from 'lucide-react';

interface HolisticGrowthSectionProps {
  onOpenAdmissionModal?: () => void;
}

interface TabContent {
  id: string;
  label: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  statBadge: string;
}

const tabs: TabContent[] = [
  {
    id: 'learning',
    label: 'Learning',
    icon: BookOpen,
    tag: 'CORE ACADEMIC EXCELLENCE',
    title: 'Academic Excellence & Learning',
    description: 'Master conceptual depth and analytical thinking with our CBSE curriculum, digitally-led classrooms, and experienced mentors.',
    points: [
      'Comprehensive CBSE Curriculum from Nursery to Grade X',
      'Smart Interactive Flat Panels & Digital Learning Ecosystem',
      'Personalized Teacher Mentorship & Remedial Support'
    ],
    image: '/jrs-about-students.png',
    imageAlt: 'JRS Students Learning in Classroom',
    statBadge: '100% Concept Mastery'
  },
  {
    id: 'exploring',
    label: 'Exploring',
    icon: Compass,
    tag: 'STEM & DISCOVERY LABS',
    title: 'Hands-On Research & Innovation',
    description: 'Nurture scientific curiosity with composite science labs, coding workshops, and AI-enabled computational thinking modules.',
    points: [
      'Advanced Composite Science Labs (Physics, Chem, Bio)',
      'Hands-on Robotics, Coding & Maker-Space Projects',
      'Annual Science Expos & Tech Discovery Workshops'
    ],
    image: '/event-science-expo.jpg',
    imageAlt: 'Students Conducting Science Lab Experiments',
    statBadge: 'Hands-On STEM Hub'
  },
  {
    id: 'showcasing',
    label: 'Showcasing',
    icon: Award,
    tag: 'SPORTS & CULTURAL ARTS',
    title: 'Talent, Athletics & Creative Expression',
    description: 'Empower students to shine on stage and field through structured sports coaching, classical dance, choir, drama, and fine arts.',
    points: [
      'Full Turf Cricket, Football, Skating, Basketball & Yoga',
      'Performing Arts Academy (Vocal, Classical Dance & Drama)',
      'Inter-School Tournaments & State Level Representation'
    ],
    image: '/event-sports-meet.jpg',
    imageAlt: 'JRS Sports & Cultural Celebrations',
    statBadge: '10+ Co-Curricular Clubs'
  },
  {
    id: 'leading',
    label: 'Leading',
    icon: Users,
    tag: 'CHARACTER & STUDENT COUNCIL',
    title: 'Values, Empathy & Leadership',
    description: 'Cultivate responsible global citizens through student councils, house mentorship systems, debate societies, and community outreach.',
    points: [
      'Democratically Elected Student Council & Prefect Body',
      'Model UN, Public Speaking & Inter-House Debates',
      'Community Service, Eco-Clubs & Social Responsibility'
    ],
    image: '/jrs-students-campus.jpg',
    imageAlt: 'Student Leaders on Campus',
    statBadge: 'Leadership for Life'
  }
];

export const HolisticGrowthSection: React.FC<HolisticGrowthSectionProps> = ({ onOpenAdmissionModal }) => {
  const [activeTab, setActiveTab] = useState<string>('learning');

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const scrollToEnquiry = () => {
    if (onOpenAdmissionModal) {
      onOpenAdmissionModal();
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="holistic-growth" className="py-12 lg:py-16 bg-[#f8fafc] relative overflow-hidden reveal-on-scroll">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#002e6d] tracking-tight">
            Holistic Growth Beyond the Blackboard
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Courses are hands-on, project-based, and designed to help students build real-world skills through clubs, research, competitions, and leadership.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#002e6d] text-white shadow-md shadow-blue-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:text-[#002e6d] border border-slate-200 hover:border-slate-300 shadow-2xs hover:bg-slate-50'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Split Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]"
          >
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative min-h-[240px] lg:min-h-full overflow-hidden group bg-slate-900">
              <img
                src={currentTab.image}
                alt={currentTab.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:hidden" />
              
              {/* Floating Stat Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-[11px] sm:text-xs font-semibold flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{currentTab.statBadge}</span>
              </div>
            </div>

            {/* Right Column: Dark Royal Blue Card Content */}
            <div className="lg:col-span-6 bg-[#041d44] text-white p-5 sm:p-7 lg:p-8 xl:p-10 flex flex-col justify-between relative overflow-hidden">
              
              {/* Background ambient star shape watermark */}
              <div className="absolute -top-10 -right-10 w-52 h-52 opacity-5 pointer-events-none text-white">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                </svg>
              </div>

              {/* Top Details */}
              <div className="space-y-3 relative z-10">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-sky-400/40 bg-sky-500/10 text-sky-300 text-[11px] font-bold tracking-wider uppercase">
                  <span>{currentTab.tag}</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
                  {currentTab.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal pt-1">
                  {currentTab.description}
                </p>

                {/* Key Points Bullet List */}
                <div className="space-y-3 pt-3 border-t border-white/10">
                  {currentTab.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-6 sm:pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <button
                  onClick={scrollToEnquiry}
                  className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Enquire for Holistic Growth</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 font-medium">
                  Nursery to Grade X CBSE Curriculum
                </span>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
