import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { LiveSimulator } from './components/LiveSimulator';
import { ModuleBento } from './components/ModuleBento';
import { PatientJourneySection } from './components/PatientJourneySection';
import { Architecture3DSpec } from './components/Architecture3DSpec';
import { TrustWall } from './components/TrustWall';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-[100dvh] bg-[#F3EFE3] text-[#1E2D26] selection:bg-[#769382] selection:text-[#F3EFE3]">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <LiveSimulator />
        <ModuleBento />
        <PatientJourneySection />
        <Architecture3DSpec />
        <TrustWall />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
