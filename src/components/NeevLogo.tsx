import React from 'react';

interface NeevLogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export function NeevLogo({ className = "w-6 h-6", size, color = "currentColor" }: NeevLogoProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central Staff */}
      <line x1="50" y1="18" x2="50" y2="105" />

      {/* Top Center Ring */}
      <circle cx="50" cy="14" r="8" strokeWidth="3.2" />

      {/* Left Branch & Ring */}
      <path d="M 50 38 C 45 36 38 33 36 26" />
      <circle cx="36" cy="24" r="5" strokeWidth="3.2" />

      {/* Right Branch & Ring */}
      <path d="M 50 38 C 55 36 62 33 64 26" />
      <circle cx="64" cy="24" r="5" strokeWidth="3.2" />

      {/* Serpent winding around staff */}
      <path
        d="M 52 38 
           C 62 40 68 47 62 55 
           C 56 62 38 60 38 72 
           C 38 84 62 82 58 95 
           C 55 102 46 103 44 105"
        strokeWidth="3"
        fill="none"
      />

      {/* Left Flanking Pillars */}
      <path d="M 22 36 L 30 36" strokeWidth="3" />
      <line x1="23" y1="36" x2="23" y2="68" strokeWidth="2.8" />
      <line x1="26" y1="36" x2="26" y2="54" strokeWidth="2.8" />
      <line x1="29" y1="36" x2="29" y2="46" strokeWidth="2.8" />

      {/* Right Flanking Pillars */}
      <path d="M 70 36 L 78 36" strokeWidth="3" />
      <line x1="71" y1="36" x2="71" y2="46" strokeWidth="2.8" />
      <line x1="74" y1="36" x2="74" y2="54" strokeWidth="2.8" />
      <line x1="77" y1="36" x2="77" y2="68" strokeWidth="2.8" />
    </svg>
  );
}
