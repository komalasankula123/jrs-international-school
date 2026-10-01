import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Rocket, Award, CheckCircle2, ArrowUpRight, ArrowRight } from 'lucide-react';

interface AcademicStagesProps {
  onOpenAdmissionModal?: () => void;
}

interface StageItem {
  id: string;
  stageName: string;
  grades: string;
  title: string;
  tagline: string;
  image: string;
  icon: React.ElementType;
  highlights: string[];
}

const stagesData: StageItem[] = [
  {
    id: 'pre-primary',
    stageName: 'PRE-PRIMARY',
    grades: 'NURSERY – UKG',
    title: 'Foundational Years',
    tagline: 'Ages 3 – 5 • Play-Way & Phonics',
    image: '/jrs-school-bus.jpg',
    icon: Sparkles,
    highlights: [
      'Activity-Based Learning',
      'Phonics & Early Numbers',
      'Sensory & Creative Play',
    ],
  },
  {
    id: 'primary',
    stageName: 'PRIMARY STAGE',
    grades: 'GRADES I – V',
    title: 'Preparatory Excellence',
    tagline: 'Ages 6 – 10 • Concept Discovery',
    image: '/jrs-library-reading.png',
    icon: BookOpen,
    highlights: [
      'NCERT Concept Mastery',
      'Interactive Smart Classes',
      '1:15 Faculty Mentoring',
    ],
  },
  {
    id: 'middle',
    stageName: 'MIDDLE SCHOOL',
    grades: 'GRADES VI – VIII',
    title: 'Middle School Rigor',
    tagline: 'Ages 11 – 14 • STEM & Analytical',
    image: '/jrs-student-writing.png',
    icon: Rocket,
    highlights: [
      'STEM Robotics Labs',
      'Language Olympiads & Debates',
      'Scientific Inquiry Hub',
    ],
  },
  {
    id: 'holistic',
    stageName: 'BEYOND ACADEMICS',
    grades: 'ALL GRADES',
    title: 'Holistic Leadership',
    tagline: '360° Growth • Sports & Arts',
    image: '/jrs-campus-walk.jpg',
    icon: Award,
    highlights: [
      'Athletic Arena & Sports',
      'Performing Arts & Choir',
      'Student Council Leadership',
    ],
  },
];

export const AcademicStages: React.FC<AcademicStagesProps> = ({ onOpenAdmissionModal }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId) || document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="academic-stages" 
      className="py-7 sm:py-9 lg:py-10 bg-slate-50/80 relative overflow-hidden border-y border-slate-200"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Royal Blue & Gold Index Theme */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <span className="text-[#002e6d] text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 inline-block shadow-2xs">
            Curated Academic Pathways
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Learning Beyond the Ordinary
          </h2>
          <div className="w-10 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
            A progressive CBSE learning journey designed to ignite curiosity, cultivate critical thinking, and build confident future leaders.
          </p>
        </div>

        {/* 4 Compact Streamlined Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
          {stagesData.map((stage, idx) => {
            const Icon = stage.icon;
            
            // Custom focal points for each original school photo
            const imagePosition = 
              stage.id === 'pre-primary' ? 'object-[center_20%]' :
              stage.id === 'middle' ? 'object-[center_20%]' :
              stage.id === 'holistic' ? 'object-[center_15%]' :
              'object-center';

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                onClick={onOpenAdmissionModal || (() => scrollToSection('#enquiry-form'))}
                className="group bg-white rounded-2xl p-2.5 sm:p-3 pb-3.5 sm:pb-4 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer select-none"
              >
                <div>
                  {/* 1. Compact Image Container */}
                  <div className="relative w-full h-[180px] sm:h-[195px] lg:h-[210px] rounded-xl overflow-hidden bg-slate-900 shadow-inner border border-slate-100">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imagePosition}`}
                      loading="lazy"
                    />
                    
                    {/* Bottom Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Grade Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#002e6d] text-[9.5px] font-black uppercase tracking-wider shadow-xs border border-slate-200/60">
                      {stage.grades}
                    </div>
                  </div>

                  {/* 2. Overlapping Circular Icon Badge */}
                  <div className="relative z-10 -mt-5 mx-auto flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#002e6d] group-hover:bg-amber-400 text-amber-300 group-hover:text-slate-950 border-[3px] border-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* 3. Text & Details Below (Compact Size) */}
                  <div className="text-center mt-2 px-1 space-y-0.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                      {stage.stageName}
                    </div>
                    <h3 className="font-serif text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#002e6d] transition-colors leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-[10.5px] text-slate-500 font-medium pb-1">
                      {stage.tagline}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-1 pt-2 border-t border-slate-100 text-left">
                      {stage.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-[10.5px] text-slate-700 font-medium leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Action CTA Button on Bottom */}
                <div className="pt-2.5 mt-2 border-t border-slate-100">
                  <div className="w-full py-1.5 px-2.5 rounded-lg bg-slate-50 group-hover:bg-[#002e6d] text-[#002e6d] group-hover:text-white border border-slate-200 group-hover:border-[#002e6d] text-[11px] font-bold transition-all duration-200 flex items-center justify-center gap-1 shadow-2xs">
                    <span>Apply for {stage.title}</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Admissions Banner Strip */}
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={onOpenAdmissionModal || (() => scrollToSection('#enquiry-form'))}
            className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#002e6d] hover:bg-[#17479d] text-white font-bold text-xs shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Enquire for Admissions 2026–2027</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
