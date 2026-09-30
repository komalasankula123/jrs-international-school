import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationData } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmissionModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-2 animate-in fade-in slide-in-from-top-2 duration-300'
            : 'absolute top-0 left-0 right-0 z-50 bg-transparent pt-1.5 sm:pt-2.5 pb-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: School Logo (Transparent, Enlarged & Prominent) */}
            <a href="#" className="flex items-center shrink-0 group transition-transform hover:scale-105">
              <img 
                src="/jrs-logo.png" 
                alt="JRS International School Uppal" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled 
                    ? 'h-10 sm:h-12' 
                    : 'h-14 sm:h-18 md:h-20 lg:h-24 drop-shadow-[0_4px_16px_rgba(255,255,255,0.7)]'
                }`}
              />
            </a>

            {/* Right: 3-Lines (Hamburger) Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                  isScrolled 
                    ? 'text-slate-900 bg-slate-100 hover:bg-[#17479d] hover:text-white shadow-sm' 
                    : 'text-white bg-black/35 hover:bg-black/55 backdrop-blur-md drop-shadow-md border border-white/25 hover:border-amber-400'
                }`}
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                <span className="text-sm sm:text-base font-bold tracking-wide uppercase">Menu</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer Menu (Right Side) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content Panel (Right Side Slide-out) */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white text-slate-900 h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <img 
                src="/jrs-logo.png" 
                alt="JRS International School" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="p-5 sm:p-6 space-y-4 flex-1">
              <div className="space-y-1">
                {navigationData.map((item) => (
                  <div key={item.name} className="border-b border-slate-100/80 pb-2">
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base sm:text-lg font-bold text-slate-800 py-2 hover:text-[#17479d] hover:translate-x-1 transition-all"
                    >
                      {item.name}
                    </a>
                    {item.children && (
                      <div className="pl-3 space-y-1 pb-1">
                        {item.children.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs sm:text-sm font-medium text-slate-500 hover:text-[#17479d] py-1"
                          >
                            • {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Drawer Footer & Quick Admissions Button */}
            <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50 space-y-3">
              {onOpenAdmissionModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="w-full bg-[#17479d] hover:bg-[#002e6d] text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-lg"
                >
                  <span>Apply for Admission 2026-27</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
              <div className="text-center text-xs text-slate-400">
                Korremula X Road, Narapally, Hyderabad
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
