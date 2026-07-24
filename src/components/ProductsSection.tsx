import React, { useState } from 'react';
import { UserCheck, Calendar, Stethoscope, FileText, FlaskConical, Radio, FileSpreadsheet, Store, ArrowUpRight, Bed, Scissors, HeartPulse, FileCheck, Receipt, ShieldAlert, Clock, PackageCheck } from 'lucide-react';

interface ProductItem {
  id: string;
  number: string;
  name: string;
  engine: string;
  badge: string;
  category: 'opd' | 'diagnostics' | 'ipd' | 'billing';
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: '1',
    number: '01',
    name: 'Patient Registration',
    engine: 'Token Generation Engine',
    badge: 'Token',
    category: 'opd',
    icon: <UserCheck className="w-5 h-5 text-[#769382]" />,
    description: 'Instant patient intake with ABDM QR scanning, biometric verification, and digital queue token assignment.',
    features: ['ABDM M1 Health ID integration', 'Biometric & QR quick intake', 'Queue Token Generation']
  },
  {
    id: '2',
    number: '02',
    name: 'Appointment Booking',
    engine: 'Token + Receptionist Desk',
    badge: 'Token + Receptionist',
    category: 'opd',
    icon: <Calendar className="w-5 h-5 text-[#769382]" />,
    description: 'Smart doctor schedule manager with automated token queuing, walk-in registration, and SMS status alerts.',
    features: ['Multi-specialty doctor rosters', 'Token queue estimation', 'Receptionist Desk Portal']
  },
  {
    id: '3',
    number: '03',
    name: 'Doctor Consultation',
    engine: 'AI Voice Scribe',
    badge: 'Scribe',
    category: 'opd',
    icon: <Stethoscope className="w-5 h-5 text-[#769382]" />,
    description: 'Ambient listening AI dictation converts doctor-patient conversations into structured clinical notes in real time.',
    features: ['Multilingual voice dictation', 'Auto SOAP note creation', '99.4% clinical term accuracy']
  },
  {
    id: '4',
    number: '04',
    name: 'Diagnosis Engine',
    engine: 'AI Scribe & SOAP Structuring',
    badge: 'Scribe',
    category: 'opd',
    icon: <FileText className="w-5 h-5 text-[#769382]" />,
    description: 'Automated ICD-11 and SNOMED CT diagnostic code mapping directly derived from physician dictation.',
    features: ['ICD-11 & SNOMED CT coding', 'Symptom pattern matching', 'Instant consultation summaries']
  },
  {
    id: '5',
    number: '05',
    name: 'Lab Tests Manager',
    engine: 'CDSS (Clinical Decision Support)',
    badge: 'CDSS',
    category: 'diagnostics',
    icon: <FlaskConical className="w-5 h-5 text-[#769382]" />,
    description: 'Automated test ordering, sample barcode tracking, and AI critical result alert notification system.',
    features: ['Barcode sample tracking', 'LIS bi-directional sync', 'Critical range CDSS alerts']
  },
  {
    id: '6',
    number: '06',
    name: 'Radiology PACS',
    engine: 'CDSS (AI DICOM Scan Triage)',
    badge: 'CDSS',
    category: 'diagnostics',
    icon: <Radio className="w-5 h-5 text-[#769382]" />,
    description: 'Integrated DICOM viewer with AI-assisted stroke, hemorrhage, and pulmonary nodule detection.',
    features: ['Native DICOM web viewer', 'AI scan anomaly highlighting', 'RIS workflow automation']
  },
  {
    id: '7',
    number: '07',
    name: 'Prescription Engine',
    engine: 'E-Prescription & CDSS Safeguards',
    badge: 'E-Prescription',
    category: 'opd',
    icon: <FileSpreadsheet className="w-5 h-5 text-[#769382]" />,
    description: '1-click digital prescriptions with built-in drug-drug interaction and allergy alert checking.',
    features: ['Drug interaction CDSS alerts', 'Allergy safety screening', 'Instant pharmacy routing']
  },
  {
    id: '8',
    number: '08',
    name: 'Pharmacy & Stock',
    engine: 'E-Prescription + Inventory',
    badge: 'E-Prescription + Inventory',
    category: 'diagnostics',
    icon: <Store className="w-5 h-5 text-[#769382]" />,
    description: 'Real-time medicine dispensing, batch tracking, expiry date alerts, and auto-purchase order generation.',
    features: ['Batch & expiry date tracking', 'Auto-dispense verification', 'Inventory re-order AI']
  },
  {
    id: '9',
    number: '09',
    name: 'Admission Operations',
    engine: 'OPD to IPD Transfer Bridge',
    badge: 'OPD to IPD',
    category: 'ipd',
    icon: <ArrowUpRight className="w-5 h-5 text-[#769382]" />,
    description: 'Seamless patient escalation from OPD triage to inpatient admission with complete medical record transfer.',
    features: ['Instant bed requisition', 'Financial pre-authorization', 'Inpatient record transfer']
  },
  {
    id: '10',
    number: '10',
    name: 'Ward Allocation',
    engine: 'BookMyShow-Style Bed Map',
    badge: 'BookMyShow-Style',
    category: 'ipd',
    icon: <Bed className="w-5 h-5 text-[#769382]" />,
    description: 'Interactive visual 2D/3D floorplan map to view, select, reserve, and transfer hospital beds like cinema seating.',
    features: ['Interactive visual floorplan', 'Real-time bed availability', 'Step-down bed prediction']
  },
  {
    id: '11',
    number: '11',
    name: 'Operation Theatre (OT)',
    engine: 'BookMyShow-Style OT + CDSS',
    badge: 'BookMyShow + CDSS',
    category: 'ipd',
    icon: <Scissors className="w-5 h-5 text-[#769382]" />,
    description: 'Visual surgical suite scheduler matching surgeon rosters, equipment sterilization, and OT room slots.',
    features: ['Visual surgical slot grid', 'Sterilization cycle tracking', 'Surgeon availability matrix']
  },
  {
    id: '12',
    number: '12',
    name: 'ICU Telemetry System',
    engine: 'Partial Scribe + CDSS Warning',
    badge: 'Scribe (Partial) + CDSS',
    category: 'ipd',
    icon: <HeartPulse className="w-5 h-5 text-[#769382]" />,
    description: 'Continuous vital monitoring with neural decompensation predictor alerting ICU staff 2 hours early.',
    features: ['Continuous vital streaming', '2-Hr early warning CDSS', 'Partial nursing voice scribe']
  },
  {
    id: '13',
    number: '13',
    name: 'Discharge Engine',
    engine: 'AI Summary Generator',
    badge: 'Summary',
    category: 'ipd',
    icon: <FileCheck className="w-5 h-5 text-[#769382]" />,
    description: 'Auto-synthesizes multi-department lab, surgery, and nursing notes into a 1-page clinical discharge summary.',
    features: ['Auto clinical summary generation', 'Discharge medicine reconciliation', 'Patient care instructions']
  },
  {
    id: '14',
    number: '14',
    name: 'Hospital Billing',
    engine: 'Automated Report Generation',
    badge: 'Report Generation',
    category: 'billing',
    icon: <Receipt className="w-5 h-5 text-[#769382]" />,
    description: 'Itemized bill generation consolidating consultation, OPD, IPD, lab, OT, and pharmacy line items.',
    features: ['Automated charge aggregation', 'Itemized PDF report engine', 'Multi-payment gateway sync']
  },
  {
    id: '15',
    number: '15',
    name: 'Insurance & TPA',
    engine: 'AI Pre-Auth & Claims Guard',
    badge: 'AI Settlement',
    category: 'billing',
    icon: <ShieldAlert className="w-5 h-5 text-[#769382]" />,
    description: 'Direct TPA pre-authorization submission, PM-JAY package mapping, and instant settlement tracking.',
    features: ['TPA pre-authorization engine', 'PM-JAY package auto-match', 'First-pass claims validation']
  },
  {
    id: '16',
    number: '16',
    name: 'Patient Follow-up',
    engine: 'Receptionist & Patient Portal',
    badge: 'Receptionist + Portal',
    category: 'billing',
    icon: <Clock className="w-5 h-5 text-[#769382]" />,
    description: 'Automated follow-up scheduling, WhatsApp consultation reminders, and digital report portal access.',
    features: ['WhatsApp & SMS reminders', 'Digital patient health portal', 'Post-discharge follow-up queue']
  }
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'opd' | 'diagnostics' | 'ipd' | 'billing'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#F3EFE3] relative border-t border-[#769382]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/40 px-3.5 py-1.5 rounded-full mb-4">
            <PackageCheck className="w-4 h-4 text-[#769382]" />
            <span className="text-xs font-nebula text-[#1E2D26] font-bold tracking-widest">
              TANTRIKS AI PRODUCT SUITE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide">
            16 Modular Products for Hospital Operations
          </h2>
          <p className="text-base text-[#1E2D26]/80 mt-3 font-normal">
            From patient token registration and AI Voice Scribe to BookMyShow-style bed & OT allocation, instant billing, and TPA insurance settlement.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-nebula text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
              activeCategory === 'all'
                ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                : 'bg-white/80 text-[#1E2D26] border border-[#769382]/30 hover:bg-[#769382]/15'
            }`}
          >
            All 16 Products
          </button>
          <button
            onClick={() => setActiveCategory('opd')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
              activeCategory === 'opd'
                ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                : 'bg-white/80 text-[#1E2D26] border border-[#769382]/30 hover:bg-[#769382]/15'
            }`}
          >
            OPD & Consultation (1-4, 7)
          </button>
          <button
            onClick={() => setActiveCategory('diagnostics')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
              activeCategory === 'diagnostics'
                ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                : 'bg-white/80 text-[#1E2D26] border border-[#769382]/30 hover:bg-[#769382]/15'
            }`}
          >
            Diagnostics & Stock (5-6, 8)
          </button>
          <button
            onClick={() => setActiveCategory('ipd')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
              activeCategory === 'ipd'
                ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                : 'bg-white/80 text-[#1E2D26] border border-[#769382]/30 hover:bg-[#769382]/15'
            }`}
          >
            IPD, Ward & OT (9-13)
          </button>
          <button
            onClick={() => setActiveCategory('billing')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider ${
              activeCategory === 'billing'
                ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                : 'bg-white/80 text-[#1E2D26] border border-[#769382]/30 hover:bg-[#769382]/15'
            }`}
          >
            Billing & Insurance (14-16)
          </button>
        </div>

        {/* 16-Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card p-6 rounded-3xl border border-[#769382]/30 space-y-4 hover:border-[#769382] transition-all shadow-sm hover:shadow-lg bg-white/95 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#769382] bg-[#769382]/15 px-2.5 py-1 rounded-lg border border-[#769382]/30">
                    MOD {product.number}
                  </span>
                  <span className="text-[10px] font-nebula font-bold px-2 py-1 rounded-full bg-[#1E2D26] text-[#F3EFE3] tracking-widest uppercase">
                    {product.badge}
                  </span>
                </div>

                <div className="flex items-center space-x-3 pt-1">
                  <div className="p-2.5 rounded-2xl bg-[#769382]/15 border border-[#769382]/30">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-nebula font-bold text-[#1E2D26] tracking-wide">
                      {product.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#769382] font-semibold block">
                      {product.engine}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#1E2D26]/80 leading-relaxed font-sans pt-1">
                  {product.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="pt-3 border-t border-[#769382]/20 space-y-1.5 font-mono text-[10px] text-[#1E2D26]/85">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#769382]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
