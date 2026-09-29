import React, { useState } from 'react';
import { Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { facilitiesList } from '../data/schoolData';

interface AmenitiesGalleryProps {
  onSelectImage: (imageUrl: string, title: string, desc: string) => void;
}

export const AmenitiesGallery: React.FC<AmenitiesGalleryProps> = ({ onSelectImage }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Sports', 'Academic', 'Infrastructure', 'Arts', 'Safety'];

  const filteredFacilities = filter === 'All' 
    ? facilitiesList 
    : facilitiesList.filter(item => item.category === filter);

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#f0f7ff] relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="horsera-tag mx-auto">
            <Sparkles className="w-4 h-4 text-[#17479d]" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            State-of-the-Art <span className="text-[#17479d]">Campus Facilities</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our expansive green campus in Narapally provides an ideal environment for athletic vigor, scientific inquiry, and creative exploration.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-[#17479d] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid (Horsera Style with Lightbox Click & Hover Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.title}
              onClick={() => onSelectImage(fac.image, fac.title, fac.desc)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Zoom and Overlay */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="p-3 bg-white text-[#17479d] rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 right-3 bg-[#17479d]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                    {fac.category}
                  </div>
                </div>

                {/* Card Text */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#17479d] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {fac.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#17479d] transition-colors">
                <span>View Amenity</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#17479d]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
