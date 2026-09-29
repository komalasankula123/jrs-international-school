import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { JRSRotatingLogoBg } from './JRSRotatingLogoBg';

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
    <section id="enquiry-form" className="py-12 sm:py-16 bg-[#0a1f14] text-white relative overflow-hidden">
      {/* Decorative Rotating JRS Logo Background */}
      <JRSRotatingLogoBg position="top-right" size="lg" opacity="opacity-25" isDark={true} />
      
      {/* Background Leaves & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(380, 50) scale(0.6)" stroke="#22c55e" strokeWidth="2" fill="none">
            <path d="M10,30 Q30,5 50,25 Q70,45 90,20 Q60,60 30,50 Z" />
          </g>
          <g transform="translate(520, 60) scale(0.6)" stroke="#ef4444" strokeWidth="2" fill="none">
            <path d="M10,20 Q40,0 70,30 Q40,60 10,20 Z" />
            <line x1="10" y1="20" x2="70" y2="30" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading & Text (4 cols) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3.5">
            
            {/* Red Admissions Tag */}
            <div className="text-[12px] font-extrabold uppercase tracking-widest text-red-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Admissions 2026-27</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif tracking-tight leading-tight">
              Enquiry Now
            </h2>

            {/* Description */}
            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal">
              Take the first step towards a brighter future for your child. We are here to help you.
            </p>

            {/* Priority Badge */}
            <div className="pt-2 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-green-900/80 border border-green-500/40 flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap className="w-6 h-6 text-green-300" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white text-[13px]">Your Child's Future</div>
                <div className="text-red-300 font-semibold">Our Priority</div>
              </div>
            </div>

          </div>

          {/* Center Column: Two Schoolgirls Standing Cutout (3 cols) */}
          <div className="hidden lg:flex lg:col-span-3 items-end justify-center relative pointer-events-none select-none">
            <div className="relative w-full max-w-[280px] h-[360px] sm:h-[400px] flex items-end justify-center">
              <img
                src="/two-girls-transparent.png"
                alt="JRS International School Students"
                className="w-auto h-full max-h-[390px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: White Form Card (5 cols) */}
          <div className="md:col-span-7 lg:col-span-5">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800 border border-white/20">
              
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
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-black text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-black text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-black mb-1">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-black text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-600 transition-all placeholder:text-slate-400 bg-slate-50/50"
                    />
                  </div>

                  {/* Green Send Enquiry Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-700 hover:bg-green-800 active:scale-[0.99] text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-70 border border-green-600/30"
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
