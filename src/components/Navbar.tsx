import React, { useState } from 'react';
import { Menu, X, Cloud } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center">
      
      {/* Floating Centered Glass Pill Navbar */}
      <nav className="w-full max-w-4xl glass-pill rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Left Cloud / Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-full bg-[#4BA7C4] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <span className="font-nebula font-bold text-sm tracking-wider text-[#19382B] uppercase">
            TANTRIKS AI
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-9 text-sm font-semibold text-[#19382B]/85">
          <a href="#" className="text-[#4BA7C4] font-bold hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="#modules" className="hover:text-[#4BA7C4] transition-colors">
            Products
          </a>
          <a href="#compliance" className="hover:text-[#4BA7C4] transition-colors">
            Compliance
          </a>
        </div>

        {/* Right Foliage Green Pill CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="bg-[#2F6A43] hover:bg-[#19382B] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Schedule Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#19382B] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 w-full max-w-sm glass-pill rounded-2xl p-6 flex flex-col space-y-4 text-sm font-semibold text-[#19382B] shadow-2xl">
          <a onClick={() => setMobileOpen(false)} href="#" className="py-1">
            Home
          </a>
          <a onClick={() => setMobileOpen(false)} href="#modules" className="py-1">
            Products
          </a>
          <a onClick={() => setMobileOpen(false)} href="#compliance" className="py-1">
            Compliance
          </a>
          <a
            onClick={() => setMobileOpen(false)}
            href="#contact"
            className="w-full text-center bg-[#2F6A43] text-white py-3 rounded-full text-sm font-semibold"
          >
            Schedule Demo
          </a>
        </div>
      )}
    </header>
  );
}
