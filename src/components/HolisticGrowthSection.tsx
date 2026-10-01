import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface HolisticGrowthSectionProps {
  onOpenAdmissionModal?: () => void;
}

interface StackCard {
  id: string;
  stepNum: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  statBadge: string;
  cardBg: string;
}

const stackCards: StackCard[] = [
  {
    id: 'learning',
    stepNum: '01',
    tag: 'CORE ACADEMIC EXCELLENCE',
    title: 'Academic Excellence & Learning',
    description: 'Master conceptual depth and analytical thinking with our CBSE curriculum, digitally-led smart classrooms, and personalized mentorship.',
    points: [
      'Comprehensive CBSE Curriculum from Nursery to Grade X',
      'Smart Interactive Flat Panels & Digital Learning Ecosystem',
      'Personalized Teacher Mentorship & Remedial Care',
    ],
    image: '/jrs-about-students.png',
    imageAlt: 'JRS Students Learning in Classroom',
    statBadge: '100% Concept Mastery',
    cardBg: '#021838',
  },
  {
    id: 'exploring',
    stepNum: '02',
    tag: 'STEM & DISCOVERY LABS',
    title: 'Hands-On Research & Innovation',
    description: 'Nurture scientific curiosity with advanced composite science labs, coding workshops, and AI-enabled computational thinking modules.',
    points: [
      'Advanced Composite Science Labs (Physics, Chemistry, Biology)',
      'Hands-on Robotics, Coding & Maker-Space Projects',
      'Annual Science Expos & Tech Discovery Workshops',
    ],
    image: '/event-science-expo.jpg',
    imageAlt: 'Students Conducting Science Lab Experiments',
    statBadge: 'Hands-On STEM Hub',
    cardBg: '#03204d',
  },
  {
    id: 'showcasing',
    stepNum: '03',
    tag: 'SPORTS & CULTURAL ARTS',
    title: 'Talent, Athletics & Creative Expression',
    description: 'Empower students to shine on stage and field through structured sports coaching, classical dance, choir, drama, and fine arts.',
    points: [
      'Full Turf Cricket, Football, Skating, Basketball & Yoga',
      'Performing Arts Academy (Vocal Music, Classical Dance & Drama)',
      'Inter-School Tournaments & State Level Representation',
    ],
    image: '/event-sports-meet.jpg',
    imageAlt: 'JRS Sports & Cultural Celebrations',
    statBadge: '25+ Co-Curricular Clubs',
    cardBg: '#071b3e',
  },
  {
    id: 'leading',
    stepNum: '04',
    tag: 'CHARACTER & CITIZENSHIP',
    title: 'Values, Empathy & Leadership',
    description: 'Cultivate responsible global citizens through democratically elected student councils, house mentorship systems, debate societies, and community outreach.',
    points: [
      'Democratically Elected Student Council & Prefect Body',
      'Model UN, Public Speaking & Inter-House Debates',
      'Community Service, Eco-Clubs & Social Responsibility',
    ],
    image: '/jrs-students-campus.jpg',
    imageAlt: 'Student Leaders on Campus',
    statBadge: 'Leadership for Life',
    cardBg: '#011229',
  },
];

export const HolisticGrowthSection: React.FC<HolisticGrowthSectionProps> = ({ onOpenAdmissionModal }) => {
  const scrollToEnquiry = () => {
    if (onOpenAdmissionModal) {
      onOpenAdmissionModal();
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="holistic-growth" className="py-7 sm:py-9 lg:py-10 bg-slate-50/90 relative overflow-visible border-t border-slate-200">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <span className="text-[#002e6d] text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 inline-block shadow-2xs">
            360° Student Development
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Holistic Growth Beyond the Blackboard
          </h2>
          <div className="w-10 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
            Scroll down to explore each pillar of holistic growth. Every program is hands-on, project-based, and designed to cultivate confident future leaders.
          </p>
        </div>

        {/* TRUE SCROLL-STACKING CARDS CONTAINER */}
        <div className="relative pb-10 sm:pb-16">
          {stackCards.map((card, idx) => {
            // Progressive top offset for natural sticky layering
            const stickyTop = 85 + idx * 24;

            return (
              <div
                key={card.id}
                style={{
                  top: `${stickyTop}px`,
                  zIndex: idx + 10,
                }}
                className="sticky mb-8 sm:mb-12 lg:mb-14 last:mb-0 transition-transform duration-300"
              >
                {/* Main Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white grid grid-cols-1 lg:grid-cols-12 min-h-[440px] hover:shadow-[0_25px_60px_-15px_rgba(0,46,109,0.3)] transition-shadow duration-300"
                >
                  
                  {/* Left Side: Clean Pure White Content Area */}
                  <div className="lg:col-span-6 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100">
                    
                    <div className="space-y-3.5">
                      {/* Top Meta: Step Number & Category Pill */}
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#002e6d] text-[10.5px] font-extrabold tracking-wider uppercase">
                          <Sparkles className="w-3 h-3 text-amber-500 fill-current" />
                          <span>{card.tag}</span>
                        </div>
                        <span className="font-serif text-lg font-bold text-slate-300">
                          {card.stepNum}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-900 tracking-tight leading-snug">
                        {card.title}
                      </h3>

                      {/* Subtitle / Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-0.5">
                        {card.description}
                      </p>

                      {/* Key Highlights Bullet List */}
                      <div className="space-y-2.5 pt-2.5 border-t border-slate-100">
                        {card.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-6 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={scrollToEnquiry}
                        className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#002e6d] hover:bg-[#17479d] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                      >
                        <span>Enquire for {card.title.split('&')[0] || card.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                      </button>

                      <span className="text-[11px] text-slate-400 font-medium">
                        Pillar {idx + 1} of {stackCards.length}
                      </span>
                    </div>

                  </div>

                  {/* Right Side: Deep Royal Navy Visual Frame */}
                  <div 
                    className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden flex items-center justify-center p-4 sm:p-6"
                    style={{ backgroundColor: card.cardBg }}
                  >
                    {/* Watermark Crest */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 opacity-10 pointer-events-none text-white">
                      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                        <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                      </svg>
                    </div>

                    {/* Inner Framed Image Card */}
                    <div className="relative w-full h-full min-h-[240px] sm:min-h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group/img">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Stat Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-amber-300 border border-white/20 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-current" />
                        <span>{card.statBadge}</span>
                      </div>

                      {/* Bottom Brand Pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#002e6d] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        JRS International School
                      </div>
                    </div>

                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
