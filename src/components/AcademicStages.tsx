import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Rocket, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AcademicStagesProps {
  onOpenAdmissionModal?: () => void;
}

interface StageItem {
  id: string;
  stageName: string;
  grades: string;
  ageGroup: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
}

const stagesData: StageItem[] = [
  {
    id: 'pre-primary',
    stageName: 'Pre-Primary',
    grades: 'Nursery – UKG',
    ageGroup: 'Ages 3 – 5',
    title: 'Foundational Years',
    badge: 'Play-Way & Phonics',
    description: 'Nurturing curiosity, joy, and sensory motor development in a caring, vibrant, child-centric wonderland.',
    image: '/two-school-girls.jpg',
    icon: Sparkles,
    highlights: ['Activity-Based Learning', 'Phonics & Early Numbers', 'Sensory & Creative Play'],
  },
  {
    id: 'primary',
    stageName: 'Primary Stage',
    grades: 'Grades I – V',
    ageGroup: 'Ages 6 – 10',
    title: 'Preparatory Excellence',
    badge: 'Concept Discovery',
    description: 'Building strong foundational skills in languages, mathematics, environmental inquiry, and digital literacy.',
    image: '/jrs-classroom-study.png',
    icon: BookOpen,
    highlights: ['NCERT Concept Mastery', 'Interactive Smart Classes', '1:15 Faculty Mentoring'],
  },
  {
    id: 'middle',
    stageName: 'Middle School',
    grades: 'Grades VI – VIII',
    ageGroup: 'Ages 11 – 14',
    title: 'Middle School Rigor',
    badge: 'STEM & Analytical',
    description: 'Transitioning into advanced analytical thinking, experiential science labs, robotics coding, and athletic sports.',
    image: '/event-science-expo.jpg',
    icon: Rocket,
    highlights: ['STEM Robotics Labs', 'Language Olympiads & Debates', 'Scientific Inquiry Hub'],
  },
  {
    id: 'holistic',
    stageName: 'Beyond Academics',
    grades: 'All Grades',
    ageGroup: '360° Growth',
    title: 'Holistic Leadership',
    badge: 'Sports & Arts',
    description: 'Fostering disciplined character, teamwork, fine arts, and democratic student governance on our 10+ acre campus.',
    image: '/event-sports-meet.jpg',
    icon: Award,
    highlights: ['Athletic Arena & Sports', 'Performing Arts & Choir', 'Student Council Leadership'],
  },
];

export const AcademicStages: React.FC<AcademicStagesProps> = ({ onOpenAdmissionModal }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="academic-stages" className="py-8 sm:py-12 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-[#002e6d] text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-blue-50 border border-blue-200 inline-block mb-2 shadow-2xs">
            Curriculum &amp; Learning Stages
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight font-serif leading-tight">
            Academic Pathways at JRS
          </h2>
          <div className="w-10 h-1 bg-amber-400 mx-auto mt-2 mb-2.5 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            A progressive CBSE learning journey designed to ignite curiosity, cultivate critical thinking, and build confident future leaders.
          </p>
        </div>

        {/* 4-Card Stage Grid with Compact Equal Proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
          {stagesData.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 h-full"
              >
                {/* 1. Equal Top Image Banner (Compact 50% Proportion) */}
                <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-transparent" />

                  {/* Stage Grade Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#002e6d] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {stage.grades}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-white">
                    <div className="w-6 h-6 rounded-md bg-[#002e6d] text-amber-300 flex items-center justify-center shadow-xs">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase text-amber-300 tracking-wider leading-none">{stage.stageName}</div>
                      <div className="text-[9px] text-white/80 font-medium">{stage.ageGroup}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Equal Bottom Content Area (Compact 50% Proportion) */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-[#17479d] transition-colors leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal line-clamp-2 min-h-[32px]">
                      {stage.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-1 pt-1.5 border-t border-slate-100">
                      {stage.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 mt-1.5">
                    <button
                      onClick={onOpenAdmissionModal || (() => scrollToSection('enquiry-form'))}
                      className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#002e6d] text-[#002e6d] hover:text-white border border-slate-200 hover:border-[#002e6d] text-[11px] font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn shadow-2xs"
                    >
                      <span>Apply for {stage.stageName}</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
