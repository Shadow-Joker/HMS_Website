import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function TrustWall() {
  const complianceItems = [
    { title: 'ABDM M1, M2 & M3 Native', desc: 'Ayushman Bharat Digital Mission health stack integration' },
    { title: 'HIPAA & DPDP Act 2023', desc: 'AES-256 Bit Encryption with complete data privacy compliance' },
    { title: 'NABH Accreditation Ready', desc: 'Standardized clinical workflows for hospital accreditation' },
    { title: 'SNOMED CT & ICD-11', desc: 'International medical coding standards & CDSS alerts' }
  ];

  return (
    <section id="compliance" className="py-20 bg-[#F3EFE3] border-t border-[#769382]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-nebula text-[#769382] font-bold uppercase tracking-widest block mb-2">
            TRUSTED BY CLINICAL LEADERS
          </span>
          <h3 className="text-2xl sm:text-3xl font-nebula font-bold text-[#1E2D26] tracking-wide">
            Enterprise Compliance & Medical Coding Standards
          </h3>
        </div>

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceItems.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[#769382]/30 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#769382]/15 border border-[#769382]/40 flex items-center justify-center text-[#769382] font-bold">
                <ShieldCheck className="w-5 h-5 text-[#769382]" />
              </div>
              <h4 className="text-base font-nebula font-bold text-[#1E2D26] tracking-wide">{item.title}</h4>
              <p className="text-xs text-[#1E2D26]/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Interoperability Partners Logo Wall */}
        <div className="pt-8 border-t border-[#769382]/20">
          <p className="text-center text-xs font-nebula text-[#1E2D26]/60 mb-6 uppercase tracking-wider font-bold">
            NATIVE INTEROPERABILITY & COMPARATIVE BENCHMARKS
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-85 hover:opacity-100 transition-opacity font-nebula">
            <div className="font-bold text-xl tracking-wider text-[#1E2D26]">EPIC SYSTEMS</div>
            <div className="font-bold text-xl tracking-wider text-[#769382]">ORACLE CERNER</div>
            <div className="font-bold text-xl tracking-wider text-[#1E2D26]">MEDMANTRA</div>
            <div className="font-bold text-xl tracking-wider text-[#769382]">MOCDOC</div>
            <div className="font-bold text-xl tracking-wider text-[#1E2D26]">OPENMRS / BAHMNI</div>
          </div>
        </div>

      </div>
    </section>
  );
}
