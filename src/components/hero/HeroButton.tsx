import React from 'react';

interface HeroButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function HeroButton({ variant = 'primary', children, onClick }: HeroButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-white text-[#136FB7] hover:bg-gray-100 focus:ring-white",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}