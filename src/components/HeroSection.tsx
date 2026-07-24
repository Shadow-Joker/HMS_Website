import React from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Zap, Stethoscope, Bed, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern bg-[#F3EFE3]">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#769382]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#C0C3B9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop & CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-[#769382]" />
              <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
                AUTONOMOUS CLINICAL AI PLATFORM
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-nebula font-extrabold text-[#1E2D26] tracking-wider leading-[1.12]">
              Autonomous AI for <br />
              <span className="text-[#769382]">Hospital Operations</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#1E2D26]/85 leading-relaxed max-w-xl font-normal">
              Tantriks AI automates surgical scheduling, predicts ER capacity surges, dictated clinical notes via Voice AI Scribe, and synchronizes 16 hospital modules in real time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center space-x-2.5 bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg glow-sage-dark active:scale-98 cursor-pointer tracking-wider"
              >
                <span>Explore 16 Products</span>
                <ArrowRight className="w-4 h-4 text-[#769382]" />
              </a>

              <a
                href="#spatial-twin"
                className="inline-flex items-center justify-center space-x-2 bg-white/90 hover:bg-white text-[#1E2D26] font-nebula font-bold text-xs px-6 py-3.5 rounded-xl border border-[#769382]/40 transition-all cursor-pointer shadow-sm tracking-wider"
              >
                <Activity className="w-4 h-4 text-[#769382]" />
                <span>Launch 3D Spatial Twin</span>
              </a>
            </div>

            {/* Live Metrics Footer Bar */}
            <div className="pt-6 border-t border-[#769382]/30 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">ER Triage Latency</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#769382]">0.4 sec</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">OT Throughput</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">+38%</span>
              </div>
              <div>
                <span className="text-xs text-[#1E2D26]/70 block font-semibold">Compliance</span>
                <span className="text-base sm:text-lg font-nebula font-bold text-[#1E2D26]">ABDM M3</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Hospital Command Center Preview Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#769382]/40 shadow-2xl bg-white/95 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#769382]/20 font-nebula text-[11px]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#769382] animate-pulse" />
                  <span className="text-[#1E2D26] font-bold tracking-wider">TANTRIKS AI COMMAND DASHBOARD</span>
                </div>
                <span className="text-[#769382] font-bold font-mono">ONLINE</span>
              </div>

              {/* Widget 1: Voice Scribe */}
              <div className="p-4 rounded-2xl bg-[#F3EFE3] border border-[#769382]/30 space-y-2">
                <div className="flex justify-between items-center text-xs font-nebula font-bold text-[#1E2D26]">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4 text-[#769382]" />
                    <span>Multilingual Voice AI Scribe</span>
                  </div>
                  <span className="text-[10px] text-[#769382] font-mono">99.4% Dictation</span>
                </div>
                <div className="text-xs text-[#1E2D26]/80 font-mono bg-white p-2.5 rounded-xl border border-[#769382]/20">
                  <span className="text-[#769382] font-bold">[DICTATION]:</span> "Patient presents acute hypertension, prescribed Amlodipine 5mg..."
                </div>
              </div>

              {/* Widget 2: Ward Bed Map */}
              <div className="p-4 rounded-2xl bg-[#F3EFE3] border border-[#769382]/30 space-y-2">
                <div className="flex justify-between items-center text-xs font-nebula font-bold text-[#1E2D26]">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-[#769382]" />
                    <span>Spatial Bed Allocation (BookMyShow)</span>
                  </div>
                  <span className="text-[10px] text-[#1E2D26] font-mono">94% Occupancy</span>
                </div>
                <div className="w-full bg-[#769382]/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1E2D26] h-full rounded-full w-[94%]" />
                </div>
              </div>

              {/* Widget 3: Quick Status */}
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
