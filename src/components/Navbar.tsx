import React, { useState, useEffect } from 'react';
import { Activity, ChevronRight, Menu, X, Sparkles, PhoneCall, Layers, PackageCheck } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto h-16 rounded-2xl border px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3EFE3]/95 backdrop-blur-lg border-[#769382]/40 shadow-xl'
            : 'bg-[#F3EFE3]/80 backdrop-blur-md border-[#769382]/25 shadow-md'
        }`}
      >
        {/* Brand Logo Link to Home */}
        <Link to="/" className="flex items-center space-x-3 group">
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
              Modular HMS v2.4
            </span>
          </div>
        </Link>

        {/* Desktop Multi-Page Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-nebula font-bold tracking-wider">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-colors flex items-center space-x-1 ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <span>16 Modules</span>
          </NavLink>

          <NavLink
            to="/builder"
            className={({ isActive }) =>
              `transition-colors flex items-center space-x-1 ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <Layers className="w-3 h-3 text-[#769382]" />
            <span>HMS Builder</span>
          </NavLink>

          <NavLink
            to="/patient-flow"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <span>Patient Flow</span>
          </NavLink>

          <NavLink
            to="/spatial-twin"
            className={({ isActive }) =>
              `transition-colors flex items-center space-x-1 ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <Sparkles className="w-3 h-3 text-[#769382]" />
            <span>3D Spatial Twin</span>
          </NavLink>

          <NavLink
            to="/telemetry"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <span>Telemetry</span>
          </NavLink>

          <NavLink
            to="/compliance"
            className={({ isActive }) =>
              `transition-colors ${
                isActive ? 'text-[#769382] font-black' : 'text-[#1E2D26]/85 hover:text-[#769382]'
              }`
            }
          >
            <span>ABDM & Security</span>
          </NavLink>
        </div>

        {/* Actions & Primary CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/contact"
            className="text-xs font-nebula font-bold text-[#1E2D26] hover:text-[#769382] px-3 py-2 transition-colors flex items-center space-x-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#769382]" />
            <span>Contact Sales</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer tracking-wider glow-sage-dark"
          >
            <span>Request Demo</span>
            <ChevronRight className="w-4 h-4 text-[#769382]" />
          </Link>
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
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-[#F3EFE3] border border-[#769382]/40 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 font-nebula text-xs font-bold tracking-wider">
          <Link to="/" className="text-[#1E2D26] py-2 border-b border-[#769382]/20">
            Home Overview
          </Link>
          <Link to="/products" className="text-[#1E2D26] py-2 border-b border-[#769382]/20 flex justify-between items-center">
            <span>16 HMS Modules</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#769382]/20 text-[#1E2D26]">Catalog</span>
          </Link>
          <Link to="/builder" className="text-[#1E2D26] py-2 border-b border-[#769382]/20 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#769382]" />
            <span>Modular HMS Builder</span>
          </Link>
          <Link to="/patient-flow" className="text-[#1E2D26] py-2 border-b border-[#769382]/20">
            Patient Flow (10-Stage)
          </Link>
          <Link to="/spatial-twin" className="text-[#1E2D26] py-2 border-b border-[#769382]/20 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#769382]" />
            <span>3D Spatial Twin</span>
          </Link>
          <Link to="/telemetry" className="text-[#1E2D26] py-2 border-b border-[#769382]/20">
            Live Telemetry Simulator
          </Link>
          <Link to="/compliance" className="text-[#1E2D26] py-2 border-b border-[#769382]/20">
            ABDM & HIPAA Compliance
          </Link>
          <Link to="/contact" className="w-full text-center bg-[#1E2D26] text-[#F3EFE3] font-bold py-3 rounded-xl cursor-pointer shadow-lg">
            Request Enterprise Demo
          </Link>
        </div>
      )}
    </header>
  );
}
