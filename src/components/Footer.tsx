import React from 'react';
import { Activity, ShieldCheck, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#19350C] border-t border-[#406768]/60 pt-16 pb-12 text-[#D5D3CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#406768]/40">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6FA9BB] to-[#687D31] p-0.5">
                <div className="w-full h-full bg-[#19350C] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#6FA9BB]" />
                </div>
              </div>
              <span className="font-nebula font-bold text-xl text-[#D5D3CC] tracking-wider">Tantriks AI</span>
            </div>

            <p className="text-xs text-[#D5D3CC]/80 leading-relaxed max-w-sm">
              Autonomous AI Operating System for hospital networks. Transforming emergency triage, ICU bed allocation, and surgical suite scheduling.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#687D31]">
              <ShieldCheck className="w-4 h-4" />
              <span>HIPAA & ISO-27001 Certified Enterprise Platform</span>
            </div>
          </div>

          {/* Links 1: Platform */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-nebula text-[#6FA9BB] uppercase tracking-widest font-bold">AI Platform</h4>
            <ul className="space-y-2 text-xs text-[#D5D3CC]/85">
              <li><a href="#platform" className="hover:text-[#6FA9BB] transition-colors">Predictive Triage Engine</a></li>
              <li><a href="#platform" className="hover:text-[#6FA9BB] transition-colors">OT Surgical Scheduler</a></li>
              <li><a href="#platform" className="hover:text-[#6FA9BB] transition-colors">Clinical EHR Copilot</a></li>
              <li><a href="#architecture" className="hover:text-[#6FA9BB] transition-colors">3D Spatial Hospital OS</a></li>
            </ul>
          </div>

          {/* Links 2: Interoperability */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-nebula text-[#6FA9BB] uppercase tracking-widest font-bold">EHR Integration</h4>
            <ul className="space-y-2 text-xs text-[#D5D3CC]/85">
              <li><span className="hover:text-[#D5D3CC]">Epic Systems Connector</span></li>
              <li><span className="hover:text-[#D5D3CC]">Cerner Millennium API</span></li>
              <li><span className="hover:text-[#D5D3CC]">MEDITECH Expanse</span></li>
              <li><span className="hover:text-[#D5D3CC]">HL7 v2/v3 & FHIR R4</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-nebula text-[#6FA9BB] uppercase tracking-widest font-bold">Contact</h4>
            <div className="space-y-2 text-xs text-[#D5D3CC]/85 font-mono">
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#6FA9BB]" />
                <span>contact@tantriks.ai</span>
              </p>
              <p className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#687D31]" />
                <span>San Francisco, CA</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D5D3CC]/60 font-mono">
          <p>© {new Date().getFullYear()} Tantriks AI Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#D5D3CC]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D5D3CC]">HIPAA Security Statement</a>
            <a href="#" className="hover:text-[#D5D3CC]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
