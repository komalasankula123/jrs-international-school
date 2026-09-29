import React from 'react';
import { 
  Phone, Mail, MapPin, ArrowRight, FileText, 
  ShieldCheck, Clock 
} from 'lucide-react';
import { contactDetails } from '../data/schoolData';

interface FooterProps {
  onOpenAdmissionModal: () => void;
  onOpenVideoTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissionModal }) => {
  return (
    <footer id="contact" className="bg-[#080d0a] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white px-4 py-2 rounded-xl border border-white/20 shadow-lg">
              <img
                src={contactDetails.logoUrl}
                alt="JRS International School Uppal"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Committed to the promotion of holistic education and traditional human values since 2021. Empowering physical, emotional, and intellectual faculties through comprehensive CBSE quality education.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={contactDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-700 hover:text-white border border-white/15 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={contactDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 hover:text-white border border-white/15 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={contactDetails.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-green-700 hover:text-white border border-white/15 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href={contactDetails.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-600 hover:text-white border border-white/15 flex items-center justify-center text-xs font-bold transition-all"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-green-500" />
                  <span>About JRS</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-green-500" />
                  <span>CBSE Curriculum</span>
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-green-500" />
                  <span>Latest Events</span>
                </a>
              </li>
              <li>
                <a href="#enquiry-form" className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-green-500" />
                  <span>Admissions 2026-27</span>
                </a>
              </li>
              <li>
                <a 
                  href={contactDetails.prospectusUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-red-400" />
                  <span>Download Prospectus</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Mandatory Disclosures (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-b border-white/10 pb-2">
              CBSE &amp; Compliance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                <span>Affiliation No: 3630397</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                <span>School Code: 57912</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://jrsinternationalschooluppal.com/cbse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-green-700 text-white font-semibold text-xs transition-colors"
                >
                  <span>Mandatory Public Disclosure</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Campus Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-white font-bold text-base border-b border-white/10 pb-2">
              Campus Address
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                <span>{contactDetails.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                <span>{contactDetails.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-green-500 shrink-0" />
                <span>{contactDetails.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{contactDetails.timing}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} JRS International School. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmissionModal}
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Online Admission Form
            </button>
            <span>•</span>
            <a href="#about" className="hover:text-white">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
