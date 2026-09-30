import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FourFeatureCards } from './components/FourFeatureCards';
import { StatsRibbon } from './components/StatsRibbon';
import { AcademicStages } from './components/AcademicStages';
import { CampusGalleryEvents } from './components/CampusGalleryEvents';
import { ScrollingGallerySection } from './components/ScrollingGallerySection';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { Footer } from './components/Footer';
import { 
  AdmissionModal, 
  VideoTourModal, 
  FloatingActions 
} from './components/Modals';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  useScrollReveal();

  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [videoTourOpen, setVideoTourOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
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

        {/* 5. Academic Programs & Learning Stages */}
        <AcademicStages onOpenAdmissionModal={() => setAdmissionModalOpen(true)} />

        {/* 6. Glimpses of JRS (Photo Grid) & Latest Events Panel */}
        <CampusGalleryEvents />

        {/* 7. Life at JRS Infinite Scrolling Photo Gallery */}
        <ScrollingGallerySection />

        {/* 8. Online Admission Enquiry Form (Directly Above Footer) */}
        <EnquiryFormSection />
      </main>

      {/* 6. Comprehensive Luxury Footer */}
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

      <FloatingActions />
    </div>
  );
}

export default App;
