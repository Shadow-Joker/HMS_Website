import React from 'react';
import { Cpu, Stethoscope, CalendarCheck, ShieldCheck, Zap, Activity } from 'lucide-react';

export function ModuleBento() {
  return (
    <section id="platform" className="py-24 bg-[#D5D3CC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#687D31]/15 border border-[#687D31]/40 px-3.5 py-1.5 rounded-full mb-4">
            <Cpu className="w-4 h-4 text-[#687D31]" />
            <span className="text-xs font-nebula text-[#19350C] font-bold tracking-widest">
              CORE SYSTEM CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#19350C] tracking-wide">
            Designed for High-Volume Medical Networks
          </h2>
          <p className="text-base text-[#19350C]/80 mt-4 font-normal">
            Four specialized AI engines operating synchronously across clinical triage, surgical operations, and EHR orchestration.
          </p>
        </div>

        {/* 4-Cell Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Cell 1: Predictive ER Triage (Phthalo Green Contrast Card, 7 Columns) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-[#19350C] text-[#D5D3CC] border border-[#19350C] relative overflow-hidden group hover:border-[#6FA9BB] transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6FA9BB]/15 rounded-full blur-3xl group-hover:bg-[#6FA9BB]/25 transition-all pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#6FA9BB]/20 border border-[#6FA9BB]/40 flex items-center justify-center text-[#6FA9BB]">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#6FA9BB] bg-[#6FA9BB]/15 px-3 py-1 rounded-full border border-[#6FA9BB]/40 font-bold tracking-widest">
                  MODULE 01
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#D5D3CC] mb-3 group-hover:text-[#6FA9BB] transition-colors tracking-wide">
                  Predictive ER & Patient Triage Engine
                </h3>
                <p className="text-sm text-[#D5D3CC]/85 leading-relaxed max-w-md">
                  Analyzes incoming telemetry, vitals, and ambulance dispatch data to predict ICU bed requirements up to 2 hours before patient arrival.
                </p>
              </div>

              {/* Graphic Element inside Cell 1 */}
              <div className="bg-[#0f2207] p-4 rounded-xl border border-[#406768]/50 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[#D5D3CC]">
                  <span className="font-nebula text-[10px]">AI Triage Confidence</span>
                  <span className="text-[#687D31] font-bold">99.8% Verified</span>
                </div>
                <div className="w-full bg-[#406768]/40 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#687D31] h-full rounded-full w-[99.8%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Cell 2: Autonomous OT Scheduling (White Card, 5 Columns) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-white border border-[#406768]/30 relative overflow-hidden group hover:border-[#687D31] transition-all shadow-md">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#687D31]/15 border border-[#687D31]/40 flex items-center justify-center text-[#687D31]">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#19350C] bg-[#687D31]/15 px-3 py-1 rounded-full border border-[#687D31]/40 font-bold tracking-widest">
                  MODULE 02
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#19350C] mb-3 group-hover:text-[#687D31] transition-colors tracking-wide">
                  Autonomous Operating Room Scheduler
                </h3>
                <p className="text-sm text-[#19350C]/80 leading-relaxed">
                  Eliminates surgical turnover delays by dynamically matching surgeon availability, sterilization cycles, and equipment readiness.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#687D31] font-bold">
                <Zap className="w-4 h-4" />
                <span>+38% Surgical Throughput Achieved</span>
              </div>
            </div>
          </div>

          {/* Cell 3: Clinical EHR AI Copilot (White Card, 5 Columns) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-white border border-[#406768]/30 relative overflow-hidden group hover:border-[#406768] transition-all shadow-md">
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#406768]/15 border border-[#406768]/40 flex items-center justify-center text-[#406768]">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="text-xs font-nebula text-[#406768] bg-[#406768]/15 px-3 py-1 rounded-full border border-[#406768]/40 font-bold tracking-widest">
                  MODULE 03
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-[#19350C] mb-3 group-hover:text-[#406768] transition-colors tracking-wide">
                  Clinical EHR AI Summarizer & Copilot
                </h3>
                <p className="text-sm text-[#19350C]/80 leading-relaxed">
                  Synthesizes thousands of lab notes and patient histories into instant 1-page clinical briefings for attending physicians.
                </p>
              </div>

              <div className="text-xs font-mono text-[#19350C] bg-[#D5D3CC]/60 p-3 rounded-lg border border-[#406768]/30 font-semibold">
                Avg. Physician Time Saved: <span className="text-[#19350C] font-bold">2.4 hrs/day</span>
              </div>
            </div>
          </div>

          {/* Cell 4: Air-Gapped Enterprise Security (Deep Space Sparkle Card, 7 Columns) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-[#406768] text-white border border-[#406768] relative overflow-hidden group hover:border-[#19350C] transition-all shadow-xl">
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
                <h3 className="text-xl sm:text-2xl font-nebula font-bold text-white mb-3 group-hover:text-[#D5D3CC] transition-colors tracking-wide">
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
