import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { TrustWall } from './components/TrustWall';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-[100dvh] bg-[#FFFFFF] text-[#19382B] selection:bg-[#4BA7C4] selection:text-[#FFFFFF]">
      <Navbar />
      <main className="bg-[#FFFFFF]">
        <HeroSection />
        <ProductsSection />
        <TrustWall />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
