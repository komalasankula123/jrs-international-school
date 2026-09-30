import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowUpRight, Search, Phone
} from 'lucide-react';
import { navigationData, contactDetails } from '../data/schoolData';
import { SchoolMarquee } from './SchoolMarquee';

interface NavbarProps {
  onOpenAdmissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky mode once user scrolls past 80px
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/80 py-1.5 sm:py-2 animate-in fade-in slide-in-from-top-2 duration-300' 
          : 'absolute top-0 left-0 right-0 z-50 bg-transparent'
      }`}
    >
      {/* 1. Marquee Announcement Ticker (Shown only when at top of page) */}
      {!isScrolled && <SchoolMarquee />}

      {/* 2. Navigation Bar Container */}
      <div className={`w-full ${!isScrolled ? 'pt-2 sm:pt-3 pb-2' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-4">
            
            {/* Left: School Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className={`px-3 py-1.5 rounded-2xl shadow-md border backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? 'bg-white border-slate-200/80 shadow-xs'
                  : 'bg-white/95 border-white/60 shadow-lg'
              }`}>
                <img 
                  src="/jrs-logo.png" 
                  alt="JRS International School Uppal" 
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-5">
              {navigationData.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-[14px] xl:text-[15px] font-extrabold transition-colors tracking-tight ${
                    isScrolled 
                      ? 'text-slate-800 hover:text-red-600' 
                      : 'text-white hover:text-red-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right: Search + Phone + Admission Open CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={onOpenAdmissionModal}
                title="Search"
                aria-label="Search"
                className={`p-2 transition-colors cursor-pointer ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                }`}
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a 
                href={`tel:${contactDetails.phones[0]}`}
                title="Call School"
                className={`p-2 transition-colors ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                }`}
              >
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </a>

              {/* Admission Open Button */}
              <button
                onClick={onOpenAdmissionModal}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-red-600/40 hover:scale-105 active:scale-95 group border border-red-500/50"
              >
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                <span>Admission Open</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenAdmissionModal}
                className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md"
              >
                Admission Open
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-slate-800' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl text-slate-900 border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto">
          {navigationData.map((item) => (
            <div key={item.name} className="border-b border-slate-100 pb-2">
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-slate-900 py-1 hover:text-red-700"
              >
                {item.name}
              </a>
              {item.children && (
                <div className="pl-3 mt-1 space-y-1.5">
                  {item.children.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-medium text-slate-600 hover:text-red-700 py-1"
                    >
                      • {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Apply for Admission 2026-27</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
