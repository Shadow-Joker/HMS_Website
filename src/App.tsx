import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LiveSimulator } from './components/LiveSimulator';
import { ModuleBento } from './components/ModuleBento';
import { Architecture3DSpec } from './components/Architecture3DSpec';
import { TrustWall } from './components/TrustWall';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-[100dvh] bg-[#19350C] text-[#D5D3CC] selection:bg-[#6FA9BB] selection:text-[#19350C]">
      <Navbar />
      <main>
        <HeroSection />
        <LiveSimulator />
        <ModuleBento />
        <Architecture3DSpec />
        <TrustWall />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
