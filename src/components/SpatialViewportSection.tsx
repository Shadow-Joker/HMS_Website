import React, { useState } from 'react';
import { HospitalSpatialCanvas } from './3d/HospitalSpatialCanvas';

export function SpatialViewportSection() {
  const [activeMode, setActiveMode] = useState<'neural' | 'icu' | 'ot'>('neural');

  return (
    <section id="spatial-3d" className="py-24 max-w-6xl mx-auto px-6 bg-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="text-sm font-mono text-[#4BA7C4] font-bold uppercase tracking-wider block">
          3D SPATIAL DIGITAL TWIN
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-semibold text-[#19382B] tracking-tight">
          Interactive Hospital <span className="font-serif-italic text-[#2B7891] font-normal">Node Viewport</span>
        </h2>
        <p className="text-base sm:text-lg text-[#19382B]/85 leading-relaxed font-normal">
          Monitor real-time clinical node operations across Emergency Triage, ICU telemetry, and surgical OT suites in a clean 3D spatial matrix.
        </p>
      </div>

      {/* Layer Selector Pills */}
      <div className="flex justify-center space-x-3 mb-8 text-sm font-mono">
        <button
          onClick={() => setActiveMode('neural')}
          className={`px-6 py-3 rounded-full transition-all cursor-pointer font-semibold ${
            activeMode === 'neural'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'bg-[#F0F8F9] text-[#19382B] border border-[#4BA7C4]/30 hover:bg-[#E8F4F6]'
          }`}
        >
          Neural Core View
        </button>
        <button
          onClick={() => setActiveMode('icu')}
          className={`px-6 py-3 rounded-full transition-all cursor-pointer font-semibold ${
            activeMode === 'icu'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'bg-[#F0F8F9] text-[#19382B] border border-[#4BA7C4]/30 hover:bg-[#E8F4F6]'
          }`}
        >
          ICU Grid View
        </button>
        <button
          onClick={() => setActiveMode('ot')}
          className={`px-6 py-3 rounded-full transition-all cursor-pointer font-semibold ${
            activeMode === 'ot'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'bg-[#F0F8F9] text-[#19382B] border border-[#4BA7C4]/30 hover:bg-[#E8F4F6]'
          }`}
        >
          OT Surgery View
        </button>
      </div>

      {/* Framed Viewport Canvas Container */}
      <div className="h-[560px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#4BA7C4]/30 bg-white">
        <HospitalSpatialCanvas mode={activeMode} />
      </div>

    </section>
  );
}
