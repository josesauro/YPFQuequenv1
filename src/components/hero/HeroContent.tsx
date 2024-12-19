import React from 'react';
import { HeroButton } from './HeroButton';

export function HeroContent() {
  const handleCalculateClick = () => {
    const calculatorSection = document.querySelector('#calculator');
    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        ¡Abrí tu cuenta corriente en YPF Quequén 554!
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <HeroButton onClick={handleCalculateClick}>
          Calcula tu propuesta
        </HeroButton>
        <HeroButton variant="secondary" onClick={handleContactClick}>
          Contáctanos
        </HeroButton>
      </div>
    </div>
  );
}