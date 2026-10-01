import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ArrowUpRight, Sparkles
} from 'lucide-react';
import { navigationData } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmissionModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setActiveDropdown(null);
    }
  };

  return (
    <header 
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-2 sm:py-2.5 animate-in fade-in slide-in-from-top-2 duration-300'
          : 'absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/75 via-black/35 to-transparent pt-2.5 sm:pt-3.5 pb-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
          
          {/* Top Row on Mobile / Left on Desktop: Logo & Direct Call/Apply CTAs */}
          <div className="w-full md:w-auto flex items-center justify-between gap-3">
            {/* School Logo with Transparent Background & Increased Size */}
            <a 
              href="#" 
              onClick={(e) => handleSmoothScroll(e, '#')}
              className="flex items-center shrink-0 group transition-transform hover:scale-105"
            >
              <img 
                src="/jrs-logo.png" 
                alt="JRS International School Uppal" 
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled 
                    ? 'h-10 sm:h-12 md:h-14' 
                    : 'h-14 sm:h-18 md:h-20 lg:h-24 drop-shadow-[0_4px_20px_rgba(255,255,255,0.9)]'
                }`}
              />
            </a>

            {/* Quick Admissions CTA for Mobile */}
            <div className="flex md:hidden items-center gap-2">
              {onOpenAdmissionModal && (
                <button
                  onClick={onOpenAdmissionModal}
                  className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-[11px] px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-slate-950 fill-current" />
                  <span>Admissions 26–27</span>
                </button>
              )}
            </div>
          </div>

          {/* Navigation Items (Directly visible on all views with smooth scroll & dropdowns) */}
          <nav className="w-full md:w-auto flex items-center justify-center md:justify-end gap-1 sm:gap-1.5 lg:gap-2 overflow-x-auto no-scrollbar py-1">
            {navigationData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownActive = activeDropdown === item.name;

              return (
                <div 
                  key={item.name} 
                  className="relative shrink-0"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`group/item px-2.5 sm:px-3 lg:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-[13.5px] lg:text-[14.5px] font-bold tracking-wide transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                      isScrolled
                        ? 'text-slate-800 hover:text-[#002e6d] hover:bg-slate-100/90'
                        : 'text-white hover:text-amber-200 hover:bg-white/15 drop-shadow-sm'
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasChildren && (
                      <ChevronDown className={`w-3.5 h-3.5 text-amber-400 group-hover/item:text-amber-300 transition-transform duration-200 ${
                        isDropdownActive ? 'rotate-180 text-amber-300' : 'text-amber-400'
                      }`} />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {hasChildren && isDropdownActive && (
                    <div className="absolute top-full left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 pt-2 w-60 sm:w-64 xl:w-72 z-50 animate-in fade-in zoom-in-95 duration-200">
                      <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-2xl border border-slate-200/90 text-slate-800 backdrop-blur-xl">
                        {item.children?.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            target={sub.href.startsWith('http') ? '_blank' : undefined}
                            rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={(e) => {
                              if (sub.href.startsWith('#')) {
                                handleSmoothScroll(e, sub.href);
                              }
                            }}
                            className="group/sub flex flex-col p-2 sm:p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover/sub:text-[#002e6d] transition-colors">
                                {sub.name}
                              </span>
                              {sub.href.startsWith('http') && (
                                <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 group-hover/sub:text-amber-600" />
                              )}
                            </div>
                            {sub.desc && (
                              <span className="text-[10px] sm:text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                                {sub.desc}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">

            {onOpenAdmissionModal && (
              <button
                onClick={onOpenAdmissionModal}
                className="relative group overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-[13px] tracking-wide px-3.5 lg:px-4.5 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-amber-400/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-current animate-pulse" />
                <span>Admissions 2026–27</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
