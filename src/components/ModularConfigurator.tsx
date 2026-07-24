import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronRight, Sparkles, Building2, Cpu, ShieldCheck } from 'lucide-react';

interface ModuleOption {
  id: string;
  name: string;
  category: 'opd' | 'ipd' | 'diagnostics' | 'billing';
  timeSavings: string;
  desc: string;
}

const MODULE_OPTIONS: ModuleOption[] = [
  { id: 'm1', name: '01. Patient Registration & Token Kiosk', category: 'opd', timeSavings: '80% faster intake', desc: 'ABDM QR intake & queue token kiosk' },
  { id: 'm2', name: '02. Appointment & Walk-in Desk', category: 'opd', timeSavings: '90% queue reduction', desc: 'Receptionist desk & walk-in manager' },
  { id: 'm3', name: '03. Multilingual Voice AI Scribe', category: 'opd', timeSavings: '2.4 hrs/doc saved', desc: 'Ambient dictation & SOAP note creation' },
  { id: 'm4', name: '04. ICD-11 & SNOMED Diagnosis Engine', category: 'opd', timeSavings: '100% coding accuracy', desc: 'Automated diagnostic coding' },
  { id: 'm5', name: '05. Lab LIS & Barcode Manager', category: 'diagnostics', timeSavings: 'Sub-sec critical alerts', desc: 'Sample tracking & critical range CDSS' },
  { id: 'm6', name: '06. Radiology DICOM PACS Viewer', category: 'diagnostics', timeSavings: 'Instant stroke triage', desc: 'AI scan anomaly highlighting' },
  { id: 'm7', name: '07. E-Prescription & Allergy CDSS', category: 'opd', timeSavings: 'Zero drug conflicts', desc: 'Digital Rx with drug interaction guard' },
  { id: 'm8', name: '08. Pharmacy Batch & Stock Manager', category: 'diagnostics', timeSavings: 'Zero stock leakage', desc: 'Expiry tracking & auto-reorder' },
  { id: 'm9', name: '09. OPD to IPD Admission Escalation', category: 'ipd', timeSavings: '100% record transfer', desc: 'Inpatient record transfer bridge' },
  { id: 'm10', name: '10. BookMyShow Ward Bed Map', category: 'ipd', timeSavings: '+34% bed turnover', desc: 'Interactive spatial bed floorplan map' },
  { id: 'm11', name: '11. BookMyShow OT Suite Scheduler', category: 'ipd', timeSavings: '+38% OT capacity', desc: 'Surgeon & sterilization visual scheduler' },
  { id: 'm12', name: '12. ICU Telemetry & Early Warning CDSS', category: 'ipd', timeSavings: '2-hr early warning', desc: 'Neural patient decompensation alert' },
  { id: 'm13', name: '13. Automated EHR Discharge Summary', category: 'ipd', timeSavings: 'Instant summary', desc: 'Auto-synthesizes multi-department notes' },
  { id: 'm14', name: '14. Consolidated Hospital Billing', category: 'billing', timeSavings: '100% itemized report', desc: 'OPD, IPD, OT & lab itemized invoice' },
  { id: 'm15', name: '15. ABDM & TPA Insurance Settlement', category: 'billing', timeSavings: '99.8% first-pass claims', desc: 'PM-JAY & TPA pre-authorization' },
  { id: 'm16', name: '16. Patient Follow-up & WhatsApp Portal', category: 'billing', timeSavings: '92% patient retention', desc: 'Automated reminders & health portal' }
];

