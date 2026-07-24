import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { PhoneCall } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-24 space-y-0 bg-[#F3EFE3]">
      {/* Header */}
      <div className="bg-[#EBE3D3]/60 py-12 border-b border-[#769382]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
            <PhoneCall className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
              CONTACT PAGE :: DEMO REQUEST
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-nebula font-extrabold text-[#1E2D26] tracking-wider">
            Schedule an Enterprise Simulation
          </h1>

          <p className="text-base sm:text-lg text-[#1E2D26]/85 max-w-2xl mx-auto font-normal">
            Speak with a Tantriks AI Clinical Systems Specialist to map out custom modular HMS deployment for your hospital network.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
