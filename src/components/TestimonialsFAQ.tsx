import React, { useState } from 'react';
import { Sparkles, Star, ChevronDown, HelpCircle } from 'lucide-react';
import { parentTestimonials, faqsList } from '../data/schoolData';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Half: Parent Testimonials (Horsera Style 3-Column Luxury Cards) */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="horsera-tag mx-auto">
              <Sparkles className="w-4 h-4 text-[#17479d]" />
              <span>Parent Testimonials & Trust</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              What Parents Say About <span className="text-[#17479d]">JRS International</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real voices from families who have entrusted their children’s formative education to JRS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {parentTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  {/* Star Rating & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#17479d]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#17479d]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#17479d] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-serif">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#17479d] text-white flex items-center justify-center font-bold text-sm">
                    {t.parentName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {t.parentName}
                    </h4>
                    <span className="text-xs text-slate-500 font-normal">
                      {t.relation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Half: Frequently Asked Questions (Accordion) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="horsera-tag mx-auto">
              <HelpCircle className="w-4 h-4 text-[#17479d]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked <span className="text-[#17479d]">Questions</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Find quick answers regarding our CBSE curriculum, transport routes, age criteria, and school timings.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqsList.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4.5 text-left font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-[#17479d] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#17479d] shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
