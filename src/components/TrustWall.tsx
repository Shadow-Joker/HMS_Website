import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export function TrustWall() {
  const standards = [
    { title: 'ABDM M1, M2 & M3 Native', desc: 'Ayushman Bharat Digital Mission health stack & QR token kiosk' },
    { title: 'HIPAA & DPDP Act 2023', desc: 'AES-256 Bit Encryption with complete patient data privacy safeguards' },
    { title: 'SNOMED CT & ICD-11', desc: 'International medical coding standards & CDSS drug interaction alerts' },
    { title: 'NABH Accreditation Standard', desc: 'Standardized clinical & operational workflows for hospital accreditation' }
  ];

  return (
    <section id="compliance" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#4BA7C4]/20 bg-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-sm font-mono text-[#4BA7C4] font-bold uppercase tracking-wider block">
            ENTERPRISE GOVERNANCE
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-display font-semibold text-[#19382B] tracking-tight">
            Security, Interoperability & Regulatory Compliance
          </h2>

          <p className="text-base sm:text-lg text-[#19382B]/85 leading-relaxed font-normal">
            Neev AI connects seamlessly with legacy hospital infrastructure (Epic, Cerner, MEDITECH, MedMantra, OpenMRS) through open FHIR R4 and HL7 APIs.
          </p>
        </div>

        {/* Right Column Standards List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {standards.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#4BA7C4]/25 space-y-2.5 shadow-sm">
              <div className="flex items-center space-x-2.5 text-[#19382B] font-display font-semibold text-base">
                <Check className="w-5 h-5 text-[#4BA7C4]" />
                <span>{item.title}</span>
              </div>
              <p className="text-sm text-[#19382B]/85 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
