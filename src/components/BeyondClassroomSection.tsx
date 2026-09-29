import React from 'react';
import { Sparkles, Calendar, Play } from 'lucide-react';
import { schoolEvents } from '../data/schoolData';

interface BeyondClassroomProps {
  onOpenVideoTour: () => void;
}

export const BeyondClassroomSection: React.FC<BeyondClassroomProps> = ({ onOpenVideoTour }) => {
  const activities = [
    "Athletics & Track", "Swimming", "Skating", "Football & Cricket",
    "Basketball", "Music & Vocal", "Classical Dance", "Drama Club",
    "Robotics & Coding", "Science Quizzes", "Yoga & Meditation",
    "Public Speaking & Debate", "Art & Craft", "Leadership Camps"
  ];

  return (
    <section id="beyond-classroom" className="py-20 lg:py-28 bg-[#071938] text-white relative overflow-hidden reveal-on-scroll">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="horsera-tag-dark mx-auto">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Beyond the Classroom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Vibrant Student Life & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-100">Co-Curricular Clubs</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Activities like sports, music, dramatics, and robotics receive equal prominence as academic subjects, scheduled seamlessly into regular school hours.
          </p>
        </div>

        {/* 2-Column Split: Left = Video Tour Spotlight; Right = Latest Events Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Video Showcase Banner Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-b from-[#17479d] to-[#0d2c63] rounded-3xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl relative group overflow-hidden">
            
            {/* Top Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
                Campus Highlights & Activities
              </span>
              <span className="text-xs text-blue-200 font-medium">Video Showcase</span>
            </div>

            {/* Video Preview Container with Play Trigger */}
            <div 
              onClick={onOpenVideoTour}
              className="relative aspect-video rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-xl cursor-pointer group/video bg-slate-900 my-4"
            >
              <img
                src="https://jrsinternationalschooluppal.com/wp-content/uploads/2026/03/Untitled-1.webp"
                alt="JRS Events & Sports Day"
                className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover/video:bg-slate-950/60 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white text-[#17479d] flex items-center justify-center shadow-2xl group-hover/video:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs text-white">
                ▶ Click to Watch JRS Campus Video Tour
              </div>
            </div>

            {/* Activities Cloud */}
            <div className="mt-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-sky-300 mb-3">
                Co-Curricular Clubs & Sports Offered
              </h4>
              <div className="flex flex-wrap gap-2">
                {activities.map((act) => (
                  <span
                    key={act}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-slate-100 hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                  >
                    {act}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Latest Events Feed (JRS Authentic Data) */}
          <div id="events" className="lg:col-span-6 bg-[#17479d]/80 rounded-3xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <div className="flex items-center gap-2 text-sky-300 font-bold text-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Latest Events & Highlights</span>
                </div>
                <span className="text-xs text-blue-200">Academic Year 2024-26</span>
              </div>

              {/* Events List */}
              <div className="space-y-4 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
                {schoolEvents.map((evt) => (
                  <div
                    key={evt.title}
                    className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-blue-400/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-sky-200 bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30">
                        {evt.category}
                      </span>
                      <span className="text-[11px] text-slate-300 font-medium">
                        {evt.date}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-slate-200 text-xs mt-1 leading-relaxed">
                      {evt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
              <span>Encouraging every child to find their passion</span>
              <a href="#enquiry-form" className="text-sky-300 font-bold hover:underline">
                Enquire for Activities →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
