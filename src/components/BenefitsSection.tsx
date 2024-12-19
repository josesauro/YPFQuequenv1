import React from 'react';
import { Fuel, Shield, Car, Coffee } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

export function BenefitsSection() {
  const benefits = [
    {
      title: 'Descuentos en combustible',
      description: 'Disfruta de descuentos exclusivos en cada carga de combustible. Ahorra más mientras te mueves.',
      Icon: Fuel,
    },
    {
      title: 'Seguridad en todas tus transacciones',
      description: 'Contamos con un sistema por el cual el vendedor de playa puede únicamente rematar los litros efectivamente despachados en el vehículo.',
      Icon: Shield,
    },
    {
      title: 'Control de carga',
      description: 'Sólo podrán cargar combustible los vehículos con patentes autorizadas.',
      Icon: Car,
    },
    {
      title: 'Café de cortesía',
      description: 'El conductor del vehículo podrá disfrutar de un café gratis.',
      Icon: Coffee,
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
}