import React from 'react';
import { TrustWall } from '../components/TrustWall';
import { Architecture3DSpec } from '../components/Architecture3DSpec';
import { ContactSection } from '../components/ContactSection';
import { ShieldCheck } from 'lucide-react';

export function CompliancePage() {
  return (
    <div className="pt-24 space-y-0 bg-[#F3EFE3]">
      {/* Header */}
      <div className="bg-[#EBE3D3]/60 py-12 border-b border-[#769382]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
              SECURITY PAGE :: ABDM & COMPLIANCE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-nebula font-extrabold text-[#1E2D26] tracking-wider">
            ABDM, HIPAA & Security
          </h1>

          <p className="text-base sm:text-lg text-[#1E2D26]/85 max-w-2xl mx-auto font-normal">
            Certified for Ayushman Bharat Digital Mission (M1, M2, M3), DPDP Act 2023, HIPAA, ISO 27001, and FHIR R4 interoperability.
          </p>
        </div>
      </div>

      <TrustWall />
      <Architecture3DSpec />
      <ContactSection />
    </div>
  );
}
