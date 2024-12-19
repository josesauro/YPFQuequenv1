import React from 'react';
import { GradientBackground } from './GradientBackground';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <GradientBackground>
      <HeroContent />
    </GradientBackground>
  );
}