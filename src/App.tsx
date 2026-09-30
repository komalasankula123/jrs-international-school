import { useState } from 'react';
import { PaletteProvider } from './context/ThemePaletteContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FourFeatureCards } from './components/FourFeatureCards';
import { StatsRibbon } from './components/StatsRibbon';
import { AcademicStages } from './components/AcademicStages';
import { HolisticGrowthSection } from './components/HolisticGrowthSection';
import { PartnersSlider } from './components/PartnersSlider';
import { CampusOccasionsGallery } from './components/CampusOccasionsGallery';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { Footer } from './components/Footer';
import { 
  AdmissionModal, 
  VideoTourModal 
} from './components/Modals';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [videoTourOpen, setVideoTourOpen] = useState(false);

  return (
    <PaletteProvider>
      <div className="min-h-screen flex flex-col bg-[var(--palette-light)] font-sans text-slate-900 selection:bg-[#002e6d] selection:text-amber-200">
        {/* 1. Header Navigation */}
      <Navbar
        onOpenAdmissionModal={() => setAdmissionModalOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />

        {/* 1. About JRS Section */}
        <AboutSection
          onOpenVideoTour={() => setVideoTourOpen(true)}
          onOpenAdmissionModal={() => setAdmissionModalOpen(true)}
        />

        {/* 2. Four Feature Cards (About JRS, Academics, Differentiators, Beyond Classroom) */}
        <FourFeatureCards />

        {/* 3. Key Metrics & Counter Stats Ribbon */}
        <StatsRibbon />

        {/* 4. Academic Programs & Learning Stages */}
        <AcademicStages onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />

        {/* 5. Holistic Growth Beyond the Blackboard (Tabbed Interactive Showcase) */}
        <HolisticGrowthSection onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />

        {/* 6. Curriculum & Learning Partners Logo Marquee */}
        <PartnersSlider />

        {/* 6. Occasions & Campus Moments Gallery Grid (6-Card) */}
        <CampusOccasionsGallery />

        {/* 8. Online Admission Enquiry Form (Directly Above Footer) */}
        <EnquiryFormSection />
      </main>

      {/* Luxury Footer */}
      <Footer
        onOpenAdmissionModal={() => setAdmissionModalOpen(true)}
        onOpenVideoTour={() => setVideoTourOpen(true)}
      />

      {/* Interactive Modals & Floating Utilities */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      <VideoTourModal
        isOpen={videoTourOpen}
        onClose={() => setVideoTourOpen(false)}
      />
    </div>
  </PaletteProvider>
  );
}

export default App;
