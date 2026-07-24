import React from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Zap, Stethoscope, Bed, CheckCircle2, Layers } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern bg-[#F3EFE3]">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#769382]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#C0C3B9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Modular HMS Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-[#769382]" />
              <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
                MODULAR AI HOSPITAL MANAGEMENT SYSTEM (HMS)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-nebula font-extrabold text-[#1E2D26] tracking-wider leading-[1.12]">
              The Modular AI Engine for <br />
              <span className="text-[#769382]">Modern Hospitals</span>
            </h1>

            {/* Subtitle emphasizing Modular HMS */}
            <p className="text-base sm:text-lg text-[#1E2D26]/85 leading-relaxed max-w-xl font-normal">
              Deploy standalone modules or a complete enterprise HMS. Mix, match, and scale 16 specialized hospital modules — from OPD Voice AI Scribe to BookMyShow Bed Allocation & ABDM Billing.
            </p>

            {/* Modular Highlights Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-[#769382]/30 text-[#1E2D26] font-semibold flex items-center space-x-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#769382]" />
                <span>Pick & Choose Modules</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-[#769382]/30 text-[#1E2D26] font-semibold flex items-center space-x-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#769382]" />
                <span>Zero Software Lock-in</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/90 border border-[#769382]/30 text-[#1E2D26] font-semibold flex items-center space-x-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#769382]" />
                <span>48-Hr Plug & Play Sync</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#modular-builder"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg glow-sage-dark active:scale-98 cursor-pointer tracking-wider"
              >
                <span>Build Custom HMS Package</span>
                <ArrowRight className="w-4 h-4 text-[#769382]" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center space-x-2 bg-white/90 hover:bg-white text-[#1E2D26] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl border border-[#769382]/40 transition-all cursor-pointer shadow-sm tracking-wider"
              >
                <Layers className="w-4 h-4 text-[#769382]" />
                <span>Explore 16 Modules</span>
              </a>
            </div>

            {/* Live Metrics Footer Bar */}
            <div className="pt-6 border-t border-[#769382]/30 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">Modular Options</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#769382]">16 Micro-HMS</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">OT & Bed Capacity</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">+38% Gain</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">Interoperability</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">FHIR & ABDM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive AI Hospital Command Center Preview Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#769382]/40 shadow-2xl bg-white/95 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#769382]/20 font-nebula text-[11px]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#769382] animate-pulse" />
                  <span className="text-[#1E2D26] font-bold tracking-wider">MODULAR HMS CONTROL PANEL</span>
                </div>
                <span className="text-[#769382] font-bold font-mono">PLUG & PLAY</span>
              </div>

              {/* Module 1: Voice Scribe */}
              <div className="p-4 rounded-2xl bg-[#F3EFE3] border border-[#769382]/30 space-y-2">
                <div className="flex justify-between items-center text-xs font-nebula font-bold text-[#1E2D26]">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4 text-[#769382]" />
                    <span>Multilingual Voice AI Scribe</span>
                  </div>
                  <span className="text-[10px] text-[#769382] font-mono">Module 03</span>
                </div>
                <div className="text-xs text-[#1E2D26]/80 font-mono bg-white p-2.5 rounded-xl border border-[#769382]/20">
                  <span className="text-[#769382] font-bold">[DICTATION]:</span> "Patient presents acute hypertension, prescribed Amlodipine 5mg..."
                </div>
              </div>

              {/* Module 2: Ward Bed Map */}
              <div className="p-4 rounded-2xl bg-[#F3EFE3] border border-[#769382]/30 space-y-2">
                <div className="flex justify-between items-center text-xs font-nebula font-bold text-[#1E2D26]">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-[#769382]" />
                    <span>Spatial Bed Allocation (BookMyShow)</span>
                  </div>
                  <span className="text-[10px] text-[#1E2D26] font-mono">Module 10</span>
                </div>
                <div className="w-full bg-[#769382]/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1E2D26] h-full rounded-full w-[94%]" />
                </div>
              </div>

              {/* Quick Status Tags */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#769382]/30 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#769382]" />
                  <span>ABDM QR Token</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#769382]/30 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#769382]" />
                  <span>HIPAA Encrypted</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
