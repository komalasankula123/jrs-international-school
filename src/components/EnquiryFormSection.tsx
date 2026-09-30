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
    <section id="enquiry-form" className="relative w-full overflow-hidden bg-[#001738] py-8 sm:py-10 lg:py-12">
      {/* Background Image - explicit img tag for 100% reliable rendering and crystal clear visibility */}
      <img
        src="/jrs-cta-students-science.jpg"
        alt="JRS Students Science Lab Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Transparent Royal Navy Tint Overlay for rich colors while keeping the image fully visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001738]/70 via-[#002e6d]/50 to-[#001738]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Big Bold Title & Vision Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white space-y-3">
            <div>
              <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] block mb-1.5 drop-shadow-md">
                ✦ ADMISSIONS OPEN 2026–2027
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.1] font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-white">
                Join the <br />
                <span className="text-amber-300">
                  Movement
                </span>
              </h2>
            </div>

            <div className="space-y-3 pt-1">
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal max-w-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Our community is open, inspiring, and ambitious. We nurture scholars, creators, thinkers, and innovators. People who believe, who try, who achieve.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs text-amber-300 font-bold tracking-wider uppercase drop-shadow-sm">
                <span className="flex items-center gap-1">• CBSE CURRICULUM</span>
                <span className="flex items-center gap-1">• NURSERY TO VIII GRADE</span>
                <span className="flex items-center gap-1">• UPPAL, HYDERABAD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Crisp Pure White Form Card (Reduced Size & Padding) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-900 border border-slate-100">
              
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-serif">
                  Get Involved
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Fill in your details and our admissions team will reach out shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#002e6d] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-slate-600 text-xs max-w-xs mx-auto">
                    Thank you, <strong className="text-[#002e6d]">{formData.firstName} {formData.surname}</strong>. We will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ firstName: '', surname: '', email: '', location: '', grade: '' });
                    }}
                    className="mt-2 px-4 py-1.5 bg-[#002e6d] hover:bg-[#17479d] text-white font-bold rounded-lg text-xs transition-all cursor-pointer shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  
                  {/* First Name & Surname Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                        First Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First name"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-lg focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                        Surname <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.surname}
                        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                        placeholder="Surname"
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-lg focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-lg focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                    />
                  </div>

                  {/* Phone / Location */}
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-lg focus:outline-none transition-all placeholder:text-slate-400 font-medium shadow-2xs"
                    />
                  </div>

                  {/* Grade / Stage Selection */}
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-700 mb-0.5">
                      Grade Applying For <span className="text-rose-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-300 focus:border-[#002e6d] focus:bg-white text-slate-900 text-xs sm:text-sm rounded-lg focus:outline-none transition-all font-medium cursor-pointer shadow-2xs"
                    >
                      <option value="" disabled>Select Grade (Nursery to VIII Grade)</option>
                      <option value="Nursery / Pre-Primary">Nursery / Pre-Primary (Ages 3–5)</option>
                      <option value="Primary (Grade I–V)">Primary School (Grade I–V)</option>
                      <option value="Middle School (Grade VI–VIII)">Middle School (Grade VI–VIII)</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 rounded-lg bg-[#002e6d] hover:bg-[#17479d] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Join the Movement</span>
                          <ArrowRight className="w-4 h-4" />
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
