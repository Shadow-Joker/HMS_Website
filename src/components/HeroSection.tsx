import React from 'react';

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-36 md:pt-52 md:pb-48 overflow-hidden text-center min-h-[92vh] flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-[#FFFFFF]" style={{ backgroundImage: "url('/hero-sky-bg.jpg')" }}>
      
      {/* Soft Gradient Overlay for Crystal Clear Text Contrast and Seamless Blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4BA7C4]/20 via-white/50 via-80% to-[#FFFFFF] z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-7">
        
        {/* Main Headline with Serif Italic Accent */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-[#19382B] tracking-tight leading-[1.08] drop-shadow-sm">
          Discover Calm <span className="font-serif-italic text-[#2B7891] font-normal">in Every Click</span>
        </h1>

        {/* Subtitle with Increased Font Size */}
        <p className="text-lg sm:text-2xl text-[#19382B]/95 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs">
          Our modular clinical AI platform helps your hospital reconnect with seamless operational flow, balance bed capacity, and optimize surgical suites — no matter where you are.
        </p>

        {/* Center Capsule Pill CTA Button */}
        <div className="pt-4 flex justify-center">
          <a
            href="#modules"
            className="inline-flex items-center space-x-2 bg-[#2F6A43] hover:bg-[#19382B] text-white font-semibold text-base px-10 py-4 rounded-full transition-all shadow-xl pill-btn-shadow cursor-pointer active:scale-98"
          >
            <span>Start Your Journey</span>
          </a>
        </div>

      </div>

      {/* Bottom Translucent Partner Logo Strip */}
      <div className="relative z-10 pt-16 max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-mono text-[#19382B]/90 font-semibold bg-white/80 backdrop-blur-md p-4.5 rounded-full border border-white shadow-sm">
          <div className="flex items-center space-x-2 font-bold tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#4BA7C4]" />
            <span>EPIC SYSTEMS</span>
          </div>
          <div className="flex items-center space-x-2 font-bold tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#2F6A43]" />
            <span>CERNER</span>
          </div>
          <div className="flex items-center space-x-2 font-bold tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#4BA7C4]" />
            <span>ABDM NATIVE</span>
          </div>
          <div className="flex items-center space-x-2 font-bold tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#2F6A43]" />
            <span>OPENMRS</span>
          </div>
          <div className="flex items-center space-x-2 font-bold tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#4BA7C4]" />
            <span>MEDMANTRA</span>
          </div>
        </div>
      </div>

    </section>
  );
}
