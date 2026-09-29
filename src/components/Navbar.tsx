import React, { useState } from 'react';
import { 
  ChevronDown, Menu, X, ArrowUpRight, Search, Phone
} from 'lucide-react';
import { navigationData, contactDetails } from '../data/schoolData';
import { SchoolMarquee } from './SchoolMarquee';

interface NavbarProps {
  onOpenAdmissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      {/* 1. Marquee Announcement Ticker Positioned Above Header Navigation */}
      <SchoolMarquee />

      {/* 2. Completely Borderless & Transparent Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Left: School Logo (Crisp White Logo) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img 
              src="/jrs-logo-white.png" 
              alt="JRS International School Uppal" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] filter brightness-110"
            />
          </a>

          {/* Center: Desktop Navigation Links (Clean Borderless Text) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navigationData.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-2.5 py-1.5 text-[15px] font-extrabold text-white hover:text-red-400 transition-colors flex items-center gap-1 tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className="w-4 h-4 text-white/90 group-hover:text-red-400 transition-transform group-hover:rotate-180 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.children && (
                  <div 
                    className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-2xl p-2 text-slate-900">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block p-2 rounded-lg hover:bg-red-50 text-slate-800 hover:text-red-700 transition-colors group/sub"
                        >
                          <div className="font-bold text-xs sm:text-sm flex items-center justify-between">
                            <span>{subItem.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all text-red-600" />
                          </div>
                          {subItem.desc && (
                            <p className="text-[11px] text-slate-500 mt-0.5 font-normal">{subItem.desc}</p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search + Phone + Admission Open CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onOpenAdmissionModal}
              title="Search"
              aria-label="Search"
              className="p-2 text-white hover:text-red-400 transition-colors cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a 
              href={`tel:${contactDetails.phones[0]}`}
              title="Call School"
              className="p-2 text-white hover:text-red-400 transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
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
              className="p-2 text-white rounded-lg transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl text-slate-900 border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[80vh] overflow-y-auto">
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