export function ModularConfigurator() {
  const [selectedModules, setSelectedModules] = useState<string[]>(['m1', 'm3', 'm7', 'm10', 'm11', 'm14', 'm15']);
  const [hospitalTier, setHospitalTier] = useState<'clinic' | 'regional' | 'enterprise'>('regional');

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter(m => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const selectPreset = (preset: 'opd' | 'surgical' | 'full') => {
    if (preset === 'opd') {
      setSelectedModules(['m1', 'm2', 'm3', 'm4', 'm7', 'm14']);
      setHospitalTier('clinic');
    } else if (preset === 'surgical') {
      setSelectedModules(['m1', 'm3', 'm5', 'm9', 'm10', 'm11', 'm13', 'm14', 'm15']);
      setHospitalTier('regional');
    } else {
      setSelectedModules(MODULE_OPTIONS.map(m => m.id));
      setHospitalTier('enterprise');
    }
  };

  return (
    <section id="modular-builder" className="py-24 bg-[#EBE3D3]/60 border-t border-[#769382]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full mb-4">
            <Layers className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest uppercase">
              MODULAR HMS CONFIGURATOR
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide">
            Build Your Custom Hospital Package
          </h2>
          <p className="text-base text-[#1E2D26]/80 mt-3">
            Deploy only what you need today. Scale to all 16 modules as your hospital network grows with zero software lock-in.
          </p>
        </div>

        {/* Preset Buttons & Hospital Scale */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/95 p-4 rounded-2xl border border-[#769382]/30 shadow-sm">
          <div className="flex items-center space-x-2">
            <Building2 className="w-5 h-5 text-[#769382]" />
            <span className="text-xs font-nebula font-bold text-[#1E2D26]">Hospital Scale:</span>
            <div className="flex space-x-1 font-mono text-xs">
              <button
                onClick={() => setHospitalTier('clinic')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  hospitalTier === 'clinic' ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold' : 'bg-[#F3EFE3] text-[#1E2D26]'
                }`}
              >
                Clinic / OPD (&lt; 50 Beds)
              </button>
              <button
                onClick={() => setHospitalTier('regional')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  hospitalTier === 'regional' ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold' : 'bg-[#F3EFE3] text-[#1E2D26]'
                }`}
              >
                Mid-Sized Hospital (50-200 Beds)
              </button>
              <button
                onClick={() => setHospitalTier('enterprise')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  hospitalTier === 'enterprise' ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold' : 'bg-[#F3EFE3] text-[#1E2D26]'
                }`}
              >
                Enterprise Network (200+ Beds)
              </button>
            </div>
          </div>

          {/* Quick Package Presets */}
          <div className="flex items-center space-x-2 font-nebula text-xs">
            <span className="text-[#1E2D26]/70 font-bold hidden sm:inline">Presets:</span>
            <button
              onClick={() => selectPreset('opd')}
              className="px-3 py-1.5 rounded-xl bg-[#769382]/15 hover:bg-[#769382]/25 text-[#1E2D26] border border-[#769382]/30 font-bold transition-all cursor-pointer"
            >
              OPD Clinic Pack
            </button>
            <button
              onClick={() => selectPreset('surgical')}
              className="px-3 py-1.5 rounded-xl bg-[#769382]/15 hover:bg-[#769382]/25 text-[#1E2D26] border border-[#769382]/30 font-bold transition-all cursor-pointer"
            >
              Surgical & IPD Pack
            </button>
            <button
              onClick={() => selectPreset('full')}
              className="px-3 py-1.5 rounded-xl bg-[#1E2D26] text-[#F3EFE3] font-bold transition-all cursor-pointer"
            >
              Full 16-Module Suite
            </button>
          </div>
        </div>

        {/* Module Checklist & Output Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Selector Grid (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MODULE_OPTIONS.map((module) => {
              const isSelected = selectedModules.includes(module.id);
              return (
                <div
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between ${
                    isSelected
                      ? 'bg-white border-[#769382] shadow-md'
                      : 'bg-white/60 border-[#769382]/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-[#769382] border-[#769382] text-white' : 'border-[#1E2D26]/30'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3 h-3" />}
                      </span>
                      <span className="text-xs font-nebula font-bold text-[#1E2D26] tracking-wide">
                        {module.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#1E2D26]/75 font-sans pl-6">
                      {module.desc}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#769382] font-bold bg-[#769382]/10 px-2 py-0.5 rounded shrink-0">
                    {module.timeSavings}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Config Summary Card (4 Columns) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#769382]/40 shadow-xl bg-white/95 space-y-6">
              
              <div className="pb-4 border-b border-[#769382]/20">
                <span className="text-[10px] font-nebula text-[#769382] font-bold uppercase tracking-widest">
                  YOUR CUSTOM MODULAR PACKAGE
                </span>
                <h3 className="text-xl font-nebula font-bold text-[#1E2D26] tracking-wide mt-1">
                  {selectedModules.length} Modules Selected
                </h3>
              </div>

              {/* Metrics Estimate */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F3EFE3] border border-[#769382]/20">
                  <span className="text-[#1E2D26]/80">Deployment Speed:</span>
                  <span className="font-bold text-[#769382] font-nebula">48 Hours Turnkey</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F3EFE3] border border-[#769382]/20">
                  <span className="text-[#1E2D26]/80">Existing EHR Sync:</span>
                  <span className="font-bold text-[#1E2D26] font-nebula">Epic / Cerner / HL7</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-[#F3EFE3] border border-[#769382]/20">
                  <span className="text-[#1E2D26]/80">Estimated ROI:</span>
                  <span className="font-bold text-[#769382] font-nebula">+38% Capacity</span>
                </div>
              </div>

              {/* Security & Support Tags */}
              <div className="pt-2 space-y-2 text-[11px] font-mono text-[#1E2D26]/80">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#769382]" />
                  <span>ABDM M1-M3 & HIPAA Included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[#769382]" />
                  <span>On-Premise or Cloud Microservices</span>
                </div>
              </div>

              {/* Primary CTA */}
              <a
                href="#contact"
                className="w-full bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg glow-sage-dark flex items-center justify-center space-x-2 cursor-pointer tracking-wider"
              >
                <span>Request Custom Quote</span>
                <ChevronRight className="w-4 h-4 text-[#769382]" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
