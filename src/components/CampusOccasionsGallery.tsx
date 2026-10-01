import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Mic, Cpu, BookOpen, Lightbulb, X, ArrowUpRight } from 'lucide-react';

interface OccasionItem {
  id: number;
  title: string;
  category: string;
  icon: React.ElementType;
  image: string;
  description: string;
}

const occasionsData: OccasionItem[] = [
  {
    id: 1,
    title: 'Sports Championships',
    category: 'Athletics & Games',
    icon: Trophy,
    image: '/event-sports-meet.jpg',
    description: 'High-energy track & field meets, football, basketball tournaments, and athletic achievements fostering teamwork and stamina.',
  },
  {
    id: 2,
    title: 'Auditorium & Stage',
    category: 'Performing Arts',
    icon: Mic,
    image: '/jrs-campus-assembly.png',
    description: 'Vibrant cultural fests, annual day ceremonies, musical theatre, and classical dance performances in our open-air arena.',
  },
  {
    id: 3,
    title: 'STEM & Robotics Hub',
    category: 'Innovation Labs',
    icon: Cpu,
    image: '/event-science-expo.jpg',
    description: 'Hands-on coding, science symposiums, robotics demonstrations, and AI workshops sparking curiosity and future skills.',
  },
  {
    id: 4,
    title: 'Smart Classrooms',
    category: 'Experiential Learning',
    icon: BookOpen,
    image: '/jrs-classroom-study.png',
    description: 'Interactive digital boards, concept-based NCERT learning, and individualized faculty mentoring for every student.',
  },
  {
    id: 5,
    title: 'Research & Library',
    category: 'Knowledge Hub',
    icon: Lightbulb,
    image: '/jrs-library-reading.png',
    description: 'Vast collection of global literature, STEM journals, quiet study reading pods, and debate preparation spaces.',
  },
];

export const CampusOccasionsGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<OccasionItem | null>(null);

  return (
    <section id="events" className="py-7 sm:py-9 lg:py-10 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <span className="text-[#002e6d] text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 inline-block shadow-2xs">
            Campus Life &amp; Highlights
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Occasions &amp; Campus Glimpses
          </h2>
          <div className="w-10 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
            Explore diverse celebrations, academic milestones, sports tournaments, and student life at JRS International School.
          </p>
        </div>

        {/* Exactly 5-Card Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {occasionsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer border border-slate-200 hover:-translate-y-1"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/50" />

                {/* Top Quick Action Indicator */}
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Content Box: Icon + Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 flex flex-col items-start">
                  {/* Clean Square Frosted Icon Badge */}
                  <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center mb-2 shadow-sm group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:border-amber-400 transition-all duration-300">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-white text-xs sm:text-sm font-bold leading-tight tracking-tight drop-shadow-sm group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
              onClick={() => setSelectedItem(null)}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-200"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer border border-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 bg-white text-slate-700">
                <p className="text-sm sm:text-base leading-relaxed mb-4 font-normal">
                  {selectedItem.description}
                </p>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2 rounded-xl bg-[#17479d] hover:bg-[#002e6d] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
