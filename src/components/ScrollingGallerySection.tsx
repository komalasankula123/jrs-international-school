import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, Eye } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  caption: string;
}

const galleryRow1: GalleryItem[] = [
  {
    id: 1,
    image: '/gallery/primary-students-hallway.png',
    title: 'Joyful Foundational Steps',
    category: 'Primary School',
    caption: 'Energetic young learners thriving in our bright, safe, and nurturing school environment.',
  },
  {
    id: 2,
    image: '/gallery/sprint-running-race.png',
    title: 'Track & Field Athletic Sprints',
    category: 'Sports & Athletics',
    caption: 'Students competing in track events, building speed, resilience, and true sportsmanship.',
  },
  {
    id: 3,
    image: '/gallery/student-classroom-writing.jpg',
    title: 'Focused Academic Discipline',
    category: 'Classroom Focus',
    caption: 'Fostering disciplined study habits, rigorous CBSE academics, and conceptual clarity.',
  },
  {
    id: 4,
    image: '/gallery/school-bus-transport.jpg',
    title: 'Safe & GPS-Monitored Transport',
    category: 'Bus Fleet & Safety',
    caption: 'Dedicated school buses with GPS tracking, CCTV, and female attendants ensuring maximum safety.',
  },
  {
    id: 5,
    image: '/gallery/three-students-study.png',
    title: 'Peer Learning & Mentorship',
    category: 'Collaborative Study',
    caption: 'Collaborative group study sessions encouraging critical inquiry and mutual empowerment.',
  },
  {
    id: 6,
    image: '/gallery/campus-ground-students.jpg',
    title: 'Lush Green Playgrounds',
    category: 'Campus Grounds',
    caption: 'Sprawling open grounds for morning gatherings, outdoor physical activities, and playtime.',
  },
];

const galleryRow2: GalleryItem[] = [
  {
    id: 7,
    image: '/gallery/primary-sports-joy.jpg',
    title: 'House Spirit & Sports Joy',
    category: 'House Championship',
    caption: 'Excited young athletes cheering their house teams during inter-house sports competitions.',
  },
  {
    id: 8,
    image: '/gallery/girl-outdoor-reading.jpg',
    title: 'Inquisitive Exploration',
    category: 'Self Learning',
    caption: 'Inspiring curious minds to explore literature and sciences in open, serene campus settings.',
  },
  {
    id: 9,
    image: '/gallery/students-assembly-walk.jpg',
    title: 'Discipline & Campus Harmony',
    category: 'Campus Life',
    caption: 'Orderly student movement instilling decorum, punctuality, and mutual respect.',
  },
  {
    id: 10,
    image: '/gallery/two-students-discussion.png',
    title: 'Concept Discovery & Analysis',
    category: 'Interactive Study',
    caption: 'Students working through academic concepts together to foster deeper understanding.',
  },
  {
    id: 11,
    image: '/jrs-campus-building.jpg',
    title: 'Modern World-Class Infrastructure',
    category: 'Campus Architecture',
    caption: 'State-of-the-art academic block designed for comprehensive 21st-century CBSE learning.',
  },
  {
    id: 12,
    image: '/jrs-library-reading.png',
    title: 'Central Digital Knowledge Library',
    category: 'Knowledge Hub',
    caption: 'Extensive repository of encyclopedias, digital archives, and international literature.',
  },
];

export const ScrollingGallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const allItems = [...galleryRow1, ...galleryRow2];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = allItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % allItems.length;
    setActiveItem(allItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = allItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    setActiveItem(allItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-8 sm:py-12 bg-[#fbfbf9] text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 text-center">
        {/* Eyebrow in Palette Secondary */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--palette-light)] border border-[var(--palette-secondary)]/20 text-[var(--palette-secondary)] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3 shadow-xs">
          <Camera className="w-4 h-4 text-[var(--palette-secondary)]" />
          <span>Life at JRS International School</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--palette-primary)] font-serif tracking-tight leading-tight mb-3.5">
          Campus Moments &amp; Student Life Gallery
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Experience the daily vibrancy, academic focus, sports enthusiasm, and world-class environment our students cherish every day.
        </p>
      </div>

      {/* Scrolling Gallery Rows Container */}
      <div className="relative w-full space-y-4 sm:space-y-6 overflow-hidden select-none">
        {/* Soft Vignette Gradients matching light background */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#fbfbf9] via-[#fbfbf9]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#fbfbf9] via-[#fbfbf9]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Infinite Smooth Scroll */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-gallery-left gallery-track flex gap-4 sm:gap-6 py-2">
            {[...galleryRow1, ...galleryRow1, ...galleryRow1].map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                onClick={() => setActiveItem(item)}
                className="relative w-[290px] sm:w-[360px] md:w-[400px] h-[210px] sm:h-[250px] rounded-2xl overflow-hidden cursor-pointer group/card border border-slate-200/80 hover:border-[var(--palette-secondary)] shadow-md hover:shadow-2xl bg-white transition-all duration-300 shrink-0 hover:scale-[1.02]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover/card:opacity-90 transition-opacity duration-300" />
                
                {/* Floating Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[var(--palette-primary)] shadow-sm border border-[var(--palette-secondary)]/20">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 text-white shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Title & Caption at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300 text-left">
                  <h3 className="text-sm sm:text-base font-bold text-white font-serif line-clamp-1 group-hover/card:text-emerald-300 transition-colors drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-[11px] sm:text-xs line-clamp-1 mt-0.5 drop-shadow-xs">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Smooth Scroll */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-gallery-right gallery-track flex gap-4 sm:gap-6 py-2">
            {[...galleryRow2, ...galleryRow2, ...galleryRow2].map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                onClick={() => setActiveItem(item)}
                className="relative w-[290px] sm:w-[360px] md:w-[400px] h-[210px] sm:h-[250px] rounded-2xl overflow-hidden cursor-pointer group/card border border-slate-200/80 hover:border-[var(--palette-secondary)] shadow-md hover:shadow-2xl bg-white transition-all duration-300 shrink-0 hover:scale-[1.02]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover/card:opacity-90 transition-opacity duration-300" />
                
                {/* Floating Category Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[var(--palette-secondary)] shadow-sm border border-[var(--palette-secondary)]/20">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 text-white shadow-md">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Title & Caption at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover/card:translate-y-0 transition-transform duration-300 text-left">
                  <h3 className="text-sm sm:text-base font-bold text-white font-serif line-clamp-1 group-hover/card:text-sky-300 transition-colors drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-[11px] sm:text-xs line-clamp-1 mt-0.5 drop-shadow-xs">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Helper hint */}
      <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2 font-medium">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>Hover to pause scroll • Click any photo to expand in high resolution</span>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative z-10 max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#002e6d] hover:text-amber-300 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* High-Res Image Display */}
              <div className="relative w-full max-h-[65vh] bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full max-h-[65vh] object-contain"
                />
              </div>

              {/* Caption & Details Footer */}
              <div className="p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-1.5">
                    {activeItem.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                    {activeItem.caption}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    JRS International School
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
