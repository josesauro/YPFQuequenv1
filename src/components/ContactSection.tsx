import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Photo Section */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src="/fotocv.jpg"
              alt="Jose Sauro"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#136fb7] mx-auto"
            />
          </div>
          
          {/* Info Section */}
          <div className="md:w-2/3 flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Jose Sauro</h2>
              <p className="text-gray-600 text-lg">Representante comercial YPF</p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <a
                href="https://wa.me/5492234977442"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#136fb7] hover:text-[#0d5a9f] transition-colors group"
              >
                <div className="bg-[#136fb7] group-hover:bg-[#0d5a9f] text-white p-2 rounded-full transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-lg">+5492234977442</span>
              </a>
              
              <a
                href="mailto:josesauro95@gmail.com"
                className="flex items-center gap-3 text-[#136fb7] hover:text-[#0d5a9f] transition-colors group"
              >
                <div className="bg-[#136fb7] group-hover:bg-[#0d5a9f] text-white p-2 rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">josesauro95@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}