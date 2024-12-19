import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function BenefitCard({ title, description, Icon }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border-l-4 border-[#136fb7] p-6 transition-transform hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <Icon className="w-6 h-6 text-[#136fb7] flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}