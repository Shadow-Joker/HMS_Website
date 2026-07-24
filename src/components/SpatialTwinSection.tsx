import React, { useState } from 'react';
import { HospitalSpatialCanvas } from './3d/HospitalSpatialCanvas';
import { Sparkles, Layers, Activity, Eye, Zap, ShieldCheck } from 'lucide-react';

export function SpatialTwinSection() {
  const [active3DMode, setActive3DMode] = useState<'neural' | 'icu' | 'ot'>('neural');

  return (
    <section id="spatial-twin" className="py-24 bg-[#EBE3D3]/50 border-t border-[#769382]/30 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#769382]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C0C3B9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
              REPURPOSED 3D SPATIAL COMMAND CENTER
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-nebula font-extrabold text-[#1E2D26] tracking-wider leading-tight">
            3D Hospital Digital Twin & Spatial OS
          </h2>
          
          <p className="text-base sm:text-lg text-[#1E2D26]/85 font-normal max-w-2xl mx-auto">
            Interact with real-time 3D spatial node telemetry. Monitor emergency triage intake, ICU bed step-downs, and surgical suite availability in a unified 3D spatial matrix.
          </p>
        </div>

        {/* Viewport Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#769382]/35 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-[#1E2D26] flex items-center justify-center text-[#769382]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-nebula font-bold text-[#1E2D26] block tracking-wide">3D Viewport Layer Preset</span>
              <span className="text-[10px] text-[#769382] font-mono font-semibold">Sub-millisecond Spatial Sync</span>
            </div>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex space-x-1.5 font-nebula text-xs">
            <button
              onClick={() => setActive3DMode('neural')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
                active3DMode === 'neural'
                  ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                  : 'bg-[#F3EFE3] text-[#1E2D26]/80 hover:bg-[#769382]/20'
              }`}
            >
              Neural Core Matrix
            </button>
            <button
              onClick={() => setActive3DMode('icu')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
                active3DMode === 'icu'
                  ? 'bg-[#769382] text-white font-bold shadow'
                  : 'bg-[#F3EFE3] text-[#1E2D26]/80 hover:bg-[#769382]/20'
              }`}
            >
              ICU Grid Mode
            </button>
            <button
              onClick={() => setActive3DMode('ot')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
                active3DMode === 'ot'
                  ? 'bg-[#4E6B5A] text-white font-bold shadow'
                  : 'bg-[#F3EFE3] text-[#1E2D26]/80 hover:bg-[#769382]/20'
              }`}
            >
              OT Surgery Mode
            </button>
          </div>
        </div>

        {/* Repurposed Widescreen 3D Viewport Container */}
        <div className="h-[520px] sm:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#769382]/40">
          <HospitalSpatialCanvas mode={active3DMode} />
        </div>

        {/* Department Telemetry Micro-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="glass-card p-4 rounded-2xl border border-[#769382]/30 bg-white/90 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#1E2D26]/70">ER Triage Node</span>
              <span className="text-[#769382] font-bold">88% Load</span>
            </div>
            <div className="text-lg font-nebula font-bold text-[#1E2D26]">0.4s Response</div>
            <span className="text-[10px] text-[#769382] block mt-1 font-sans">Ambulance Telemetry Stream</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[#769382]/30 bg-white/90 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#1E2D26]/70">ICU Telemetry</span>
              <span className="text-[#1E2D26] font-bold">94% Load</span>
            </div>
            <div className="text-lg font-nebula font-bold text-[#1E2D26]">18 Patients</div>
            <span className="text-[10px] text-[#1E2D26]/70 block mt-1 font-sans">2-Hr Early Warning CDSS</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[#769382]/30 bg-white/90 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#1E2D26]/70">Surgical OT Suites</span>
              <span className="text-[#769382] font-bold">76% Load</span>
            </div>
            <div className="text-lg font-nebula font-bold text-[#769382]">+38% Capacity</div>
            <span className="text-[10px] text-[#769382] block mt-1 font-sans">Zero Sterilization Delays</span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[#769382]/30 bg-white/90 shadow-sm">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#1E2D26]/70">AI Triage Gateway</span>
              <span className="text-[#1E2D26] font-bold">99% Intake</span>
            </div>
            <div className="text-lg font-nebula font-bold text-[#1E2D26]">0.2ms gRPC</div>
            <span className="text-[10px] text-[#1E2D26]/70 block mt-1 font-sans">Zero-Trust PHI Security</span>
          </div>
        </div>

      </div>
    </section>
  );
}
