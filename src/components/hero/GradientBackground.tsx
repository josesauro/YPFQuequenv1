import React from 'react';

export function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#136FB7]">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(30deg, #0d5a9f 12%, transparent 12.5%, transparent 87%, #0d5a9f 87.5%, #0d5a9f),
          linear-gradient(150deg, #0d5a9f 12%, transparent 12.5%, transparent 87%, #0d5a9f 87.5%, #0d5a9f),
          linear-gradient(30deg, #0d5a9f 12%, transparent 12.5%, transparent 87%, #0d5a9f 87.5%, #0d5a9f),
          linear-gradient(150deg, #0d5a9f 12%, transparent 12.5%, transparent 87%, #0d5a9f 87.5%, #0d5a9f),
          linear-gradient(60deg, #1e7fcc77 25%, transparent 25.5%, transparent 75%, #1e7fcc77 75%, #1e7fcc77)
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0',
        opacity: 0.1
      }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#136FB7] via-[#136FB7] to-white opacity-95" />

      {/* Animated circles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e7fcc]/10 rounded-full animate-pulse"
           style={{ animationDuration: '6s' }} />
      
      {/* Floating tech lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}