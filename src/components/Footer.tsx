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
    <footer 
      id="contact" 
      className="text-slate-300 pt-7 pb-6 border-t border-white/10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #030a17 0%, #01040a 100%)',
      }}
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 border-b border-white/10">
          
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

            <div className="pt-2 flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href={contactDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-[#1877F2] text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={contactDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={contactDetails.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={contactDetails.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-[#FF0000] text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
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
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-slate-300 transition-colors flex items-center gap-1.5 group/link"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/link:translate-x-1 transition-transform" />
                  <span>About JRS</span>
                </a>
              </li>
              <li>
                <a 
                  href="#academic-stages" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#academic-stages')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-slate-300 transition-colors flex items-center gap-1.5 group/link"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/link:translate-x-1 transition-transform" />
                  <span>CBSE Curriculum</span>
                </a>
              </li>
              <li>
                <a 
                  href="#events" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-slate-300 transition-colors flex items-center gap-1.5 group/link"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/link:translate-x-1 transition-transform" />
                  <span>Occasions &amp; Events</span>
                </a>
              </li>
              <li>
                <a 
                  href="#enquiry-form" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 text-slate-300 transition-colors flex items-center gap-1.5 group/link"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/link:translate-x-1 transition-transform" />
                  <span>Admissions 2026–27</span>
                </a>
              </li>
              <li>
                <a 
                  href={contactDetails.prospectusUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 text-slate-300 transition-colors flex items-center gap-1.5 group/link"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400 group-hover/link:scale-110 transition-transform" />
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
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Affiliation No: 3630397</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>School Code: 57912</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://jrsinternationalschooluppal.com/cbse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white font-semibold text-xs transition-colors"
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
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{contactDetails.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${contactDetails.phones[0]}`} className="hover:text-white transition-colors">
                  {contactDetails.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-white transition-colors">
                  {contactDetails.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{contactDetails.timing}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} JRS International School. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmissionModal}
              className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              Online Admission Form
            </button>
            <span>•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-white cursor-pointer transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
