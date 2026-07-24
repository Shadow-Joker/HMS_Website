import React, { useState } from 'react';
import { Activity, ChevronRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="max-w-7xl mx-auto h-16 bg-[#D5D3CC]/90 backdrop-blur-md rounded-2xl border border-[#406768]/30 px-4 sm:px-6 flex items-center justify-between shadow-lg">
        {/* Brand Logo with Nebula Font */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#19350C] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <Activity className="w-5 h-5 text-[#6FA9BB] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 font-nebula">
              <span className="font-extrabold text-lg text-[#19350C] tracking-wider">Tantriks</span>
              <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-[#19350C] text-[#D5D3CC] tracking-widest">
                AI
              </span>
            </div>
            <span className="text-[9px] font-nebula text-[#406768] block -mt-1 font-bold tracking-widest">HOSPITAL OS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-nebula font-bold tracking-wider">
          <a href="#platform" className="text-[#19350C]/80 hover:text-[#19350C] transition-colors">
            AI Platform
          </a>
          <a href="#simulator" className="text-[#19350C]/80 hover:text-[#19350C] transition-colors">
            Live Telemetry
          </a>
          <a href="#architecture" className="text-[#19350C]/80 hover:text-[#19350C] transition-colors">
            3D Spatial OS
          </a>
          <a href="#compliance" className="text-[#19350C]/80 hover:text-[#19350C] transition-colors">
            HIPAA & Security
          </a>
        </div>

        {/* Live Status Badge & Primary CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[11px] font-nebula text-[#19350C] bg-white/80 px-3 py-1.5 rounded-lg border border-[#406768]/30 shadow-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-[#687D31] animate-ping" />
            <span>AI CORE: 99.98% ACCURACY</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-[#19350C] hover:bg-[#19350C]/90 text-[#D5D3CC] font-nebula font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer tracking-wider"
          >
            <span>Request Demo</span>
            <ChevronRight className="w-4 h-4 text-[#6FA9BB]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#19350C] p-2 hover:bg-[#406768]/15 rounded-lg cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-[#D5D3CC] border border-[#406768]/40 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 font-nebula text-xs font-bold tracking-wider">
          <a
            onClick={() => setMobileOpen(false)}
            href="#platform"
            className="text-[#19350C] py-2 border-b border-[#406768]/20"
          >
            AI Platform
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#simulator"
            className="text-[#19350C] py-2 border-b border-[#406768]/20"
          >
            Live Telemetry
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#architecture"
            className="text-[#19350C] py-2 border-b border-[#406768]/20"
          >
            3D Spatial OS
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#compliance"
            className="text-[#19350C] py-2 border-b border-[#406768]/20"
          >
            HIPAA & Security
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#contact"
            className="w-full text-center bg-[#19350C] text-[#D5D3CC] font-bold py-3 rounded-xl cursor-pointer"
          >
            Request Enterprise Demo
          </a>
        </div>
      )}
    </header>
  );
}
