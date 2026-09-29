import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ArrowUp, MessageCircle } from 'lucide-react';
import { contactDetails } from '../data/schoolData';

// --- ADMISSION POPUP MODAL ---
interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Grade 1',
    locality: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const grades = [
    "Playgroup", "Nursery", "LKG", "UKG",
    "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
    "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#071426] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Application Received!
            </h3>
            <p className="text-sm text-slate-300">
              Thank you for contacting JRS International School. Our team will reach out at <strong className="text-sky-300">{formData.phone}</strong> with admission details.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Admissions 2026-27
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Apply for Admission
              </h3>
              <p className="text-xs text-slate-400">
                JRS International School • CBSE • Narapally, Hyderabad
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Student Full Name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Parent Full Name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Grade *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1f3a] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400"
                  >
                    {grades.map((g) => (
                      <option key={g} value={g} className="bg-[#0b1f3a] text-white">{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Locality / Area *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Uppal, Narapally, Boduppal"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-white hover:bg-blue-50 text-[#17479d] font-bold rounded-xl shadow-lg text-sm transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              {loading ? "Submitting..." : (
                <>
                  <span>Submit Admission Form</span>
                  <Send className="w-4 h-4 text-[#17479d]" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


// --- VIDEO TOUR MODAL ---
interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#071426] border border-blue-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              JRS International School — Campus Tour
            </h3>
            <p className="text-xs text-slate-400">Narapally, Near Uppal Depot, Hyderabad</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/LBvByB-S0O4?autoplay=1"
            title="JRS International School Campus Tour"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};


// --- IMAGE LIGHTBOX MODAL ---
interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title: string | null;
  desc: string | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ isOpen, imageUrl, title, desc, onClose }) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-[#071426] border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white bg-slate-950/70 hover:bg-slate-950 rounded-full transition-colors border border-white/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title || "School Facility"}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-6 bg-[#071426] text-white">
          <h3 className="font-serif text-xl font-bold text-white">
            {title}
          </h3>
          {desc && (
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};


// --- FLOATING ACTIONS: WHATSAPP & SCROLL TO TOP ---
export const FloatingActions: React.FC<{ onOpenAdmissionModal?: () => void }> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#0d2c63] text-white border border-blue-400/30 shadow-xl hover:bg-[#17479d] transition-all hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Contact */}
      <a
        href={contactDetails.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all group"
        aria-label="Chat on WhatsApp with JRS Admissions"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Chat with Admissions</span>
      </a>
    </div>
  );
};
