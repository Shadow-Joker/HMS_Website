import React, { useState } from 'react';
import { UserCheck, Calendar, Stethoscope, FileText, FlaskConical, Radio, FileSpreadsheet, Store, ArrowUpRight, Bed, Scissors, HeartPulse, FileCheck, Receipt, ShieldAlert, Clock } from 'lucide-react';

interface ProductItem {
  id: string;
  number: string;
  name: string;
  category: 'opd' | 'diagnostics' | 'ipd' | 'billing';
  icon: React.ReactNode;
  description: string;
  tag: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: '1',
    number: '01',
    name: 'Patient Registration',
    category: 'opd',
    icon: <UserCheck className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Instant intake with ABDM QR code scanning & token queue generation.',
    tag: 'Token Engine'
  },
  {
    id: '2',
    number: '02',
    name: 'Appointment Booking',
    category: 'opd',
    icon: <Calendar className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Smart doctor roster scheduling & walk-in queue management.',
    tag: 'Reception Desk'
  },
  {
    id: '3',
    number: '03',
    name: 'Doctor Consultation',
    category: 'opd',
    icon: <Stethoscope className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Multilingual ambient voice dictation converting conversations to SOAP notes.',
    tag: 'Voice AI Scribe'
  },
  {
    id: '4',
    number: '04',
    name: 'Diagnosis Engine',
    category: 'opd',
    icon: <FileText className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Automated ICD-11 & SNOMED CT diagnostic code mapping.',
    tag: 'SOAP Structuring'
  },
  {
    id: '5',
    number: '05',
    name: 'Lab Tests Manager',
    category: 'diagnostics',
    icon: <FlaskConical className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'LIS sync, barcode sample tracking, and critical range CDSS alerts.',
    tag: 'CDSS Alert Engine'
  },
  {
    id: '6',
    number: '06',
    name: 'Radiology PACS',
    category: 'diagnostics',
    icon: <Radio className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Native web DICOM viewer with AI-assisted scan triage.',
    tag: 'DICOM AI Triage'
  },
  {
    id: '7',
    number: '07',
    name: 'Prescription Engine',
    category: 'opd',
    icon: <FileSpreadsheet className="w-5 h-5 text-[#4BA7C4]" />,
    description: '1-click digital prescriptions with drug-drug interaction alerts.',
    tag: 'E-Prescription'
  },
  {
    id: '8',
    number: '08',
    name: 'Pharmacy & Stock',
    category: 'diagnostics',
    icon: <Store className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Batch tracking, expiry alerts, and automated purchase ordering.',
    tag: 'Inventory AI'
  },
  {
    id: '9',
    number: '09',
    name: 'Admission Operations',
    category: 'ipd',
    icon: <ArrowUpRight className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Seamless patient escalation bridge from OPD to IPD admission.',
    tag: 'OPD to IPD Bridge'
  },
  {
    id: '10',
    number: '10',
    name: 'Ward Allocation',
    category: 'ipd',
    icon: <Bed className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Interactive visual 2D floorplan map for real-time bed management.',
    tag: 'BookMyShow Bed Map'
  },
  {
    id: '11',
    number: '11',
    name: 'Operation Theatre',
    category: 'ipd',
    icon: <Scissors className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Surgical suite scheduler matching surgeon rosters & sterilization.',
    tag: 'OT Suite Scheduler'
  },
  {
    id: '12',
    number: '12',
    name: 'ICU Telemetry',
    category: 'ipd',
    icon: <HeartPulse className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Continuous vital monitoring with 2-hour early decompensation alerts.',
    tag: 'ICU Early Warning'
  },
  {
    id: '13',
    number: '13',
    name: 'Discharge Engine',
    category: 'ipd',
    icon: <FileCheck className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Auto-synthesizes multi-department notes into 1-page summaries.',
    tag: 'EHR Auto-Summary'
  },
  {
    id: '14',
    number: '14',
    name: 'Hospital Billing',
    category: 'billing',
    icon: <Receipt className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Consolidated itemized bill generation for OPD, IPD, lab, & pharmacy.',
    tag: 'Report Engine'
  },
  {
    id: '15',
    number: '15',
    name: 'Insurance & TPA',
    category: 'billing',
    icon: <ShieldAlert className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'TPA pre-authorization submission & PM-JAY claims tracking.',
    tag: 'Claims Settlement'
  },
  {
    id: '16',
    number: '16',
    name: 'Patient Follow-up',
    category: 'billing',
    icon: <Clock className="w-5 h-5 text-[#4BA7C4]" />,
    description: 'Automated WhatsApp consultation reminders & health portal.',
    tag: 'Patient Portal'
  }
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'opd' | 'diagnostics' | 'ipd' | 'billing'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="modules" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#4BA7C4]/20 bg-white">
      
      {/* Centered Clean Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-sm font-mono text-[#4BA7C4] font-bold uppercase tracking-wider block">
          MODULAR SYSTEM ARCHITECTURE
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-semibold text-[#19382B] tracking-tight">
          16 Modular <span className="font-serif-italic text-[#2B7891] font-normal">HMS Capabilities</span>
        </h2>
      </div>

      {/* Centered Full-Width Category Pill Tabs - Zero Cutoff */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14 font-mono text-sm">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-5 py-2.5 rounded-full transition-all cursor-pointer font-semibold ${
            activeCategory === 'all'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'text-[#19382B] bg-[#F0F8F9] hover:bg-[#E8F4F6] border border-[#4BA7C4]/30'
          }`}
        >
          All 16
        </button>
        <button
          onClick={() => setActiveCategory('opd')}
          className={`px-5 py-2.5 rounded-full transition-all cursor-pointer font-semibold ${
            activeCategory === 'opd'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'text-[#19382B] bg-[#F0F8F9] hover:bg-[#E8F4F6] border border-[#4BA7C4]/30'
          }`}
        >
          OPD & Scribe
        </button>
        <button
          onClick={() => setActiveCategory('diagnostics')}
          className={`px-5 py-2.5 rounded-full transition-all cursor-pointer font-semibold ${
            activeCategory === 'diagnostics'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'text-[#19382B] bg-[#F0F8F9] hover:bg-[#E8F4F6] border border-[#4BA7C4]/30'
          }`}
        >
          Diagnostics & LIS
        </button>
        <button
          onClick={() => setActiveCategory('ipd')}
          className={`px-5 py-2.5 rounded-full transition-all cursor-pointer font-semibold ${
            activeCategory === 'ipd'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'text-[#19382B] bg-[#F0F8F9] hover:bg-[#E8F4F6] border border-[#4BA7C4]/30'
          }`}
        >
          IPD, Ward & OT
        </button>
        <button
          onClick={() => setActiveCategory('billing')}
          className={`px-5 py-2.5 rounded-full transition-all cursor-pointer font-semibold ${
            activeCategory === 'billing'
              ? 'bg-[#2F6A43] text-white shadow-md'
              : 'text-[#19382B] bg-[#F0F8F9] hover:bg-[#E8F4F6] border border-[#4BA7C4]/30'
          }`}
        >
          Billing & ABDM
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl border border-[#4BA7C4]/25 hover:border-[#4BA7C4] transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4 text-sm font-mono">
                <span className="text-[#4BA7C4] font-bold">{product.number}</span>
                <span className="px-3 py-1 rounded-full bg-[#F0F8F9] text-[#19382B] text-xs font-semibold border border-[#4BA7C4]/30">
                  {product.tag}
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#F0F8F9]">
                  {product.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-[#19382B]">
                  {product.name}
                </h3>
              </div>

              <p className="text-sm text-[#19382B]/85 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
