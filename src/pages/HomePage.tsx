import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProductsSection } from '../components/ProductsSection';
import { ModularConfigurator } from '../components/ModularConfigurator';
import { SpatialTwinSection } from '../components/SpatialTwinSection';
import { TrustWall } from '../components/TrustWall';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ProductsSection />
      <ModularConfigurator />
      <SpatialTwinSection />
      <TrustWall />
      <ContactSection />
    </div>
  );
}
