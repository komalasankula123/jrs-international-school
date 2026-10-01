import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const EnquiryFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    location: '',
    grade: '',
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
    <section id="enquiry-form" className="relative w-full overflow-hidden bg-[#001738] py-7 sm:py-9 lg:py-10">
      {/* Background Image - Fresh Campus Students Photo */}
      <img
        src="/jrs-students-campus.jpg"
        alt="JRS International School Students Campus Life"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />
      
      {/* Transparent Navy Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/85 via-[#002e6d]/65 to-[#001738]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column: Title & Vision Statement (Compact & Clean) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white space-y-2.5">
            <div>
              <span className="text-amber-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] block mb-1 drop-shadow-md">
                ✦ ADMISSIONS OPEN 2026–2027
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight leading-tight font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-white">
                Join the <span className="text-amber-300">Movement</span>
              </h2>
            </div>

            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Our community is open, inspiring, and ambitious. We nurture scholars, creators, thinkers, and innovators on a world-class 10+ acre campus.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-0.5 text-[10.5px] sm:text-xs text-amber-300 font-bold tracking-wider uppercase drop-shadow-sm">
              <span className="flex items-center gap-1">• CBSE CURRICULUM</span>
              <span className="flex items-center gap-1">• NURSERY TO VIII GRADE</span>
              <span className="flex items-center gap-1">• UPPAL, HYDERABAD</span>
            </div>
          </div>

          {/* Right Column: Crisp White Form Card (Compact Reduced Size) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-[360px] bg-white rounded-xl p-3.5 sm:p-4 shadow-2xl text-slate-900 border border-slate-100">
              
              <div className="mb-2.5">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight font-serif">
                  Get Involved
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-500">
                  Fill in your details and our admissions team will reach out shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-4 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#002e6d] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-serif">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-slate-600 text-[11px] max-w-xs mx-auto">
                    Thank you, <strong className="text-[#002e6d]">{formData.firstName} {formData.surname}</strong>. We will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: '', surname: '', email: '', location: '', grade: '' });
                    }}
                    className="mt-1.5 px-3 py-1 bg-[#002e6d] hover:bg-[#17479d] text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  
                  {/* First Name & Surname Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                        First Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First name"
                        className="w-full px-2 py-1 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs rounded-md focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                        Surname <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.surname}
                        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                        placeholder="Surname"
                        className="w-full px-2 py-1 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs rounded-md focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-2 py-1 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs rounded-md focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-2 py-1 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs rounded-md focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                    />
                  </div>

                  {/* Grade / Stage Selection */}
                  <div>
                    <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Grade Applying For <span className="text-rose-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-2 py-1 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs rounded-md focus:outline-none transition-all font-medium cursor-pointer shadow-2xs"
                    >
                      <option value="" disabled>Select Grade (Nursery to VIII Grade)</option>
                      <option value="Nursery / Pre-Primary">Nursery / Pre-Primary (Ages 3–5)</option>
                      <option value="Primary (Grade I–V)">Primary School (Grade I–V)</option>
                      <option value="Middle School (Grade VI–VIII)">Middle School (Grade VI–VIII)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2 rounded-lg bg-[#002e6d] hover:bg-[#17479d] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Join the Movement</span>
                          <ArrowRight className="w-3.5 h-3.5" />
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
