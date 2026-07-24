import React from 'react';
import { Activity, ShieldCheck, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1E2D26] border-t border-[#769382]/40 pt-16 pb-12 text-[#F3EFE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#769382]/30">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#769382] to-[#4E6B5A] p-0.5">
                <div className="w-full h-full bg-[#1E2D26] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#769382]" />
                </div>
              </div>
              <span className="font-nebula font-bold text-xl text-[#F3EFE3] tracking-wider">Tantriks AI</span>
            </Link>

            <p className="text-xs text-[#F3EFE3]/80 leading-relaxed max-w-sm">
              Modular AI Hospital Management System (HMS). Deploy standalone microservices or full enterprise hospital suites.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#769382]">
              <ShieldCheck className="w-4 h-4" />
              <span>ABDM M1-M3 & HIPAA Enterprise Certified</span>
            </div>
          </div>

          {/* Links 1: Platform Pages */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-nebula text-[#769382] uppercase tracking-widest font-bold">Modular Pages</h4>
            <ul className="space-y-2 text-xs text-[#F3EFE3]/85 font-nebula">
              <li><Link to="/products" className="hover:text-[#769382] transition-colors">16 HMS Products Catalog</Link></li>
              <li><Link to="/builder" className="hover:text-[#769382] transition-colors">Modular HMS Builder</Link></li>
              <li><Link to="/patient-flow" className="hover:text-[#769382] transition-colors">10-Stage Patient Flow</Link></li>
              <li><Link to="/spatial-twin" className="hover:text-[#769382] transition-colors">3D Spatial Digital Twin</Link></li>
              <li><Link to="/telemetry" className="hover:text-[#769382] transition-colors">Live Telemetry Simulator</Link></li>
            </ul>
          </div>

          {/* Links 2: Interoperability */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-nebula text-[#769382] uppercase tracking-widest font-bold">Compliance & Standards</h4>
            <ul className="space-y-2 text-xs text-[#F3EFE3]/85 font-mono">
              <li><Link to="/compliance" className="hover:text-[#769382]">ABDM Health ID (M1-M3)</Link></li>
              <li><Link to="/compliance" className="hover:text-[#769382]">DPDP Act 2023 Safeguards</Link></li>
              <li><Link to="/compliance" className="hover:text-[#769382]">Epic Systems & Cerner Sync</Link></li>
              <li><Link to="/compliance" className="hover:text-[#769382]">HL7 v2/v3 & FHIR R4 APIs</Link></li>
              <li><Link to="/compliance" className="hover:text-[#769382]">SNOMED CT & ICD-11 Coding</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-nebula text-[#769382] uppercase tracking-widest font-bold">Get In Touch</h4>
            <div className="space-y-2 text-xs text-[#F3EFE3]/85 font-mono">
              <Link to="/contact" className="hover:text-[#769382] block text-[#769382] font-bold">
                → Schedule Demo
              </Link>
              <p className="flex items-center space-x-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#769382]" />
                <span>contact@tantriks.ai</span>
              </p>
              <p className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#769382]" />
                <span>San Francisco, CA</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3EFE3]/60 font-mono">
          <p>© {new Date().getFullYear()} Tantriks AI Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/compliance" className="hover:text-[#F3EFE3]">Privacy Policy</Link>
            <Link to="/compliance" className="hover:text-[#F3EFE3]">ABDM Statement</Link>
            <Link to="/contact" className="hover:text-[#F3EFE3]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
