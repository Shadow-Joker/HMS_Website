import React, { useState } from 'react';
import { UserCheck, Stethoscope, FileText, FlaskConical, Stethoscope as ActivityIcon, Bed, Scissors, HeartPulse, FileCheck, Receipt, Sparkles } from 'lucide-react';

interface JourneyStep {
  id: number;
  stage: string;
  aiFeature: string;
  metric: string;
  icon: React.ReactNode;
  description: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    stage: '1. Patient Registration & Token',
    aiFeature: 'ABDM Health ID & AI Kiosk',
    metric: '< 10s Token Creation',
    icon: <UserCheck className="w-5 h-5 text-[#769382]" />,
    description: 'Instant patient verification via ABDM QR code and biometrics, generating smart queue tokens.'
  },
  {
    id: 2,
    stage: '2. OPD Consultation & Scribe',
    aiFeature: 'Multilingual Voice AI Scribe',
    metric: '99.4% Dictation Accuracy',
    icon: <Stethoscope className="w-5 h-5 text-[#769382]" />,
    description: 'Real-time ambient listening converts doctor-patient conversations into structured EHR SOAP notes.'
  },
  {
    id: 3,
    stage: '3. Clinical Decision & CDSS',
    aiFeature: 'AI Clinical Decision Support',
    metric: 'Real-time Interaction Alert',
    icon: <FileText className="w-5 h-5 text-[#769382]" />,
    description: 'Scans SNOMED CT and ICD-11 databases to alert physicians of drug interactions & allergies.'
  },
  {
    id: 4,
    stage: '4. Lab & Radiology PACS',
    aiFeature: 'AI Scan & DICOM Triage',
    metric: 'Sub-second CT/MRI Highlight',
    icon: <FlaskConical className="w-5 h-5 text-[#769382]" />,
    description: 'Automated stroke, fracture, and nodule detection on DICOM images prior to radiologist review.'
  },
  {
    id: 5,
    stage: '5. E-Prescription & Pharmacy',
    aiFeature: 'Automated Drug Batch Tracking',
    metric: 'Zero Inventory Leakage',
    icon: <ActivityIcon className="w-5 h-5 text-[#769382]" />,
    description: 'Direct digital prescription routing with automated expiry tracking and inventory re-ordering.'
  },
  {
    id: 6,
    stage: '6. IPD Ward & Bed Allocation',
    aiFeature: 'Predictive Bed Occupancy',
    metric: '+34% Bed Turnover',
    icon: <Bed className="w-5 h-5 text-[#769382]" />,
    description: 'BookMyShow-style interactive spatial ward map with automated step-down bed predictions.'
  },
  {
    id: 7,
    stage: '7. Operation Theatre (OT)',
    aiFeature: 'Autonomous OT Suite Scheduler',
    metric: 'Zero Turnover Delays',
    icon: <Scissors className="w-5 h-5 text-[#769382]" />,
    description: 'Synchronizes surgeon availability, sterilization cycles, and scrub teams dynamically.'
  },
  {
    id: 8,
    stage: '8. ICU Telemetry & Monitoring',
    aiFeature: 'Neural Decompensation Predictor',
    metric: '2-Hr Early Warning',
    icon: <HeartPulse className="w-5 h-5 text-[#769382]" />,
    description: 'Continuously monitors vital streams to predict patient deterioration 2 hours before occurrence.'
  },
  {
    id: 9,
    stage: '9. AI Discharge Summary',
    aiFeature: 'Instant EHR Briefing Copilot',
    metric: '2.4 Hrs Saved / Doctor / Day',
    icon: <FileCheck className="w-5 h-5 text-[#769382]" />,
    description: 'Auto-generates comprehensive 1-page clinical discharge summaries from multi-department notes.'
  },
  {
    id: 10,
    stage: '10. Billing, ABDM & TPA Claims',
    aiFeature: 'Automated Revenue Leakage Guard',
    metric: '99.8% Claims First-Pass',
    icon: <Receipt className="w-5 h-5 text-[#769382]" />,
    description: 'Instant PM-JAY and TPA pre-authorization settlement with ABDM M1, M2, M3 compliance.'
  }
];

export function PatientJourneySection() {
  const [activeStep, setActiveStep] = useState<JourneyStep>(JOURNEY_STEPS[1]);

  return (
    <section id="journey" className="py-24 bg-[#EBE3D3]/40 border-t border-[#769382]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/30 px-3.5 py-1 rounded-full text-xs font-nebula text-[#1E2D26] font-bold mb-4 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#769382]" />
            <span>END-TO-END CLINICAL JOURNEY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide">
            10-Stage AI-Augmented Hospital Flow
          </h2>
          <p className="text-sm sm:text-base text-[#1E2D26]/80 mt-3">
            From ABDM registration and Voice AI Scribe to autonomous OT scheduling and instant TPA billing claims.
          </p>
        </div>

        {/* Journey Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Step Buttons (1 to 10) */}
          <div className="lg:col-span-5 space-y-2 max-h-[520px] overflow-y-auto pr-2 scrollbar-none">
            {JOURNEY_STEPS.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeStep.id === step.id
                    ? 'bg-[#1E2D26] text-[#F3EFE3] border-[#1E2D26] shadow-md'
                    : 'bg-white/80 text-[#1E2D26] border-[#769382]/30 hover:bg-[#769382]/15'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl ${activeStep.id === step.id ? 'bg-[#769382] text-white' : 'bg-[#769382]/15 text-[#769382]'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-nebula font-bold block tracking-wider">{step.stage}</span>
                    <span className={`text-[11px] font-mono ${activeStep.id === step.id ? 'text-[#C0C3B9]' : 'text-[#769382]'}`}>
                      {step.aiFeature}
                    </span>
                  </div>
                </div>

                <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-lg ${
                  activeStep.id === step.id ? 'bg-white/20 text-[#F3EFE3]' : 'bg-[#769382]/15 text-[#1E2D26]'
                }`}>
                  {step.metric}
                </span>
              </button>
            ))}
          </div>

          {/* Right Stage Detail Showcase Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-[#769382]/35 shadow-xl bg-white/95 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#769382]/20">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-[#769382]/20 text-[#769382]">
                    {activeStep.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-nebula text-[#769382] font-bold uppercase tracking-widest">
                      STAGE 0{activeStep.id} OVERVIEW
                    </span>
                    <h3 className="text-xl font-nebula font-bold text-[#1E2D26] tracking-wide">
                      {activeStep.stage}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1E2D26] text-[#F3EFE3]">
                  {activeStep.metric}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#1E2D26]/85 leading-relaxed font-sans">
                {activeStep.description}
              </p>

              {/* Detailed Breakdown Card */}
              <div className="p-4 rounded-2xl bg-[#F3EFE3] border border-[#769382]/30 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-[#1E2D26]">
                  <span>AI Subsystem Capability:</span>
                  <span className="font-bold text-[#769382] font-nebula">{activeStep.aiFeature}</span>
                </div>

                <div className="flex justify-between items-center text-[#1E2D26]">
                  <span>Standards Supported:</span>
                  <span className="font-bold text-[#1E2D26]">ABDM M3 · FHIR R4 · ICD-11 · SNOMED CT</span>
                </div>

                <div className="flex justify-between items-center text-[#1E2D26]">
                  <span>Data Security:</span>
                  <span className="font-bold text-[#769382]">AES-256 Air-Gapped Encryption</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#769382]/15 border border-[#769382]/30 flex items-center justify-between text-xs font-nebula font-bold text-[#1E2D26]">
                <span>Tantriks Neural Co-Pilot:</span>
                <span>Active 24/7 Monitoring</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
