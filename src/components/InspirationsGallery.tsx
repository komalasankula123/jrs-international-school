import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X, ZoomIn, Heart } from 'lucide-react';

interface GalleryCardItem {
  id: number;
  title: string;
  category: 'All' | 'Campus Life' | 'Sports' | 'STEM & Labs' | 'Arts & Culture';
  image?: string;
  isQuote?: boolean;
  quoteText?: string;
  quoteAuthor?: string;
  isVideo?: boolean;
  aspect: 'wide' | 'tall' | 'square' | 'standard';
  avatars: string[];
  likes: number;
}

const galleryItems: GalleryCardItem[] = [
  {
    id: 1,
    title: 'STEM Robotics & Future Innovation Lab',
    category: 'STEM & Labs',
    image: '/event-science-expo.jpg',
    aspect: 'wide',
    isVideo: false,
    avatars: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&auto=format&fit=crop&q=60'],
    likes: 142,
  },
  {
    id: 2,
    title: 'World-Class narapally Campus Architecture',
    category: 'Campus Life',
    image: '/jrs-campus-hero-building.jpg',
    aspect: 'square',
    isVideo: true,
    avatars: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=60'],
    likes: 98,
  },
  {
    id: 3,
    title: 'Inter-School Athletic Championship Sprint',
    category: 'Sports',
    image: '/event-sports-meet.jpg',
    aspect: 'tall',
    isVideo: false,
    avatars: ['https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=60'],
    likes: 215,
  },
  {
    id: 4,
    title: 'Grand Cultural Fest & Performing Arts Stage',
    category: 'Arts & Culture',
    image: '/jrs-campus-assembly.png',
    aspect: 'standard',
    isVideo: false,
    avatars: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60'],
    likes: 178,
  },
  {
    id: 5,
    title: 'Inspirational Wisdom',
    category: 'Campus Life',
    isQuote: true,
    quoteText: '“Education is not the learning of facts, but the training of the mind to think and conquer new frontiers.”',
    quoteAuthor: 'Albert Einstein',
    aspect: 'tall',
    avatars: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=60'],
    likes: 310,
  },
  {
    id: 6,
    title: 'Digital Smart Classrooms & Collaborative Learning',
    category: 'Campus Life',
    image: '/jrs-classroom-study.png',
    aspect: 'square',
    isVideo: true,
    avatars: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&auto=format&fit=crop&q=60'],
    likes: 124,
  },
  {
    id: 7,
    title: 'Library Discoveries & Research Exploration',
    category: 'STEM & Labs',
    image: '/jrs-reasons-bg.jpg',
    aspect: 'wide',
    isVideo: false,
    avatars: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=80&auto=format&fit=crop&q=60'],
    likes: 245,
  },
  {
    id: 8,
    title: 'Joyful Foundational Years & Play-Based Learning',
    category: 'Arts & Culture',
    image: '/two-school-girls.jpg',
    aspect: 'tall',
    isVideo: false,
    avatars: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=60', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60'],
    likes: 189,
  },
];

export const InspirationsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Campus Life' | 'Sports' | 'STEM & Labs' | 'Arts & Culture'>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryCardItem | null>(null);

  const filters: Array<'All' | 'Campus Life' | 'Sports' | 'STEM & Labs' | 'Arts & Culture'> = [
    'All',
    'Campus Life',
    'Sports',
    'STEM & Labs',
    'Arts & Culture',
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#002e6d] via-[#123e87] to-[#00204d] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient Royal Blue & Golden Yellow Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 inline-block mb-3.5 shadow-sm">
              Campus Life &amp; Student Achievements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Inspirations
            </h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full shadow-xs" />
            <p className="mt-4 text-blue-100/90 text-sm sm:text-base leading-relaxed font-normal">
              A curated visual tapestry of student achievements, sporting passion, campus life, and creative milestones at JRS.
            </p>
          </motion.div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/25 scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:text-amber-300 border border-white/20 backdrop-blur-md'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Bento Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              // Compute dynamic span classes for Pinterest-style variation
              let spanClass = 'col-span-1 row-span-1';
              if (item.aspect === 'wide') spanClass = 'col-span-1 sm:col-span-2 row-span-1';
              if (item.aspect === 'tall') spanClass = 'col-span-1 row-span-2';
              if (item.aspect === 'square') spanClass = 'col-span-1 row-span-1';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/80 bg-slate-900 ${spanClass}`}
                  onClick={() => setLightboxItem(item)}
                >
                  {item.isQuote ? (
                    /* Quote Card Style */
                    <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0c234a] via-[#17479d] to-[#002e6d] text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between z-10">
                        <span className="text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/20">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-amber-300" />
                        </div>
                      </div>

                      <div className="my-auto py-4 z-10">
                        <p className="font-serif italic text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed drop-shadow-sm">
                          {item.quoteText}
                        </p>
                        {item.quoteAuthor && (
                          <p className="text-xs font-bold text-amber-300 mt-3 tracking-wide">
                            — {item.quoteAuthor}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/15 z-10">
                        <div className="flex -space-x-2">
                          {item.avatars.map((av, avIdx) => (
                            <img
                              key={avIdx}
                              src={av}
                              alt="Student"
                              className="w-7 h-7 rounded-full border-2 border-[#17479d] object-cover"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                          <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Photo / Video Card Style */
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Gradient Shade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:via-black/50 transition-colors duration-300" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        {item.isVideo ? (
                          <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-slate-900 group-hover:scale-110 transition-all shadow-md">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        ) : (
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-white px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                            {item.category}
                          </span>
                        )}

                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom Title & Avatars Stack */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                        <h3 className="font-serif text-white text-sm sm:text-base lg:text-lg font-bold leading-snug tracking-tight drop-shadow-md mb-3 group-hover:text-amber-200 transition-colors">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between pt-2 border-t border-white/15">
                          {/* Avatars Stack */}
                          <div className="flex -space-x-2">
                            {item.avatars.map((av, avIdx) => (
                              <img
                                key={avIdx}
                                src={av}
                                alt="Student Member"
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-slate-900 object-cover shadow-sm"
                              />
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-white/90 font-semibold drop-shadow-sm">
                            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setLightboxItem(null)}
          />

          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/15 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer border border-white/20"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {lightboxItem.isQuote ? (
              <div className="p-10 sm:p-14 bg-gradient-to-br from-[#0c234a] via-[#17479d] to-[#002e6d] text-white text-center">
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-slate-100 leading-relaxed mb-6">
                  {lightboxItem.quoteText}
                </p>
                <p className="text-amber-300 font-bold text-base tracking-wide">
                  — {lightboxItem.quoteAuthor}
                </p>
              </div>
            ) : (
              <div>
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
                <div className="p-5 sm:p-6 bg-slate-900 border-t border-white/10 flex items-center justify-between text-white">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                      {lightboxItem.category}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold">
                      {lightboxItem.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                    <span>{lightboxItem.likes} appreciations</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
