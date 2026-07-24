import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function TrustWall() {
  const complianceItems = [
    { title: 'HIPAA Certified', desc: 'AES-256 Bit Encryption at rest and in transit' },
    { title: 'ISO 27001 & 27701', desc: 'Highest global information security protocol' },
    { title: 'HL7 & FHIR Native', desc: 'Direct API interoperability with all major EHRs' },
    { title: 'SOC 2 Type II', desc: 'Audited continuous risk & threat monitoring' }
  ];

  return (
    <section id="compliance" className="py-20 bg-[#D5D3CC] border-t border-[#406768]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-nebula text-[#687D31] font-bold uppercase tracking-widest block mb-2">
            TRUSTED BY CLINICAL LEADERS
          </span>
          <h3 className="text-2xl sm:text-3xl font-nebula font-bold text-[#19350C] tracking-wide">
            Enterprise Compliance & Security
          </h3>
        </div>

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceItems.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[#406768]/30 space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#687D31]/15 border border-[#687D31]/40 flex items-center justify-center text-[#687D31] font-bold">
                <ShieldCheck className="w-5 h-5 text-[#687D31]" />
              </div>
              <h4 className="text-base font-nebula font-bold text-[#19350C] tracking-wide">{item.title}</h4>
              <p className="text-xs text-[#19350C]/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Interoperability Partners Logo Wall */}
        <div className="pt-8 border-t border-[#406768]/20">
          <p className="text-center text-xs font-nebula text-[#19350C]/60 mb-6 uppercase tracking-wider font-bold">
            NATIVE INTEROPERABILITY WITH LEADING HEALTHCARE ECOSYSTEMS
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-85 hover:opacity-100 transition-opacity font-nebula">
            <div className="font-bold text-xl tracking-wider text-[#19350C]">EPIC SYSTEMS</div>
            <div className="font-bold text-xl tracking-wider text-[#406768]">CERNER</div>
            <div className="font-bold text-xl tracking-wider text-[#19350C]">MEDITECH</div>
            <div className="font-bold text-xl tracking-wider text-[#687D31]">HL7 FHIR</div>
            <div className="font-bold text-xl tracking-wider text-[#19350C]">ALLSCRIPTS</div>
          </div>
        </div>

      </div>
    </section>
  );
}
