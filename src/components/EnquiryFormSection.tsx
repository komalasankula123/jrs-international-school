import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export const EnquiryFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="enquiry-form" className="py-8 sm:py-12 bg-[#0a1f14] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading & Priority Badge (4 cols) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3.5">
            
            {/* Red Admissions Eyebrow */}
            <div className="text-[12px] font-extrabold uppercase tracking-widest text-red-500">
              ADMISSIONS 2026–27
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
              Enquiry Now
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Take the first step towards a brighter future for your child. We are here to help you.
            </p>

            {/* Priority Badge */}
            <div className="pt-1 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-900/90 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white text-[13px]">Your Child's Future</div>
                <div className="text-red-400 font-semibold text-[11px]">Our Priority</div>
              </div>
            </div>

          </div>

          {/* Center Column: JRS Students Group Transparent Cutout (Larger & Prominent) */}
          <div className="hidden lg:flex lg:col-span-3 items-end justify-center relative select-none">
            <div className="relative w-full max-w-[360px] flex flex-col items-center group scale-105 xl:scale-110 origin-bottom">
              {/* Soft ambient emerald glow */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none transform -translate-y-6" />
              
              <img
                src="/jrs-students-group-transparent.png"
                alt="JRS International School Collaborative Learning"
                className="w-full h-auto max-h-[440px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500 relative z-10"
                loading="lazy"
              />
              
              <div className="mt-1 text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-emerald-950/90 backdrop-blur-md text-[11px] font-bold text-emerald-300 border border-emerald-500/30 shadow-md">
                  Collaborative Learning & Mentorship
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: White Form Card (5 cols) */}
          <div className="md:col-span-7 lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 border border-white/20">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-black font-serif">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                    Thank you, <strong className="text-green-800">{formData.name}</strong>. We will contact you at <strong className="text-green-800">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '' });
                    }}
                    className="mt-4 px-5 py-2 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                    />
                  </div>

                  {/* Green Send Enquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#008744] hover:bg-[#00733a] active:scale-[0.99] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

