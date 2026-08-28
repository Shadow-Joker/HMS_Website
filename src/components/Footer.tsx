import React from 'react';
import { NeevLogo } from './NeevLogo';

export function Footer() {
  return (
    <footer className="bg-[#19382B] border-t border-[#4BA7C4]/30 py-5 text-xs font-mono text-[#E8F4F6]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-[#4BA7C4] flex items-center justify-center text-white">
            <NeevLogo className="w-4 h-4 text-white" />
          </div>
          <span className="font-nebula font-bold text-xs tracking-wider text-white uppercase">
            NEEV AI
          </span>
          <span className="text-[#4BA7C4]">•</span>
          <span className="text-[#E8F4F6]/80 font-sans text-xs">Autonomous Hospital Management AI Systems</span>
        </div>

        <div className="flex items-center space-x-6 text-[11px] text-[#E8F4F6]/90 font-sans">
          <span>© {new Date().getFullYear()} Neev AI Inc.</span>
          <a href="#" className="hover:text-white transition-colors">ABDM Statement</a>
          <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
}
