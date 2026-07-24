import React, { useState, useEffect } from 'react';
import { Activity, ChevronRight, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto h-16 rounded-2xl border px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3EFE3]/95 backdrop-blur-lg border-[#769382]/40 shadow-xl'
            : 'bg-[#F3EFE3]/80 backdrop-blur-md border-[#769382]/25 shadow-md'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#1E2D26] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <Activity className="w-5 h-5 text-[#769382] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 font-nebula">
              <span className="font-extrabold text-lg text-[#1E2D26] tracking-wider">Tantriks</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-[#769382] text-white tracking-widest uppercase">
                AI
              </span>
            </div>
            <span className="text-[8px] font-nebula text-[#769382] block -mt-1 font-bold tracking-widest uppercase">
              Hospital OS v2.4
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-7 text-xs font-nebula font-bold tracking-wider">
          <a href="#products" className="text-[#1E2D26]/85 hover:text-[#769382] transition-colors flex items-center space-x-1">
            <span>Products</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#769382]/15 text-[#769382] font-mono">16</span>
          </a>
          <a href="#journey" className="text-[#1E2D26]/85 hover:text-[#769382] transition-colors">
            Patient Flow
          </a>
          <a href="#spatial-twin" className="text-[#1E2D26]/85 hover:text-[#769382] transition-colors flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-[#769382]" />
            <span>3D Spatial Twin</span>
          </a>
          <a href="#simulator" className="text-[#1E2D26]/85 hover:text-[#769382] transition-colors">
            Telemetry
          </a>
          <a href="#compliance" className="text-[#1E2D26]/85 hover:text-[#769382] transition-colors">
            Compliance & ABDM
          </a>
        </div>

        {/* Actions & Primary CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="#contact"
            className="text-xs font-nebula font-bold text-[#1E2D26] hover:text-[#769382] px-3 py-2 transition-colors flex items-center space-x-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#769382]" />
            <span>Contact Sales</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer tracking-wider glow-sage-dark"
          >
            <span>Request Demo</span>
            <ChevronRight className="w-4 h-4 text-[#769382]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1E2D26] p-2 hover:bg-[#769382]/15 rounded-lg cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-[#F3EFE3] border border-[#769382]/40 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 font-nebula text-xs font-bold tracking-wider animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            onClick={() => setMobileOpen(false)}
            href="#products"
            className="text-[#1E2D26] py-2 border-b border-[#769382]/20 flex justify-between items-center"
          >
            <span>16 Products</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#769382]/20 text-[#1E2D26]">All Modules</span>
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#journey"
            className="text-[#1E2D26] py-2 border-b border-[#769382]/20"
          >
            Patient Flow (10-Stage)
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#spatial-twin"
            className="text-[#1E2D26] py-2 border-b border-[#769382]/20 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-[#769382]" />
            <span>3D Spatial Digital Twin</span>
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#simulator"
            className="text-[#1E2D26] py-2 border-b border-[#769382]/20"
          >
            Live Telemetry Simulator
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#compliance"
            className="text-[#1E2D26] py-2 border-b border-[#769382]/20"
          >
            ABDM & HIPAA Compliance
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#contact"
            className="w-full text-center bg-[#1E2D26] text-[#F3EFE3] font-bold py-3 rounded-xl cursor-pointer shadow-lg"
          >
            Request Enterprise Demo
          </a>
        </div>
      )}
    </header>
  );
}
