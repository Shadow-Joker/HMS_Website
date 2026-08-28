import React from 'react';

interface NeevLogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
  colorVariant?: 'dark' | 'white';
}

export function NeevLogo({ 
  className = "h-7 w-auto", 
  size,
  alt = "Neev AI",
  colorVariant = 'dark'
}: NeevLogoProps) {
  const src = colorVariant === 'white' ? '/neev-logo-icon-white.png' : '/neev-logo-icon.png';

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain select-none inline-block ${className}`}
      style={size ? { height: size, width: 'auto' } : undefined}
      loading="eager"
    />
  );
}
