import React from 'react';

interface NeevLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'original' | 'transparent';
}

export function NeevLogo({ 
  className = "w-7 h-7", 
  size,
  variant = 'original'
}: NeevLogoProps) {
  const src = variant === 'transparent' ? '/neev-logo-transparent.png' : '/neev-logo.png';

  return (
    <img
      src={src}
      alt="Neev AI"
      className={`object-contain select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
      loading="eager"
    />
  );
}
