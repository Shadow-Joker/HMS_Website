import React, { useState } from 'react';
import { HospitalSpatialCanvas } from './3d/HospitalSpatialCanvas';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

export function HeroSection() {
  const [active3DMode, setActive3DMode] = useState<'neural' | 'icu' | 'ot'>('neural');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern bg-[#D5D3CC]">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#406768]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#687D31]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Label with Nebula font */}
            <div className="inline-flex items-center space-x-2 bg-[#687D31]/15 border border-[#687D31]/40 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-[#687D31]" />
              <span className="text-xs font-nebula text-[#19350C] font-bold tracking-widest">
                NEXT-GEN CLINICAL AI PLATFORM
              </span>
            </div>

            {/* Main Headline with Nebula font */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-nebula font-extrabold text-[#19350C] tracking-wider leading-[1.12]">
              Autonomous AI for <br />
              <span className="text-[#406768]">Hospital Operations</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#19350C]/85 leading-relaxed max-w-xl font-normal">
              Tantriks AI automates surgical scheduling, predicts ER capacity surges, and streamlines clinical EHR workflows in real time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#simulator"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#19350C] hover:bg-[#19350C]/90 text-[#D5D3CC] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg glow-phthalo active:scale-98 cursor-pointer tracking-wider"
              >
                <span>Launch Live Telemetry</span>
                <ArrowRight className="w-4 h-4 text-[#6FA9BB]" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center justify-center space-x-2 bg-white/80 hover:bg-white text-[#19350C] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl border border-[#406768]/40 transition-all cursor-pointer shadow-sm tracking-wider"
              >
                <Layers className="w-4 h-4 text-[#406768]" />
                <span>Explore 3D Nodes</span>
              </a>
            </div>

            {/* Live Metrics Micro-Bar */}
            <div className="pt-6 border-t border-[#406768]/30 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-xs text-[#19350C]/70 block font-semibold">ER Triage Latency</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#687D31]">0.4 sec</span>
              </div>
              <div>
                <span className="text-xs text-[#19350C]/70 block font-semibold">OT Utilization</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#406768]">+38%</span>
              </div>
              <div>
                <span className="text-xs text-[#19350C]/70 block font-semibold">Security Protocol</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#19350C]">HIPAA-AA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Spatial Canvas */}
          <div className="lg:col-span-6 space-y-3">
            {/* 3D Mode Selector Buttons */}
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-md p-1.5 rounded-xl border border-[#406768]/30 shadow-sm">
              <span className="text-[11px] font-nebula text-[#19350C]/70 px-3 hidden sm:inline font-bold tracking-wider">
                3D Viewport:
              </span>
              <div className="flex space-x-1 w-full sm:w-auto font-nebula text-[10px]">
                <button
                  onClick={() => setActive3DMode('neural')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'neural'
                      ? 'bg-[#19350C] text-[#D5D3CC] font-bold shadow'
                      : 'text-[#19350C]/70 hover:text-[#19350C]'
                  }`}
                >
                  Neural Node
                </button>
                <button
                  onClick={() => setActive3DMode('icu')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'icu'
                      ? 'bg-[#687D31] text-[#19350C] font-bold shadow'
                      : 'text-[#19350C]/70 hover:text-[#19350C]'
                  }`}
                >
                  ICU Grid
                </button>
                <button
                  onClick={() => setActive3DMode('ot')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all cursor-pointer tracking-wider ${
                    active3DMode === 'ot'
                      ? 'bg-[#406768] text-white font-bold shadow'
                      : 'text-[#19350C]/70 hover:text-[#19350C]'
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
