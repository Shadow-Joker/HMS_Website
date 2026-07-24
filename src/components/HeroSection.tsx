import React, { useState } from 'react';
import { HospitalSpatialCanvas } from './3d/HospitalSpatialCanvas';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

export function HeroSection() {
  const [active3DMode, setActive3DMode] = useState<'neural' | 'icu' | 'ot'>('neural');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern bg-[#F3EFE3]">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#769382]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#C0C3B9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-[#769382]" />
              <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest">
                NEXT-GEN CLINICAL AI PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-nebula font-extrabold text-[#1E2D26] tracking-wider leading-[1.12]">
              Autonomous AI for <br />
              <span className="text-[#769382]">Hospital Operations</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#1E2D26]/85 leading-relaxed max-w-xl font-normal">
              Tantriks AI automates surgical scheduling, predicts ER capacity surges, and streamlines clinical EHR workflows in real time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#simulator"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg glow-sage-dark active:scale-98 cursor-pointer tracking-wider"
              >
                <span>Launch Live Telemetry</span>
                <ArrowRight className="w-4 h-4 text-[#769382]" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-[#1E2D26] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl border border-[#769382]/40 transition-all cursor-pointer shadow-sm tracking-wider"
              >
                <Layers className="w-4 h-4 text-[#769382]" />
                <span>Explore 3D Nodes</span>
              </a>
            </div>

            {/* Live Metrics Micro-Bar */}
            <div className="pt-6 border-t border-[#769382]/30 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">ER Triage Latency</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#769382]">0.4 sec</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">OT Utilization</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">+38%</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">Security Protocol</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">HIPAA-AA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Spatial Canvas */}
          <div className="lg:col-span-6 space-y-3">
            {/* 3D Mode Selector Buttons */}
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-md p-1.5 rounded-xl border border-[#769382]/30 shadow-sm">
              <span className="text-[11px] font-nebula text-[#1E2D26]/70 px-3 hidden sm:inline font-bold tracking-wider">
                3D Viewport:
              </span>
              <div className="flex space-x-1 w-full sm:w-auto font-nebula text-[10px]">
                <button
                  onClick={() => setActive3DMode('neural')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'neural'
                      ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                      : 'text-[#1E2D26]/70 hover:text-[#1E2D26]'
                  }`}
                >
                  Neural Node
                </button>
                <button
                  onClick={() => setActive3DMode('icu')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'icu'
                      ? 'bg-[#769382] text-white font-bold shadow'
                      : 'text-[#1E2D26]/70 hover:text-[#1E2D26]'
                  }`}
                >
                  ICU Grid
                </button>
                <button
                  onClick={() => setActive3DMode('ot')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'ot'
                      ? 'bg-[#4E6B5A] text-white font-bold shadow'
                      : 'text-[#1E2D26]/70 hover:text-[#1E2D26]'
                  }`}
                >
                  OT Surge
                </button>
              </div>
            </div>

            {/* R3F 3D Viewport Container */}
            <div className="h-[440px] sm:h-[480px] w-full">
              <HospitalSpatialCanvas mode={active3DMode} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
