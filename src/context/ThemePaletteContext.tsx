import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ColorPalette {
  id: number;
  name: string;
  tagline: string;
  colors: {
    primary: string;    // Deep Blue / Navy
    secondary: string;  // Royal / Brand Blue
    accent: string;     // Deep Yellow / Warm Gold
    light: string;      // Crisp Light Background
    surface: string;    // Clean White Surface
  };
}

export const readyMadePalettes: ColorPalette[] = [
  {
    id: 1,
    name: 'Royal Blue & Deep Yellow',
    tagline: '#002E6D + #17479D + #F59E0B',
    colors: {
      primary: '#002E6D',     // Deep Royal Navy Blue
      secondary: '#17479D',   // Rich Brand Blue
      accent: '#F59E0B',      // Deep Golden Yellow
      light: '#F8FAFC',       // Clean Light Background
      surface: '#FFFFFF',
    },
  },
  {
    id: 2,
    name: 'Classic Navy & Golden Amber',
    tagline: '#0B1E3F + #1E40AF + #D97706',
    colors: {
      primary: '#0B1E3F',     // Classic Deep Navy
      secondary: '#1E40AF',   // Solid Royal Blue
      accent: '#D97706',      // Warm Deep Amber Yellow
      light: '#F8FAFC',
      surface: '#FFFFFF',
    },
  },
  {
    id: 3,
    name: 'Sapphire Blue & Mustard Gold',
    tagline: '#0F2B5C + #2563EB + #EAB308',
    colors: {
      primary: '#0F2B5C',     // Sapphire Deep Blue
      secondary: '#2563EB',   // Vivid Blue
      accent: '#EAB308',      // Rich Deep Yellow
      light: '#FFFFFF',
      surface: '#FFFFFF',
    },
  },
  {
    id: 4,
    name: 'Oxford Blue & Sunburst Yellow',
    tagline: '#002147 + #0056B3 + #E5A00D',
    colors: {
      primary: '#002147',     // Oxford Midnight Blue
      secondary: '#0056B3',   // Electric Blue
      accent: '#E5A00D',      // Deep Warm Yellow
      light: '#F8FAFC',
      surface: '#FFFFFF',
    },
  },
  {
    id: 5,
    name: 'Cobalt Navy & Honey Yellow',
    tagline: '#0D2347 + #1D4ED8 + #CA8A04',
    colors: {
      primary: '#0D2347',     // Cobalt Navy
      secondary: '#1D4ED8',   // Bright Cobalt Blue
      accent: '#CA8A04',      // Deep Honey Yellow
      light: '#F8FAFC',
      surface: '#FFFFFF',
    },
  },
];

interface PaletteContextType {
  activePalette: ColorPalette;
  setPaletteById: (id: number) => void;
  palettes: ColorPalette[];
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePalette, setActivePalette] = useState<ColorPalette>(() => {
    return readyMadePalettes[0];
  });

  const setPaletteById = (id: number) => {
    const found = readyMadePalettes.find((p) => p.id === id);
    if (found) {
      setActivePalette(found);
      localStorage.setItem('jrs_selected_palette', id.toString());
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', activePalette.id.toString());
    root.style.setProperty('--palette-primary', activePalette.colors.primary);
    root.style.setProperty('--palette-secondary', activePalette.colors.secondary);
    root.style.setProperty('--palette-accent', activePalette.colors.accent);
    root.style.setProperty('--palette-light', activePalette.colors.light);
    root.style.setProperty('--palette-surface', activePalette.colors.surface);
    
    document.body.style.backgroundColor = activePalette.colors.light;
  }, [activePalette]);

  return (
    <PaletteContext.Provider value={{ activePalette, setPaletteById, palettes: readyMadePalettes }}>
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = (): PaletteContextType => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
};
