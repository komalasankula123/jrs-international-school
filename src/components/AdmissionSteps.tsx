import React from 'react';
import { Sparkles, ClipboardCheck, Users, FileCheck2, School, ArrowRight } from 'lucide-react';

interface AdmissionStepsProps {
  onOpenAdmissionModal: () => void;
}

export const AdmissionSteps: React.FC<AdmissionStepsProps> = ({ onOpenAdmissionModal }) => {
  const steps = [
    {
      num: "01",
      title: "Online Enquiry / Application",
      desc: "Submit the simple online admission enquiry form or download the official prospectus to begin.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#17479d]" />,
      image: "/ai-step-enquiry.jpg",
      tag: "Step 1: Enquiry",
    },
    {
      num: "02",
      title: "Campus Visit & Interaction",
      desc: "Visit our picturesque Narapally campus for a personalized walkthrough and informal student interaction.",
      icon: <Users className="w-5 h-5 text-[#17479d]" />,
      image: "/ai-step-campustour.jpg",
      tag: "Step 2: Campus Tour",
    },
    {
      num: "03",
      title: "Document Verification",
      desc: "Submit previous academic transcripts, birth certificate, transfer certificate, and passport photos.",
      icon: <FileCheck2 className="w-5 h-5 text-[#17479d]" />,
      image: "/ai-step-verification.jpg",
      tag: "Step 3: Verification",
    },
    {
      num: "04",
      title: "Confirmation & Welcome",
      desc: "Complete the admission formalities, receive school uniform/books, and join the thriving JRS family.",
      icon: <School className="w-5 h-5 text-[#17479d]" />,
      image: "/ai-step-welcome.jpg",
      tag: "Step 4: Welcome",
    },
  ];

  return (
    <section id="admissions-process" className="py-20 lg:py-28 bg-[#f0f7ff] relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="horsera-tag mx-auto">
            <Sparkles className="w-4 h-4 text-[#17479d]" />
            <span>Admissions 2026-27</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            A Transparent <span className="text-[#17479d]">4-Step Admission Journey</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We ensure an inviting, stress-free admissions process designed to understand your child's unique talents and learning aspirations.
          </p>
        </div>

        {/* Steps Grid (Horsera Connected 4-Step Visual Roadmap with Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-[28px] overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image Frame with Floating Badge & Icon */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://jrsinternationalschooluppal.com/wp-content/uploads/2023/03/jrs-save.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  
                  {/* Top Step Pill */}
                  <div className="absolute top-3 left-3 bg-[#17479d]/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-md">
                    {step.tag}
                  </div>

                  {/* Circular Step Number */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-[#17479d] font-serif font-black text-xs flex items-center justify-center shadow-lg border border-blue-100">
                    {step.num}
                  </div>

                  {/* Floating Icon at Bottom Edge of Image */}
                  <div className="absolute -bottom-3 left-5 p-2 rounded-xl bg-white text-[#17479d] shadow-lg border border-slate-100 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-7 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#17479d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full py-2 px-3 rounded-full bg-slate-50 hover:bg-[#17479d] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent text-xs font-bold transition-all flex items-center justify-between cursor-pointer group/btn"
                >
                  <span>Apply for Step {step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenAdmissionModal}
            className="btn-horsera-primary cursor-pointer hover:scale-105"
          >
            <span>Start Online Admission Application</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#17479d] flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
