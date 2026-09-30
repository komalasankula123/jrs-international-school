import React, { useState } from 'react';
import { 
  Calendar, Clock, MapPin, ArrowRight, Sparkles, 
  ChevronRight, X, Trophy, Palette, BookOpen, PartyPopper 
} from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

interface EventItem {
  id: number;
  title: string;
  category: 'All' | 'Sports' | 'Cultural' | 'Academic' | 'Celebration';
  date: { day: string; month: string; year: string };
  time: string;
  venue: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Annual Inter-School Sports Meet & Athletic Championship",
    category: "Sports",
    date: { day: "18", month: "OCT", year: "2026" },
    time: "08:30 AM – 03:30 PM",
    venue: "JRS International Sports Arena",
    description: "A day of high-energy track and field events, relay races, march past, and athletic championships celebrating teamwork and sporting excellence.",
    image: "/event-sports-meet.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "STEM Science Expo & Robotics Project Showcase",
    category: "Academic",
    date: { day: "24", month: "OCT", year: "2026" },
    time: "09:30 AM – 01:30 PM",
    venue: "JRS Innovation & Science Labs",
    description: "Students demonstrate working robotics models, AI demonstrations, and science experiments bridging classroom concepts to real-world technology.",
    image: "/jrs-feature-academics.jpg",
  },
  {
    id: 3,
    title: "Grand Cultural Fest & Performing Arts Carnival",
    category: "Cultural",
    date: { day: "12", month: "NOV", year: "2026" },
    time: "10:00 AM – 04:00 PM",
    venue: "School Open-Air Amphitheatre",
    description: "A vibrant spectacle of classical dance, theatrical plays, choir melodies, and fine arts exhibits crafted by talented young performers.",
    image: "/jrs-campus-assembly.png",
  },
  {
    id: 4,
    title: "Pre-Primary & Kindergarten Graduation Ceremony",
    category: "Celebration",
    date: { day: "05", month: "DEC", year: "2026" },
    time: "09:00 AM – 12:00 PM",
    venue: "JRS Main Auditorium",
    description: "Honoring our joyful little learners as they graduate foundational years and step proudly into primary school education.",
    image: "/jrs-about-students.png",
  },
  {
    id: 5,
    title: "Newspaper in Education (NIE) Literary Olympiad",
    category: "Academic",
    date: { day: "19", month: "DEC", year: "2026" },
    time: "10:30 AM – 01:00 PM",
    venue: "Central Knowledge Library",
    description: "Debates, editorial writing, and current affairs quizzes organized in collaboration with prominent national publications.",
    image: "/jrs-feature-beyond.jpg",
  },
  {
    id: 6,
    title: "Shree Rama Navami & Traditional Heritage Day",
    category: "Celebration",
    date: { day: "15", month: "JAN", year: "2027" },
    time: "08:30 AM – 12:30 PM",
    venue: "JRS Central Courtyard",
    description: "Special morning assembly, traditional music performances, and moral value discourses celebrating Indian ethos and harmony.",
    image: "/jrs-feature-about.jpg",
  },
];

export const CampusGalleryEvents: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Sports' | 'Cultural' | 'Academic' | 'Celebration'>('All');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Sports', icon: Trophy },
    { name: 'Academic', icon: BookOpen },
    { name: 'Cultural', icon: Palette },
    { name: 'Celebration', icon: PartyPopper },
  ];

  const filteredEvents = activeCategory === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.category === activeCategory);

  const featuredEvent = eventsData.find(e => e.isFeatured) || eventsData[0];

  return (
    <section id="events" className="py-8 sm:py-12 lg:py-14 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative Rotating JRS Logo Background */}
      <JRSRotatingLogoBg position="top-right" size="lg" opacity="opacity-15" />
      <JRSRotatingLogoBg position="bottom-left" size="md" opacity="opacity-15" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-red-600 rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-600">
                School Calendar &amp; Activities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-900 font-serif tracking-tight leading-snug">
              Latest Events &amp; Campus Happenings
            </h2>
            <p className="text-black/85 text-sm sm:text-base leading-relaxed font-normal">
              Stay connected with upcoming student showcases, sports championships, and cultural celebrations at JRS.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-2xl shadow-sm border border-slate-200">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-green-700 text-white shadow-sm'
                      : 'text-black hover:text-green-700 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-red-400' : 'text-slate-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic 2-Column Split: Featured Hero Event (Left) + Upcoming Event Cards List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Featured Event Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div 
              onClick={() => setSelectedEvent(featuredEvent)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col justify-between h-full group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Red Featured Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Featured Event</span>
                </div>

                {/* Floating Date Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg text-center border border-white/40">
                  <div className="text-[10px] font-black uppercase tracking-wider text-green-700">{featuredEvent.date.month}</div>
                  <div className="text-xl font-extrabold text-black leading-none">{featuredEvent.date.day}</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-green-50 text-green-800 border border-green-200 inline-block">
                    {featuredEvent.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-black group-hover:text-green-800 transition-colors leading-snug">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {featuredEvent.description}
                  </p>
                </div>

                {/* Event Meta Info */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-black/80 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-green-600" />
                    <span>{featuredEvent.venue}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <div className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-green-700 text-black group-hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-between shadow-sm">
                    <span>View Event Details</span>
                    <ArrowRight className="w-4 h-4 text-green-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Grid of Event Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedEvent(item)}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-green-300 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group cursor-pointer hover:-translate-y-0.5"
              >
                {/* Date Square */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0c2444] to-green-800 text-white flex flex-col items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-400">
                    {item.date.month}
                  </span>
                  <span className="text-xl sm:text-2xl font-black leading-none text-white">
                    {item.date.day}
                  </span>
                  <span className="text-[10px] text-slate-300 font-medium">
                    {item.date.year}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-grow space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-green-50 text-green-800 group-hover:bg-green-700 group-hover:text-white transition-colors">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-red-500" />
                      {item.time}
                    </span>
                  </div>

                  <h4 className="font-serif text-base sm:text-lg font-bold text-black group-hover:text-green-800 transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium line-clamp-1">
                    <MapPin className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span className="truncate">{item.venue}</span>
                  </div>
                </div>

                {/* Arrow Action */}
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-slate-50 group-hover:bg-green-700 items-center justify-center shrink-0 transition-all text-slate-400 group-hover:text-white">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Interactive Event Detail Modal */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            {/* Modal Image Header */}
            <div className="relative h-48 bg-black">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white inline-block mb-1">
                  {selectedEvent.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                  {selectedEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-black font-semibold">
                  <Calendar className="w-4 h-4 text-green-700" />
                  <span>{selectedEvent.date.day} {selectedEvent.date.month} {selectedEvent.date.year}</span>
                </div>
                <div className="flex items-center gap-2 text-black font-semibold">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2 text-black font-semibold">
                  <MapPin className="w-4 h-4 text-green-700" />
                  <span>{selectedEvent.venue}</span>
                </div>
              </div>

              <p className="text-black/80 text-xs sm:text-sm leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
