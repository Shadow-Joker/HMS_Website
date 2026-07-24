import React from 'react';
import { ProductsSection } from '../components/ProductsSection';
import { ContactSection } from '../components/ContactSection';
import { PackageCheck, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductsPage() {
  return (
    <div className="pt-24 space-y-0 bg-[#F3EFE3]">
      {/* Page Header */}
      <div className="bg-[#EBE3D3]/60 py-12 border-b border-[#769382]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
            <PackageCheck className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
              CATALOG PAGE :: 16 HMS MODULES
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-nebula font-extrabold text-[#1E2D26] tracking-wider">
            16 Modular HMS Products
          </h1>

          <p className="text-base sm:text-lg text-[#1E2D26]/85 max-w-2xl mx-auto font-normal">
            Explore every clinical and administrative module. Pick standalone microservices or deploy a full turnkey hospital suite.
          </p>

          <div className="pt-2 flex justify-center space-x-4">
            <Link
              to="/builder"
              className="inline-flex items-center space-x-2 bg-[#1E2D26] text-[#F3EFE3] font-nebula font-bold text-xs px-5 py-3 rounded-xl shadow cursor-pointer tracking-wider"
            >
              <Layers className="w-4 h-4 text-[#769382]" />
              <span>Launch HMS Builder</span>
              <ArrowRight className="w-4 h-4 text-[#769382]" />
            </Link>
          </div>
        </div>
      </div>

      <ProductsSection />
      <ContactSection />
    </div>
  );
}
