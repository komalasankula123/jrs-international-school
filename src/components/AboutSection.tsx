import React from 'react';
import { GraduationCap, ArrowRight, Play } from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

interface AboutSectionProps {
  onOpenVideoTour?: () => void;
  onOpenAdmissionModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenVideoTour,
  onOpenAdmissionModal,
}) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      {/* Decorative Rotating JRS Logo Background */}
      <JRSRotatingLogoBg position="bottom-right" size="lg" opacity="opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: School Campus Building Image */}
          <div className="lg:col-span-6 w-full h-full flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-slate-50 group">
              <img
                src="/jrs-campus-building.jpg"
                alt="JRS International School Campus"
                className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: About Us Details Matching Reference */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* 1. Eyebrow: Cap Icon + About Us in Red */}
            <div className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <GraduationCap className="w-5 h-5 text-red-600 stroke-[2.2]" />
              <span>About JRS School</span>
            </div>

            {/* 2. Main Large Heading in Black */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-black leading-tight tracking-tight mt-2.5 mb-3 font-serif">
              Welcome to JRS International School
            </h2>

            {/* 3. Subheading in Rich Green */}
            <h3 className="text-green-800 font-bold text-lg sm:text-xl lg:text-[22px] leading-snug mb-4">
              Best CBSE School in Uppal, Hyderabad
            </h3>

            {/* 4. Description Paragraph in Black/Slate */}
            <p className="text-black/80 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left font-normal mb-8">
              Where dreams take flight and possibilities are limitless. Step into a world of boundless learning at JRS International School, the premier CBSE institution in Uppal, Hyderabad, where each day brings new discoveries and opportunities for growth, and the corridors echo with the whispers of tomorrow's leaders. We nurture not just scholars but pioneers of the future. Experience a realm where innovation blends with timeless wisdom, setting the stage for a transformative learning journey.
            </p>

            {/* 5. Dual Action Buttons: Red [Learn More →] and Green [▶ Virtual Tour] */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Learn More Button - Red */}
              <button
                onClick={() => scrollToSection('academic-stages')}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Virtual Tour Button - Green */}
              <button
                onClick={onOpenVideoTour || onOpenAdmissionModal || (() => scrollToSection('enquiry-form'))}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-green-800 hover:bg-green-900 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
                <span>Virtual Tour</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

