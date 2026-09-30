import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles, X, SlidersHorizontal } from 'lucide-react';
import { usePalette } from '../context/ThemePaletteContext';

export const PaletteSwitcher: React.FC = () => {
  const { activePalette, setPaletteById, palettes } = usePalette();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Color Palette Switcher" className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none font-sans">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-2xl border border-white/40 text-white font-bold text-xs sm:text-sm backdrop-blur-xl transition-all cursor-pointer group"
        style={{
          background: `linear-gradient(135deg, ${activePalette.colors.primary} 0%, ${activePalette.colors.secondary} 100%)`,
          boxShadow: `0 10px 30px -5px ${activePalette.colors.secondary}80`,
        }}
        title="Switch Color Palette"
      >
        <Palette className="w-4 h-4 animate-spin-slow group-hover:rotate-45 transition-transform" />
        <span className="hidden sm:inline">Palette {activePalette.id}: {activePalette.name}</span>
        <span className="sm:hidden">Palette {activePalette.id}</span>
        <div className="flex items-center -space-x-1 pl-1">
          <div className="w-2.5 h-2.5 rounded-full border border-white/60" style={{ backgroundColor: activePalette.colors.primary }} />
          <div className="w-2.5 h-2.5 rounded-full border border-white/60" style={{ backgroundColor: activePalette.colors.secondary }} />
          <div className="w-2.5 h-2.5 rounded-full border border-white/60" style={{ backgroundColor: activePalette.colors.light }} />
        </div>
      </motion.button>

      {/* Expanded Palette Selection Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mt-3 w-[320px] sm:w-[360px] bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-slate-200/90 text-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div 
                  className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: activePalette.colors.primary }}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 leading-tight">5 Ready-Made Palettes</h4>
                  <p className="text-[11px] text-slate-500">Click any palette to preview live</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* List of 5 Palettes */}
            <div className="mt-3 space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {palettes.map((p) => {
                const isSelected = activePalette.id === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      setPaletteById(p.id);
                    }}
                    className={`group p-3 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-2 shadow-md bg-slate-50/90'
                        : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                    style={{
                      borderColor: isSelected ? p.colors.secondary : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-5 h-5 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
                          style={{ backgroundColor: p.colors.primary }}
                        >
                          {p.id}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-slate-900">
                          {p.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          ({p.tagline})
                        </span>
                      </div>
                      {isSelected && (
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow-xs"
                          style={{ backgroundColor: p.colors.secondary }}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    {/* Color Swatch Bar: #262235, #3d4f7c, #e18546, #fefef3 */}
                    <div className="grid grid-cols-4 gap-1.5 rounded-xl overflow-hidden p-1 bg-slate-100 border border-slate-200/60">
                      <div 
                        className="h-6 rounded-lg flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs"
                        style={{ backgroundColor: p.colors.primary }}
                        title={`Midnight: ${p.colors.primary}`}
                      >
                        {p.colors.primary}
                      </div>
                      <div 
                        className="h-6 rounded-lg flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs"
                        style={{ backgroundColor: p.colors.secondary }}
                        title={`Slate Blue: ${p.colors.secondary}`}
                      >
                        {p.colors.secondary}
                      </div>
                      <div 
                        className="h-6 rounded-lg flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-xs"
                        style={{ backgroundColor: p.colors.accent }}
                        title={`Tangerine: ${p.colors.accent}`}
                      >
                        {p.colors.accent}
                      </div>
                      <div 
                        className="h-6 rounded-lg flex items-center justify-center text-[9px] font-mono font-bold text-slate-800 shadow-xs border border-slate-300/40"
                        style={{ backgroundColor: p.colors.light }}
                        title={`Pearl Ivory: ${p.colors.light}`}
                      >
                        {p.colors.light}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Tip */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Active on entire Index Page
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="font-bold text-xs hover:underline cursor-pointer"
                style={{ color: activePalette.colors.primary }}
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
