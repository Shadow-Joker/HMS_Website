import React from 'react';
import { Cpu, Stethoscope, CalendarCheck, ShieldCheck, Zap, Activity } from 'lucide-react';

export function ModuleBento() {
  return (
    <section id="platform" className="py-24 bg-[#F3EFE3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full mb-4">
            <Cpu className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest">
              CORE SYSTEM CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide">
            Designed for High-Volume Medical Networks
          </h2>
          <p className="text-base text-[#1E2D26]/80 mt-4 font-normal">
            Four specialized AI engines operating synchronously across clinical triage, surgical operations, and EHR orchestration.
          </p>
        </div>

        {/* 4-Cell Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Cell 1: Predictive ER Triage (Sage Dark Contrast Card, 7 Columns) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-[#1E2D26] text-[#F3EFE3] border border-[#1E2D26] relative overflow-hidden group hover:border-[#769382] transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#769382]/15 rounded-full blur-3xl group-hover:bg-[#769382]/25 transition-all pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#769382]/20 border border-[#769382]/40 flex items-center justify-center text-[#769382]">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#769382] bg-[#769382]/15 px-3 py-1 rounded-full border border-[#769382]/40 font-bold tracking-widest">
                  MODULE 01
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#F3EFE3] mb-3 group-hover:text-[#769382] transition-colors tracking-wide">
                  Predictive ER & Patient Triage Engine
                </h3>
                <p className="text-sm text-[#F3EFE3]/85 leading-relaxed max-w-md">
                  Analyzes incoming telemetry, vitals, and ambulance dispatch data to predict ICU bed requirements up to 2 hours before patient arrival.
                </p>
              </div>

              {/* Graphic Element inside Cell 1 */}
              <div className="bg-[#121d18] p-4 rounded-xl border border-[#769382]/30 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[#F3EFE3]">
                  <span className="font-nebula text-[10px]">AI Triage Confidence</span>
                  <span className="text-[#769382] font-bold">99.8% Verified</span>
                </div>
                <div className="w-full bg-[#769382]/30 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#769382] h-full rounded-full w-[99.8%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Autonomous OT Scheduling (Warm Cream Card, 5 Columns) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-[#EBE3D3] border border-[#769382]/30 relative overflow-hidden group hover:border-[#1E2D26] transition-all shadow-md">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#769382]/15 border border-[#769382]/40 flex items-center justify-center text-[#769382]">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#1E2D26] bg-[#769382]/15 px-3 py-1 rounded-full border border-[#769382]/40 font-bold tracking-widest">
                  MODULE 02
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#1E2D26] mb-3 group-hover:text-[#769382] transition-colors tracking-wide">
                  Autonomous Operating Room Scheduler
                </h3>
                <p className="text-sm text-[#1E2D26]/80 leading-relaxed">
                  Eliminates surgical turnover delays by dynamically matching surgeon availability, sterilization cycles, and equipment readiness.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#769382] font-bold">
                <Zap className="w-4 h-4 text-[#769382]" />
                <span className="text-[#1E2D26]">+38% Surgical Throughput Achieved</span>
              </div>
            </div>
          </div>

          {/* Cell 3: Clinical EHR AI Copilot (White Card, 5 Columns) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-white border border-[#769382]/30 relative overflow-hidden group hover:border-[#1E2D26] transition-all shadow-md">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#769382]/15 border border-[#769382]/40 flex items-center justify-center text-[#769382]">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#769382] bg-[#769382]/15 px-3 py-1 rounded-full border border-[#769382]/40 font-bold tracking-widest">
                  MODULE 03
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#1E2D26] mb-3 group-hover:text-[#769382] transition-colors tracking-wide">
                  Clinical EHR AI Summarizer & Copilot
                </h3>
                <p className="text-sm text-[#1E2D26]/80 leading-relaxed">
                  Synthesizes thousands of lab notes and patient histories into instant 1-page clinical briefings for attending physicians.
                </p>
              </div>

              <div className="text-xs font-mono text-[#1E2D26] bg-[#C0C3B9]/40 p-3 rounded-lg border border-[#769382]/30 font-semibold">
                Avg. Physician Time Saved: <span className="text-[#1E2D26] font-bold">2.4 hrs/day</span>
              </div>
            </div>
          </div>

          {/* Cell 4: Air-Gapped Enterprise Security (Sage Green Card, 7 Columns) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-[#769382] text-white border border-[#769382] relative overflow-hidden group hover:border-[#1E2D26] transition-all shadow-xl">
            <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-white bg-white/15 px-3 py-1 rounded-full border border-white/30 font-bold tracking-widest">
                  MODULE 04
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-white mb-3 group-hover:text-[#F3EFE3] transition-colors tracking-wide">
                  Air-Gapped & HIPAA Compliant Architecture
                </h3>
                <p className="text-sm text-white/90 leading-relaxed max-w-md">
                  Deployable fully on-premise inside hospital servers. No patient data leaves your firewalls. Encrypted with AES-256 at rest and in transit.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-3 py-1 rounded-lg bg-black/20 text-white border border-white/30 font-semibold">HIPAA Compliant</span>
                <span className="px-3 py-1 rounded-lg bg-black/20 text-white border border-white/30 font-semibold">ISO 27001 Certified</span>
                <span className="px-3 py-1 rounded-lg bg-black/20 text-white border border-white/30 font-semibold">HL7 & FHIR Standard</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
